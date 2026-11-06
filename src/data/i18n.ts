export type Lang = "en" | "ar";

export const ui = {
    en: {
        nav: {
            label: "Main navigation", menu: "Menu", logo: "Sayed Esmail logo",
            home: "Home", work: "Work", experience: "Experience", articles: "Articles", about: "About", migration: "Migration",
            pdf: "Portfolio PDF", whatsapp: "WhatsApp", switchTo: "Switch language to Arabic",
        },
        hero: {
            pill: "Open to senior and lead roles, and selected freelance projects",
            kicker: "Senior Frontend / Full-Stack Engineer · Cairo, Egypt",
            h1: ["I’m ", "Sayed", ", I build web products that ", "work"],
            sub: "I build and lead the frontends behind SaaS products: live fleet tracking for school transport at Routz, a multi-tenant innovation platform at Untap, and my own tutoring marketplace, Zads. Vue, React, Next.js, and TypeScript, with Arabic and English interfaces built right-to-left first. I work with teams in Egypt, the Gulf, and Europe.",
            seeWork: "See my work", talk: "Talk to me", photoAlt: "Sayed Esmail",
        },
        marqueeLabel: "Skills",
        stats: { years: "Years of experience", companies: "Company roles", freelance: "Freelance projects since 2010", articles: "Technical articles" },
        focus: {
            title: "What I Focus On",
            subtitle: "Four things I have done in production, with the product each one comes from.",
            cards: [
                { title: "Multi-tenant SaaS architecture", description: "At Untap, one Vue codebase serves the admin, customer, and public experiences with per-client theming, roles, and runtime configuration, so dozens of client platforms run from the same build." },
                { title: "Real-time systems", description: "At Routz, live GPS tracking and in-app chat run over custom Node.js socket services I built end to end, with mapping and geocoding APIs for routes and stops." },
                { title: "Frontend performance", description: "Initial dashboard load at Untap dropped by 40% after Vite build optimization, route-level code splitting, and a state-management refactor, measured before and after." },
                { title: "Arabic and English products", description: "Every product I ship works right-to-left and left-to-right from the same code: shared components at Routz, next-intl routing on Zads and Fleet Billing, Arabic typography done properly." },
            ],
        },
        work: {
            title: "Selected work",
            companyEyebrow: "01 / Company work", companyTitle: "Built as part of a team.",
            companyText: "Schoolz / Routz, Untap, AutoTager, Botme, and earlier agency experience.",
            freelanceEyebrow: "02 / Freelance projects", freelanceTitle: "Delivered for clients.",
            freelanceText: "Zads, Fleet Billing, Yanfaa, Wellpal, FundSeer, Kadouscope, and Movex. Products, redesigns, storefronts, and dashboards.",
            companyLink: "Explore company projects →", freelanceLink: "Explore freelance projects →",
            caseStudy: "Read case study", visit: "Visit website", companyTag: "Company work", freelanceTag: "Freelance",
        },
        experience: {
            eyebrow: "Career", title: "Professional experience",
            text: "Company roles, from web and commerce development to SaaS architecture and team leadership.",
            view: "View work →",
        },
        services: {
            title: "Services", more: "Learn more →",
            items: ["Salla & Zid store check", "Maqru accessibility", "Legacy Vue/Nuxt migration"],
        },
        articles: {
            title: "Mini Technical Articles",
            subtitle: "Short write-ups on problems from production work: what was slow or fragile, what we changed, and what I would keep next time.",
            read: "Read Article", all: "View All Articles",
            devto: "What migrating a Vuetify 2 dashboard to Vue 3 actually took", devtoMeta: "dev.to",
        },
        about: {
            eyebrow: "Cairo, Egypt / Working since 2014",
            title: "About & Experience",
            tagline: "Engineering interfaces. Understanding products.",
            bio: "I’m Sayed Esmail, a Senior Frontend / Full-Stack Engineer in Cairo. I started in 2014 building WordPress and Shopify sites for agencies in Egypt, Saudi Arabia, and Qatar, moved into product work at Botme and AutoTager, and have built and led the frontends of SaaS platforms since 2022: Untap, where I led the frontend team, and now Routz at Schoolz. I studied philosophy before I wrote code, which is probably why I care about naming things well.",
            indepEyebrow: "Alongside company work", indepTitle: "Independent projects",
            indepText: "I’m the founder and full-stack engineer behind Zads, a personal education product started in 2024. Explore Zads and Fleet Billing, a school-bus subscriptions and billing project, alongside Yanfaa, Wellpal, FundSeer, Kadouscope, and Movex in my freelance portfolio.",
            indepLink: "Explore freelance work →",
            eduEyebrow: "Background", eduTitle: "Education & languages",
            edu: ["Bachelor of Arts, Philosophy", "Damanhour University · 2009–2013"],
            langs: ["Arabic — Native", "English — Full professional proficiency"],
            contactTitle: "Let’s work together.", contactText: "Senior or lead frontend roles, product frontends that need an owner, and Arabic and English interfaces done right.",
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
            pill: "متاح لأدوار أول وقيادة فرق، ولمشاريع حرة مختارة",
            kicker: "مهندس واجهات أمامية ومتكامل أول · القاهرة، مصر",
            h1: ["أنا ", "سيد", "، أبني منتجات ويب ", "تعمل"],
            sub: "أبني وأقود واجهات منتجات SaaS: تتبع مباشر لأساطيل النقل المدرسي في Routz، ومنصة ابتكار متعددة العملاء في Untap، وسوق دروس خصوصية خاص بي اسمه Zads. أعمل بـ Vue وReact وNext.js وTypeScript، وأبني الواجهات بالعربية والإنجليزية من اليمين إلى اليسار أولاً. أعمل مع فرق في مصر والخليج وأوروبا.",
            seeWork: "شاهد أعمالي", talk: "تحدث معي", photoAlt: "سيد إسماعيل",
        },
        marqueeLabel: "المهارات",
        stats: { years: "سنوات خبرة", companies: "أدوار في شركات", freelance: "مشروع عمل حر منذ 2010", articles: "مقالات تقنية" },
        focus: {
            title: "ما الذي أركز عليه",
            subtitle: "أربعة أشياء نفذتها في منتجات حقيقية، مع اسم المنتج الذي جاء منه كل واحد منها.",
            cards: [
                { title: "معمارية SaaS متعددة العملاء", description: "في Untap، قاعدة شيفرة Vue واحدة تخدم الإدارة والعملاء والموقع العام، مع سمة وصلاحيات وإعدادات لكل عميل، فتعمل عشرات المنصات من البناء نفسه." },
                { title: "الأنظمة الفورية", description: "في Routz، يعمل تتبع GPS المباشر والدردشة داخل التطبيق عبر خدمات Node.js مخصصة بنيتها من البداية إلى النهاية، مع واجهات خرائط وترميز جغرافي للمسارات والمحطات." },
                { title: "أداء الواجهات", description: "انخفض زمن التحميل الأولي للوحة تحكم Untap بنسبة 40% بعد تحسين بناء Vite وتقسيم الشيفرة على مستوى المسارات وإعادة هيكلة إدارة الحالة، بقياس قبل وبعد." },
                { title: "منتجات بالعربية والإنجليزية", description: "كل منتج أسلّمه يعمل من اليمين إلى اليسار ومن اليسار إلى اليمين من الشيفرة نفسها: مكونات مشتركة في Routz، وتوجيه next-intl في Zads وFleet Billing، وخطوط عربية مضبوطة." },
            ],
        },
        work: {
            title: "أعمال مختارة",
            companyEyebrow: "01 / أعمال الشركات", companyTitle: "بُنيت ضمن فريق.",
            companyText: "Schoolz / Routz وUntap وAutoTager وBotme، وخبرة سابقة في الوكالات.",
            freelanceEyebrow: "02 / مشاريع العمل الحر", freelanceTitle: "سُلّمت للعملاء.",
            freelanceText: "Zads وFleet Billing وYanfaa وWellpal وFundSeer وKadouscope وMovex. منتجات وإعادة تصميم ومتاجر ولوحات تحكم.",
            companyLink: "استعرض مشاريع الشركات ←", freelanceLink: "استعرض مشاريع العمل الحر ←",
            caseStudy: "اقرأ دراسة الحالة", visit: "زيارة الموقع", companyTag: "أعمال الشركات", freelanceTag: "عمل حر",
        },
        experience: {
            eyebrow: "المسيرة", title: "الخبرة المهنية",
            text: "أدوار في شركات، من تطوير المواقع والتجارة الإلكترونية إلى هندسة أنظمة SaaS وقيادة الفرق.",
            view: "شاهد العمل ←",
        },
        services: {
            title: "الخدمات", more: "اعرف المزيد ←",
            items: ["فحص متاجر سلة وزد", "مقروء لإمكانية الوصول", "تحديث المواقع القديمة"],
        },
        articles: {
            title: "مقالات تقنية قصيرة",
            subtitle: "مقالات قصيرة عن مشكلات من عمل حقيقي: ما كان بطيئاً أو هشاً، وما غيّرناه، وما سأحتفظ به في المرة القادمة.",
            read: "اقرأ المقال", all: "عرض كل المقالات",
            devto: "ماذا استغرق فعلاً ترحيل لوحة Vuetify 2 إلى Vue 3", devtoMeta: "dev.to",
        },
        about: {
            eyebrow: "القاهرة، مصر / أعمل منذ 2014",
            title: "نبذة والخبرة",
            tagline: "أهندس الواجهات. وأفهم المنتجات.",
            bio: "أنا سيد إسماعيل، مهندس واجهات أمامية ومتكامل أول في القاهرة. بدأت في 2014 ببناء مواقع WordPress وShopify لوكالات في مصر والسعودية وقطر، ثم انتقلت إلى العمل على المنتجات في Botme وAutoTager، ومنذ 2022 أبني وأقود واجهات منصات SaaS: Untap حيث قدت فريق الواجهات، والآن Routz في Schoolz. درست الفلسفة قبل أن أكتب الشيفرة، وربما لهذا أهتم بتسمية الأشياء جيداً.",
            indepEyebrow: "إلى جانب العمل في الشركات", indepTitle: "مشاريع مستقلة",
            indepText: "أنا مؤسس Zads والمهندس المسؤول عنه، وهو منتج تعليمي شخصي بدأته في 2024. استعرض Zads وFleet Billing، وهو مشروع اشتراكات وفوترة لحافلات المدارس، إلى جانب Yanfaa وWellpal وFundSeer وKadouscope وMovex في أعمالي الحرة.",
            indepLink: "استعرض أعمال العمل الحر ←",
            eduEyebrow: "الخلفية", eduTitle: "التعليم واللغات",
            edu: ["بكالوريوس آداب، فلسفة", "جامعة دمنهور · 2009–2013"],
            langs: ["العربية — لغة أم", "الإنجليزية — إجادة مهنية كاملة"],
            contactTitle: "لنعمل معاً.", contactText: "أدوار أول أو قيادة فرق واجهات، وواجهات منتجات تحتاج مسؤولاً عنها، وواجهات عربية وإنجليزية مضبوطة.",
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
        employer: "Schoolz (منصة Routz)", period: "يناير 2025 – الآن", role: "مهندس برمجيات متكامل أول",
        description: "منصة Schoolz لإدارة الأساطيل والنقل المدرسي. بنيت تطبيق الويب بـ Vue 3 من الصفر، بلوحات تحكم للإدارة والعملاء، وأتولى طبقته الفورية.",
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
            "أصبحت المساهم الرئيسي في الواجهات ورُقّيت إلى قائد فريق الواجهات في يناير 2025، مسؤولاً عن قرارات المعمارية ومراجعات الشيفرة وتوجيه المهندسين.",
            "صممت الأساس متعدد العملاء لسمات العملاء وأدوار الصلاحيات والإعدادات وقت التشغيل، بما يدعم عشرات المنصات المختلفة من قاعدة شيفرة واحدة.",
            "سلّمت منشئ نماذج قائماً على المخططات ومنشئ صفحات بالسحب والإفلات باستخدام SurveyJS وGrapesJS، ثم أضفت طبقة ذكاء اصطناعي ينشئ بها العملاء النماذج والصفحات من وصف نصي، ويفحصون بها المشاركات آلياً قبل مراجعة الحكّام.",
            "دمجت Stripe ليتمكن العملاء من تحصيل رسوم المشاركات.",
            "حسّنت زمن التحميل الأولي للوحة التحكم بنسبة 40% عبر تحسين بناء Vite وتقسيم الشيفرة على مستوى المسارات وإعادة هيكلة إدارة الحالة.",
            "توليت معالجة أمن الواجهات أثناء الحصول على شهادة ISO 27001:2022: نقلت رموز المصادقة من localStorage إلى ملفات cookie من نوع HTTP-only واستبدلت الاعتمادات الضعيفة حتى مُنحت الشهادة.",
        ],
    },
    autotager: {
        employer: "AutoTager", period: "يناير 2022 – ديسمبر 2022", role: "مهندس واجهات أمامية",
        description: "سوق B2B للسيارات يعرض فيه الوكلاء مخزونهم ويعمل المديرون والعملاء من لوحات تحكم كثيفة البيانات. بنيت واجهة React للوحات الثلاث.",
        contributions: [
            "بنيت لوحات تحكم الإدارة والعملاء والوكلاء بـ React: التحليلات والمخزون والقوائم متعددة العملاء.",
            "طورت مسار فحص المركبات: رفع الصور وتقييم الحالة وتقرير منظم يجب أن يجتازه الإعلان قبل نشره.",
            "حولت تصاميم Figma إلى مكتبة مكونات React قابلة لإعادة الاستخدام، فانخفض زمن التسليم من التصميم إلى التطوير بنسبة 50%.",
        ],
    },
    botme: {
        employer: "Botme", period: "يناير 2018 – يناير 2022", role: "مهندس واجهات أمامية",
        description: "منشئ روبوتات محادثة متعدد القنوات يستخدمه أكثر من 5,000 نشاط تجاري شهرياً، مع أتمتة سير العمل والدردشة المباشرة والتجارة. قضيت أربع سنوات في واجهته.",
        contributions: [
            "بنيت وحسّنت منشئ الروبوتات وأتمتة سير العمل والدردشة المباشرة وميزات التجارة بـ Vue.js وAngular، لمنتج يستخدمه أكثر من 5,000 نشاط تجاري شهرياً.",
            "ساهمت في Botme Shops، وحدة التجارة الإلكترونية الآلية التي عرضتها Facebook في F8 Refresh 2021.",
            "صممت مسارات المستخدم لمحرر الأتمتة المرئي والنماذج التفاعلية.",
        ],
    },
    "earlier-agency-work": {
        employer: "MoreCreative وEnjaz (السعودية) وMTC (قطر) وWebdivs", period: "2014–2018", role: "مطور واجهات / مطور ويب",
        description: "نقطة البداية: مواقع ومتاجر للعملاء في أربع وكالات، منها Enjaz في السعودية وMTC في قطر، لعملاء في أنحاء الشرق الأوسط وشمال أفريقيا.",
        contributions: [
            "صممت وبنيت مواقع ومتاجر على WordPress وWooCommerce وShopify لعملاء الوكالات.",
            "دمجت واجهات برمجة خارجية في مواقع العملاء.",
        ],
    },
    zads: {
        employer: personal, period: "2024 – الآن", role: "مؤسس ومهندس Full-Stack",
        description: "سوقي التعليمي الخاص: تجد الأسر والمتعلمون معلمين قريبين منهم ويطلبون دروساً. بدأ على Nuxt 3 ويعمل الآن على Next.js 16 App Router، والشيفرة علنية على GitHub.",
        contributions: [
            "بنيت الخلفية بـ Node.js وExpress وPrisma ORM وPostgreSQL، مع اختبارات تكامل HTTP تعمل في CI قبل كل نشر.",
            "طورت بحثاً بالقرب الجغرافي يطابق المتعلمين بالمعلمين القريبين عبر تحديد المواقع وحساب المسافات.",
            "نفذت تسعيراً ديناميكياً وطلبات معلمين تلقائية من تسجيلات أولياء الأمور.",
            "رحّلت المنتج من Nuxt 3 وVuetify إلى تطبيق Next.js 16 App Router موحد: 42 مساراً، وعربية وإنجليزية مع RTL عبر next-intl، وAuth.js v5، وصلاحيات CASL، ومكونات خادم في الصفحات العامة، منشور على Vercel.",
        ],
    },
    "fleet-billing": {
        employer: personal, period: "2026", role: "مهندس Full-Stack",
        description: "اشتراكات وفوترة لمشغّل حافلات مدرسية: يدير المشغّلون الحافلات والرحلات ويرون الإيرادات وإشغال المقاعد، ويختار أولياء الأمور خطة ويدفعون عبر Stripe Checkout. مشروع ضمن الأعمال مع بيانات تجريبية وStripe في وضع الاختبار، والشيفرة علنية على GitHub.",
        contributions: [
            "بنيت تطبيق الويب على Next.js 16 App Router: مكونات خادم للإحصاءات والجداول والاشتراكات، وإجراء خادم للدفع، ومكونات عميل لمحرر الأسطول واختيار الخطة، بالعربية والإنجليزية مع RTL عبر next-intl.",
            "بنيت واجهة NestJS مع حراس مصادقة وأدوار عامة، وكائنات نقل مُتحقق منها بـ class-validator، وتسعير نقي مُختبر بالوحدات بالقروش الصحيحة (خطط شهرية وفصلية مع خصم الأشقاء).",
            "نمذجت البيانات بـ Prisma على Supabase Postgres واستخدمت Row Level Security لقراءات الاشتراكات الخاصة بكل ولي أمر؛ الأدوار من جدول profiles لا من بيانات المستخدم الوصفية.",
            "دمجت Stripe Checkout مع webhook موقّع يتحقق من التوقيع ويطابق المبلغ المحصّل ويفعّل الاشتراك مرة واحدة لكل معرّف حدث.",
            "غطيت التسعير وwebhook واختبارات HTTP الشاملة بـ Vitest واختبار الويب بـ Playwright؛ وGitHub Actions يشغّل الفحص والأنواع والاختبارات والترحيلات والبذر وبناء Docker قبل النشر على Vercel.",
        ],
    },
    yanfaa: {
        employer: client, role: "مطور واجهات أمامية",
        description: "إعادة تصميم كاملة لموقع Yanfaa نفذتها بـ HTML وCSS متجاوبين.",
        contributions: [
            "أعدت تصميم الواجهة عبر الموقع ونفذتها كتخطيطات HTML وCSS متجاوبة للحاسوب والجوال.",
            "أبقيت أداء الواجهة ضمن نطاق العمل طوال إعادة التصميم، لا كفكرة لاحقة.",
        ],
    },
    wellpal: {
        employer: client, role: "مطور واجهات أمامية",
        description: "متجر مخصص على منصة Sylius للتجارة، مبني حول رحلة تسوق العميل.",
        contributions: [
            "بنيت واجهة المتجر المخصصة على Sylius.",
            "شكّلت واجهة المتجر انطلاقاً من أبحاث تجربة المستخدم وأهداف العميل التجارية.",
        ],
    },
    fundseer: {
        employer: client, role: "مطور واجهات أمامية",
        description: "مواقع تسويقية ولوحة تحكم آمنة للمستثمرين لصالح FundSeer، مبنية مع مراعاة الأداء وقابلية التوسع.",
        contributions: [
            "بنيت المواقع التسويقية.",
            "طورت لوحة التحكم الآمنة التي يسجل المستثمرون الدخول إليها.",
            "عملت على أداء الواجهة وقابليتها للتوسع مع نمو المنتج.",
        ],
    },
    kadouscope: {
        employer: client, role: "مطور واجهات أمامية",
        description: "إصلاح شامل لواجهة لوحة تحليلات معقدة بـ React: عرض أسرع وتخطيطات متجاوبة ومظهر واحد متسق.",
        contributions: [
            "أعدت بناء واجهة لوحة تحليلات معقدة بـ React.",
            "حسّنت سرعة العرض والسلوك المتجاوب والاتساق البصري عبر اللوحة.",
        ],
    },
    movex: {
        employer: client, period: "2020", role: "مطور واجهات أمامية",
        description: "واجهة لتتبع الشحنات لشركة لوجستية، متصلة بواجهة برمجة التتبع الخاصة بها.",
        contributions: [
            "بنيت واجهات متجاوبة لتتبع الشحنات.",
            "دمجت واجهة برمجة تتبع الشحنات في الواجهة.",
        ],
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
