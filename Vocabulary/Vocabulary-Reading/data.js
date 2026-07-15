// 轨 1 🎯 以后你的 Python 脚本或者你手动添加的真单词，全放在这个方括号里！
const myCustomWords = [
    {"word": "hello", "meaning": "int. 喂，你好"},
    {"word": "world", "meaning": "n. 世界"},
    {"word": "python", "meaning": "n. 蟒蛇；Python编程语言"}
];

// 轨 2 🚨 雅思核心范例数据包（当轨1被清空时，自动出来撑场面，防止网页崩溃）
const ieltsFallbackWords = [
    {"word": "abandon", "meaning": "v. 放弃，抛弃（范例）"},
    {"word": "brilliant", "meaning": "adj. 极好的，灿烂的（范例）"},
    {"word": "candidate", "meaning": "n. 候选人（范例）"},
    {"word": "diversity", "meaning": "n. 多样性，差异（范例）"},
    {"word": "estimate", "meaning": "v. 估计，估价（范例）"},
    {"word": "fluctuate", "meaning": "v. 波动，涨落（范例）"}
];

// 🎛️ 终极融合开关：让网页依然去读取它们认识的 "wordData"
// 如果检测到你在上面写了自定义词汇，就用你的；如果没有，就优雅地用范例兜底！
const wordData = (typeof myCustomWords !== 'undefined' && myCustomWords.length > 0) 
    ? myCustomWords 
    : ieltsFallbackWords;
