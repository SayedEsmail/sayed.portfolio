export type Lang = "en" | "ar";

export const ui = {
    en: {
        nav: {
            label: "Main navigation", menu: "Menu", logo: "Sayed Esmail logo",
            home: "Home", work: "Work", experience: "Experience", articles: "Articles", about: "About", migration: "Migration",
            pdf: "Portfolio PDF", whatsapp: "WhatsApp", switchTo: "Switch language to Arabic",
        },
        hero: {
            pill: "Available for new projects",
            kicker: "Senior Frontend Engineer · Cairo, Egypt",
            h1: ["I’m ", "Sayed", ", I build web products that ", "work"],
            sub: "I’m a Senior Frontend Engineer with 10+ years of experience turning complex requirements into usable products. I build Vue and React applications, lead frontend teams, and care about performance, clarity, and the people using the software.",
            seeWork: "See my work", talk: "Talk to me", photoAlt: "Sayed Esmail",
        },
        marqueeLabel: "Skills",
        stats: { years: "Years of experience", companies: "Company roles", freelance: "Freelance projects", articles: "Technical articles" },
        focus: {
            title: "What I Focus On",
            subtitle: "The engineering work I bring to product teams, from the first interface to a platform ready to grow.",
            cards: [
                { title: "SaaS Architecture", description: "Structuring shared components, application state, and feature modules so complex products stay maintainable as teams grow." },
                { title: "Real-Time Systems", description: "Building live tracking interfaces with socket services, mapping APIs, and clear operational views for fleet teams." },
                { title: "Frontend Performance", description: "Improving loading and rendering through code splitting, build optimization, and careful state management." },
                { title: "Multi-Tenant Platforms", description: "Building client-specific themes, permissions, and configuration into a shared frontend architecture." },
            ],
        },
        work: {
            title: "Selected work",
            companyEyebrow: "01 / Company work", companyTitle: "Built as part of a team.",
            companyText: "Schoolz / Routz, Untap, AutoTager, Botme, and earlier agency experience.",
            freelanceEyebrow: "02 / Freelance projects", freelanceTitle: "Delivered for clients.",
            freelanceText: "Zads, Fleet Billing, Yanfaa, Wellpal, FundSeer, Kadouscope, and Movex. Products, redesigns, storefronts, and dashboards.",
            companyLink: "Explore company projects →", freelanceLink: "Explore freelance projects →",
            all: "Explore all →", preview: "Preview portfolio →",
            caseStudy: "Read case study", visit: "Visit website", companyTag: "Company work", freelanceTag: "Freelance",
        },
        experience: {
            eyebrow: "Career", title: "Professional experience",
            text: "Company roles, from web and commerce development to SaaS architecture and team leadership.",
            view: "View work →",
        },
        services: {
            title: "Services", more: "Learn more →",
            items: ["Salla & Zid store check", "Maqru accessibility", "Legacy Vue/Nuxt migration", "Namu nursery system"],
        },
        articles: {
            title: "Mini Technical Articles",
            subtitle: "Brief, high-value write-ups documenting real technical challenges solved, lessons learned, and architectural guidelines established on production platforms.",
            read: "Read Article", all: "View All Articles",
            devto: "What migrating a Vuetify 2 dashboard to Vue 3 actually took", devtoMeta: "dev.to",
        },
        about: {
            eyebrow: "Cairo, Egypt / Working since 2014",
            title: "About & Experience",
            tagline: "Engineering interfaces. Understanding products.",
            bio: "I’m Sayed Esmail, a Senior Frontend Engineer with 10+ years of experience. I build Vue and React applications, lead frontend teams, and turn complex product requirements into interfaces people can use.",
            indepEyebrow: "Alongside company work", indepTitle: "Independent projects",
            indepText: "I’m the founder and full-stack engineer behind Zads, a personal education product started in 2024. Explore Zads and Fleet Billing, a school-bus subscriptions and billing project, alongside Yanfaa, Wellpal, FundSeer, Kadouscope, and Movex in my freelance portfolio.",
            indepLink: "Explore freelance work →",
            eduEyebrow: "Background", eduTitle: "Education & languages",
            edu: ["Bachelor of Arts, Philosophy", "Damanhour University · 2009–2013"],
            langs: ["Arabic — Native", "English — Full professional proficiency"],
            contactTitle: "Let’s work together.", contactText: "For frontend engineering, product interfaces, and team leadership.",
            cv: "Download CV", pdf: "Download portfolio PDF", more: "About & experience page →",
        },
        footer: { whatsapp: "WhatsApp", instagram: "Instagram", mail: "Email", linkedin: "LinkedIn", name: "Sayed Esmail, 2026" },
    },
    ar: {
        nav: {
            label: "التنقل الرئيسي", menu: "القائمة", logo: "شعار سيد إسماعيل",
            home: "الرئيسية", work: "الأعمال", experience: "الخبرة", articles: "المقالات", about: "نبذة", migration: "تحديث المشاريع",
            pdf: "Portfolio PDF", whatsapp: "واتساب", switchTo: "تغيير اللغة إلى الإنجليزية",
        },
        hero: {
            pill: "متاح لمشاريع جديدة",
            kicker: "مهندس واجهات أمامية أول · القاهرة، مصر",
            h1: ["أنا ", "سيد", "، أبني منتجات ويب ", "تعمل"],
            sub: "أنا مهندس واجهات أمامية أول بخبرة تزيد على 10 سنوات في تحويل المتطلبات المعقدة إلى منتجات سهلة الاستخدام. أبني تطبيقات Vue وReact، وأقود فرق الواجهات، وأهتم بالأداء والوضوح وبالناس الذين يستخدمون البرنامج.",
            seeWork: "شاهد أعمالي", talk: "تحدث معي", photoAlt: "سيد إسماعيل",
        },
        marqueeLabel: "المهارات",
        stats: { years: "سنوات خبرة", companies: "أدوار في شركات", freelance: "مشاريع عمل حر", articles: "مقالات تقنية" },
        focus: {
            title: "ما الذي أركز عليه",
            subtitle: "العمل الهندسي الذي أقدمه لفرق المنتجات، من أول واجهة إلى منصة جاهزة للنمو.",
            cards: [
                { title: "هندسة أنظمة SaaS", description: "تنظيم المكونات المشتركة وحالة التطبيق ووحدات الميزات حتى تبقى المنتجات المعقدة سهلة الصيانة مع نمو الفرق." },
                { title: "الأنظمة الفورية", description: "بناء واجهات تتبع مباشر باستخدام خدمات sockets وواجهات الخرائط، مع عروض تشغيلية واضحة لفرق الأساطيل." },
                { title: "أداء الواجهات", description: "تحسين التحميل والعرض عبر تقسيم الشيفرة وتحسين البناء وإدارة الحالة بعناية." },
                { title: "المنصات متعددة العملاء", description: "بناء سمات وصلاحيات وإعدادات خاصة بكل عميل داخل معمارية واجهة مشتركة." },
            ],
        },
        work: {
            title: "أعمال مختارة",
            companyEyebrow: "01 / أعمال الشركات", companyTitle: "بُنيت ضمن فريق.",
            companyText: "Schoolz / Routz وUntap وAutoTager وBotme، وخبرة سابقة في الوكالات.",
            freelanceEyebrow: "02 / مشاريع العمل الحر", freelanceTitle: "سُلّمت للعملاء.",
            freelanceText: "Zads وFleet Billing وYanfaa وWellpal وFundSeer وKadouscope وMovex. منتجات وإعادة تصميم ومتاجر ولوحات تحكم.",
            companyLink: "استعرض مشاريع الشركات ←", freelanceLink: "استعرض مشاريع العمل الحر ←",
            all: "استعرض الكل ←", preview: "معاينة الملف ←",
            caseStudy: "اقرأ دراسة الحالة", visit: "زيارة الموقع", companyTag: "أعمال الشركات", freelanceTag: "عمل حر",
        },
        experience: {
            eyebrow: "المسيرة", title: "الخبرة المهنية",
            text: "أدوار في شركات، من تطوير المواقع والتجارة الإلكترونية إلى هندسة أنظمة SaaS وقيادة الفرق.",
            view: "شاهد العمل ←",
        },
        services: {
            title: "الخدمات", more: "اعرف المزيد ←",
            items: ["فحص متاجر سلة وزد", "مقروء لإمكانية الوصول", "تحديث المواقع القديمة", "نَمو لإدارة الحضانات"],
        },
        articles: {
            title: "مقالات تقنية قصيرة",
            subtitle: "مقالات موجزة وعالية القيمة توثّق تحديات تقنية حقيقية جرى حلها، والدروس المستفادة، والإرشادات المعمارية التي أُرسيت على منصات إنتاج.",
            read: "اقرأ المقال", all: "عرض كل المقالات",
            devto: "ماذا استغرق فعلاً ترحيل لوحة Vuetify 2 إلى Vue 3", devtoMeta: "dev.to",
        },
        about: {
            eyebrow: "القاهرة، مصر / أعمل منذ 2014",
            title: "نبذة والخبرة",
            tagline: "أهندس الواجهات. وأفهم المنتجات.",
            bio: "أنا سيد إسماعيل، مهندس واجهات أمامية أول بخبرة تزيد على 10 سنوات. أبني تطبيقات Vue وReact، وأقود فرق الواجهات، وأحول متطلبات المنتجات المعقدة إلى واجهات يستطيع الناس استخدامها.",
            indepEyebrow: "إلى جانب العمل في الشركات", indepTitle: "مشاريع مستقلة",
            indepText: "أنا مؤسس Zads والمهندس المسؤول عنه، وهو منتج تعليمي شخصي بدأته في 2024. استعرض Zads وFleet Billing، وهو مشروع اشتراكات وفوترة لحافلات المدارس، إلى جانب Yanfaa وWellpal وFundSeer وKadouscope وMovex في أعمالي الحرة.",
            indepLink: "استعرض أعمال العمل الحر ←",
            eduEyebrow: "الخلفية", eduTitle: "التعليم واللغات",
            edu: ["بكالوريوس آداب، فلسفة", "جامعة دمنهور · 2009–2013"],
            langs: ["العربية — لغة أم", "الإنجليزية — إجادة مهنية كاملة"],
            contactTitle: "لنعمل معاً.", contactText: "لهندسة الواجهات الأمامية وواجهات المنتجات وقيادة الفرق.",
            cv: "تحميل السيرة الذاتية", pdf: "تحميل Portfolio PDF", more: "صفحة النبذة والخبرة ←",
        },
        footer: { whatsapp: "واتساب", instagram: "إنستغرام", mail: "بريد إلكتروني", linkedin: "لينكدإن", name: "سيد إسماعيل، 2026" },
    },
};

