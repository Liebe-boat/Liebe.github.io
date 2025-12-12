document.addEventListener('DOMContentLoaded', function() {
    console.log("🟡 Initializing i18n...");
    
    const browserLang = (navigator.language || navigator.userLanguage || 'en').slice(0,2).toLowerCase();
    const supported = ['en','ja','zh'];
    const initialLang = supported.includes(browserLang) ? browserLang : 'en';

    const i18nConfig = {
        lng: initialLang,
        fallbackLng: 'en',
        debug: true,
        resources: {
            en: {
                translation: {
                    "japanese_painting": "Japanese Painting",
                    "print": "Print",
                    "water_color": "Watercolor",
                    "oil_painting": "Oil Painting",
                    "something_else": "Something Else",
                    "about": "About",
                    "about_text": "grew up in Guangzhou, living in Tokyo.",
                    "about_text2": "Fine art · Birding · Anthropology",
                    "about_text3": "XMU(Christmas University)2019-2023",
                    "timeline_title": "Timeline",
                    "timeline_group_title": "Group Exhibitions",
                    "timeline_2023": "2023  Graduation Exhibition, Xiamen University",
                    "timeline_2024_morning": "2024  “Morning Glow”",
                    "timeline_2024_voorpret": "2024  “voorpret”, Unicom Plaza Sagamihara, Sagamihara",
                    "timeline_2024_ritto": "2024  “立冬”"
                }
            },
            ja: {
                translation: {
                    "japanese_painting": "日本画",
                    "print": "版画",
                    "water_color": "水彩画",
                    "oil_painting": "油絵",
                    "something_else": "その他",
                    "about": "About",
                    "about_text": "広州育ち、東京在住",
                    "about_text2": "美術・バードウォッチング・人類学",
                    "about_text3": "XMU(Christmas University)2019-2023",
                    "timeline_title": "Timeline",
                    "timeline_group_title": "グループ展",
                    "timeline_2023": "2023年　厦門大学卒業展",
                    "timeline_2024_morning": "2024年　「Morning Glow 」",
                    "timeline_2024_voorpret": "2024年　「voorpret」ユニコムプラザ相模原、相模原",
                    "timeline_2024_ritto": "2024年　「立冬」"
                }
            },
            zh: {
                translation: {
                    "japanese_painting": "日本画",
                    "print": "版画",
                    "water_color": "水彩",
                    "oil_painting": "油画",
                    "something_else": "其他",
                    "about": "About",
                    "about_text": "列贝，广州长大，现居东京。",
                    "about_text2": "纯艺·观鸟·人类学，持续航行的船",
                    "about_text3": "XMU(Christmas University)2019-2023",
                    "timeline_title": "时间线",
                    "timeline_group_title": "群展",
                    "timeline_2023": "2023年 厦门大学毕业展",
                    "timeline_2024_morning": "2024年 《Morning Glow》",
                    "timeline_2024_voorpret": "2024年 《voorpret》，相模原 Unicom Plaza",
                    "timeline_2024_ritto": "2024年 《立冬》"
                }
            }
        }
    };

    i18next.init(i18nConfig)
        .then(() => {
            console.log('✅ i18n ready! Language:', i18next.language);
            applyLanguageSettings(); 
        })
        .catch(console.error);

    function applyLanguageSettings() {
        document.documentElement.lang = i18next.language;
        
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (key) el.textContent = i18next.t(key);
        });
        
        document.body.classList.remove('lang-en', 'lang-ja', 'lang-zh');
        document.body.classList.add(`lang-${i18next.language}`);
    }

    window.changeLang = function(lang) {
        i18next.changeLanguage(lang)
            .then(() => {
                console.log("🌐 Language switched to:", lang);
                applyLanguageSettings();
            })
            .catch(console.error);
    };
});
