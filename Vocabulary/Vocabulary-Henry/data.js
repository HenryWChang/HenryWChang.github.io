// 轨 1 🎯【Henry专属接入端】以后你的 Python 脚本或者你手动添加的真单词，全放在这里！
const henryCustomWords = [
    {"word": "mimic", "meaning": "v. 模仿，模拟"},
    {"word": "indispensable", "meaning": "adj. 不可或缺的"},
    {"word": "paradigm", "meaning": "n. 范式，典范"}
];

// 轨 2 🚨【Henry专属保险丝】当轨1被清空或为空时自动撑场面，防止网页因无数据而崩溃
const henryFallbackWords = [
    {"word": "meticulous", "meaning": "adj. 一丝不苟的，缜密的（Henry范例）"},
    {"word": "cohesive", "meaning": "adj. 凝聚的，紧密结合的（Henry范例）"},
    {"word": "substantiate", "meaning": "v. 证实，证明（Henry范例）"},
    {"word": "empirical", "meaning": "adj. 凭经验的，实证的（Henry范例）"},
    {"word": "refute", "meaning": "v. 反驳，驳斥（Henry范例）"},
    {"word": "advocate", "meaning": "v. 提倡，拥护（Henry范例）"}
];

// 🎛️ 终极融合开关：输出专属变量 "henryWordData" 给展示端网页精准抓取
const henryWordData = (typeof henryCustomWords !== 'undefined' && henryCustomWords.length > 0) 
    ? henryCustomWords 
    : henryFallbackWords;
