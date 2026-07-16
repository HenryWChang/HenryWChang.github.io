// ==========================================================
// 🎛️ Henry Vocabulary 中转路由站 & 云端数据同步网关
// ==========================================================

// 1. 初始化你的 Supabase 客户端配置
const SUPABASE_URL = 'https://zjsdkyvjirrurehahpac.supabase.co'; 
const SUPABASE_KEY = 'sb_publishable_6JSMsFOcoVVPpvVjzktC_w_S0FUKaeN'; // 👈 记得把这里换成你的 anon key 密钥
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// 2. 声明给 index.html 使用的 5 大核心全局数据通道
window.henryWordData = [];
window.henryRootData = [];
window.henryPrefixData = [];
window.henrySuffixData = [];
window.henryExpandData = [];

// 3. 本地硬编码 Fallback 降级兜底范例（连不上云端，且本地分-data文件丢失时的双重保险）
const henryFallbackWords = [
    {"word": "meticulous", "meaning": "adj. 一丝不苟的，缜密的（Henry范例）"},
    {"word": "cohesive", "meaning": "adj. 凝聚的，紧密结合的（Henry范例）"},
    {"word": "substantiate", "meaning": "v. 证实，证明（Henry范例）"},
    {"word": "empirical", "meaning": "adj. 凭经验的，实证的（Henry范例）"},
    {"word": "refute", "meaning": "v. 反驳，驳斥（Henry范例）"},
    {"word": "advocate", "meaning": "v. 提倡，拥护（Henry范例）"}
];

const henryRootFallbackWords = [
    {"word": "audi-", "meaning": "pref. 听 (例如: audience, audible)（Root范例）"},
    {"word": "auto-", "meaning": "pref. 自己，自动 (role: autonomy, automatic)（Root范例）"},
    {"word": "spect-", "meaning": "pref. 看 (例如: inspect, retrospect)（Root范例）"},
    {"word": "scrib/scrip-", "meaning": "pref. 写 (例如: prescribe, manuscript)（Root范例）"},
    {"word": "tract-", "meaning": "pref. 拉，抽 (例如: attract, extract)（Root范例）"},
    {"word": "vis/vid-", "meaning": "pref. 看见 (例如: visible, evident)（Root范例）"}
];

const henryPrefixFallbackWords = [
    {"word": "de-", "meaning": "pref. 向下，减少 (例如: decrease, devalue)（Prefix范例）"},
    {"word": "inter-", "meaning": "pref. 在...之间 (例如: international, interview)（Prefix范例）"},
    {"word": "pre-", "meaning": "pref. 在...之前 (role: preheat, preview)（Prefix范例）"},
    {"word": "sub-", "meaning": "pref. 在...之下 (例如: subway, submarine)（Prefix范例）"},
    {"word": "un-", "meaning": "pref. 不，相反 (role: unhappy, unlock)（Prefix范例）"},
    {"word": "pro-", "meaning": "pref. 向前，赞同 (例如: progress, promote)（Prefix范例）"}
];

const henrySuffixFallbackWords = [
    {"word": "-ful", "meaning": "suff. 充满...的 (例如: beautiful, helpful)（Suffix范例）"},
    {"word": "-less", "meaning": "suff. 没有...的，无 (例如: hopeless, careless)（Suffix范例）"},
    {"word": "-ify", "meaning": "suff. 使...化 (例如: clarify, purify)（Suffix范例）"},
    {"word": "-tion/-sion", "meaning": "suff. 动作，状态 (例如: education, decision)（Suffix范例）"},
    {"word": "-al", "meaning": "suff. 具有...性质的 (例如: cultural, logical)（Suffix范例）"},
    {"word": "-ous/-ious", "meaning": "suff. 充满...的 (例如: dangerous, ambitious)（Suffix范例）"}
];

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

/**
 * 🛠️ 降级加载利器：动态异步加载本地分data.js文件
 */
