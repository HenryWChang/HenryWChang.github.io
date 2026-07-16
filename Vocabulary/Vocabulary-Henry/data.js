// ==========================================================
// 🎛️ Henry Vocabulary 中转路由站 (不存放具体词汇)
// ==========================================================

// ==========================================
// 📦 A 轨：Basic Words 融合桥梁
// ==========================================
const henryFallbackWords = [
    {"word": "meticulous", "meaning": "adj. 一丝不苟的，缜密的（Henry范例）"},
    {"word": "cohesive", "meaning": "adj. 凝聚的，紧密结合的（Henry范例）"},
    {"word": "substantiate", "meaning": "v. 证实，证明（Henry范例）"},
    {"word": "empirical", "meaning": "adj. 凭经验的，实证的（Henry范例）"},
    {"word": "refute", "meaning": "v. 反驳，驳斥（Henry范例）"},
    {"word": "advocate", "meaning": "v. 提倡，拥护（Henry范例）"}
];

const henryWordData = (typeof henryCustomWords !== 'undefined' && henryCustomWords.length > 0) 
    ? henryCustomWords 
    : henryFallbackWords;


// ==========================================
// 📦 B 轨：Root Words 融合桥梁
// ==========================================
const henryRootFallbackWords = [
    {"word": "audi-", "meaning": "pref. 听 (例如: audience, audible)（Root范例）"},
    {"word": "auto-", "meaning": "pref. 自己，自动 (例如: autonomy, automatic)（Root范例）"},
    {"word": "spect-", "meaning": "pref. 看 (例如: inspect, retrospect)（Root范例）"},
    {"word": "scrib/scrip-", "meaning": "pref. 写 (例如: prescribe, manuscript)（Root范例）"},
    {"word": "tract-", "meaning": "pref. 拉，抽 (例如: attract, extract)（Root范例）"},
    {"word": "vis/vid-", "meaning": "pref. 看见 (例如: visible, evident)（Root范例）"}
];

const henryRootData = (typeof henryRootCustomWords !== 'undefined' && henryRootCustomWords.length > 0) 
    ? henryRootCustomWords 
    : henryRootFallbackWords;


// ==========================================
// 📦 C 轨：Prefix Words 融合桥梁
// ==========================================
const henryPrefixFallbackWords = [
    {"word": "de-", "meaning": "pref. 向下，减少 (例如: decrease, devalue)（Prefix范例）"},
    {"word": "inter-", "meaning": "pref. 在...之间 (例如: international, interview)（Prefix范例）"},
    {"word": "pre-", "meaning": "pref. 在...之前 (role: preheat, preview)（Prefix范例）"},
    {"word": "sub-", "meaning": "pref. 在...之下 (例如: subway, submarine)（Prefix范例）"},
    {"word": "un-", "meaning": "pref. 不，相反 (role: unhappy, unlock)（Prefix范例）"},
    {"word": "pro-", "meaning": "pref. 向前，赞同 (例如: progress, promote)（Prefix范例）"}
];

const henryPrefixData = (typeof henryPrefixCustomWords !== 'undefined' && henryPrefixCustomWords.length > 0) 
    ? henryPrefixCustomWords 
    : henryPrefixFallbackWords;


// ==========================================
// 📦 D 轨：Suffix Words 融合桥梁
// ==========================================
const henrySuffixFallbackWords = [
    {"word": "-ful", "meaning": "suff. 充满...的 (例如: beautiful, helpful)（Suffix范例）"},
    {"word": "-less", "meaning": "suff. 没有...的，无 (例如: hopeless, careless)（Suffix范例）"},
    {"word": "-ify", "meaning": "suff. 使...化 (例如: clarify, purify)（Suffix范例）"},
    {"word": "-tion/-sion", "meaning": "suff. 动作，状态 (例如: education, decision)（Suffix范例）"},
    {"word": "-al", "meaning": "suff. 具有...性质的 (例如: cultural, logical)（Suffix范例）"},
    {"word": "-ous/-ious", "meaning": "suff. 充满...的 (例如: dangerous, ambitious)（Suffix范例）"}
];

const henrySuffixData = (typeof henrySuffixCustomWords !== 'undefined' && henrySuffixCustomWords.length > 0) 
    ? henrySuffixCustomWords 
    : henrySuffixFallbackWords;


// ==========================================
// 📦 E 轨：Expand Words 融合桥梁
// ==========================================
const henryExpandFallbackWords = [
    {
        "word": "unpredictable",
        "meaning": "adj. 不可预测的",
        "basic": "none",
        "root": "dict-",
        "prefix": "pre-",
        "suffix": "-able/-ible",
        "root_m": "pref. 言，说 (例如: contradict, predict)",
        "prefix_m": "pref. 在...之前 (role: preheat, preview)（Prefix范例）",
        "suffix_m": "suff. 能够...的，易于...的 (例如: understandable, visible)",
        "group": "prediction-logic"
    }
];

const henryExpandData = (typeof henryExpandCustomWords !== 'undefined' && henryExpandCustomWords.length > 0) 
    ? henryExpandCustomWords 
    : henryExpandFallbackWords;