export interface WorkAr { description: string; role?: string; period?: string; employer?: string; contributions?: string[] }

const personal = "مشروع شخصي";
const client = "مشروع لعميل (عمل حر)";

export const workAr: Record<string, WorkAr> = {
    "schoolz-routz": {
        employer: "Schoolz (منصة Routz)", period: "يناير 2025 – الآن", role: "مهندس واجهات أمامية أول",
        description: "منصة SaaS لإدارة الأساطيل ونقل الطلاب، مع لوحات تحكم للإدارة والعملاء.",
        contributions: [
            "بنيت الطبقة الفورية من البداية إلى النهاية: تتبع GPS مباشر للرحلات النشطة، ودردشة داخل التطبيق (الخلفية والواجهة للويب وتطبيقات الجوال) تربط المشغّلين والركاب والسائقين عبر خدمات Node.js مخصصة.",
            "أطلقت مسار الاشتراك الذاتي للركاب: التسجيل داخل التطبيق، واختيار الباقة، والدفع عبر PayTabs، إضافة إلى مسارات عمل للمشغّلين تشمل السائقين والرحلات والفواتير.",
            "دمجت واجهات الخرائط والترميز الجغرافي لتخطيط المسارات والبحث عن المواقع والتفاعل مع الخريطة.",
            "أسست مكونات Vue ودوال composables مشتركة لواجهة ثنائية اللغة بالعربية والإنجليزية.",
        ],
    },
    untap: {
        employer: "Untap", period: "ديسمبر 2022 – أبريل 2026", role: "مهندس واجهات أمامية أول / قائد فريق الواجهات",
        description: "منصة SaaS متعددة العملاء للمسابقات وبرامج الابتكار وإدارة المنح، تجمع تجارب الإدارة وبوابة العميل والموقع العام في قاعدة شيفرة Vue واحدة.",
        contributions: [
            "قدت معمارية الواجهات ومراجعات الشيفرة وتوجيه المهندسين.",
            "صممت الأساس متعدد العملاء لسمات العملاء وأدوار الصلاحيات والإعدادات وقت التشغيل.",
            "سلّمت منشئ نماذج قائماً على المخططات ومنشئ صفحات بالسحب والإفلات باستخدام SurveyJS وGrapesJS، ثم أضفت طبقة ذكاء اصطناعي ينشئ بها العملاء النماذج والصفحات من وصف نصي، ويفحصون بها المشاركات آلياً قبل مراجعة الحكّام.",
            "دمجت Stripe ليتمكن العملاء من تحصيل رسوم المشاركات.",
            "حسّنت زمن التحميل الأولي للوحة التحكم بنسبة 40% عبر تحسين بناء Vite وتقسيم الشيفرة على مستوى المسارات وإعادة هيكلة إدارة الحالة.",
            "توليت معالجة أمن الواجهات أثناء الحصول على شهادة ISO 27001:2022: نقلت رموز المصادقة من localStorage إلى ملفات cookie من نوع HTTP-only واستبدلت الاعتمادات الضعيفة حتى مُنحت الشهادة.",
        ],
    },
    autotager: {
        employer: "AutoTager", period: "يناير 2022 – ديسمبر 2022", role: "مهندس واجهات أمامية",
        description: "سوق B2B للسيارات مع لوحات تحكم للإدارة والعملاء والوكلاء للتحليلات والمخزون والقوائم متعددة العملاء.",
        contributions: [
            "بنيت لوحات تحكم كثيفة البيانات للمديرين والعملاء والوكلاء.",
            "طورت مسار فحص المركبات لرفع الصور وتقييم الحالة وإعداد تقارير منظمة قبل النشر.",
            "حولت تصاميم Figma إلى مكتبة مكونات React قابلة لإعادة الاستخدام.",
        ],
    },
    botme: {
        employer: "Botme", period: "يناير 2018 – يناير 2022", role: "مهندس واجهات أمامية",
        description: "منشئ روبوتات محادثة متعدد القنوات مع أتمتة سير العمل والدردشة المباشرة وتجارب التجارة.",
        contributions: [
            "بنيت وحسّنت ميزات بناء روبوتات المحادثة وأتمتة سير العمل والدردشة المباشرة والتجارة باستخدام Vue.js وAngular.",
            "ساهمت في Botme Shops، وهي وحدة تجارة إلكترونية آلية عُرضت في Facebook F8 Refresh 2021.",
            "صممت مسارات المستخدم للأتمتة المرئية والنماذج التفاعلية.",
        ],
    },
    "earlier-agency-work": {
        employer: "MoreCreative وEnjaz (السعودية) وMTC (قطر) وWebdivs", period: "2014–2018", role: "مطور واجهات / مطور ويب",
        description: "مواقع ومتاجر مخصصة لعملاء في منطقة الشرق الأوسط وشمال أفريقيا.",
        contributions: [
            "صممت وبنيت مواقع ومتاجر على WordPress وWooCommerce وShopify.",
            "دمجت واجهات برمجة تطبيقات خارجية لمشاريع العملاء.",
        ],
    },
    zads: {
        employer: personal, period: "2024 – الآن", role: "مؤسس ومهندس Full-Stack",
        description: "سوق تعليمي يربط الأسر والمتعلمين بالمعلمين القريبين منهم. جرى ترحيله من Nuxt 3 إلى Next.js 16 App Router، والشيفرة علنية على GitHub.",
    },
    "fleet-billing": {
        employer: personal, period: "2026", role: "مهندس Full-Stack",
        description: "اشتراكات وفوترة لمشغّل حافلات مدرسية: يدير المشغّلون الحافلات والرحلات ويرون الإيرادات وإشغال المقاعد، ويختار أولياء الأمور خطة ويدفعون عبر Stripe Checkout. مشروع ضمن الأعمال مع بيانات تجريبية وStripe في وضع الاختبار، والشيفرة علنية على GitHub.",
    },
    yanfaa: {
        employer: client, role: "مطور واجهات أمامية",
        description: "إعادة تصميم كاملة للواجهة نُفذت كتجربة HTML وCSS متجاوبة.",
    },
    wellpal: {
        employer: client, role: "مطور واجهات أمامية",
        description: "متجر Sylius مخصص يركز على تجربة تسوق العميل.",
    },
    fundseer: {
        employer: client, role: "مطور واجهات أمامية",
        description: "مواقع تسويقية ولوحة تحكم آمنة للمستثمرين، مع الاهتمام بالأداء وقابلية التوسع.",
    },
    kadouscope: {
        employer: client, role: "مطور واجهات أمامية",
        description: "واجهة React لمسارات التحليلات، بُنيت مع الاهتمام بالعرض والتجاوب والاتساق البصري.",
    },
    movex: {
        employer: client, period: "2020", role: "مطور واجهات أمامية",
        description: "تجربة لوجستية لتتبع الشحنات، بواجهات متجاوبة متصلة بواجهة برمجة تتبع.",
    },
};

