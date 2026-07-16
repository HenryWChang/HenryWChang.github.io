// ==========================================
// 📦 A 轨：Basic Words 词库 (已隔离)
// ==========================================
// 轨 1 🎯【Henry专属Basic接入端】
const henryCustomWords = [
    {"word": "mimic", "meaning": "v. 模仿，模拟"},
    {"word": "indispensable", "meaning": "adj. 不可或缺的"},
    {"word": "paradigm", "meaning": "n. 范式，典范"}
];

// 轨 2 🚨【Henry专属Basic保险丝】
const henryFallbackWords = [
    {"word": "meticulous", "meaning": "adj. 一丝不苟的，缜密的（Henry范例）"},
    {"word": "cohesive", "meaning": "adj. 凝聚的，紧密结合的（Henry范例）"},
    {"word": "substantiate", "meaning": "v. 证实，证明（Henry范例）"},
    {"word": "empirical", "meaning": "adj. 凭经验的，实证的（Henry范例）"},
    {"word": "refute", "meaning": "v. 反驳，驳斥（Henry范例）"},
    {"word": "advocate", "meaning": "v. 提倡，拥护（Henry范例）"}
];

// 🎛️ Basic 融合开关
const henryWordData = (typeof henryCustomWords !== 'undefined' && henryCustomWords.length > 0) 
    ? henryCustomWords 
    : henryFallbackWords;


// ==========================================
// 📦 B 轨：Root Words 词库 (✨本次新增)
// ==========================================
// 轨 1 🎯【Henry专属Root词根接入端】
const henryRootCustomWords = [
    {"word": "bio-", "meaning": "pref. 生命，生物 (例如: biology, biography)"},
    {"word": "chron-", "meaning": "pref. 时间 (例如: chronological, chronic)"},
    {"word": "dict-", "meaning": "pref. 言，说 (例如: contradict, predict)"}
];

// 轨 2 🚨【Henry专属Root词根保险丝】
const henryRootFallbackWords = [
    {"word": "audi-", "meaning": "pref. 听 (例如: audience, audible)（Root范例）"},
    {"word": "auto-", "meaning": "pref. 自己，自动 (例如: autonomy, automatic)（Root范例）"},
    {"word": "spect-", "meaning": "pref. 看 (例如: inspect, retrospect)（Root范例）"},
    {"word": "scrib/scrip-", "meaning": "pref. 写 (例如: prescribe, manuscript)（Root范例）"},
    {"word": "tract-", "meaning": "pref. 拉，抽 (例如: attract, extract)（Root范例）"},
    {"word": "vis/vid-", "meaning": "pref. 看见 (例如: visible, evident)（Root范例）"}
];

// 🎛️ Root 融合开关：输出专属变量 "henryRootData" 给网页精准抓取
const henryRootData = (typeof henryRootCustomWords !== 'undefined' && henryRootCustomWords.length > 0) 
    ? henryRootCustomWords 
    : henryRootFallbackWords;

// ==========================================
// 📦 C 轨：Prefix Words 词库 (✨本次新增)
// ==========================================
// 轨 1 🎯【Henry专属Prefix前缀接入端】
const henryPrefixCustomWords = [
    {"word": "anti-", "meaning": "pref. 反对，相反 (例如: antisocial, antibody)"},
    {"word": "mis-", "meaning": "pref. 错误，坏 (例如: misunderstand, mislead)"},
    {"word": "re-", "meaning": "pref. 再次，回 (例如: rewrite, return)"}
];

// 轨 2 🚨【Henry专属Prefix前缀保险丝】
const henryPrefixFallbackWords = [
    {"word": "de-", "meaning": "pref. 向下，减少 (例如: decrease, devalue)（Prefix范例）"},
    {"word": "inter-", "meaning": "pref. 在...之间 (例如: international, interview)（Prefix范例）"},
    {"word": "pre-", "meaning": "pref. 在...之前 (role: preheat, preview)（Prefix范例）"},
    {"word": "sub-", "meaning": "pref. 在...之下 (例如: subway, submarine)（Prefix范例）"},
    {"word": "un-", "meaning": "pref. 不，相反 (例如: unhappy, unlock)（Prefix范例）"},
    {"word": "pro-", "meaning": "pref. 向前，赞同 (例如: progress, promote)（Prefix范例）"}
];

