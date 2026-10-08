import heroVillaImg from '../../assets/images/hero_architectural_villa_1791488866425.jpg';
import cairoVillaImg from '../../assets/images/cairo_luxury_villa_1791488882402.jpg';
import riyadhPenthouseImg from '../../assets/images/riyadh_dq_penthouse_1791488892687.jpg';
import sahelResidenceImg from '../../assets/images/sahel_coastal_residence_1791488904285.jpg';
import { HREFS } from '../shared';
import type { Bundle } from './en';

/**
 * Arabic content bundle — same shape as English (`Bundle`), checked by
 * TypeScript. Wording is plain and natural, written for meaning rather
 * than word-for-word translation.
 */
export const arBundle: Bundle = {
  site: {
    name: 'سيميترا سوليوشن',
    homeLabel: 'سيميترا سوليوشن — الرئيسية',
    tagline: 'هدوء معماري • حوسبة محلية',
    description:
      'حياة ذكية بخصوصية كاملة واعتمادية محلية في مصر والسعودية.',
    heroImage: heroVillaImg,
  },

  lang: {
    english: 'EN',
    arabic: 'عربي',
    toggleLabel: 'تغيير اللغة',
  },

  nav: {
    links: [
      { name: 'كيف يعمل', href: '#how-it-works' },
      { name: 'المنظومة', href: '#architecture' },
      { name: 'مساحات المعيشة', href: '#living-spaces' },
      { name: 'الفلسفة', href: '#philosophy' },
      { name: 'منهجية التنفيذ', href: '#turnkey' },
      { name: 'المشاريع', href: '#residences' },
    ],
    hotlineTitle: 'خط المهندسين المباشر',
    hotlineLabel: 'مكتب الرياض والقاهرة',
    cta: 'عرض خاص',
    menuToggle: 'فتح القائمة',
    drawerTagline: 'بيوت ذكية متكاملة • مصر والسعودية',
    drawerCta: 'احجز عرضًا خاصًا',
    drawerNote: 'يعمل محليًا • بدون إنترنت',
  },

  hero: {
    eyebrow: 'بيوت ذكية متكاملة • مصر والسعودية',
    titleStart: 'عقل ذكي واحد داخل بيتك.',
    titleAccent: 'بخصوصية كاملة.',
    sub: 'بيوت ذكية متكاملة مبنية على Home Assistant. كل شيء يعمل محليًا داخل البيت، فيعمل حتى بدون إنترنت.',
    primaryCta: 'احجز عرضًا في المعرض',
    secondaryCta: 'اكتشف المنظومة',
    imgAlt: 'غرفة معيشة في فيلا فاخرة بنظام سيميترا للأتمتة المعمارية',
    liveTitle: 'يعمل محليًا داخل بيتك',
    liveSub: 'يعمل بدون إنترنت • مبني على Home Assistant',
    offlineBadge: 'يعمل بدون إنترنت',
    vpnBadge: 'وصول آمن عن بُعد (VPN)',
    cards: [
      {
        title: 'تطبيقات كثيرة مشتتة',
        body: 'كل شركة تفرض تطبيقًا مختلفًا: روتين يومي مفتت، وتنبيهات متضاربة، وتسجيلات دخول لا تنتهي.',
        tag: 'منظومة مفتتة',
      },
      {
        title: 'معتمد على الإنترنت',
        body: 'عندما ينقطع الإنترنت أو تتعطل الخوادم السحابية، تتوقف المفاتيح والإضاءة والجداول عن الاستجابة.',
        tag: 'تأخر الخوادم الخارجية',
      },
      {
        title: 'بياناتك تغادر بيتك',
        body: 'مشاهد الكاميرات والأصوات والعادات العائلية تُبث إلى خوادم خارجية، فتضيع الخصوصية.',
        tag: 'تعرض سحابي خارجي',
      },
    ],
  },

  architecture: {
    eyebrow: 'المنظومة',
    title: 'ذكاء متكامل يعيش بالكامل تحت سقف بيتك.',
    sub: 'منظومة واحدة لكل البيت: أجهزتك تتحدث مع جهاز Home Assistant داخل الفيلا — ولا تحتاج الإنترنت في حياتك اليومية.',
    stages: [
      {
        label: 'المرحلة 01',
        title: 'أجهزة متكاملة',
        body: 'إضاءة وستائر وحساسات وكاميرات وأقفال ومفاتيح — متصلة عبر Zigbee وبروتوكولات محلية.',
        tags: ['Zigbee', 'Tuya (مفتاح محلي)'],
      },
      {
        label: 'المرحلة 02 • القلب',
        title: 'العقل الذكي داخل بيتك',
        body: 'جهاز Home Assistant في قلب البيت. المشاهد والجداول والأتمتة تعمل محليًا — وحياتك اليومية تستمر بدون إنترنت.',
        tags: [],
        badge: 'يعمل محليًا • بدون إنترنت',
      },
      {
        label: 'المرحلة 03',
        title: 'تحكم موحد',
        body: 'مفاتيح ولوحات حائط مألوفة مع تطبيق واحد للعائلة. وخارج البيت، تتصل بأمان عبر VPN.',
        tags: ['لوحات الحائط', 'تطبيق الجوال', 'وصول VPN عن بُعد'],
      },
    ],
    flowText:
      'الأولوية للمحلي: مفتاح الحائط ← جهاز البيت ← الإضاءة. بدون رحلة إنترنت في الحياة اليومية.',
    flowHub: 'الجهاز: Home Assistant',
    flowRemote: 'عن بُعد: VPN',
  },

  how: {
    eyebrow: 'كيف يعمل',
    title: 'بسيط من الخارج، جاد من الداخل.',
    sub: 'لا تحتاج أن تفهم التقنية — لكن إن كنت مهندسًا، فكل شيء أمامك للفحص.',
    steps: [
      {
        number: '01',
        title: 'أجهزتك',
        description:
          'إضاءة وستائر وحساسات وكاميرات وأقفال ومفاتيح — متصلة عبر Zigbee وبروتوكولات محلية.',
        icon: 'network',
      },
      {
        number: '02',
        title: 'العقل الذكي داخل بيتك',
        description:
          'جهاز صغير يشغّل كل شيء محليًا. حياتك اليومية تستمر حتى بدون إنترنت.',
        icon: 'cpu',
      },
      {
        number: '03',
        title: 'الجوال ولوحة الحائط',
        description:
          'تطبيق واحد وتحكم حائط مألوف للعائلة. وخارج البيت، تتصل بأمان عبر VPN.',
        icon: 'smartphone',
      },
    ],
    appendixEyebrow: 'للمهندسين',
    appendixTitle: 'ملحق تقني: ماذا داخل الجهاز',
    appendixCta: 'ناقش مشروعك مع فريق الأنظمة',
    appendix: [
      {
        title: 'Home Assistant',
        description:
          'برنامج الجهاز المحلي الذي يشغّل كل شيء: المشاهد والجداول والأتمتة تعيش في بيتك، لا في حساب سحابي.',
      },
      {
        title: 'Zigbee2MQTT',
        description:
          'يربط أجهزة Zigbee عبر بوابة محلية مفتوحة — خيارات واسعة بدون احتكار شركة واحدة.',
      },
      {
        title: 'Node-RED',
        description:
          'تدفقات أتمتة مرئية للروتين المتقدم، تربط الأجهزة والشروط معًا.',
      },
      {
        title: 'Local Tuya',
        description:
          'أجهزة Tuya المتوافقة تعمل بمفاتيح محلية، فتستجيب على شبكة البيت بدل الخادم السحابي.',
      },
      {
        title: 'النسخ والتحديثات',
        description:
          'يحتفظ الجهاز بنسخ محلية من إعداداته، وتُطبق التحديثات بطريقة مضبوطة مع إمكانية الرجوع.',
      },
    ],
  },

  floor: {
    eyebrow: 'مخطط الطابق',
    title: 'اكتشف حسب مساحة المعيشة',
    sub: 'اختر أي غرفة لترى مشاهد الأتمتة وعناصر الأجهزة والسلوكيات المحيطة.',
    schematic: 'مخطط معماري — الدور 01',
    liveMapping: 'ربط حي للعناصر',
    scaleNote: 'رسم توضيحي — بدون مقياس',
    localNote: 'يعمل محليًا داخل بيتك',
    profileOf: 'بطاقة المساحة /',
    nodesTitle: 'عناصر الأجهزة المركبة',
    switchScene: 'بدّل المشهد',
    runsLocally: 'يعمل محليًا — بدون إنترنت',
    customize: 'خصّص المواصفات',
    rooms: [
      {
        id: 'living_room',
        name: 'صالون المعيشة',
        tabLabel: 'المعيشة',
        mapLabel: 'صالون المعيشة',
        nodeNumber: 1,
        category: 'مناطق المعيشة',
        title: 'أتمتة غرفة المعيشة',
        hardwareNodes: [
          {
            icon: 'lightbulb',
            title: 'مشاهد الإضاءة',
            description: 'ضغطة واحدة تضبط الأجواء للمساء أو الضيوف أو الهدوء',
          },
          {
            icon: 'blinds',
            title: 'ستائر آلية',
            description: 'طبقات شفافة ومعتمة تُفتح وتُغلق بحركة ناعمة',
          },
          {
            icon: 'radar',
            title: 'حساسات الحضور والإضاءة',
            description: 'الغرفة تشعر بك وتتكيف بلطف',
          },
          {
            icon: 'sliders',
            title: 'مفاتيح ومقابس الحائط',
            description: 'مفاتيح مألوفة تعمل دائمًا، بإنترنت أو بدونه',
          },
        ],
        activeScene: {
          name: 'ترحيب المساء',
          description:
            'مع دخول المساء، تخفت الإضاءة بدفء، وتُغلق الستائر الشفافة، ويستقر الصالون في ترحيب هادئ.',
        },
        scenes: [
          {
            id: 'evening',
            name: 'ترحيب المساء',
            description:
              'مع دخول المساء، تخفت الإضاءة بدفء، وتُغلق الستائر الشفافة، ويستقر الصالون في ترحيب هادئ.',
          },
          {
            id: 'daylight',
            name: 'وضع النهار',
            description:
              'تُفتح الستائر لضوء النهار والإطلالة بينما تتراجع الإضاءة — الغرفة تتبع اليوم بنفسها.',
          },
          {
            id: 'soiree',
            name: 'الضيوف والجمعات',
            description:
              'إضاءة دافئة خافتة وستائر مغلقة تحوّل الصالون لمساحة حميمة للعائلة والضيوف.',
          },
        ],
      },
      {
        id: 'master_bedroom',
        name: 'الجناح الرئيسي',
        tabLabel: 'غرفة النوم',
        mapLabel: 'الجناح الرئيسي',
        nodeNumber: 2,
        category: 'الأجنحة الخاصة',
        title: 'أتمتة الجناح الرئيسي',
        hardwareNodes: [
          {
            icon: 'moon',
            title: 'إضاءة لطيفة بجانب السرير',
            description: 'ضوء ناعم للقراءة يخفت وقت النوم',
          },
          {
            icon: 'blinds',
            title: 'ستائر معتمة',
            description: 'تُغلق تمامًا للنوم، وتُفتح بنعومة مع الصباح',
          },
          {
            icon: 'radar',
            title: 'حساس ليلي للحضور',
            description: 'مسار ضوء خافت إن نهضت ليلًا',
          },
          {
            icon: 'sliders',
            title: 'مفاتيح بجانب السرير',
            description: 'زر واحد يهيئ البيت كله للنوم',
          },
        ],
        activeScene: {
          name: 'ليلة سعيدة',
          description:
            'ضغطة بجانب السرير: تُغلق الستائر، وتخفت الأنوار في الجناح، ويُقفل البيت لليل.',
        },
        scenes: [
          {
            id: 'sleep',
            name: 'ليلة سعيدة',
            description:
              'ضغطة بجانب السرير: تُغلق الستائر، وتخفت الأنوار في الجناح، ويُقفل البيت لليل.',
          },
          {
            id: 'wake',
            name: 'صباح لطيف',
            description:
              'يرتفع الضوء تدريجيًا وتُفتح الستائر بنعومة، فيكون الاستيقاظ مريحًا.',
          },
        ],
      },
      {
        id: 'kitchen',
        name: 'المطبخ',
        tabLabel: 'المطبخ',
        mapLabel: 'المطبخ',
        nodeNumber: 3,
        category: 'ورشة الطهي',
        title: 'أتمتة المطبخ',
        hardwareNodes: [
          {
            icon: 'sparkles',
            title: 'إضاءة واضحة للعمل',
            description: 'ضوء صافٍ فوق الأسطح وقت الطهي',
          },
          {
            icon: 'wind',
            title: 'حساسات الدخان والتسرب',
            description: 'إنذار مبكر مع إغلاق تلقائي للمياه عند التسرب',
          },
          {
            icon: 'blinds',
            title: 'التحكم بالستائر',
            description: 'اضبط ضوء النهار فوق مناطق العمل',
          },
          {
            icon: 'sliders',
            title: 'لوحة مقاومة للرذاذ',
            description: 'تحكم حائط قابل للمسح للمشاهد والإضاءة',
          },
        ],
        activeScene: {
          name: 'وضع الطهي',
          description:
            'تُضاء الأسطح بوضوح للتحضير؛ وعند التقديم، يستقر المطبخ في توهج دافئ خافت.',
        },
        scenes: [
          {
            id: 'culinary',
            name: 'وضع الطهي',
            description:
              'تُضاء الأسطح بوضوح للتحضير؛ وعند التقديم، يستقر المطبخ في توهج دافئ خافت.',
          },
          {
            id: 'evening',
            name: 'مطبخ المساء',
            description:
              'توهج محيطي ناعم يُبقي المطبخ عمليًا وهادئًا بعد الوجبة، بدون إضاءة قاسية.',
          },
        ],
      },
      {
        id: 'foyer',
        name: 'البهو والمعرض',
        tabLabel: 'المدخل',
        mapLabel: 'البهو والمعرض',
        nodeNumber: 4,
        category: 'الاستقبال والمعرض',
        title: 'أتمتة المدخل',
        hardwareNodes: [
          {
            icon: 'key',
            title: 'قفل ذكي ولوحة أرقام',
            description: 'دخول بالبصمة أو الرمز، مع مفتاح عادي احتياطي',
          },
          {
            icon: 'eye',
            title: 'إضاءة الترحيب',
            description: 'يضيء المدخل مع خطوتك الأولى',
          },
          {
            icon: 'camera',
            title: 'كاميرا الباب',
            description: 'شاهد الزوار والتسجيلات تبقى داخل بيتك',
          },
          {
            icon: 'bell',
            title: 'إنتركم مرئي',
            description: 'رد على الباب من لوحة الحائط أو جوالك',
          },
        ],
        activeScene: {
          name: 'أهلًا بعودتك',
          description:
            'فتح الباب يحيي المدخل: إضاءة تبرز اللوحات ويستقبلك البهو بدفء.',
        },
        scenes: [
          {
            id: 'arrival',
            name: 'أهلًا بعودتك',
            description:
              'فتح الباب يحيي المدخل: إضاءة تبرز اللوحات ويستقبلك البهو بدفء.',
          },
          {
            id: 'night',
            name: 'حراسة الليل',
            description:
              'ليلًا، لا يبقى سوى توهج أرضي خافت يرتفع بلطف عند استشعار خطوات.',
          },
        ],
      },
    ],
  },

  moments: {
    eyebrow: 'لحظات منسقة',
    title: 'حياة يومية سلسة',
    sub: 'روتين مريح لراحة البال. عِش تجربة بديهية حيث يستجيب بيتك لحظيًا.',
    testRoutine: 'جرّب الروتين',
    simEyebrow: 'محاكي تسلسل الروتين المحلي',
    simTitleSuffix: 'سلسلة الأتمتة',
    trigger: 'شغّل المحاكاة',
    executing: 'جارٍ التنفيذ...',
    scenarios: [
      {
        id: 'arriving_home',
        number: 'المشهد 01',
        title: 'الوصول للبيت',
        iconName: 'home',
        description:
          'البيت يشعر بوصولك ويستعد: تُضاء الطرق، ويُفتح المدخل لك، وكل شيء يستقر براحة.',
        automationSequence: [
          'يُتعرف على وصولك عند البوابة',
          'تُضاء الممرات والمدخل',
          'يُفتح لك الباب',
          'يستقر البيت في مشهد الترحيب',
        ],
      },
      {
        id: 'good_night',
        number: 'المشهد 02',
        title: 'ليلة سعيدة',
        iconName: 'moon',
        description:
          'ضغطة بجانب السرير تهيئ البيت كله: تخفت الأنوار، وتُقفل الأبواب، ويبقى الدور الأرضي بحراسة هادئة.',
        automationSequence: [
          'ضُغط زر بجانب السرير',
          'تخفت أنوار الداخل بلطف',
          'تُقفل الأبواب لليل',
          'حساسات الدور الأرضي بحراسة هادئة',
        ],
      },
      {
        id: 'away_mode',
        number: 'المشهد 03',
        title: 'وضع السفر',
        iconName: 'plane',
        description:
          'مسافر؟ يبدو البيت مسكونًا، ويبقى موفرًا، ويمكنك الاطمئنان عليه بأمان من أي مكان.',
        automationSequence: [
          'تأكيد وضع السفر عند المغادرة',
          'الإضاءة بنمط يحاكي الوجود',
          'إغلاق المياه للأمان',
          'اطمئن في أي وقت عبر الوصول الآمن',
        ],
      },
      {
        id: 'movie_time',
        number: 'المشهد 04',
        title: 'وقت الفيلم',
        iconName: 'film',
        description:
          'مشهد واحد يخفت الغرفة، ويغلق الستائر، ويضبط الصوت — السينما تأتي إليك.',
        automationSequence: [
          'بدء مشهد الفيلم',
          'تُغلق الستائر',
          'تخفت الأنوار بتوهج ناعم',
          'يتحول الصوت لوضع السينما',
        ],
      },
    ],
  },

  hardware: {
    eyebrow: 'توافق واسع',
    title: 'توافق شامل مع الأجهزة',
    sub: 'أجهزة يومية — إضاءة وستائر وحساسات وكاميرات وأقفال ومفاتيح — مجتمعة في منظومة تعمل محليًا في بيتك.',
    builtOn: 'مبني على Home Assistant',
    addons: 'Zigbee2MQTT • Node-RED • Local Tuya',
    roadmapBadge: 'خارطة الطريق • قريبًا',
    categories: [
      {
        title: 'الإضاءة',
        description:
          'مفاتيح ومخفتات ولوحات مشاهد للإضاءة اليومية — مجمعة في مشاهد بضغطة واحدة لكل غرفة.',
        icon: 'lightbulb',
        protocols: ['Zigbee', 'Tuya (مفتاح محلي)'],
        status: 'current',
      },
      {
        title: 'الستائر',
        description:
          'ستائر آلية تُفتح وتُغلق أو تستقر في وضعك المفضل — بجدول أو مشهد أو مفتاح الحائط.',
        icon: 'blinds',
        protocols: ['Zigbee', 'Tuya (مفتاح محلي)'],
        status: 'current',
      },
      {
        title: 'الحساسات',
        description:
          'حساسات الحضور والأبواب والنوافذ والدخان وتسرب المياه وجودة الهواء لتجعل البيت يتفاعل بنفسه.',
        icon: 'activity',
        protocols: ['Zigbee', 'Tuya (مفتاح محلي)'],
        status: 'current',
      },
      {
        title: 'الكاميرات',
        description:
          'كاميرات الباب والخارج بتسجيلات محفوظة داخل بيتك. بدون اشتراك سحابي إجباري.',
        icon: 'camera',
        protocols: ['تخزين محلي', 'ONVIF / RTSP'],
        status: 'current',
      },
      {
        title: 'الأقفال والدخول',
        description:
          'دخول بالبصمة والرمز والبطاقة للعائلة والضيوف — مع مفتاح ميكانيكي احتياطي.',
        icon: 'lock',
        protocols: ['Zigbee', 'Tuya (مفتاح محلي)'],
        status: 'current',
      },
      {
        title: 'المفاتيح والمقابس',
        description:
          'مفاتيح حائط ومقابس ذكية مألوفة تستمر في العمل حتى عند انقطاع الإنترنت.',
        icon: 'toggle-left',
        protocols: ['Zigbee', 'Tuya (مفتاح محلي)'],
        status: 'current',
      },
      {
        title: 'ناقل KNX السلكي',
        description:
          'تكامل KNX السلكي لمشاريع البناء الجديد المجهزة بكابلات. التفاصيل تُؤكد لاحقًا.',
        icon: 'network',
        protocols: ['KNX'],
        status: 'roadmap',
      },
      {
        title: 'ناقل الإضاءة DALI-2',
        description:
          'تحكم إضاءة DALI-2 المعنون لتصاميم الإضاءة الكبيرة. التفاصيل تُؤكد لاحقًا.',
        icon: 'sliders',
        protocols: ['DALI-2'],
        status: 'roadmap',
      },
      {
        title: 'التكييف',
        description:
          'مشاهد مناخ متكاملة لأنظمة السبليت والمركزية. التفاصيل تُؤكد لاحقًا.',
        icon: 'wind',
        protocols: [],
        status: 'roadmap',
      },
    ],
  },

  philosophy: {
    eyebrow: 'فلسفة المحلي أولًا',
    title: 'الرفاهية الحقيقية هي راحة البال الكاملة.',
    sub: 'بيتك يجب أن يستمر في العمل عند انقطاع الإنترنت — وحياتك اليومية تبقى داخل جدرانك.',
    cards: [
      {
        title: 'يعمل محليًا، حتى بدون إنترنت',
        body: 'كل الأتمتة والجداول وأزرار الحائط تعمل عبر جهاز Home Assistant في بيتك — لا عبر خادم إنترنت.',
        badge: 'يعمل بدون إنترنت',
      },
      {
        title: 'وصول آمن عن بُعد',
        body: 'عند السفر، تطمئن على بيتك عبر وصول آمن عن بُعد (VPN) — طريق خاص إلى منظومتك.',
        badge: 'وصول آمن عن بُعد (VPN)',
      },
      {
        title: 'بياناتك تبقى في بيتك',
        body: 'تسجيلات الكاميرات وسجل النشاط محفوظة على أجهزة داخل بيتك — لا تُرفع لخوادم الآخرين.',
        badge: 'تبقى داخل بيتك',
      },
    ],
  },

  method: {
    eyebrow: 'منهجية التنفيذ',
    title: 'من المخطط إلى التسليم',
    sub: 'دورة هندسية منضبطة مصممة للفلل الفاخرة تحت الإنشاء أو التطوير الراقي.',
    steps: [
      {
        number: '01',
        title: 'زيارة الموقع',
        description:
          'نزور بيتك أو موقعك معك وندرس كيف تعيش، غرفة بغرفة.',
      },
      {
        number: '02',
        title: 'تصميم المنظومة',
        description:
          'تستلم خطة واضحة: أي الأجهزة أين، وماذا يفعل كل مشهد.',
      },
      {
        number: '03',
        title: 'التركيب',
        description:
          'تُركب الأجهزة والتمديدات وجهاز البيت بأقل إزعاج ممكن.',
      },
      {
        number: '04',
        title: 'البرمجة',
        description:
          'تُضبط المشاهد والأتمتة حول روتينك وتُصقل معك.',
      },
      {
        number: '05',
        title: 'الاختبار والتسليم',
        description:
          'يُختبر كل شيء من البداية للنهاية، ثم يُسلم مع جولة شرح وتوثيق.',
      },
    ],
    partnership: {
      eyebrow: 'شراكة الأنظمة',
      headline: 'سيميترا سوليوشن × كونكتا، التركيب والبرمجة بشراكة.',
      allianceName: 'سيميترا سوليوشن × كونكتا',
      cities: ['القاهرة', 'الإسكندرية', 'الرياض', 'جدة'],
      symetraLogoLabel: 'شعار سيميترا سوليوشن',
      conectaLogoLabel: 'شعار كونكتا (يُستكمل لاحقًا)',
      conectaLogoTitle: 'شعار كونكتا — راجع CONTENT_TODO.md',
    },
  },

  projects: {
    eyebrow: 'أبرز الأعمال',
    title: 'مشاريع مختارة',
    sub: 'أمثلة توضيحية لما نقدمه. ستظهر هنا قصص مشاريع حقيقية بإذن أصحابها.',
    pill: 'قيد التنفيذ • توضيحي',
    cardCta: 'عرض مخططات المشروع',
    modalEyebrow: 'مسكن توضيحي',
    modalNote:
      'مثال توضيحي — النطاق النهائي لكل بيت يعتمد على المعاينة والتصميم. ستظهر قصص المشاريع التفصيلية هنا بعد اكتمال أعمال حقيقية.',
    modalCta: 'اطلب مخططًا لفيلا مشابهة',
    close: 'إغلاق',
    closeDialog: 'إغلاق النافذة',
    items: [
      {
        id: 'new_cairo',
        title: 'فيلا خاصة، القاهرة الجديدة',
        location: 'القاهرة الجديدة، مصر',
        country: 'مصر',
        status: 'In progress',
        image: cairoVillaImg,
        description:
          'مشاهد إضاءة لكل البيت، وتظليل آلي، وأتمتة بالحساسات عبر مساحات المعيشة.',
      },
      {
        id: 'riyadh_dq',
        title: 'جناح فندقي، حي السفارات بالرياض',
        location: 'حي السفارات، الرياض',
        country: 'السعودية',
        status: 'In progress',
        image: riyadhPenthouseImg,
        description:
          'تحكم بالمشاهد وأجواء متعددة وحساسات حضور خفية لحياة الشقق.',
      },
      {
        id: 'sahel_coastal',
        title: 'مسكن ساحلي، الساحل',
        location: 'الساحل الشمالي، مصر',
        country: 'مصر',
        status: 'In progress',
        image: sahelResidenceImg,
        description:
          'اطمئنان آمن عن بُعد، وأتمتة للستائر، وحماية من التسرب لبيت ثانٍ.',
      },
    ],
  },

  inquiry: {
    eyebrow: 'عرض خاص',
    title: 'جاهز لتجربة الحياة المريحة؟',
    sub: 'احجز استشارة خاصة أو عرضًا في القاهرة أو الرياض. تحدث مباشرة مع فريق الأنظمة عن بيتك.',
    demoCta: 'اطلب عرضًا في المعرض',
    callCta: 'اتصل بمهندس مباشرة',
    formTitle: 'استفسار مباشر عن مشروع',
    nameLabel: 'الاسم الكامل',
    namePh: 'مثال: طارق المنصور',
    phoneLabel: 'رقم الجوال',
    phonePh: '+966 أو +20...',
    cityLabel: 'مدينة المشروع',
    submit: 'إرسال طلب الاستشارة',
    successTitle: 'تم استلام الاستفسار',
    successBody: 'سيتواصل معك فريقنا بخصوص استفسارك عن {city}.',
    again: 'إرسال استفسار آخر',
  },

  booking: {
    badge: 'حجز العرض الخاص',
    badgeCities: 'استوديو القاهرة والرياض',
    closeDialog: 'إغلاق النافذة',
    title: 'جرّب واحة سيميترا',
    sub: 'احجز جولة حصرية في مراكز التجربة بالرياض أو القاهرة، أو اطلب استشارة مهندس تقني.',
    successEyebrow: 'تم تأكيد العرض الخاص',
    successTitle: 'جرّب واحة سيميترا',
    successBody: 'شكرًا {name} — تم تسجيل طلب الجولة الخاصة، وسيؤكد فريقنا التفاصيل معك.',
    guestFallback: 'ضيفنا الكريم',
    passTitle: 'بطاقة الحجز',
    formatLabel: 'الصيغة',
    formatShowroom: 'تجربة المعرض',
    formatOnsite: 'معاينة الموقع',
    formatVirtual: 'استشارة مرئية',
    windowLabel: 'الفترة',
    locationLabel: 'الموقع',
    calendarCta: 'أضف للتقويم (.ics)',
    done: 'تم',
    step1: '1. أستفسر بصفتي',
    roleOwner: 'مالك فيلا',
    roleArchitect: 'معماري / مصمم',
    rolePartner: 'شريك تجاري',
    step2: '2. صيغة التجربة المفضلة',
    showroomTitle: 'تجربة المعرض',
    showroomBody: 'عرض حي لفيلا مؤتمتة في حي السفارات بالرياض أو التجمع بالقاهرة',
    onsiteTitle: 'معاينة الموقع',
    onsiteBody: 'مراجعة المخططات والتمديدات في فيلتك قيد الإنشاء',
    virtualTitle: 'استشارة هندسية مرئية',
    virtualBody: 'استشارة فيديو مباشرة مع فريق أنظمة الجهد المنخفض',
    step3: '3. التواصل وموقع السكن',
    nameLabel: 'الاسم الكامل',
    namePh: 'مثال: طارق المنصور',
    emailLabel: 'البريد الإلكتروني',
    emailPh: 'tariq@residence.com',
    phoneLabel: 'الجوال / واتساب',
    phonePh: '50 123 4567',
    cityLabel: 'مدينة المشروع',
    step4: '4. الفترة المفضلة للعرض',
    privacyTitle: 'ملاحظة خصوصية:',
    privacyBody:
      'نستخدم بياناتك فقط لترتيب العرض ولا نشاركها مع أي طرف ثالث.',
    submit: 'تأكيد العرض الخاص',
    cancel: 'إلغاء',
  },

  specs: {
    eyebrow: 'قائمة تفضيلات الغرفة',
    titleBefore: 'ماذا يجب أن تفعل',
    titleAfter: '؟',
    note: 'هذه القائمة بداية للحوار. المواصفة النهائية يعدها مهندسونا بعد زيارة الموقع — ولا شيء هنا عرض سعر.',
    save: 'حفظ التفضيلات',
    saved: 'تم حفظ التفضيلات',
    review: 'اطلب مراجعة هندسية',
  },

  footer: {
    navTitle: 'التنقل',
    links: [
      { label: 'كيف يعمل', href: '#architecture' },
      { label: 'الأجهزة والعناصر', href: '#living-spaces' },
      { label: 'مشاهد الأجواء', href: '#living-spaces' },
      { label: 'خصوصية المحلي أولًا', href: '#philosophy' },
      { label: 'مساكن خاصة', href: '#residences' },
    ],
    studiosTitle: 'الاستوديوهات الإقليمية',
    deskTitle: 'المكتب المباشر',
    badge: 'مبني على Home Assistant • يعمل محليًا',
    disclaimer:
      'Home Assistant مشروع مفتوح المصدر؛ وسيميترا سوليوشن شركة مستقلة.',
    rights: '© 2025 سيميترا سوليوشن. جميع الحقوق محفوظة. لصُنع لمنطقة الخليج ومصر.',
  },

  contact: {
    hotlineLabel: 'مكتب الرياض والقاهرة',
    hotlineHref: HREFS.hotline,
    hotlineDisplay: HREFS.hotlineDisplay,
    emails: [
      { label: HREFS.emailConciergeLabel, href: HREFS.emailConcierge },
      { label: HREFS.emailKsaLabel, href: HREFS.emailKsa },
    ],
    studios: [
      {
        label: 'استوديو القاهرة',
        phoneDisplay: HREFS.cairoDisplay,
        phoneHref: HREFS.cairoTel,
      },
      {
        label: 'استوديو الرياض',
        phoneDisplay: HREFS.riyadhDisplay,
        phoneHref: HREFS.riyadhTel,
      },
    ],
    projectCities: [
      'الرياض، السعودية',
      'جدة، السعودية',
      'القاهرة، مصر',
      'الساحل الشمالي، مصر',
      'دبي / أبوظبي، الإمارات',
    ],
    bookingCities: [
      'الرياض (حي السفارات / الملقا)',
      'الرياض (الدرعية / حطين / سدرة)',
      'القاهرة (القاهرة الجديدة / التجمع)',
      'القاهرة (بالم هيلز / الشيخ زايد)',
      'الساحل الشمالي (هاسيندا / مراسي)',
      'جدة (الشاطئ / أبحر الشمالية)',
    ],
    defaultBookingCity: 'الرياض (حي السفارات / الملقا)',
    countryLabels: ['السعودية', 'مصر', 'الإمارات', 'الكويت'],
    windows: [
      { id: 'morning', label: 'صباحًا', hours: '10:00 - 13:00' },
      { id: 'afternoon', label: 'ظهرًا', hours: '14:00 - 18:00' },
      { id: 'evening', label: 'مساءً', hours: '19:00 - 21:00' },
    ],
    regionalStudios: [
      { city: 'الرياض', district: 'حي الملقا، السعودية' },
      { city: 'جدة', district: 'حي الشاطئ، السعودية' },
      { city: 'القاهرة', district: 'التجمع الخامس، القاهرة الجديدة، مصر' },
    ],
  },
};