export const articlesAr: Record<string, { title: string; excerpt: string; date: string }> = {
    "scaling-vue-3-saas-apps": {
        title: "توسيع تطبيقات Vue 3 SaaS للعمليات المؤسسية",
        excerpt: "التوسع المؤسسي يعني قابلية الصيانة. تعرف كيف أعدنا هيكلة معماريات Vue 3 المعيارية لدعم نشر متوازٍ عبر الفرق وأنماط شيفرة نظيفة.",
        date: "20 مايو 2026",
    },
    "lessons-from-multi-tenant-architecture": {
        title: "دروس في معمارية الواجهات متعددة العملاء",
        excerpt: "بناء تجارب خاصة بكل عميل من قاعدة شيفرة واحدة تحدٍّ حقيقي. اكتشف أنماطنا للسمات الديناميكية وقت التشغيل وصلاحيات CASL المحفوظة في ملفات cookie.",
        date: "12 مايو 2026",
    },
    "realtime-tracking-optimization": {
        title: "تحسين WebSocket الفوري لأنظمة الأساطيل",
        excerpt: "عرض مئات المركبات المتحركة فورياً قد يعطل المتصفح. إليك كيف حسّنا عرض Leaflet باستخدام استبعاد ما خارج الإطار وتأخير تحديث الإحداثيات.",
        date: "05 مايو 2026",
    },
};