// 🎛️ Prefix 融合开关：输出专属变量 "henryPrefixData" 给展示端网页精准抓取
const henryPrefixData = (typeof henryPrefixCustomWords !== 'undefined' && henryPrefixCustomWords.length > 0) 
    ? henryPrefixCustomWords 
    : henryPrefixFallbackWords;

// ==========================================
// 📦 D 轨：Suffix Words 词库 (✨本次新增)
// ==========================================
// 轨 1 🎯【Henry专属Suffix后缀接入端】
const henrySuffixCustomWords = [
    {"word": "-able/-ible", "meaning": "suff. 能够...的，易于...的 (例如: understandable, visible)"},
    {"word": "-ize", "meaning": "suff. 使...化，变为 (例如: realize, modernize)"},
    {"word": "-ment", "meaning": "suff. 行为，状态，结果 (例如: development, government)"}
];

// 轨 2 🚨【Henry专属Suffix后缀保险丝】
const henrySuffixFallbackWords = [
    {"word": "-ful", "meaning": "suff. 充满...的 (例如: beautiful, helpful)（Suffix范例）"},
    {"word": "-less", "meaning": "suff. 没有...的，无 (例如: hopeless, careless)（Suffix范例）"},
    {"word": "-ify", "meaning": "suff. 使...化 (例如: clarify, purify)（Suffix范例）"},
    {"word": "-tion/-sion", "meaning": "suff. 动作，状态 (例如: education, decision)（Suffix范例）"},
    {"word": "-al", "meaning": "suff. 具有...性质的 (例如: cultural, logical)（Suffix范例）"},
    {"word": "-ous/-ious", "meaning": "suff. 充满...的 (例如: dangerous, ambitious)（Suffix范例）"}
];

// 🎛️ Suffix 融合开关：输出专属变量 "henrySuffixData" 给展示端网页精准抓取
const henrySuffixData = (typeof henrySuffixCustomWords !== 'undefined' && henrySuffixCustomWords.length > 0) 
    ? henrySuffixCustomWords 
    : henrySuffixFallbackWords;

// ==========================================
// 📦 E 轨：Expand Words 超级词库 (✨关联对比增强版)
// ==========================================
// 轨 1 🎯【Henry专属Expand六要素接入端】
const henryExpandCustomWords = [
    {
        "word": "contradiction",
        "meaning": "n. 矛盾，反驳",
        "basic": "none",
        "root": "dict-",
        "prefix": "contra-", // 修正为学术正确的 contra- 前缀
        "suffix": "-tion/-sion",
        "root_m": "pref. 言，说 (例如: contradict, predict)",
        "prefix_m": "pref. 反对，相反，相对 (例如: contradict, contrary)",
        "suffix_m": "suff. 动作，状态 (例如: education, decision)（Suffix范例）",
        "group": "opposition-logic" // 👈 组 1：反对与相反逻辑
    },
    {
        "word": "antisocial",
        "meaning": "adj. 反社会的",
        "basic": "social",
        "root": "none",
        "prefix": "anti-", 
        "suffix": "-al",
        "root_m": "none",
        "prefix_m": "pref. 反对，相反 (例如: antisocial, antibody)",
        "suffix_m": "suff. 具有...性质的 (例如: cultural, logical)",
        "group": "opposition-logic" // 👈 组 1：与 contradiction 强行绑定，连续出现！
    },
    {
        "word": "biodegradable",
        "meaning": "adj. 可生物降解的",
        "basic": "none",
        "root": "bio-",
        "prefix": "de-",
        "suffix": "-able/-ible",
        "root_m": "pref. 生命，生物 (例如: biology, biography)",
        "prefix_m": "pref. 向下，减少 (例如: decrease, devalue)（Prefix范例）",
        "suffix_m": "suff. 能够...的，易于...的 (例如: understandable, visible)",
        "group": "bio-process" // 👈 组 2：生物化学过程逻辑
    }
];

// 轨 2 🚨【Henry专属Expand保险丝】
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
        "group": "prediction-logic" // 👈 组 3
    }
];

// 🎛️ Expand 融合开关：输出专属变量 "henryExpandData"
const henryExpandData = (typeof henryExpandCustomWords !== 'undefined' && henryExpandCustomWords.length > 0) 
    ? henryExpandCustomWords 
    : henryExpandFallbackWords;
