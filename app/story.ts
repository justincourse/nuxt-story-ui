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
  }
]

export default storyData
