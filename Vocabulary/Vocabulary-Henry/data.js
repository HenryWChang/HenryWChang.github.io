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
