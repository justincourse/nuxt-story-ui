import fs from 'fs';

/**
 * 故事流程完整性检查工具
 * 用于验证互动故事的所有步骤连接是否正确
 */

// 读取故事文件
const content = fs.readFileSync('./app/story.ts', 'utf8');

// 提取所有 nextId 引用
const nextIdMatches = content.match(/"nextId": "[^"]+"/g) || [];
const nextIds = nextIdMatches.map(match => match.match(/"nextId": "([^"]+)"/)[1]);

// 提取所有定义的 ID
const idMatches = content.match(/"id": "[^"]+"/g) || [];
const definedIds = idMatches.map(match => match.match(/"id": "([^"]+)"/)[1]);

// 统计信息
let hasErrors = false;
let hasWarnings = false;

console.log('🔍 故事流程完整性检查');
console.log('='.repeat(50));
console.log(`📊 统计信息:`);
console.log(`   引用的 nextIds: ${nextIds.length}`);
console.log(`   定义的 IDs: ${definedIds.length}`);
console.log(`   重复引用: ${nextIds.length - new Set(nextIds).size}`);
console.log('');

// 检查1: 找出引用但未定义的 ID (致命错误)
const missingIds = nextIds.filter(id => !definedIds.includes(id));
console.log('❌ 缺失的步骤 (引用但未定义):');
if (missingIds.length === 0) {
  console.log('  ✅ 没有缺失的步骤');
} else {
  hasErrors = true;
  console.log(`  🚨 发现 ${missingIds.length} 个缺失步骤:`);
  missingIds.forEach(id => console.log(`     - ${id}`));
}

console.log('');

// 检查2: 找出未使用的步骤 (警告)
const unusedIds = definedIds.filter(id => !nextIds.includes(id) && id !== 'start');
console.log('⚠️  未使用的步骤 (定义但未引用):');
if (unusedIds.length === 0) {
  console.log('  ✅ 所有步骤都被使用');
} else {
  hasWarnings = true;
  console.log(`  ⚠️  发现 ${unusedIds.length} 个未使用步骤:`);
  unusedIds.forEach(id => console.log(`     - ${id}`));
}

console.log('');

// 检查3: 分析结局步骤
const endIds = definedIds.filter(id => id.startsWith('end_'));
console.log(`🏁 结局步骤分析:`);
console.log(`   结局数量: ${endIds.length} 个`);
endIds.forEach(id => console.log(`   - ${id}`));

console.log('');

// 检查4: 验证每个步骤的完整性
console.log('� 步骤连接性检查:');
try {
  // 更精确的解析故事数据
  const storyArrayMatch = content.match(/export const storyData: StoryScene\[\] = \[([\s\S]*?)\]/);
  if (!storyArrayMatch) {
    throw new Error('无法找到 storyData 数组');
  }

  let issuesFound = 0;
  const lines = content.split('\n');

  definedIds.forEach(id => {
    // 查找包含此 ID 的场景
    const sceneStart = lines.findIndex(line => line.includes(`"id": "${id}"`));
    if (sceneStart === -1) return;

    // 查找场景的结束位置（下一个场景开始或数组结束）
    let sceneEnd = lines.findIndex((line, index) =>
      index > sceneStart && (line.includes('"id":') || line.includes(']'))
    );
    if (sceneEnd === -1) sceneEnd = lines.length;

    // 提取场景内容
    const sceneContent = lines.slice(sceneStart, sceneEnd).join('\n');

    // 检查是否有选项
    const hasOptions = sceneContent.includes('"options"') &&
                      sceneContent.includes('"label"') &&
                      sceneContent.includes('"nextId"');

    // 检查是否是结局场景
    const isEndScene = id.startsWith('end_');

    // 如果不是结局且没有选项，这是个问题
    if (!isEndScene && !hasOptions) {
      console.log(`  ❌ ${id}: 非结局步骤缺少选项 (第 ${sceneStart + 1} 行)`);
      issuesFound++;
      hasErrors = true;
    }

    // 检查选项数量 (建议每个步骤至少有2个选项)
    if (hasOptions && !isEndScene) {
      const optionMatches = sceneContent.match(/"nextId":/g);
      const optionCount = optionMatches ? optionMatches.length : 0;
      if (optionCount < 2) {
        console.log(`  ⚠️  ${id}: 选项数量较少 (${optionCount}个) - 建议至少2个选项`);
        hasWarnings = true;
      }
    }
  });

  if (issuesFound === 0) {
    console.log('  ✅ 所有步骤连接正常');
  }

} catch (error) {
  console.log(`  ❌ 解析错误: ${error.message}`);
  hasErrors = true;
}

console.log('');

// 检查5: 路径可达性分析
console.log('🎯 路径可达性检查:');
try {
  // 从 start 开始，检查哪些步骤可以到达
  const reachableIds = new Set(['start']);
  const toCheck = ['start'];

  while (toCheck.length > 0) {
    const currentId = toCheck.pop();

    // 找到当前 ID 的所有 nextId
    const lines = content.split('\n');
    lines.forEach(line => {
      if (line.includes(`"id": "${currentId}"`)) {
        // 查找这个场景的所有 nextId
        const sceneStart = lines.indexOf(line);
        let sceneEnd = lines.findIndex((l, i) =>
          i > sceneStart && (l.includes('"id":') || l.includes(']'))
        );
        if (sceneEnd === -1) sceneEnd = lines.length;

        const sceneContent = lines.slice(sceneStart, sceneEnd).join('\n');
        const nextIdMatches = sceneContent.match(/"nextId": "([^"]+)"/g) || [];

        nextIdMatches.forEach(match => {
          const nextId = match.match(/"nextId": "([^"]+)"/)[1];
          if (!reachableIds.has(nextId)) {
            reachableIds.add(nextId);
            toCheck.push(nextId);
          }
        });
      }
    });
  }

  const unreachableIds = definedIds.filter(id => !reachableIds.has(id));

  if (unreachableIds.length === 0) {
    console.log('  ✅ 所有步骤都可以从开始到达');
  } else {
    console.log(`  ⚠️  发现 ${unreachableIds.length} 个不可达步骤:`);
    unreachableIds.forEach(id => console.log(`     - ${id}`));
    hasWarnings = true;
  }

} catch (error) {
  console.log(`  ❌ 可达性分析失败: ${error.message}`);
  hasErrors = true;
}

// 最终报告
console.log('');
console.log('='.repeat(50));
console.log('📋 检查报告总结:');

if (!hasErrors && !hasWarnings) {
  console.log('🎉 完美！故事流程没有发现任何问题');
  process.exit(0);
} else if (!hasErrors && hasWarnings) {
  console.log('⚠️  故事流程基本正常，但有一些建议优化的地方');
  process.exit(0);
} else {
  console.log('🚨 发现严重问题，需要修复后才能正常运行');
  console.log('');

  if (missingIds.length > 0) {
    console.log('🔧 修复建议:');
    console.log('1. 添加缺失的步骤定义');
    console.log('2. 或者修改引用，指向正确的步骤ID');
    console.log('3. 确保所有非结局步骤都有选项');
  }

  process.exit(1);
}