function loadLocalDataBackup(filename) {
    return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = filename;
        script.async = true;
        script.onload = () => {
            console.log(`📦 [Gateway] 成功读取本地备份分data: ${filename}`);
            resolve(true);
        };
        script.onerror = () => {
            console.warn(`⚠️ [Gateway] 读取本地备份分data失败或文件不存在: ${filename}`);
            resolve(false);
        };
        document.head.appendChild(script);
    });
}

/**
 * ⚡【核心总网关函数】
 * 优先并行拉取新加坡 Supabase。如果连不上（比如断网或秘钥没配对），自动降级去动态加载本地5个分data文件。
 */
async function loadAllVocabulary() {
    try {
        console.log("📡 [Gateway] 优先尝试从新加坡 Supabase 云端同步最新词库...");

        // A. 并行异步拉取 Supabase 5 大单词表
        const [
            { data: cloudBasic, error: err1 },
            { data: cloudRoot, error: err2 },
            { data: cloudPrefix, error: err3 },
            { data: cloudSuffix, error: err4 },
            { data: cloudExpand, error: err5 }
        ] = await Promise.all([
            supabaseClient.from('supabase_basic_words').select('*'),
            supabaseClient.from('supabase_root_words').select('*'),
            supabaseClient.from('supabase_prefix_words').select('*'),
            supabaseClient.from('supabase_suffix_words').select('*'),
            supabaseClient.from('supabase_expand_words').select('*')
        ]);

        if (err1 || err2 || err3 || err4 || err5) {
            throw new Error("云端数据请求返回错误，可能是表名不对或 RLS 被拦截。");
        }

        console.log("✨ [Gateway] 云端最新词库拉取成功！正在装填到前端渲染轨道...");

        // B. 云端数据填充至对应的全局变量通道
        window.henryWordData = (cloudBasic && cloudBasic.length > 0) ? cloudBasic : henryFallbackWords;
        window.henryRootData = (cloudRoot && cloudRoot.length > 0) ? cloudRoot : henryRootFallbackWords;
        window.henryPrefixData = (cloudPrefix && cloudPrefix.length > 0) ? cloudPrefix : henryPrefixFallbackWords;
        window.henrySuffixData = (cloudSuffix && cloudSuffix.length > 0) ? cloudSuffix : henrySuffixFallbackWords;
        window.henryExpandData = (cloudExpand && cloudExpand.length > 0) ? cloudExpand : henryExpandFallbackWords;

    } catch (error) {
        console.warn("⚠️ [Gateway] 无法连接到 Supabase 云端，正在优雅降级至本地离线分-data备份...", error);

        // C. 触发无缝降级策略：并行加载 5 个本地备份文件（basic-data.js等）
        await Promise.all([
            loadLocalDataBackup('basic-data.js'),
            loadLocalDataBackup('root-data.js'),
            loadLocalDataBackup('prefix-data.js'),
            loadLocalDataBackup('suffix-data.js'),
            loadLocalDataBackup('expand-data.js')
        ]);

        // D. 数据合并与备份兜底处理
        window.henryWordData = (typeof henryCustomWords !== 'undefined' && henryCustomWords.length > 0) 
            ? henryCustomWords 
            : henryFallbackWords;

        window.henryRootData = (typeof henryRootCustomWords !== 'undefined' && henryRootCustomWords.length > 0) 
            ? henryRootCustomWords 
            : henryRootFallbackWords;

        window.henryPrefixData = (typeof henryPrefixCustomWords !== 'undefined' && henryPrefixCustomWords.length > 0) 
            ? henryPrefixCustomWords 
            : henryPrefixFallbackWords;

        window.henrySuffixData = (typeof henrySuffixCustomWords !== 'undefined' && henrySuffixCustomWords.length > 0) 
            ? henrySuffixCustomWords 
            : henrySuffixFallbackWords;

        window.henryExpandData = (typeof henryExpandCustomWords !== 'undefined' && henryExpandCustomWords.length > 0) 
            ? henryExpandCustomWords 
            : henryExpandFallbackWords;

        console.log("💾 [Gateway] 离线备份数据已成功挂载！降级方案就绪。");
    }
}
