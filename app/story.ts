export type StoryOption = {
  label: string
  nextId: string
}

export type StoryScene = {
  id: string
  text: string
  image?: string
  options?: StoryOption[]
}

export type StoryHistoryItem = {
  scene: StoryScene
  timestamp: number
  choice?: string
}

export const storyData: StoryScene[] = [
  {
    "id": "start",
    "text": "# 🛸 星际邂逅\n\n**深夜时分**，一道炫目的光芒划破夜空。一艘银色的飞船*缓缓降落*在你面前的空地上。\n\n舱门开启，一个身形奇特的外星人走了出来。他有着**蓝色的皮肤**和*闪闪发光*的眼睛，友好地挥手说道：\n\n> \"Hello, 地球人！我是来自遥远星系的探索者。\"",
    "image": "/story/0.png",
    "options": [
      { "label": "🤝 勇敢地走向前握手", "nextId": "step1_a" },
      { "label": "🏃‍♂️ 感到害怕，转身逃跑", "nextId": "step1_b" },
      { "label": "⚔️ 拿起附近的木棍攻击", "nextId": "step1_c" },
      { "label": "📱 掏出手机拍照录像", "nextId": "step1_d" }
    ]
  },
  {
    "id": "step1_a",
    "text": "## 🤝 勇敢的握手\n\n你**鼓起勇气**走向外星人，伸出右手。外星人的手触感*温暖而光滑*，就像触摸丝绸一样。\n\n外星人的脸上绽放出灿烂的笑容，他的眼睛发出**柔和的蓝光**：\n\n> \"你真勇敢！我叫Zara，来自仙女座星系。你们地球人比我想象的更友善。\"",
    "image": "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
    "options": [
      { "label": "🏙️ 邀请他参观你的城市", "nextId": "step2_a" },
      { "label": "🎁 送给他一份地球礼物", "nextId": "step2_b" },
      { "label": "🤔 询问他来地球的目的", "nextId": "step2_c" },
      { "label": "🍕 邀请他品尝地球美食", "nextId": "step2_d" }
    ]
  },
  {
    "id": "step1_b",
    "text": "## 🏃‍♂️ 恐惧的逃离\n\n你的*本能反应*让你转身就跑，心脏**砰砰直跳**。身后传来外星人困惑的声音：\n\n> \"等等！我不会伤害你的！\"\n\n你跑了几步后停下来，回头看到外星人*失落地*站在原地，他的眼睛失去了光芒。",
    "image": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
    "options": [
      { "label": "😔 回头向他道歉", "nextId": "step2_e" },
      { "label": "🏃‍♂️ 继续逃跑到安全地带", "nextId": "step2_f" },
      { "label": "📞 躲起来报警", "nextId": "step2_g" },
      { "label": "👀 隐藏起来观察他", "nextId": "step2_h" }
    ]
  },
  {
    "id": "step1_c",
    "text": "## ⚔️ 敌意的攻击\n\n你拿起一根*粗大的木棍*，**愤怒地**冲向外星人。然而，外星人敏捷地躲开了你的攻击。\n\n他的眼睛变成了**红色**，表情变得严肃：\n\n> \"我来这里是为了和平！为什么要攻击我？\"\n\n外星人启动了某种*防护装置*，一个透明的能量罩包围了他。",
    "image": "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
    "options": [
      { "label": "😰 放下武器道歉", "nextId": "step2_e" },
      { "label": "⚔️ 继续攻击", "nextId": "step3_attack" },
      { "label": "🛡️ 做好防御姿势", "nextId": "step3_defense" },
      { "label": "💬 尝试与他对话", "nextId": "step2_c" }
    ]
  },
  {
    "id": "step1_d",
    "text": "## 📱 数字时代的记录者\n\n你迅速掏出手机，开始**疯狂拍照和录像**。外星人看到这个动作，好奇地*歪着头*：\n\n> \"这是什么设备？你在记录我们的相遇吗？\"\n\n他走近你，**饶有兴趣**地观察着你的手机，眼睛里闪烁着*科学家般的光芒*。",
    "image": "https://images.unsplash.com/photo-1516387938699-a93567ec168e?w=800&h=600&fit=crop",
    "options": [
      { "label": "📺 解释这是地球的记录设备", "nextId": "step2_tech" },
      { "label": "🤳 邀请他一起自拍", "nextId": "step2_selfie" },
      { "label": "📤 询问是否可以分享给朋友", "nextId": "step2_share" },
      { "label": "🔄 将视频发布到社交媒体", "nextId": "step3_viral" }
    ]
  },
  {
    "id": "step2_a",
    "text": "## 🏙️ 城市导览\n\n你带着Zara走进繁华的城市。**霓虹灯**在夜空中闪烁，*车水马龙*的景象让外星人目不暇接。\n\n> \"太令人震撼了！你们的文明发展得如此迅速，这些光线艺术真是美妙。\"\n\nZara指着一栋**摩天大楼**，眼中充满了*赞叹*。",
    "image": "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?w=800&h=600&fit=crop",
    "options": [
      { "label": "🏢 介绍现代建筑技术", "nextId": "step3_architecture" },
      { "label": "🎨 带他去看街头艺术", "nextId": "step3_art" },
      { "label": "🚇 体验地铁交通系统", "nextId": "step3_transport" },
      { "label": "🌃 登上观景台俯瞰全城", "nextId": "step3_skyview" }
    ]
  },
  {
    "id": "step2_b",
    "text": "## 🎁 珍贵的礼物\n\n你想了想，从口袋里掏出一个**精美的地球仪**作为礼物。Zara小心翼翼地接过它，*仔细端详*：\n\n> \"这是你们星球的模型吗？太精致了！我们星球是椭圆形的，而你们的是完美的球体。\"\n\n他的眼睛**闪闪发光**，显然非常珍视这份礼物。",
    "image": "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=800&h=600&fit=crop",
    "options": [
      { "label": "🌍 介绍地球的地理知识", "nextId": "step3_geography" },
      { "label": "🪐 询问他的星球情况", "nextId": "step3_alien_planet" },
      { "label": "🎁 再送他其他地球特产", "nextId": "step3_more_gifts" },
      { "label": "📸 提议合影留念", "nextId": "step2_selfie" }
    ]
  },
  {
    "id": "step2_c",
    "text": "## 🤔 探索者的使命\n\nZara的表情变得**严肃而神秘**，他坐在一块石头上，*眺望着星空*：\n\n> \"我是星际探索联盟的成员。我们的任务是寻找友善的文明，建立和平的联系。地球在宇宙中的位置很特殊...\"\n\n他停顿了一下，似乎在**犹豫**是否要透露更多。",
    "image": "https://images.unsplash.com/photo-1518066000-4ba86b8e8227?w=800&h=600&fit=crop",
    "options": [
      { "label": "🌌 询问地球的特殊之处", "nextId": "step3_earth_special" },
      { "label": "👽 问关于其他外星文明", "nextId": "step3_other_aliens" },
      { "label": "🤝 提议建立正式联系", "nextId": "step3_diplomacy" },
      { "label": "⚠️ 询问是否有危险", "nextId": "step3_danger" }
    ]
  },
  {
    "id": "step2_d",
    "text": "## 🍕 美食文化交流\n\n你带Zara来到附近的**美食街**。各种香味*扑鼻而来*，外星人的鼻子抽动着：\n\n> \"这些气味真是奇妙！我们星球的食物都是液体的，从来没有体验过这种固体食物的香味。\"\n\n他**好奇地**看着烤肉串、煎饼果子和各种小吃。",
    "image": "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop",
    "options": [
      { "label": "🍜 推荐热腾腾的拉面", "nextId": "step3_ramen" },
      { "label": "🍦 让他尝试冰淇淋", "nextId": "step3_icecream" },
      { "label": "🌶️ 挑战他吃辣食", "nextId": "step3_spicy" },
      { "label": "🍰 分享甜品文化", "nextId": "step3_dessert" }
    ]
  },
  {
    "id": "step2_e",
    "text": "## 😔 真诚的道歉\n\n你**深深鞠躬**，诚恳地说道：\"对不起，我刚才太害怕了。请原谅我的无礼。\"\n\nZara的眼睛重新*闪烁起温暖的光芒*：\n\n> \"恐惧是自然的反应，我理解。在我的星球上，我们第一次遇到外来者时也很紧张。你愿意重新开始吗？\"",
    "image": "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=600&fit=crop",
    "options": [
      { "label": "🤝 重新自我介绍", "nextId": "step1_a" },
      { "label": "🚀 请求参观他的飞船", "nextId": "step3_spaceship" },
      { "label": "💭 分享你的恐惧感受", "nextId": "step3_feelings" },
      { "label": "🎯 询问如何弥补过错", "nextId": "step3_make_amends" }
    ]
  },
  {
    "id": "step2_f",
    "text": "## 🏃‍♂️ 逃向安全地带\n\n你**头也不回地**狂奔，直到跑到了最近的警察局。你气喘吁吁地向值班警察*报告*了刚才的遭遇。\n\n警察**半信半疑**地看着你：\"外星人？你确定不是在拍电影吗？\"\n\n这时，外面传来了*奇异的光芒*...",
    "image": "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=800&h=600&fit=crop",
    "options": [
      { "label": "👮‍♂️ 坚持让警察去查看", "nextId": "step3_police" },
      { "label": "📱 给新闻台打电话", "nextId": "step3_media" },
      { "label": "🏠 要求警察护送你回家", "nextId": "step3_home_safe" },
      { "label": "🔍 决定自己回去确认", "nextId": "step2_h" }
    ]
  },
  {
    "id": "step2_g",
    "text": "## 📞 紧急求助\n\n你躲在树后拨打了**911**。接线员的声音传来：\"请描述紧急情况。\"\n\n你*颤抖着声音*说：\"有...有外星人降落在公园里！\"\n\n接线员停顿了一下：\"先生，恶作剧报警是犯法的...\"\n\n突然，你听到身后传来**脚步声**。",
    "image": "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=800&h=600&fit=crop",
    "options": [
      { "label": "📞 坚持要求派遣警察", "nextId": "step3_police" },
      { "label": "🏃‍♂️ 挂断电话继续逃跑", "nextId": "step2_f" },
      { "label": "👀 回头查看是否被发现", "nextId": "step3_discovered" },
      { "label": "🤫 保持安静继续隐藏", "nextId": "step3_hide" }
    ]
  },
  {
    "id": "step2_h",
    "text": "## 👀 暗中观察\n\n你**小心翼翼地**躲在远处的灌木丛中，通过缝隙*偷偷观察*着外星人的行为。\n\nZara看起来很**失落**，他在飞船周围踱步，时不时地*望向你逃跑的方向*。然后他开始收集一些地面上的植物样本。\n\n> \"也许这次接触失败了...\"你听到他自言自语。",
    "image": "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=800&h=600&fit=crop",
    "options": [
      { "label": "💔 感到内疚，决定现身", "nextId": "step2_e" },
      { "label": "📱 偷偷拍摄记录", "nextId": "step1_d" },
      { "label": "🔬 观察他的科学行为", "nextId": "step3_science" },
      { "label": "⏰ 等待他离开", "nextId": "step3_wait" }
    ]
  },
  {
    "id": "step2_tech",
    "text": "## 📺 科技文化交流\n\n你**耐心地**向Zara解释手机的功能：\"这是我们的通讯和记录设备，可以拍照、录像、上网...\"\n\nZara的眼睛**越来越亮**：\n\n> \"太fascinating了！我们的设备是通过思维控制的，但你们用手指操作也很巧妙。能让我试试吗？\"\n\n他*小心翼翼地*伸出手指。",
    "image": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
    "options": [
      { "label": "📱 教他使用手机功能", "nextId": "step3_tech_demo" },
      { "label": "🧠 询问思维控制技术", "nextId": "step3_mind_tech" },
      { "label": "🔄 提议技术交换", "nextId": "step3_tech_exchange" },
      { "label": "📡 讨论通讯技术差异", "nextId": "step3_communication" }
    ]
  },
  {
    "id": "step2_selfie",
    "text": "## 🤳 跨星际自拍\n\n你**兴奋地**举起手机：\"来，我们一起拍张照片吧！这叫自拍！\"\n\nZara好奇地*凑近*你，当手机闪光灯亮起时，他的皮肤**闪闪发光**，效果绝美！\n\n> \"哇！这个瞬间记录功能太神奇了！我们星球需要用复杂的设备才能做到这些。\"\n\n照片里，你们两个都**笑得很开心**。",
    "image": "https://images.unsplash.com/photo-1516387938699-a93567ec168e?w=800&h=600&fit=crop",
    "options": [
      { "label": "📤 询问是否可以分享", "nextId": "step2_share" },
      { "label": "🖼️ 提议打印照片送给他", "nextId": "step3_print_photo" },
      { "label": "📱 教他更多拍照技巧", "nextId": "step3_photo_skills" },
      { "label": "🌟 邀请他拍摄他的飞船", "nextId": "step3_spaceship_photo" }
    ]
  },
  {
    "id": "step2_share",
    "text": "## 📤 分享的道德考量\n\n你**hesitate**了一下：\"我想把这些照片分享给朋友们，但...这会暴露你的存在。你介意吗？\"\n\nZara**沉思**了片刻：\n\n> \"我很感激你的考虑。不过，也许是时候让更多地球人知道我们的存在了。但请确保传达我们的和平意图。\"\n\n他*认真地*看着你。",
    "image": "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    "options": [
      { "label": "🌍 小范围分享给朋友", "nextId": "step3_share_friends" },
      { "label": "📺 联系新闻媒体", "nextId": "step3_media" },
      { "label": "🌐 发布到社交网络", "nextId": "step3_viral" },
      { "label": "🤐 决定保守秘密", "nextId": "step3_keep_secret" }
    ]
  },
  {
    "id": "step3_attack",
    "text": "## ⚔️ 错误的选择\n\n你**愤怒地**继续挥舞木棍攻击。Zara**叹了口气**，启动了*安全传送装置*。\n\n> \"我来这里是为了和平交流，但看来这次接触失败了。\"\n\n一道**蓝光**闪过，他瞬间回到了飞船中。飞船*缓缓升空*，留下你独自站在原地。\n\n几天后，全球各地都报告了*UFO目击事件*，但再也没有外星人主动接触地球...",
    "image": "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
    "options": [
      { "label": "😔 意识到错误，尝试道歉", "nextId": "end_regret" },
      { "label": "😤 认为自己保护了地球", "nextId": "end_misguided" },
      { "label": "🤔 开始反思这次遭遇", "nextId": "step3_reflection" },
      { "label": "📖 将经历写成故事", "nextId": "end_story" }
    ]
  },
  {
    "id": "step3_defense",
    "text": "## 🛡️ 防御姿态\n\n你放下攻击的木棍，但保持**警戒姿势**。Zara看到这个变化，*缓缓收起*了能量护盾。\n\n> \"我理解你的谨慎。在未知面前保持警觉是智慧的表现。但我真的没有恶意。\"\n\n他**缓慢地**举起双手，做出*和平手势*。",
    "image": "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
    "options": [
      { "label": "🤝 逐渐放下戒备", "nextId": "step2_e" },
      { "label": "💬 要求他证明善意", "nextId": "step3_prove_peace" },
      { "label": "🔍 要求他解释来意", "nextId": "step2_c" },
      { "label": "⏳ 保持距离继续观察", "nextId": "step3_cautious" }
    ]
  },
  {
    "id": "step3_viral",
    "text": "## 🌐 病毒式传播\n\n你**迅速**将视频上传到社交媒体。几分钟内，视频就**爆火**了！\n\n*#外星人降临*成为全球热搜，各大媒体**疯狂转载**。Zara看着你的手机屏幕，*目瞪口呆*：\n\n> \"天啊！你们的信息传播速度比我们的量子通讯还快！现在全世界都知道我在这里了！\"\n\n政府车辆的**警笛声**从远处传来...",
    "image": "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    "options": [
      { "label": "🏃‍♂️ 与Zara一起逃离现场", "nextId": "step4_escape" },
      { "label": "🎤 面对媒体采访", "nextId": "step4_interview" },
      { "label": "🏛️ 配合政府调查", "nextId": "step4_government" },
      { "label": "🚁 帮Zara回到飞船", "nextId": "step4_help_escape" }
    ]
  },
  {
    "id": "step3_spaceship",
    "text": "## 🚀 星际飞船探索\n\n舱门**优雅地**向两侧滑开，内部散发着*柔和的蓝光*。你踏进飞船，感到**脚下轻盈**，仿佛重力都变小了。\n\n> \"欢迎来到我的星舰'希望之光'！这里的重力是地球的一半，别担心，很快就会适应的。\"\n\n飞船内部布满了**发光的符号**和*悬浮的控制面板*。",
    "image": "https://images.unsplash.com/photo-1534126416832-7c17d60b83b0?w=800&h=600&fit=crop",
    "options": [
      { "label": "🎮 请求体验飞船驾驶", "nextId": "step4_pilot" },
      { "label": "🔬 参观科学实验室", "nextId": "step4_lab" },
      { "label": "🌌 观看星图导航系统", "nextId": "step4_starmap" },
      { "label": "🛏️ 了解外星人的生活方式", "nextId": "step4_lifestyle" }
    ]
  },
  {
    "id": "step3_architecture",
    "text": "## 🏢 建筑艺术的对话\n\nZara**仔细端详**着摩天大楼的结构，*用手触摸*玻璃幕墙：\n\n> \"你们用如此轻盈的材料建造这么高的结构，而且还能透光！我们的建筑都是用密度很高的晶体制造的。\"\n\n他指向大楼顶部的**LED广告屏**：\"这些会动的画面是用什么原理实现的？\"",
    "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    "options": [
      { "label": "💡 解释LED和显示技术", "nextId": "step4_led_tech" },
      { "label": "🏗️ 介绍建筑工程原理", "nextId": "step4_engineering" },
      { "label": "🎨 带他看建筑设计美学", "nextId": "step4_design" },
      { "label": "💎 询问他们的晶体建筑", "nextId": "step4_crystal_tech" }
    ]
  },
  {
    "id": "step3_art",
    "text": "## 🎨 街头艺术之美\n\n你们来到一面**巨大的涂鸦墙**前。五彩斑斓的*抽象图案*让Zara**惊叹不已**：\n\n> \"这些色彩组合创造出了情感共鸣！我能感受到创作者的内心世界。在我们星球，艺术是通过思维波动来表达的。\"\n\n一个**街头艺术家**正在现场创作，注意到了你们的到来。",
    "image": "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=800&h=600&fit=crop",
    "options": [
      { "label": "🎭 介绍Zara给艺术家", "nextId": "step4_artist_meet" },
      { "label": "🖌️ 邀请Zara尝试涂鸦", "nextId": "step4_graffiti" },
      { "label": "🧠 了解思维波动艺术", "nextId": "step4_mind_art" },
      { "label": "📸 记录这个艺术交流时刻", "nextId": "step4_art_photo" }
    ]
  },
  {
    "id": "step3_icecream",
    "text": "## 🍦 冰凉的惊喜\n\n你买了一个**彩虹色的冰淇淋**递给Zara。他*小心翼翼*地舔了一口，眼睛瞬间**睁得大大的**：\n\n> \"这...这是什么魔法？又冷又甜，还有这么多层次的味道！我们星球的温度恒定，从来没有体验过这种温度对比！\"\n\n他**兴奋地**连续舔了好几口，*幸福地*闭上了眼睛。",
    "image": "https://images.unsplash.com/photo-1576506295286-5cda18df43e7?w=800&h=600&fit=crop",
    "options": [
      { "label": "🍨 解释不同口味的冰淇淋", "nextId": "step4_flavors" },
      { "label": "❄️ 带他体验更多冷饮", "nextId": "step4_cold_drinks" },
      { "label": "🌡️ 询问他们星球的温度", "nextId": "step4_temperature" },
      { "label": "🎁 给他打包一些带走", "nextId": "step4_takeaway" }
    ]
  },
  {
    "id": "step4_pilot",
    "text": "## 🎮 星际驾驶体验\n\nZara **热情地**指导你坐在驾驶座上。控制台*自动调整*到适合你的身高：\n\n> \"这艘飞船是生物识别的，它已经认识你了！现在试试用意念控制推进器...\"\n\n当你**集中精神**时，飞船竟然真的*轻微震动*起来！窗外的景色开始**缓缓移动**...",
    "image": "https://images.unsplash.com/photo-1534126416832-7c17d60b83b0?w=800&h=600&fit=crop",
    "options": [
      { "label": "🌌 请求进行短途太空旅行", "nextId": "step5_space_trip" },
      { "label": "🛑 感到害怕，要求停下", "nextId": "step5_too_scary" },
      { "label": "🎯 询问如何精确控制", "nextId": "step5_control_training" },
      { "label": "📡 要求学习导航系统", "nextId": "step4_starmap" }
    ]
  },
  {
    "id": "step4_lab",
    "text": "## 🔬 外星科学实验室\n\n实验室里**悬浮着各种**奇异的设备。Zara指着一个*发光的球体*：\n\n> \"这是我收集的地球样本分析器。看，你们的土壤含有我们从未见过的微生物群落！\"\n\n**全息显示屏**上出现了*放大的细菌图像*，它们居然在**跳舞**一样移动着！",
    "image": "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop",
    "options": [
      { "label": "🦠 了解地球微生物的特殊性", "nextId": "step5_microbes" },
      { "label": "🧬 询问外星生物特征", "nextId": "step5_alien_biology" },
      { "label": "⚗️ 请求观看其他实验", "nextId": "step5_more_experiments" },
      { "label": "💊 询问是否有治病的技术", "nextId": "step5_medical_tech" }
    ]
  },
  {
    "id": "step5_space_trip",
    "text": "## 🌌 短途太空之旅\n\n飞船**优雅地**脱离地球引力，你透过*透明的舷窗*看到了**壮观的地球全貌**！\n\n> \"欢迎来到宇宙！这是你第一次看到母星的全貌吧？每个文明都会在这一刻感到震撼。\"\n\n**蓝色的地球**在黑暗中*闪闪发光*，云层如丝绸般*缓缓流动*。你感到**前所未有的敬畏**。",
    "image": "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=600&fit=crop",
    "options": [
      { "label": "🌍 拍摄地球的照片", "nextId": "end_earth_photo" },
      { "label": "🚀 请求前往月球", "nextId": "step6_moon" },
      { "label": "⭐ 询问其他星球的情况", "nextId": "step6_other_planets" },
      { "label": "🏠 要求返回地球", "nextId": "end_safe_return" }
    ]
  },
  {
    "id": "step6_moon",
    "text": "## 🌙 月球奇遇\n\n飞船**轻柔地**降落在月球表面。Zara递给你一套*特殊的防护服*：\n\n> \"这是适应性防护装备，会根据环境自动调节。月球有我们建立的秘密基地，想去看看吗？\"\n\n在月球**荒凉的表面**，你看到远处有*神秘的建筑群*闪闪发光...",
    "image": "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=600&fit=crop",
    "options": [
      { "label": "🏗️ 参观外星人的月球基地", "nextId": "end_moon_base" },
      { "label": "🎯 在月球表面留下纪念", "nextId": "end_moon_memorial" },
      { "label": "📡 了解基地的用途", "nextId": "end_moon_purpose" },
      { "label": "🌍 从月球欣赏地球", "nextId": "end_earth_view" }
    ]
  },
  {
    "id": "end_earth_photo",
    "text": "## 📸 宇宙摄影师\n\n你用手机拍下了**人类历史上第一张**由普通人在外星飞船上拍摄的地球照片。\n\nZara **微笑着**说：\"这张照片将成为两个文明友谊的象征。\"\n\n当你们返回地球时，你决定将这张照片**捐赠给联合国**，成为*人类团结与和平*的永恒见证。\n\n**你成为了星际文化交流的先驱者！**",
    "image": "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=600&fit=crop",
    "options": []
  },
  {
    "id": "end_moon_base",
    "text": "## 🌙 月球基地的秘密\n\n月球基地**宏伟壮观**，里面居住着来自*十几个不同星系*的外星人！\n\nZara自豪地介绍：\"这是星际和平联盟的**监测站**，我们一直在*默默保护*地球免受恶意文明的侵害。\"\n\n你成为了**第一个知道这个秘密的地球人**，并被邀请成为*地球与外星联盟*的联络大使。\n\n**一个全新的星际时代开始了！**",
    "image": "https://images.unsplash.com/photo-1534126416832-7c17d60b83b0?w=800&h=600&fit=crop",
    "options": []
  },
  {
    "id": "end_regret",
    "text": "## 😔 后悔的眼泪\n\n望着**空荡荡的夜空**，你意识到自己错失了*人类历史上最重要的机会*。\n\n几年后，你成为了**和平主义者**，致力于*促进理解与宽容*。虽然外星人再也没有回来，但你的故事*启发了无数人*。\n\n有时候，**最大的教训**来自*最深的遗憾*...",
    "image": "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=600&fit=crop",
    "options": []
  },
  {
    "id": "end_safe_return",
    "text": "## 🏠 安全返航\n\n飞船**平稳地**降落在原来的地点。Zara **温暖地**握着你的手：\n\n> \"感谢你的勇气和开放的心态。你代表了人类最美好的品质。\"\n\n他留给你一个**小型通讯设备**：\"如果地球需要帮助，或者你想念星空，就按下这个按钮。\"\n\n**你成为了两个世界之间的桥梁！**",
    "image": "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
    "options": []
  },
  {
    "id": "step3_transport",
    "text": "## 🚇 地铁奇幻之旅\n\n你们走进**繁忙的地铁站**。Zara被*复杂的交通网络*深深震撼：\n\n> \"这个地下交通系统太令人惊叹了！你们在地底下建造了一个完整的城市！\"\n\n**地铁列车**呼啸而过，Zara的眼睛里闪烁着*兴奋的光芒*。",
    "image": "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop",
    "options": [
      { "label": "🎫 教他如何使用地铁卡", "nextId": "end_safe_return" },
      { "label": "🗺️ 解释地铁线路图", "nextId": "end_safe_return" },
      { "label": "🚄 体验高峰期的拥挤", "nextId": "end_safe_return" },
      { "label": "📱 展示手机导航功能", "nextId": "end_safe_return" }
    ]
  },
  {
    "id": "step3_skyview",
    "text": "## 🌃 城市之巅\n\n电梯**飞速上升**，你们来到了摩天大楼的观景台。Zara看到*璀璨的城市夜景*，**惊叹不已**：\n\n> \"从这个高度看，你们的城市就像一个巨大的光之网络！这些光点连接起来，形成了生命的脉络。\"\n\n**万家灯火**在脚下闪烁，*星空与灯海*交相辉映。",
    "image": "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&h=600&fit=crop",
    "options": [
      { "label": "🌟 指出不同区域的功能", "nextId": "end_safe_return" },
      { "label": "📸 一起拍摄夜景照片", "nextId": "end_safe_return" },
      { "label": "🎆 等待看城市烟花", "nextId": "end_safe_return" },
      { "label": "💫 与他分享城市的故事", "nextId": "end_safe_return" }
    ]
  },
  {
    "id": "step3_geography",
    "text": "## 🌍 地球地理课堂\n\n你**详细地**向Zara介绍地球的地理特征。他*仔细端详*着地球仪：\n\n> \"七大洲、四大洋...你们星球的地理多样性令人难以置信！我们的星球表面相对单一，主要是晶体平原。\"\n\n他**好奇地**转动地球仪，*指着不同的地区*询问气候和文化。",
    "image": "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=800&h=600&fit=crop",
    "options": [
      { "label": "🏔️ 介绍不同的地形地貌", "nextId": "end_safe_return" },
      { "label": "🌊 解释海洋的重要性", "nextId": "end_safe_return" },
      { "label": "🌡️ 分享气候变化知识", "nextId": "end_safe_return" },
      { "label": "🗺️ 展示世界各国文化", "nextId": "end_safe_return" }
    ]
  },
  {
    "id": "step3_alien_planet",
    "text": "## 🪐 外星家园的秘密\n\nZara的眼中闪过*一丝思乡之情*：\n\n> \"我的星球叫做Aetheria，是一个椭圆形的晶体世界。整个星球表面都是发光的水晶，我们的城市建在巨大的水晶洞穴里。\"\n\n他**生动地**描述着：\"我们有三个太阳，所以从来没有真正的黑夜，只有*不同颜色的光线变化*。\"",
    "image": "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=600&fit=crop",
    "options": [
      { "label": "💎 询问水晶建筑的细节", "nextId": "end_safe_return" },
      { "label": "☀️ 了解三个太阳的影响", "nextId": "end_safe_return" },
      { "label": "👥 问关于他们的社会结构", "nextId": "end_safe_return" },
      { "label": "🚀 请求看他家乡的照片", "nextId": "end_safe_return" }
    ]
  },
  {
    "id": "step3_more_gifts",
    "text": "## 🎁 更多地球珍宝\n\n你想起包里还有其他东西，掏出一朵**干花书签**、一块*巧克力*和一个小小的**音乐盒**：\n\n> \"这些都是地球的特色！花朵代表美丽，巧克力代表甜蜜，音乐盒代表我们的艺术。\"\n\nZara**小心翼翼**地接过每一样礼物，*眼中含泪*：\"这些礼物承载着太多情感...\"",
    "image": "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop",
    "options": [
      { "label": "🎵 打开音乐盒给他听", "nextId": "end_safe_return" },
      { "label": "🍫 教他品尝巧克力", "nextId": "end_safe_return" },
      { "label": "🌸 解释花朵的文化意义", "nextId": "end_safe_return" },
      { "label": "💝 请他也分享外星礼物", "nextId": "end_safe_return" }
    ]
  },
  {
    "id": "step3_earth_special",
    "text": "## 🌌 地球的宇宙地位\n\nZara的表情变得**异常严肃**：\n\n> \"地球位于一个非常罕见的宇宙区域，这里的生命能量场特别活跃。你们星球孕育的生命形式多样性，在已知宇宙中是独一无二的。\"\n\n他停顿了一下：\"更重要的是，地球人的*情感能力*异常发达，这种特质在宇宙中极其珍贵。\"",
    "image": "https://images.unsplash.com/photo-1518066000-4ba86b8e8227?w=800&h=600&fit=crop",
    "options": [
      { "label": "💫 询问生命能量场的作用", "nextId": "end_safe_return" },
      { "label": "❤️ 了解情感能力的重要性", "nextId": "end_safe_return" },
      { "label": "🌍 问地球是否需要保护", "nextId": "end_safe_return" },
      { "label": "🤝 提议帮助宇宙和平", "nextId": "end_safe_return" }
    ]
  },
  {
    "id": "step3_other_aliens",
    "text": "## 👽 宇宙文明大观\n\nZara **兴奋地**分享着宇宙见闻：\n\n> \"星际联盟有128个成员文明！有的像液体生物，有的是纯能量体，还有的是集体意识生命。每个文明都有独特的智慧贡献。\"\n\n他的眼睛**闪闪发光**：\"但像人类这样兼具*理性和感性*的种族，真的很罕见！\"",
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    "options": [
      { "label": "🌊 询问液体生物的生活", "nextId": "end_safe_return" },
      { "label": "⚡ 了解纯能量体文明", "nextId": "end_safe_return" },
      { "label": "🧠 问关于集体意识", "nextId": "end_safe_return" },
      { "label": "🤝 表达加入联盟的意愿", "nextId": "end_safe_return" }
    ]
  },
  {
    "id": "step3_diplomacy",
    "text": "## 🤝 星际外交的开始\n\n你**郑重地**提议：\"也许是时候让人类正式与星际联盟建立联系了。\"\n\nZara **深思熟虑**地点头：\n\n> \"这需要一个循序渐进的过程。首先需要选择合适的地球代表，然后进行文化交流培训。你愿意成为第一批地球大使吗？\"\n\n这个提议让你感到既**兴奋又紧张**。",
    "image": "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop",
    "options": [
      { "label": "✅ 接受成为地球大使", "nextId": "end_safe_return" },
      { "label": "🤔 询问大使的职责", "nextId": "end_safe_return" },
      { "label": "👥 建议选择更多代表", "nextId": "end_safe_return" },
      { "label": "⏰ 要求更多准备时间", "nextId": "end_safe_return" }
    ]
  },
  {
    "id": "step3_danger",
    "text": "## ⚠️ 宇宙中的阴影\n\nZara的表情**瞬间严肃**：\n\n> \"确实存在一些威胁。有一个叫做'虚无吞噬者'的势力，他们专门摧毁有机生命文明。不过别担心，星际联盟一直在保护像地球这样的新兴文明。\"\n\n他**安慰地**拍拍你的肩膀：\"这就是为什么我们需要*友谊和团结*。\"",
    "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    "options": [
      { "label": "🛡️ 询问如何加强地球防护", "nextId": "end_safe_return" },
      { "label": "👥 了解星际联盟的军事力量", "nextId": "end_safe_return" },
      { "label": "🤝 表示愿意协助联盟", "nextId": "end_safe_return" },
      { "label": "🌍 关心其他星球的安危", "nextId": "end_safe_return" }
    ]
  },
  {
    "id": "step3_ramen",
    "text": "## 🍜 温暖的拉面体验\n\n热腾腾的拉面端上来时，Zara被*浓郁的香味*深深吸引：\n\n> \"这种液体食物的温度和香味层次太复杂了！在我们星球，所有营养都是通过光合作用直接吸收的。\"\n\n他**小心地**用筷子夹起面条，第一次品尝时*眼睛瞬间亮了*：\"这种温暖的感觉...太神奇了！\"",
    "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&h=600&fit=crop",
    "options": [
      { "label": "🥢 教他正确使用筷子", "nextId": "end_safe_return" },
      { "label": "🌶️ 让他尝试不同口味", "nextId": "end_safe_return" },
      { "label": "🍖 介绍拉面的配菜", "nextId": "end_safe_return" },
      { "label": "🍵 分享拉面的文化故事", "nextId": "end_safe_return" }
    ]
  },
  {
    "id": "step3_spicy",
    "text": "## 🌶️ 辣味挑战\n\n你给Zara点了一份**超辣的川菜**。他勇敢地*尝了一口*，瞬间**眼睛瞪得巨大**：\n\n> \"这...这是什么魔法？！我的嘴巴着火了！但是...这种刺激感太有趣了！\"\n\n他一边*拼命喝水*，一边**兴奋地**说：\"我们星球从来没有这种刺激性的味觉体验！\"",
    "image": "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&h=600&fit=crop",
    "options": [
      { "label": "🥛 赶紧给他更多水", "nextId": "end_safe_return" },
      { "label": "🧊 提供冰淇淋降火", "nextId": "end_safe_return" },
      { "label": "😅 为恶作剧道歉", "nextId": "end_safe_return" },
      { "label": "🌶️ 解释辣椒的科学原理", "nextId": "end_safe_return" }
    ]
  },
  {
    "id": "step3_dessert",
    "text": "## 🍰 甜蜜的艺术\n\n精美的**彩虹蛋糕**端上桌时，Zara被*绚丽的色彩*震撼了：\n\n> \"这简直是可以食用的艺术品！你们竟然能把美学和营养结合得如此完美！\"\n\n第一口**奶油入口**时，他*幸福地*闭上眼睛：\"甜蜜...这种味觉情感真是太美妙了！\"",
    "image": "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&h=600&fit=crop",
    "options": [
      { "label": "🎂 介绍不同种类的蛋糕", "nextId": "end_safe_return" },
      { "label": "🍫 分享巧克力的历史", "nextId": "end_safe_return" },
      { "label": "🎨 解释食物艺术的概念", "nextId": "end_safe_return" },
      { "label": "🎉 提议庆祝这次相遇", "nextId": "end_safe_return" }
    ]
  },
  {
    "id": "step3_feelings",
    "text": "## 💭 情感的分享\n\n你**坦诚地**分享内心的感受：\"说实话，刚才我真的很害怕。面对未知，恐惧是人类的本能反应。\"\n\nZara **理解地**点头：\n\n> \"恐惧是智慧生命的本能保护机制。我第一次离开家乡时也很害怕。但正是这种真实的情感，让你们人类如此珍贵。\"\n\n这次**真诚的对话**让你们的友谊更加深厚。",
    "image": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&h=600&fit=crop",
    "options": [
      { "label": "🤗 给他一个拥抱", "nextId": "end_safe_return" },
      { "label": "😊 分享更多人类情感", "nextId": "end_safe_return" },
      { "label": "🌟 询问他的内心感受", "nextId": "end_safe_return" },
      { "label": "💝 表达对友谊的珍视", "nextId": "end_safe_return" }
    ]
  },
  {
    "id": "step3_make_amends",
    "text": "## 🎯 弥补的艺术\n\n你**真诚地**询问：\"我该如何弥补刚才的无礼行为？\"\n\nZara **温和地**笑了：\n\n> \"其实不需要特别做什么。你现在的诚意就是最好的弥补。如果一定要说的话，请把这次经历分享给其他人，让更多地球人知道，宇宙中有友善的存在。\"\n\n他的**宽容和智慧**让你深受感动。",
    "image": "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=600&fit=crop",
    "options": [
      { "label": "📖 承诺写下这个故事", "nextId": "end_safe_return" },
      { "label": "🎬 提议拍摄纪录片", "nextId": "end_safe_return" },
      { "label": "👥 邀请朋友来见他", "nextId": "end_safe_return" },
      { "label": "🌍 成为和平使者", "nextId": "end_safe_return" }
    ]
  },
  {
    "id": "step3_police",
    "text": "## 👮‍♂️ 官方介入\n\n几分钟后，**警车呼啸而至**。警察们*谨慎地*走向降落地点，手电筒的光束*四处扫射*。\n\n当他们看到Zara时，**震惊得说不出话来**。Zara *友善地*挥手：\n\n> \"你好，地球的守护者们。我是和平的访客。\"\n\n现场的**气氛非常紧张**，但Zara的平静让所有人*逐渐放松*。",
    "image": "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=800&h=600&fit=crop",
    "options": [
      { "label": "🤝 充当翻译和中介", "nextId": "end_safe_return" },
      { "label": "📹 确保过程被记录", "nextId": "end_safe_return" },
      { "label": "🕊️ 强调和平接触的重要性", "nextId": "end_safe_return" },
      { "label": "📞 建议联系更高层领导", "nextId": "end_safe_return" }
    ]
  },
  {
    "id": "step3_media",
    "text": "## 📺 媒体风暴\n\n新闻车**迅速赶到**现场，记者们*兴奋地*架起摄像机。Zara看到这个场面，**有些紧张**：\n\n> \"这么多人？他们都是做什么的？\"\n\n你解释道：\"这些是记者，他们会把我们的故事告诉全世界。\"Zara **深吸一口气**：\"那我必须说些对人类有意义的话。\"",
    "image": "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=600&fit=crop",
    "options": [
      { "label": "🎤 帮助他准备采访", "nextId": "end_safe_return" },
      { "label": "🛡️ 保护他免受过度打扰", "nextId": "end_safe_return" },
      { "label": "📝 记录这历史性时刻", "nextId": "end_safe_return" },
      { "label": "🌍 强调和平交流的意义", "nextId": "end_safe_return" }
    ]
  },
  {
    "id": "step3_home_safe",
    "text": "## 🏠 安全护送\n\n警察**认真地**护送你回家，路上他们*不停地*询问刚才的经历。\n\n回到家后，你**坐在沙发上**，*回想着刚才的一切*：是真的吗？还是只是一个梦？\n\n突然，你看到口袋里有一个**发光的小装置**——Zara留下的*通讯器*！这证明一切都是真实的。",
    "image": "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop",
    "options": [
      { "label": "📱 尝试使用通讯器", "nextId": "end_safe_return" },
      { "label": "📖 写下今晚的经历", "nextId": "end_safe_return" },
      { "label": "😴 休息并期待明天", "nextId": "end_safe_return" },
      { "label": "🤔 思考人生的改变", "nextId": "end_safe_return" }
    ]
  },
  {
    "id": "step3_discovered",
    "text": "## 👀 被发现了\n\n你**小心地**回头，发现Zara正*温和地*看着你，眼中没有愤怒，只有*理解和悲伤*：\n\n> \"我知道你在那里。如果你害怕，我可以离开。我不想给你们带来恐惧。\"\n\n他的**善意和理解**让你感到深深的*羞愧和感动*。",
    "image": "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
    "options": [
      { "label": "😔 走出来道歉", "nextId": "step2_e" },
      { "label": "🤝 主动伸出友谊之手", "nextId": "step1_a" },
      { "label": "💬 询问他的真实意图", "nextId": "step2_c" },
      { "label": "📱 提议一起拍照留念", "nextId": "step1_d" }
    ]
  },
  {
    "id": "step3_hide",
    "text": "## 🤫 静静等待\n\n你**屏住呼吸**，*静静地*观察着Zara的一举一动。\n\n他似乎**感觉到**了你的存在，但*尊重地*没有主动寻找。过了一会儿，他**轻声说道**：\n\n> \"朋友，如果你在听，我想说：理解需要时间，恐惧是正常的。当你准备好时，我会在这里等你。\"\n\n然后他**安静地**坐在飞船旁，*耐心等待*。",
    "image": "https://images.unsplash.com/photo-1518066000-4ba86b8e8227?w=800&h=600&fit=crop",
    "options": [
      { "label": "💔 被他的耐心感动，现身", "nextId": "step2_e" },
      { "label": "⏰ 继续等待观察", "nextId": "step3_wait" },
      { "label": "📱 偷偷拍摄这个时刻", "nextId": "step1_d" },
      { "label": "🤔 思考是否该信任他", "nextId": "step3_reflection" }
    ]
  },
  {
    "id": "step3_science",
    "text": "## 🔬 外星科学家的工作\n\n你**仔细观察**Zara的科学行为。他用*奇异的设备*扫描植物和土壤，**每个动作**都充满*科学严谨性*。\n\n他**轻声记录**着数据：\"地球植物的叶绿素结构...土壤微生物多样性...大气成分比例...\"\n\n这种**专业而尊重**的研究态度让你意识到，他真的是以*科学交流*为目的而来。",
    "image": "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop",
    "options": [
      { "label": "🌱 主动提供植物样本", "nextId": "step2_e" },
      { "label": "📚 询问他的研究目的", "nextId": "step2_c" },
      { "label": "🤝 表示愿意协助研究", "nextId": "step1_a" },
      { "label": "📷 记录这个科学时刻", "nextId": "step1_d" }
    ]
  },
  {
    "id": "step3_wait",
    "text": "## ⏰ 静静的守候\n\n你**耐心地**等待着，观察Zara会做什么。时间*慢慢流逝*，他完成了样本收集，**最后看了一眼**你躲藏的方向。\n\n> \"也许这次接触还不是时候。但请记住，宇宙中有朋友在关心着你们。\"\n\n说完，他**缓缓走向**飞船。引擎*开始启动*，*蓝色的光芒*越来越亮...",
    "image": "https://images.unsplash.com/photo-1518066000-4ba86b8e8227?w=800&h=600&fit=crop",
    "options": [
      { "label": "😢 后悔没有勇敢现身", "nextId": "end_regret" },
      { "label": "🏃‍♂️ 最后一刻冲出来", "nextId": "step2_e" },
      { "label": "📝 记住这个重要时刻", "nextId": "end_safe_return" },
      { "label": "🌟 期待下次相遇", "nextId": "end_safe_return" }
    ]
  },
  {
    "id": "step3_tech_demo",
    "text": "## 📱 科技演示时间\n\n你**兴奋地**向Zara展示手机的各种功能：拍照、录像、上网、导航...\n\nZara **赞叹不已**：\n\n> \"一个如此小的设备竟然有这么多功能！你们的微型化技术发展得真快。我们的设备虽然更先进，但体积都很大。\"\n\n他**仔细观察**着屏幕上的*每一个应用图标*。",
    "image": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
    "options": [
      { "label": "📸 教他用手机拍照", "nextId": "step2_selfie" },
      { "label": "🌐 展示互联网的奇妙", "nextId": "end_safe_return" },
      { "label": "🎮 让他体验手机游戏", "nextId": "end_safe_return" },
      { "label": "🔄 提议技术交换", "nextId": "step3_tech_exchange" }
    ]
  },
  {
    "id": "step3_mind_tech",
    "text": "## 🧠 思维控制的奥秘\n\nZara **兴奋地**解释思维控制技术：\n\n> \"我们通过脑波频率与设备产生共振。每个人的思维模式都有独特的'指纹'，设备学会识别后就能响应意念指令。\"\n\n他**演示**给你看：只见他*专注地*看着一个小装置，装置立刻**发出彩色光芒**！\n\n\"你们人类的大脑潜力巨大，经过训练也能掌握这种技术。\"",
    "image": "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
    "options": [
      { "label": "🧙‍♂️ 请求学习这种技术", "nextId": "end_safe_return" },
      { "label": "🔬 询问技术的科学原理", "nextId": "end_safe_return" },
      { "label": "🤔 担心隐私和安全问题", "nextId": "end_safe_return" },
      { "label": "🎯 尝试用意念控制装置", "nextId": "end_safe_return" }
    ]
  },
  {
    "id": "step3_tech_exchange",
    "text": "## 🔄 科技交流的开始\n\n你**提议**进行技术交换：\"我们可以分享各自的科技成果吗？\"\n\nZara **认真思考**：\n\n> \"这是个好想法！但需要循序渐进。你们的互联网技术很有趣，而我们的清洁能源技术也许能帮助地球。不过，这需要两个文明的正式协议。\"\n\n这个**历史性的提议**让你意识到自己可能正在*改变人类的未来*。",
    "image": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    "options": [
      { "label": "🤝 提议建立正式外交关系", "nextId": "step3_diplomacy" },
      { "label": "🌱 关注环保技术交流", "nextId": "end_safe_return" },
      { "label": "📚 询问知识共享协议", "nextId": "end_safe_return" },
      { "label": "⏰ 制定交流时间表", "nextId": "end_safe_return" }
    ]
  },
  {
    "id": "step3_communication",
    "text": "## 📡 通讯技术的对比\n\nZara **详细比较**两种文明的通讯方式：\n\n> \"你们的电磁波通讯很巧妙，但我们使用量子纠缠进行即时通讯，不受距离限制。不过你们的互联网概念很有趣——把所有个体连接成网络。\"\n\n他**沉思着**：\"也许我们可以结合两种技术，创造出更完美的通讯系统。\"",
    "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    "options": [
      { "label": "🌐 解释互联网的社会意义", "nextId": "end_safe_return" },
      { "label": "⚛️ 了解量子通讯的原理", "nextId": "end_safe_return" },
      { "label": "🔗 提议合作开发新技术", "nextId": "step3_tech_exchange" },
      { "label": "📱 展示社交媒体的力量", "nextId": "step3_viral" }
    ]
  },
  {
    "id": "step3_print_photo",
    "text": "## 🖼️ 珍贵的纪念品\n\n你**突然想到**：\"我可以把这张照片打印出来送给你作纪念！\"\n\nZara **兴奋地**点头：\n\n> \"真的可以吗？这将是我第一张与地球朋友的合影！我想把它带回我的星球，向大家展示地球人的友善。\"\n\n这张**小小的照片**承载着*两个文明友谊*的重大意义。",
    "image": "https://images.unsplash.com/photo-1516387938699-a93567ec168e?w=800&h=600&fit=crop",
    "options": [
      { "label": "🏪 立刻去附近打印店", "nextId": "end_safe_return" },
      { "label": "🎁 制作相框作为礼物", "nextId": "end_safe_return" },
      { "label": "📸 再拍更多照片", "nextId": "step3_photo_skills" },
      { "label": "💌 在照片背面写留言", "nextId": "end_safe_return" }
    ]
  },
  {
    "id": "step3_photo_skills",
    "text": "## 📱 摄影技巧大师课\n\n你**耐心地**教Zara各种拍照技巧：构图、光线、角度...\n\nZara **学得很快**：\n\n> \"这种通过视觉艺术记录瞬间的方式太有趣了！我们通常用思维投影记录，但你们的方式更有情感色彩。\"\n\n他**兴奋地**拍摄着*周围的一切*：花朵、建筑、夜空...",
    "image": "https://images.unsplash.com/photo-1516387938699-a93567ec168e?w=800&h=600&fit=crop",
    "options": [
      { "label": "🌸 带他拍摄美丽的夜景", "nextId": "end_safe_return" },
      { "label": "🎨 教他使用滤镜效果", "nextId": "end_safe_return" },
      { "label": "📚 分享摄影的文化意义", "nextId": "end_safe_return" },
      { "label": "🤳 一起拍摄更多自拍", "nextId": "step2_selfie" }
    ]
  },
  {
    "id": "step3_spaceship_photo",
    "text": "## 🌟 飞船摄影时刻\n\n你们来到**闪闪发光**的飞船前。在*柔和蓝光*的照耀下，这艘飞船显得*神秘而美丽*。\n\nZara **自豪地**介绍：\n\n> \"这是'希望之光'号，陪伴我穿越了无数星系。来，让我们在它面前留个纪念吧！\"\n\n这张照片将成为**人类历史上第一张**与外星飞船的*合影*！",
    "image": "https://images.unsplash.com/photo-1534126416832-7c17d60b83b0?w=800&h=600&fit=crop",
    "options": [
      { "label": "📸 从不同角度拍摄飞船", "nextId": "end_safe_return" },
      { "label": "🚀 请求参观飞船内部", "nextId": "step3_spaceship" },
      { "label": "⭐ 在星空下拍摄", "nextId": "end_safe_return" },
      { "label": "🎥 录制一段视频", "nextId": "end_safe_return" }
    ]
  },
  {
    "id": "step3_share_friends",
    "text": "## 🌍 朋友圈的奇迹\n\n你**小心地**将照片分享给几个*最信任的朋友*。很快，你的手机就**响个不停**：\n\n朋友们的反应从*震惊到兴奋*，从*质疑到相信*。Zara **好奇地**看着这些反应：\n\n> \"你们的社交网络真有趣！消息传播得这么快，而且每个人的反应都不同。这种个体差异性正是人类文明的魅力所在。\"",
    "image": "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    "options": [
      { "label": "📞 邀请朋友来见面", "nextId": "end_safe_return" },
      { "label": "💬 解释社交网络文化", "nextId": "end_safe_return" },
      { "label": "🤐 要求朋友保密", "nextId": "step3_keep_secret" },
      { "label": "📈 观察传播效应", "nextId": "end_safe_return" }
    ]
  },
  {
    "id": "step3_keep_secret",
    "text": "## 🤐 珍贵的秘密\n\n你**决定**将这次相遇当作*珍贵的秘密*保守起来。Zara **理解地**点头：\n\n> \"有时候，最美好的经历需要慢慢消化。秘密不是为了隐藏，而是为了在合适的时候，以最好的方式分享。\"\n\n他给了你一个**小型装置**：\"当人类准备好接受我们时，可以用这个联系我。\"",
    "image": "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=600&fit=crop",
    "options": [
      { "label": "💎 珍惜这个特殊的友谊", "nextId": "end_safe_return" },
      { "label": "📖 承诺在日记中记录", "nextId": "end_safe_return" },
      { "label": "🌟 期待未来的重逢", "nextId": "end_safe_return" },
      { "label": "🤝 成为两个世界的桥梁", "nextId": "end_safe_return" }
    ]
  },
  {
    "id": "step3_reflection",
    "text": "## 🤔 深度反思\n\n你**静静地**思考今晚发生的一切：恐惧、误解、然后是理解和友谊...\n\n这个经历让你**深刻意识到**：*偏见和恐惧*往往源于无知，而*理解和友谊*来自于开放的心态。\n\n也许这次相遇的**真正意义**不在于外星人本身，而在于*它教会了你如何成为更好的人*。",
    "image": "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=600&fit=crop",
    "options": [
      { "label": "📖 写下这次经历的感悟", "nextId": "end_safe_return" },
      { "label": "🌱 决定改变自己的生活态度", "nextId": "end_safe_return" },
      { "label": "🤝 寻找Zara重新建立友谊", "nextId": "step2_e" },
      { "label": "🌍 致力于促进人类理解", "nextId": "end_safe_return" }
    ]
  },
  {
    "id": "step3_prove_peace",
    "text": "## 💬 善意的证明\n\n你**谨慎地**要求：\"你能证明你的善意吗？\"\n\nZara **理解地**点头，*缓缓退后几步*，然后**关闭**了护盾：\n\n> \"我卸下所有防护，将自己完全暴露在你面前。这是我们星球表达绝对信任的方式。\"\n\n随后，他从飞船中取出一些**发光的种子**：\"这些是治愈植物的种子，可以净化被污染的土壤。这是我的礼物。\"",
    "image": "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop",
    "options": [
      { "label": "🌱 接受种子礼物", "nextId": "end_safe_return" },
      { "label": "🤝 表示相信他的善意", "nextId": "step2_e" },
      { "label": "🔬 询问种子的科学原理", "nextId": "end_safe_return" },
      { "label": "🌍 讨论环境保护话题", "nextId": "end_safe_return" }
    ]
  },
  {
    "id": "step3_cautious",
    "text": "## ⏳ 谨慎的观察\n\n你**保持距离**，*仔细观察*Zara的每一个动作。他似乎**感觉到**了你的戒备，*非常耐心地*慢慢移动。\n\n> \"我理解你的谨慎。信任需要时间建立。我会在这里静静等待，直到你觉得安全为止。\"\n\n他**坐在地上**，*双手放在膝盖上*，做出完全无害的姿势，**静静等待**着你的决定。",
    "image": "https://images.unsplash.com/photo-1518066000-4ba86b8e8227?w=800&h=600&fit=crop",
    "options": [
      { "label": "⏰ 继续观察一段时间", "nextId": "step3_wait" },
      { "label": "🤝 被他的耐心感动", "nextId": "step2_e" },
      { "label": "💬 开始远距离对话", "nextId": "step2_c" },
      { "label": "🏃‍♂️ 决定安全离开", "nextId": "step2_f" }
    ]
  },
  {
    "id": "step4_escape",
    "text": "## 🏃‍♂️ 紧急逃离\n\n政府车辆的**警笛声**越来越近。Zara **紧张地**说：\"我们需要离开这里！\"\n\n你们**迅速跑向**飞船。Zara启动了*紧急起飞程序*，飞船**瞬间升空**！\n\n在空中，你看到下面**到处都是**闪烁的警车和*搜索的探照灯*。Zara说：\"谢谢你帮助我逃脱，但我担心这会给你带来麻烦。\"",
    "image": "https://images.unsplash.com/photo-1534126416832-7c17d60b83b0?w=800&h=600&fit=crop",
    "options": [
      { "label": "🌍 要求他带你去安全的地方", "nextId": "step5_space_trip" },
      { "label": "🏠 请求返回地面解释情况", "nextId": "end_safe_return" },
      { "label": "👥 担心家人朋友的安危", "nextId": "end_safe_return" },
      { "label": "🚀 提议前往他的星球", "nextId": "step6_other_planets" }
    ]
  },
  {
    "id": "step4_interview",
    "text": "## 🎤 历史性采访\n\n面对**众多摄像机**，你和Zara站在一起。这是*人类历史上第一次*与外星文明的**公开对话**。\n\nZara **镇定地**面对镜头：\n\n> \"地球的朋友们，我代表星际和平联盟向你们致以最诚挚的问候。我们来这里是为了学习、交流，并建立友谊。\"\n\n记者们**激动地**提出各种问题，现场*秩序井然*。",
    "image": "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=600&fit=crop",
    "options": [
      { "label": "🌍 代表人类回应", "nextId": "end_safe_return" },
      { "label": "🤝 强调和平合作", "nextId": "end_safe_return" },
      { "label": "📡 安排后续交流", "nextId": "end_safe_return" },
      { "label": "🛡️ 保护Zara免受过度打扰", "nextId": "end_safe_return" }
    ]
  },
  {
    "id": "step4_government",
    "text": "## 🏛️ 政府协调\n\n政府官员**迅速赶到**现场，但他们的*态度非常友好*。领头的官员**恭敬地**说：\n\n\"我们代表政府欢迎您的到来。我们希望能够建立正式的外交关系。\"\n\nZara **礼貌地**回应：\"这正是我们希望的。和平、理解和合作对双方都有益。\"\n\n你**意识到**自己正在*见证历史*。",
    "image": "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop",
    "options": [
      { "label": "🤝 协助建立沟通桥梁", "nextId": "end_safe_return" },
      { "label": "📋 提议制定交流协议", "nextId": "end_safe_return" },
      { "label": "🌍 强调全人类的利益", "nextId": "end_safe_return" },
      { "label": "👥 建议民间交流项目", "nextId": "end_safe_return" }
    ]
  },
  {
    "id": "step4_help_escape",
    "text": "## 🚁 紧急援助\n\n你**迅速指引**Zara避开*人群密集的区域*，向飞船方向跑去。\n\n\"这边！媒体还没发现飞船的位置！\"你**大声喊道**。\n\nZara **感激地**看着你：\"你冒着风险帮助我，这份友谊比任何外交协议都珍贵。\"\n\n你们**成功到达**飞船，Zara准备*紧急起飞*。",
    "image": "https://images.unsplash.com/photo-1534126416832-7c17d60b83b0?w=800&h=600&fit=crop",
    "options": [
      { "label": "🚀 请求一起离开", "nextId": "step5_space_trip" },
      { "label": "🤝 目送他安全离开", "nextId": "end_safe_return" },
      { "label": "📱 交换联系方式", "nextId": "end_safe_return" },
      { "label": "💌 给他写一封信", "nextId": "end_safe_return" }
    ]
  },
  {
    "id": "step4_starmap",
    "text": "## 🌌 星图导航奇观\n\n**全息星图**在你面前展开，*无数星系*在空中**缓缓旋转**。Zara指着不同的星系：\n\n> \"这是仙女座星系，我的家乡...这里是猎户座旋臂，你们地球的位置...这些红色的点是已知的智慧文明星球。\"\n\n看着这个**宏伟的宇宙地图**，你感到*人类的渺小*，同时也为*宇宙的广阔*而震撼。",
    "image": "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=600&fit=crop",
    "options": [
      { "label": "🗺️ 询问到各星系的距离", "nextId": "end_safe_return" },
      { "label": "👽 了解其他智慧文明", "nextId": "step3_other_aliens" },
      { "label": "🚀 请求前往某个星系", "nextId": "step6_other_planets" },
      { "label": "🌍 标记地球的特殊意义", "nextId": "step3_earth_special" }
    ]
  },
  {
    "id": "step4_lifestyle",
    "text": "## 🛏️ 外星生活方式\n\n飞船的**生活区域**让你大开眼界。Zara介绍道：\n\n> \"我们不需要睡眠，而是通过冥想充电。这个区域是思维净化室，那边是营养光浴区。\"\n\n最令你**惊奇的**是*悬浮的花园*：\"这些植物来自不同星球，它们帮助净化飞船的能量场。\"\n\n这种**和谐的生活方式**让你*深受启发*。",
    "image": "https://images.unsplash.com/photo-1534126416832-7c17d60b83b0?w=800&h=600&fit=crop",
    "options": [
      { "label": "🧘‍♂️ 体验思维净化", "nextId": "end_safe_return" },
      { "label": "🌱 了解外星植物", "nextId": "end_safe_return" },
      { "label": "☀️ 尝试营养光浴", "nextId": "end_safe_return" },
      { "label": "🏡 分享人类的生活方式", "nextId": "end_safe_return" }
    ]
  },
  {
    "id": "step4_led_tech",
    "text": "## 💡 光的技术革命\n\n你**详细解释**LED技术：\"这些是发光二极管，通过电子跃迁产生光线...\"\n\nZara **兴奋地**打断：\n\n> \"太有趣了！你们用电子控制光线，我们用思维控制水晶发光。也许我们可以结合两种技术，创造出更节能的照明系统！\"\n\n这个**技术交流**让你意识到*合作的巨大潜力*。",
    "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    "options": [
      { "label": "🔬 深入讨论技术原理", "nextId": "end_safe_return" },
      { "label": "🌱 关注环保节能技术", "nextId": "end_safe_return" },
      { "label": "🔄 提议技术合作项目", "nextId": "step3_tech_exchange" },
      { "label": "💡 展示更多光线应用", "nextId": "end_safe_return" }
    ]
  },
  {
    "id": "step4_engineering",
    "text": "## 🏗️ 建筑工程奇迹\n\n你**自豪地**介绍人类的建筑工程：\"我们用钢筋混凝土框架，通过力学计算确保结构稳定...\"\n\nZara **赞叹不已**：\n\n> \"你们在重力环境下建造如此高的结构，需要精确的力学计算！我们的建筑是生长出来的，而你们的是建造出来的，这体现了不同的智慧。\"\n\n这种**工程智慧的对比**让你*更加自豪*。",
    "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    "options": [
      { "label": "🔨 介绍建造工具和设备", "nextId": "end_safe_return" },
      { "label": "🌱 了解生长式建筑", "nextId": "step4_crystal_tech" },
      { "label": "📐 解释力学和数学原理", "nextId": "end_safe_return" },
      { "label": "🏙️ 展示城市规划理念", "nextId": "end_safe_return" }
    ]
  },
  {
    "id": "step4_design",
    "text": "## 🎨 建筑美学哲学\n\n你带Zara欣赏建筑的**美学设计**：线条、比例、光影...\n\nZara **深深陶醉**：\n\n> \"你们的建筑不仅实用，更追求美感！这种将功能与艺术结合的理念很高明。我们的建筑虽然美丽，但缺少这种人文关怀。\"\n\n他**仔细观察**着*每一个设计细节*，眼中满含*对人类创造力的敬意*。",
    "image": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    "options": [
      { "label": "🎭 介绍不同建筑风格", "nextId": "end_safe_return" },
      { "label": "💝 分享设计理念的意义", "nextId": "end_safe_return" },
      { "label": "🏛️ 参观历史建筑", "nextId": "end_safe_return" },
      { "label": "🎨 讨论艺术与功能的平衡", "nextId": "end_safe_return" }
    ]
  },
  {
    "id": "step4_crystal_tech",
    "text": "## 💎 水晶建筑的奥秘\n\nZara **兴奋地**描述他们的水晶建筑技术：\n\n> \"我们用特殊的共振频率让水晶自然生长成建筑形状。每个建筑都是活的，能够自我修复，还能根据需要改变结构。\"\n\n他拿出一个**小水晶**演示：只见水晶在*温和的嗡鸣声*中**慢慢变形**！\n\n\"这种技术也许能帮助地球建造更环保的建筑。\"",
    "image": "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop",
    "options": [
      { "label": "🔬 了解水晶生长的原理", "nextId": "end_safe_return" },
      { "label": "🌱 讨论环保建筑技术", "nextId": "end_safe_return" },
      { "label": "🔄 提议技术交流合作", "nextId": "step3_tech_exchange" },
      { "label": "✨ 尝试操控水晶", "nextId": "end_safe_return" }
    ]
  },
  {
    "id": "step4_artist_meet",
    "text": "## 🎭 艺术家的邂逅\n\n街头艺术家**好奇地**走过来。你介绍道：\"这是我的朋友Zara，他来自...很远的地方。\"\n\n艺术家看到Zara的**奇特外貌**，*眼睛瞬间亮了*：\"哇，你的造型太酷了！是什么风格的Cosplay？\"\n\nZara **困惑地**看向你，你*小声解释*了Cosplay的概念。Zara**会心一笑**：\"我很荣幸被误认为艺术作品！\"",
    "image": "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=800&h=600&fit=crop",
    "options": [
      { "label": "🎨 邀请艺术家为Zara画像", "nextId": "end_safe_return" },
      { "label": "🤐 保持Zara身份的秘密", "nextId": "end_safe_return" },
      { "label": "💬 分享不同文化的艺术", "nextId": "step4_mind_art" },
      { "label": "📸 三人合影留念", "nextId": "end_safe_return" }
    ]
  },
  {
    "id": "step4_graffiti",
    "text": "## 🖌️ 涂鸦初体验\n\n艺术家**友好地**递给Zara一支喷漆：\"想试试吗？\"\n\nZara **小心翼翼**地接过喷漆，*第一次尝试*在墙上作画。他画出了**奇异的几何图形**，*充满韵律感*。\n\n> \"这种直接在表面创作的方式很有趣！我们通常在空中用光线作画，但这种物理创作更有触感。\"\n\n他的作品**立刻吸引**了*路人的注意*。",
    "image": "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=800&h=600&fit=crop",
    "options": [
      { "label": "🎨 鼓励他发挥创意", "nextId": "end_safe_return" },
      { "label": "✨ 询问光线绘画技术", "nextId": "step4_mind_art" },
      { "label": "👥 与围观群众互动", "nextId": "end_safe_return" },
      { "label": "📸 记录这个艺术时刻", "nextId": "step4_art_photo" }
    ]
  },
  {
    "id": "step4_mind_art",
    "text": "## 🧠 思维波动艺术\n\nZara **闭上眼睛**，*专注地*集中精神。突然，空气中出现了**彩色的光线**，*缓缓流动*着，形成美丽的图案！\n\n> \"这是我们的艺术形式——思维投影。情感和想象直接转化为光和色彩。每个人的思维艺术都是独一无二的。\"\n\n围观的人们**惊叹不已**，以为这是*高科技的全息投影*。",
    "image": "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=800&h=600&fit=crop",
    "options": [
      { "label": "🌟 请求学习这种艺术", "nextId": "end_safe_return" },
      { "label": "🎭 邀请更多人观看", "nextId": "end_safe_return" },
      { "label": "📱 尝试录制这个奇迹", "nextId": "step4_art_photo" },
      { "label": "💭 分享你的想象", "nextId": "end_safe_return" }
    ]
  },
  {
    "id": "step4_art_photo",
    "text": "## 📸 艺术交流的记录\n\n你**举起手机**记录这个*艺术交流的历史时刻*。Zara的**思维投影艺术**和人类的*街头涂鸦*形成了奇妙的对比。\n\n> \"这张照片将见证两种文明艺术形式的首次融合！\"\n\n**路人纷纷**也掏出手机拍摄，这个场面变成了*即兴的艺术表演*。Zara**开心地**说：\"艺术真的是宇宙通用语言！\"",
    "image": "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=800&h=600&fit=crop",
    "options": [
      { "label": "🎨 组织一场文化艺术节", "nextId": "end_safe_return" },
      { "label": "📚 记录两种艺术的差异", "nextId": "end_safe_return" },
      { "label": "🌍 分享给全世界观看", "nextId": "step3_viral" },
      { "label": "💝 把这当作珍贵回忆", "nextId": "end_safe_return" }
    ]
  },
  {
    "id": "step4_flavors",
    "text": "## 🍨 冰淇淋口味探索\n\n你**耐心地**向Zara介绍各种冰淇淋口味：\"香草代表纯净，巧克力代表浓郁，草莓代表甜美...\"\n\nZara **兴奋地**一一尝试：\n\n> \"太神奇了！每种口味都能唤起不同的情感。你们不仅满足了味觉，还创造了情感体验！\"\n\n他特别喜欢**抹茶口味**：\"这种淡淡的苦甜很像我们星球晶体果实的味道。\"",
    "image": "https://images.unsplash.com/photo-1576506295286-5cda18df43e7?w=800&h=600&fit=crop",
    "options": [
      { "label": "🌸 介绍抹茶的文化背景", "nextId": "end_safe_return" },
      { "label": "🍓 让他尝试自制口味", "nextId": "end_safe_return" },
      { "label": "💎 了解外星晶体果实", "nextId": "step3_alien_planet" },
      { "label": "🎁 给他带一些回家", "nextId": "step4_takeaway" }
    ]
  },
  {
    "id": "step4_cold_drinks",
    "text": "## ❄️ 冰饮的魔力\n\n你带Zara尝试各种**冰饮**：汽水、果汁、奶茶...\n\nZara对**气泡饮料**特别着迷：\n\n> \"这些小气泡在嘴里爆裂的感觉太有趣了！我们星球的液体都是静止的，从来没有这种动态的口感体验。\"\n\n他**兴奋地**观察着*气泡上升*的过程，就像*孩子发现新玩具*一样开心。",
    "image": "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800&h=600&fit=crop",
    "options": [
      { "label": "🧪 解释气泡的科学原理", "nextId": "end_safe_return" },
      { "label": "🍹 制作特调饮料", "nextId": "end_safe_return" },
      { "label": "💫 了解外星饮品", "nextId": "step3_alien_planet" },
      { "label": "🎉 开一个饮料品鉴会", "nextId": "end_safe_return" }
    ]
  },
  {
    "id": "step4_temperature",
    "text": "## 🌡️ 温度的奇迹\n\nZara **好奇地**询问地球的温度变化。你解释道：\"我们有四季变化，温度从零下几十度到四十多度...\"\n\n> \"这种巨大的温度变化造就了你们丰富的文化！我们星球温度恒定在25度，生活很舒适，但缺少变化带来的创造力。\"\n\n他**沉思着**：\"也许这就是为什么地球文明如此多样化的原因。\"",
    "image": "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
    "options": [
      { "label": "🌨️ 描述雪花的美丽", "nextId": "end_safe_return" },
      { "label": "🌞 分享阳光的温暖", "nextId": "end_safe_return" },
      { "label": "🍂 解释季节对文化的影响", "nextId": "end_safe_return" },
      { "label": "💎 对比两个星球的环境", "nextId": "step3_alien_planet" }
    ]
  },
  {
    "id": "step4_takeaway",
    "text": "## 🎁 外带的温暖\n\n你**贴心地**为Zara打包了各种地球美食：冰淇淋、小点心、茶叶...\n\nZara **感动地**说：\n\n> \"这些不仅是食物，更是友谊的象征。我会把它们带回我的星球，与我的族人分享地球的美味和你的善意。\"\n\n这个**简单的举动**却承载着*两个文明*之间深深的友谊。",
    "image": "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop",
    "options": [
      { "label": "📦 帮他包装保鲜", "nextId": "end_safe_return" },
      { "label": "📝 写下制作方法", "nextId": "end_safe_return" },
      { "label": "🤝 表达友谊的珍贵", "nextId": "end_safe_return" },
      { "label": "🌟 期待文化交流项目", "nextId": "end_safe_return" }
    ]
  },
  {
    "id": "step5_too_scary",
    "text": "## 🛑 恐惧的界限\n\n突然**意识到**自己正在*太空中飞行*，你感到**极度恐惧**：\"停下！我想回到地面！\"\n\nZara **立刻理解**并*温和地*控制飞船降落：\n\n> \"对不起，我应该循序渐进的。每个人对未知的接受程度不同，这很正常。\"\n\n飞船**平稳着陆**，你的心跳*逐渐平静*下来。Zara**关切地**问：\"你还好吗？\"",
    "image": "https://images.unsplash.com/photo-1534126416832-7c17d60b83b0?w=800&h=600&fit=crop",
    "options": [
      { "label": "😅 为过度反应道歉", "nextId": "end_safe_return" },
      { "label": "🤝 感谢他的理解", "nextId": "end_safe_return" },
      { "label": "💭 分享内心的恐惧", "nextId": "step3_feelings" },
      { "label": "🌍 坚持留在地球", "nextId": "end_safe_return" }
    ]
  },
  {
    "id": "step5_control_training",
    "text": "## 🎯 精确控制训练\n\nZara **耐心地**教导你：\"想象你的思维是一束光，慢慢引导它触碰控制面板...\"\n\n经过几次尝试，你**成功地**让飞船*轻微转向*！\n\n> \"太棒了！你的学习能力很强。人类的思维波动比我想象的更有潜力。也许有一天，你们也能掌握这种技术。\"\n\n这种**前所未有的体验**让你感到*人类潜能的无限可能*。",
    "image": "https://images.unsplash.com/photo-1534126416832-7c17d60b83b0?w=800&h=600&fit=crop",
    "options": [
      { "label": "🧠 请求更深入的训练", "nextId": "end_safe_return" },
      { "label": "🌟 讨论人类的潜能", "nextId": "end_safe_return" },
      { "label": "🚀 尝试更复杂的操作", "nextId": "step5_space_trip" },
      { "label": "🤝 表达对技术分享的感激", "nextId": "end_safe_return" }
    ]
  },
  {
    "id": "step5_microbes",
    "text": "## 🦠 微观世界的奇迹\n\nZara **兴奋地**分析着显微镜下的微生物：\n\n> \"看！这些微小的生命在跳舞！它们的运动模式充满了数学美感。地球的微生物多样性是宇宙中的奇迹！\"\n\n他指着屏幕：\"这种微生物能分解污染物，那种能产生氧气...你们星球的生态系统是如此完美的平衡体系。\"",
    "image": "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop",
    "options": [
      { "label": "🌍 讨论生态保护的重要性", "nextId": "end_safe_return" },
      { "label": "🔬 了解外星微生物", "nextId": "step5_alien_biology" },
      { "label": "💊 询问微生物的医疗应用", "nextId": "step5_medical_tech" },
      { "label": "⚗️ 请求观看更多实验", "nextId": "step5_more_experiments" }
    ]
  },
  {
    "id": "step5_alien_biology",
    "text": "## 🧬 外星生命的秘密\n\nZara **激动地**分享外星生物知识：\n\n> \"我们星球的生物基于硅晶体结构，而不是碳基。我们通过光合作用直接获取能量，不需要复杂的消化系统。\"\n\n他展示了一个**发光的样本**：\"这是我们的'血液'——其实是导电的水晶液体。我们的寿命很长，但繁殖率很低。\"",
    "image": "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop",
    "options": [
      { "label": "💎 了解硅基生命的特点", "nextId": "end_safe_return" },
      { "label": "⚡ 询问能量转换机制", "nextId": "end_safe_return" },
      { "label": "🧬 对比碳基与硅基生物", "nextId": "end_safe_return" },
      { "label": "🌟 讨论生命的多样性", "nextId": "end_safe_return" }
    ]
  },
  {
    "id": "step5_more_experiments",
    "text": "## ⚗️ 更多科学奇观\n\nZara **自豪地**展示更多实验：时间稀释器、重力调节器、物质转换仪...\n\n> \"这个可以减缓时间流速，这个能调节重力强度，而这个能将基础元素重新组合成新物质。\"\n\n每个实验都**颠覆**了你对*物理定律的认知*。你**震撼地**意识到科技发展的*无限可能*。",
    "image": "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop",
    "options": [
      { "label": "⏰ 体验时间稀释效果", "nextId": "end_safe_return" },
      { "label": "🌌 测试重力调节器", "nextId": "end_safe_return" },
      { "label": "⚛️ 观看物质转换过程", "nextId": "end_safe_return" },
      { "label": "📚 请求学习科学理论", "nextId": "end_safe_return" }
    ]
  },
  {
    "id": "step5_medical_tech",
    "text": "## 💊 医疗技术的革命\n\nZara **严肃地**介绍医疗技术：\n\n> \"我们掌握了细胞再生技术，能治愈大部分疾病。这种治疗光束能修复DNA损伤，那个设备能重建器官。\"\n\n他**温和地**建议：\"不过我发现，你们人类的免疫系统和自愈能力其实很强，只需要一些调整和激活。\"",
    "image": "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&h=600&fit=crop",
    "options": [
      { "label": "🏥 讨论与地球医学的结合", "nextId": "end_safe_return" },
      { "label": "💡 了解激活自愈能力的方法", "nextId": "end_safe_return" },
      { "label": "🌍 考虑帮助地球医疗发展", "nextId": "end_safe_return" },
      { "label": "⚗️ 请求体验治疗技术", "nextId": "end_safe_return" }
    ]
  },
  {
    "id": "step6_other_planets",
    "text": "## ⭐ 其他星球的探索\n\nZara **兴奋地**操控星图：\"想去看看其他星球吗？那里有水晶森林，这里有气体海洋，那边有会唱歌的山脉...\"\n\n**全息投影**展现着*各种奇异的星球*：有的**完全透明**，有的*颜色绚烂*，有的**重力倒置**...\n\n> \"每个星球都是独特的艺术品，等待着被发现和欣赏。\"",
    "image": "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=600&fit=crop",
    "options": [
      { "label": "🌊 选择气体海洋星球", "nextId": "end_safe_return" },
      { "label": "💎 前往水晶森林世界", "nextId": "end_safe_return" },
      { "label": "🎵 探访会唱歌的山脉", "nextId": "end_safe_return" },
      { "label": "🏠 决定先回地球", "nextId": "end_safe_return" }
    ]
  },
  {
    "id": "end_misguided",
    "text": "## 😤 误入歧途的英雄主义\n\n你**固执地**认为自己保护了地球，但内心深处*隐隐不安*。\n\n几个月后，全球*UFO目击事件*急剧增加，但都是**远距离观察**，再无接触。\n\n你开始**怀疑**：也许我错过了*人类历史上最重要的机会*？也许真正的威胁不是他们，而是*我们的恐惧和偏见*？\n\n**孤独感**逐渐吞噬着你的内心...",
    "image": "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=600&fit=crop",
    "options": []
  },
  {
    "id": "end_story",
    "text": "## 📖 成为故事的传播者\n\n你决定将这次经历**写成故事**，以科幻小说的形式发表。\n\n虽然大多数人将其视为*虚构作品*，但一些读者从字里行间感受到了**真实性**。\n\n你的故事**激发**了无数人对*宇宙和未知*的向往，播下了**理解与宽容**的种子。\n\n也许真相不重要，重要的是*在人们心中种下希望的种子*。\n\n**你成为了和平理念的传播者！**",
    "image": "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop",
    "options": []
  },
  {
    "id": "end_moon_memorial",
    "text": "## 🎯 月球上的永恒印记\n\n你在月球表面**放置**了一块小石头，上面刻着：\"致宇宙朋友——来自地球人的友谊，公元2024年\"\n\nZara **深深感动**：\n\n> \"这块石头将见证两个文明友谊的开始。无论时光如何流逝，这份友谊将永远闪耀在月球上。\"\n\n从此，每当你**仰望月亮**，都会想起这份*跨越星际的友谊*。\n\n**友谊的纪念碑永远矗立在月球上！**",
    "image": "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=600&fit=crop",
    "options": []
  },
  {
    "id": "end_moon_purpose",
    "text": "## 📡 月球基地的使命\n\nZara **详细解释**月球基地的用途：\n\n> \"这里是地球保护网的一部分。我们监测可能的威胁，研究地球文明的发展，并在必要时提供暗中帮助。\"\n\n你**震惊地**了解到：*人类从未独自面对宇宙*，一直有*善意的守护者*在默默保护。\n\n\"现在你知道了这个秘密，愿意成为地球与联盟的联络员吗？\"\n\n**你接受了这个神圣的使命！**",
    "image": "https://images.unsplash.com/photo-1534126416832-7c17d60b83b0?w=800&h=600&fit=crop",
    "options": []
  },
  {
    "id": "end_earth_view",
    "text": "## 🌍 来自月球的凝视\n\n站在月球表面，你**静静凝望**着*蓝色的地球*。在无垠的宇宙中，地球显得*如此美丽而脆弱*。\n\nZara在旁边**轻声说道**：\n\n> \"从这个角度看，地球上的所有争论和冲突都显得微不足道。我们都是宇宙中的邻居，应该互相关爱。\"\n\n这个**宇宙视角**让你*深刻理解*了和平与团结的意义。\n\n**你成为了宇宙和平的使者！**",
    "image": "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=600&fit=crop",
    "options": []
  }
]

export default storyData
