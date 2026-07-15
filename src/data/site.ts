export const languages = ['fa', 'en', 'fr', 'zh-cn'] as const;
export type Language = (typeof languages)[number];

export const languageNames: Record<Language, string> = {
  fa: 'فارسی',
  en: 'English',
  fr: 'Français',
  'zh-cn': '简体中文',
};

type Item = { title: string; meta?: string; text?: string; link?: string };
type SiteCopy = {
  dir: 'rtl' | 'ltr';
  locale: string;
  nav: string[];
  eyebrow: string;
  title: string;
  intro: string;
  primaryCta: string;
  secondaryCta: string;
  focusLabel: string;
  focus: string[];
  sections: {
    about: { label: string; title: string; body: string };
    expertise: { label: string; title: string; items: Item[] };
    publication: { label: string; title: string; intro: string; items: Item[]; doi: string };
    education: { label: string; title: string; degree: string; university: string; detail: string; awards: Item[] };
    toolkit: { label: string; title: string; groups: { title: string; items: string[] }[] };
    learning: { label: string; title: string; items: Item[] };
    contact: { label: string; title: string; text: string; button: string };
  };
  footer: string;
};

const publicationLink = 'https://doi.org/10.1016/j.nxmate.2025.101301';

export const copy: Record<Language, SiteCopy> = {
  fa: {
    dir: 'rtl', locale: 'fa-IR',
    nav: ['درباره من', 'حوزه‌ها', 'آثار علمی', 'مهارت‌ها', 'تماس'],
    eyebrow: 'مهندسی مواد · پژوهش داده‌محور',
    title: 'امیررضا حیدری اردکانی',
    intro: 'فعال در پیوند میان سرامیک، مهندسی سطح و تحلیل داده؛ با تمرکز بر تبدیل داده‌های پیچیده مواد به بینش‌های روشن، قابل تفسیر و کاربردی.',
    primaryCta: 'مشاهده آثار علمی', secondaryCta: 'ارتباط با من', focusLabel: 'تمرکز پژوهشی',
    focus: ['اکسیداسیون الکترولیتی پلاسمایی', 'سرامیک‌های پیشرفته', 'زیست‌مواد', 'یادگیری ماشین تفسیرپذیر'],
    sections: {
      about: { label: '01 · معرفی', title: 'مواد، سطح و داده در یک قاب', body: 'علایق من در مرز میان فرآوری مواد، مشخصه‌یابی و مدل‌سازی داده‌محور شکل گرفته است. هدفم استفاده از روش‌های شفاف و قابل تفسیر برای شناخت بهتر رابطه میان پارامترهای فرآیند، ریزساختار و عملکرد مواد است.' },
      expertise: { label: '02 · حوزه‌ها', title: 'مسیرهای پژوهشی منتخب', items: [
        { title: 'مهندسی سطح', text: 'پوشش‌های PEO، خوردگی و بررسی اثر پارامترهای فرآیند بر عملکرد سطح.' },
        { title: 'سرامیک‌های پیشرفته', text: 'سرامیک‌های دما‌بالا، کامپوزیت‌ها و رابطه فرآوری–ریزساختار–خواص.' },
        { title: 'زیست‌مواد', text: 'شیشه‌های زیست‌فعال، داربست‌های پلیمری و سامانه‌های هیبریدی.' },
        { title: 'مواد داده‌محور', text: 'پایتون، تحلیل داده و یادگیری ماشین تفسیرپذیر برای مسائل مهندسی مواد.' },
      ] },
      publication: { label: '03 · آثار علمی', title: 'انتشارات و نوشته‌های منتخب', intro: 'نمونه‌ای از فعالیت‌های علمی منتشرشده و در حال توسعه.', doi: 'مشاهده مقاله و DOI', items: [
        { title: 'پوشش‌های PEO روی آلیاژ منیزیم AZ31: مطالعه یادگیری ماشین تفسیرپذیر درباره nano-SiC و پارامترهای فرآیند', meta: 'Next Materials · 2025 · مقاله پژوهشی دسترسی آزاد', link: publicationLink },
        { title: 'مروری بر کاربردهای یادگیری ماشین در خوردگی فلزات', meta: 'مقاله کنفرانسی · 2021' },
        { title: 'مروری بر کاربردهای یادگیری ماشین در صنعت نفت و گاز', meta: 'مقاله کنفرانسی · 2021' },
        { title: 'یادگیری ماشین در فرآیندهای الکترولیتی پلاسمایی', meta: 'مقاله مروری در دست آماده‌سازی' },
      ] },
      education: { label: '04 · آموزش', title: 'پایه علمی', degree: 'کارشناسی مهندسی مواد و متالورژی', university: 'دانشگاه تبریز · ۲۰۱۸–۲۰۲۲', detail: 'معدل ۱۷٫۱۸ از ۲۰ · رتبه اول ورودی', awards: [
        { title: 'رتبه اول ورودی کارشناسی مهندسی مواد', meta: 'دانشگاه تبریز · ۲۰۱۸' },
        { title: 'مقام سوم مرحله نخست مسابقه ملی فناوری نانو' },
        { title: 'عضو هیئت تحریریه مجله مواد Sermet', meta: '۲۰۲۰' },
      ] },
      toolkit: { label: '05 · مهارت‌ها', title: 'ابزارها و روش‌ها', groups: [
        { title: 'مشخصه‌یابی', items: ['FTIR و OMNIC', 'شناسایی فاز XRD', 'تفسیر ریزساختار SEM', 'میکروسکوپی نوری و ImageJ', 'تحلیل داده‌های Raman و NMR'] },
        { title: 'فرآوری و آزمون', items: ['الکتروریسی و آماده‌سازی نمونه', 'آزمون‌های حرارتی و مکانیکی', 'سطح ویژه و تخلخل', 'آزمون فراصوت UT سطح I و II'] },
        { title: 'داده و پژوهش', items: ['Python', 'یادگیری ماشین تفسیرپذیر', 'مرور نظام‌مند منابع', 'نگارش علمی', 'ارائه و گزارش فنی'] },
      ] },
      learning: { label: '06 · دوره‌ها', title: 'یادگیری پیوسته', items: [
        { title: 'آزمون فراصوت UT، سطح I و II', meta: '۲۰۲۵' }, { title: 'تحلیل NMR', meta: '۲۰۲۳' },
        { title: 'تحلیل حرارتی', meta: '۲۰۲۲' }, { title: 'علم داده', meta: '۲۰۲۱ · دوره هشت‌ماهه' },
        { title: 'برنامه‌نویسی پایتون برای یادگیری ماشین', meta: '۲۰۲۱' }, { title: 'تحلیل کیفی XRD', meta: '۲۰۲۰' },
      ] },
      contact: { label: '07 · تماس', title: 'برای گفت‌وگوی علمی در ارتباط باشیم', text: 'برای تبادل نظر درباره مهندسی مواد، پژوهش‌های داده‌محور یا همکاری علمی می‌توانید از طریق ایمیل پیام بفرستید.', button: 'ارسال ایمیل' },
    },
    footer: 'طراحی‌شده برای وضوح، دسترس‌پذیری و وب چندزبانه.',
  },
  en: {
    dir: 'ltr', locale: 'en', nav: ['About', 'Focus', 'Publications', 'Toolkit', 'Contact'],
    eyebrow: 'Materials engineering · Data-driven research', title: 'Amirreza Heidari Ardekani',
    intro: 'Working across ceramics, surface engineering, and data analysis—with a focus on turning complex materials data into clear, interpretable, and useful insight.',
    primaryCta: 'Explore publications', secondaryCta: 'Get in touch', focusLabel: 'Research focus',
    focus: ['Plasma electrolytic oxidation', 'Advanced ceramics', 'Biomaterials', 'Interpretable machine learning'],
    sections: {
      about: { label: '01 · Profile', title: 'Materials, surfaces, and data—together', body: 'My interests sit at the intersection of materials processing, characterization, and data-driven modelling. I aim to use transparent, interpretable methods to better understand how process parameters shape microstructure and material performance.' },
      expertise: { label: '02 · Focus', title: 'Selected research directions', items: [
        { title: 'Surface engineering', text: 'PEO coatings, corrosion, and the effects of processing parameters on surface performance.' },
        { title: 'Advanced ceramics', text: 'High-temperature ceramics, composites, and processing–microstructure–property relationships.' },
        { title: 'Biomaterials', text: 'Bioactive glasses, polymeric scaffolds, and hybrid material systems.' },
        { title: 'Data-driven materials', text: 'Python, data analysis, and interpretable machine learning for materials problems.' },
      ] },
      publication: { label: '03 · Scholarship', title: 'Selected publications and writing', intro: 'A selection of published and developing scholarly work.', doi: 'View article & DOI', items: [
        { title: 'Plasma electrolytic oxidation (PEO) coatings on AZ31 magnesium alloy: An interpretable machine-learning study of nano-SiC and process parameters', meta: 'Next Materials · 2025 · Open-access research article', link: publicationLink },
        { title: 'A review of machine-learning applications in metal corrosion', meta: 'Conference paper · 2021' },
        { title: 'A review of machine-learning applications in the oil and gas sector', meta: 'Conference paper · 2021' },
        { title: 'Machine learning in plasma electrolytic processes', meta: 'Review manuscript in preparation' },
      ] },
      education: { label: '04 · Education', title: 'Scientific foundation', degree: 'B.Sc. in Materials Engineering and Metallurgy', university: 'University of Tabriz · 2018–2022', detail: 'GPA 17.18/20 · Ranked 1st in cohort', awards: [
        { title: 'Ranked 1st in the incoming materials engineering cohort', meta: 'University of Tabriz · 2018' },
        { title: 'Third place in the first stage of a national nanotechnology competition' },
        { title: 'Editorial board member, Sermet Materials Magazine', meta: '2020' },
      ] },
      toolkit: { label: '05 · Toolkit', title: 'Methods and tools', groups: [
        { title: 'Characterization', items: ['FTIR & OMNIC', 'XRD phase identification', 'SEM microstructure interpretation', 'Optical microscopy & ImageJ', 'Raman & NMR data interpretation'] },
        { title: 'Processing & testing', items: ['Electrospinning & sample preparation', 'Thermal & mechanical testing', 'Surface area & porosity', 'Ultrasonic testing, Levels I & II'] },
        { title: 'Data & research', items: ['Python', 'Interpretable machine learning', 'Scientific literature review', 'Manuscript preparation', 'Technical presentation & reporting'] },
      ] },
      learning: { label: '06 · Learning', title: 'Continued development', items: [
        { title: 'Ultrasonic Testing, Levels I & II', meta: '2025' }, { title: 'NMR Analysis', meta: '2023' },
        { title: 'Thermal Analysis', meta: '2022' }, { title: 'Data Science', meta: '2021 · eight-month programme' },
        { title: 'Python for Machine Learning', meta: '2021' }, { title: 'Qualitative XRD Analysis', meta: '2020' },
      ] },
      contact: { label: '07 · Contact', title: 'Let’s have a thoughtful conversation', text: 'For conversations around materials engineering, data-driven research, or scholarly collaboration, feel free to reach out by email.', button: 'Send an email' },
    }, footer: 'Designed for clarity, accessibility, and a multilingual web.',
  },
  fr: {
    dir: 'ltr', locale: 'fr', nav: ['Profil', 'Axes', 'Publications', 'Compétences', 'Contact'],
    eyebrow: 'Génie des matériaux · Recherche guidée par les données', title: 'Amirreza Heidari Ardekani',
    intro: 'À la croisée des céramiques, de l’ingénierie des surfaces et de l’analyse de données, avec l’objectif de transformer des données complexes en connaissances claires, interprétables et utiles.',
    primaryCta: 'Voir les publications', secondaryCta: 'Me contacter', focusLabel: 'Axes de recherche',
    focus: ['Oxydation électrolytique plasma', 'Céramiques avancées', 'Biomatériaux', 'Apprentissage automatique interprétable'],
    sections: {
      about: { label: '01 · Profil', title: 'Matériaux, surfaces et données', body: 'Mes intérêts se situent à l’interface entre l’élaboration des matériaux, leur caractérisation et la modélisation guidée par les données. Je privilégie des méthodes transparentes et interprétables pour comprendre les liens entre paramètres de procédé, microstructure et performances.' },
      expertise: { label: '02 · Axes', title: 'Principales directions de recherche', items: [
        { title: 'Ingénierie des surfaces', text: 'Revêtements PEO, corrosion et influence des paramètres de procédé sur les performances de surface.' },
        { title: 'Céramiques avancées', text: 'Céramiques à haute température, composites et relations procédé–microstructure–propriétés.' },
        { title: 'Biomatériaux', text: 'Verres bioactifs, échafaudages polymères et systèmes hybrides.' },
        { title: 'Matériaux et données', text: 'Python, analyse de données et apprentissage interprétable appliqués aux matériaux.' },
      ] },
      publication: { label: '03 · Recherche', title: 'Publications et travaux sélectionnés', intro: 'Une sélection de travaux publiés ou en cours de préparation.', doi: 'Voir l’article et le DOI', items: [
        { title: 'Revêtements par oxydation électrolytique plasma sur l’alliage de magnésium AZ31 : étude interprétable par apprentissage automatique du nano-SiC et des paramètres du procédé', meta: 'Next Materials · 2025 · Article en libre accès', link: publicationLink },
        { title: 'Revue des applications de l’apprentissage automatique à la corrosion des métaux', meta: 'Communication scientifique · 2021' },
        { title: 'Revue des applications de l’apprentissage automatique au secteur pétrolier et gazier', meta: 'Communication scientifique · 2021' },
        { title: 'Apprentissage automatique dans les procédés électrolytiques plasma', meta: 'Article de synthèse en préparation' },
      ] },
      education: { label: '04 · Formation', title: 'Fondements scientifiques', degree: 'Licence en génie des matériaux et métallurgie', university: 'Université de Tabriz · 2018–2022', detail: 'Moyenne 17,18/20 · 1er de promotion', awards: [
        { title: '1er de la promotion entrante en génie des matériaux', meta: 'Université de Tabriz · 2018' },
        { title: 'Troisième place à la première étape d’un concours national de nanotechnologie' },
        { title: 'Membre du comité éditorial de Sermet Materials Magazine', meta: '2020' },
      ] },
      toolkit: { label: '05 · Compétences', title: 'Méthodes et outils', groups: [
        { title: 'Caractérisation', items: ['FTIR et OMNIC', 'Identification des phases par XRD', 'Interprétation microstructurale par SEM', 'Microscopie optique et ImageJ', 'Interprétation Raman et NMR'] },
        { title: 'Élaboration et essais', items: ['Électrofilage et préparation d’échantillons', 'Essais thermiques et mécaniques', 'Surface spécifique et porosité', 'Contrôle ultrasonore, niveaux I et II'] },
        { title: 'Données et recherche', items: ['Python', 'Apprentissage automatique interprétable', 'Revue de littérature scientifique', 'Rédaction scientifique', 'Présentation et rapports techniques'] },
      ] },
      learning: { label: '06 · Perfectionnement', title: 'Formation continue', items: [
        { title: 'Contrôle ultrasonore, niveaux I et II', meta: '2025' }, { title: 'Analyse NMR', meta: '2023' },
        { title: 'Analyse thermique', meta: '2022' }, { title: 'Science des données', meta: '2021 · huit mois' },
        { title: 'Python pour l’apprentissage automatique', meta: '2021' }, { title: 'Analyse qualitative XRD', meta: '2020' },
      ] },
      contact: { label: '07 · Contact', title: 'Échangeons autour de la recherche', text: 'Pour discuter de génie des matériaux, de recherche guidée par les données ou d’une collaboration scientifique, contactez-moi par e-mail.', button: 'Envoyer un e-mail' },
    }, footer: 'Conçu pour la clarté, l’accessibilité et un web multilingue.',
  },
  'zh-cn': {
    dir: 'ltr', locale: 'zh-CN', nav: ['简介', '研究方向', '学术成果', '技能', '联系'],
    eyebrow: '材料工程 · 数据驱动研究', title: 'Amirreza Heidari Ardekani',
    intro: '专注于陶瓷、表面工程与数据分析的交叉领域，致力于将复杂的材料数据转化为清晰、可解释且有价值的认识。',
    primaryCta: '查看学术成果', secondaryCta: '联系我', focusLabel: '研究重点',
    focus: ['等离子体电解氧化', '先进陶瓷', '生物材料', '可解释机器学习'],
    sections: {
      about: { label: '01 · 简介', title: '连接材料、表面与数据', body: '我的兴趣集中在材料加工、表征和数据驱动建模的交叉领域。我希望通过透明、可解释的方法，更深入地理解工艺参数、微观结构与材料性能之间的关系。' },
      expertise: { label: '02 · 研究方向', title: '主要研究领域', items: [
        { title: '表面工程', text: 'PEO 涂层、腐蚀，以及工艺参数对表面性能的影响。' },
        { title: '先进陶瓷', text: '高温陶瓷、复合材料及加工—微观结构—性能关系。' },
        { title: '生物材料', text: '生物活性玻璃、聚合物支架与杂化材料体系。' },
        { title: '数据驱动材料研究', text: '将 Python、数据分析与可解释机器学习用于材料问题。' },
      ] },
      publication: { label: '03 · 学术成果', title: '代表性论文与研究写作', intro: '部分已发表及正在准备的学术工作。', doi: '查看论文与 DOI', items: [
        { title: 'AZ31 镁合金等离子体电解氧化涂层：纳米 SiC 与工艺参数的可解释机器学习研究', meta: 'Next Materials · 2025 · 开放获取研究论文', link: publicationLink },
        { title: '机器学习在金属腐蚀研究中的应用综述', meta: '会议论文 · 2021' },
        { title: '机器学习在石油与天然气领域中的应用综述', meta: '会议论文 · 2021' },
        { title: '机器学习在等离子体电解过程中的应用', meta: '综述论文准备中' },
      ] },
      education: { label: '04 · 教育', title: '科学基础', degree: '材料工程与冶金学学士', university: '大不里士大学 · 2018–2022', detail: '平均成绩 17.18/20 · 年级排名第一', awards: [
        { title: '材料工程入学年级排名第一', meta: '大不里士大学 · 2018' },
        { title: '全国纳米技术竞赛第一阶段第三名' },
        { title: 'Sermet 材料杂志编辑委员会成员', meta: '2020' },
      ] },
      toolkit: { label: '05 · 技能', title: '方法与工具', groups: [
        { title: '材料表征', items: ['FTIR 与 OMNIC', 'XRD 物相鉴定', 'SEM 微观结构解读', '光学显微镜与 ImageJ', 'Raman 与 NMR 数据解读'] },
        { title: '加工与测试', items: ['静电纺丝与样品制备', '热学与力学测试', '比表面积与孔隙率', '超声检测 I、II 级'] },
        { title: '数据与科研', items: ['Python', '可解释机器学习', '科学文献综述', '学术论文写作', '技术汇报与报告'] },
      ] },
      learning: { label: '06 · 进修', title: '持续学习', items: [
        { title: '超声检测 I、II 级', meta: '2025' }, { title: 'NMR 分析', meta: '2023' },
        { title: '热分析', meta: '2022' }, { title: '数据科学', meta: '2021 · 八个月' },
        { title: '面向机器学习的 Python 编程', meta: '2021' }, { title: 'XRD 定性分析', meta: '2020' },
      ] },
      contact: { label: '07 · 联系', title: '欢迎开展深入交流', text: '如希望交流材料工程、数据驱动研究或学术合作，欢迎通过电子邮件联系。', button: '发送邮件' },
    }, footer: '为清晰、无障碍与多语言网络体验而设计。',
  },
};
