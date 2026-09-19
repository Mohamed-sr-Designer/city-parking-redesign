import { b } from '../lib/i18n.mjs';

// Solutions = the technology we integrate. Copy is outcome-first; the technical name sits in `tech`.
export const solutions = [
  {
    slug: 'smart-parking-management',
    icon: 'smart',
    img: 'sol-smart',
    name: b('Smart Parking Management', 'أنظمة المواقف الذكية'),
    line: b('Know your car park like you know your numbers.', 'اعرف موقفك كما تعرف أرقامك.'),
    intro: b(
      'Sensors, cameras, cloud software and automated access come together in one platform — so you can see availability, take payments and steer demand in real time, whether it is a single garage or a city-wide network.',
      'حساسات وكاميرات وبرمجيات سحابية وتحكّم آلي في الدخول تعمل معًا على منصة واحدة، لترى الإتاحة وتحصّل المدفوعات وتوجّه الطلب لحظة بلحظة — سواء كان موقفًا واحدًا أو شبكة على مستوى المدينة.'
    ),
    outcomes: [
      {
        h: b('See every space, every minute', 'شاهد كل موقف في كل دقيقة'),
        p: b('Live occupancy and usage data, plus predictive analytics for peak periods, so revenue decisions rest on evidence rather than instinct.', 'بيانات إشغال واستخدام فورية مع تحليلات تنبؤية لفترات الذروة، لتُبنى قرارات الإيراد على الأدلة لا على الحدس.'),
        tech: b('Real-time monitoring · analytics · predictive demand', 'مراقبة لحظية · تحليلات · توقّع الطلب'),
      },
      {
        h: b('Get paid faster. Queue less.', 'حصّل أسرع. وقلّل الطوابير.'),
        p: b('Contactless payment, advance reservations and mobile access shorten queues for short-stay and long-stay parkers alike.', 'الدفع دون تلامس والحجز المسبق والدخول عبر الجوال تختصر الطوابير للزائر العابر وصاحب الاشتراك على حدّ سواء.'),
        tech: b('Contactless payment · reservations · mobile app', 'دفع دون تلامس · حجز مسبق · تطبيق جوال'),
      },
      {
        h: b('Run it from anywhere', 'أدِرها من أي مكان'),
        p: b('IoT sensors, license-plate recognition and automated entry and exit connect every facility to one platform — with EV charging managed alongside.', 'حساسات إنترنت الأشياء والتعرّف على اللوحات والدخول والخروج الآلي تربط كل منشأة بمنصة واحدة — مع إدارة شحن السيارات الكهربائية ضمنها.'),
        tech: b('IoT sensors · LPR · access control · EV integration', 'حساسات · التعرّف على اللوحات · التحكّم في الدخول · دمج الشحن'),
      },
    ],
    cases: ['zia-mall', 'grand-egyptian-museum', 'le-lac-du-caire', 'ulter-techno-events'],
    industries: ['shopping-malls', 'airports', 'office-buildings', 'hospitals'],
    faq: ['what-is-smart', 'smart-benefits', 'customize'],
  },
  {
    slug: 'parking-guidance-system',
    icon: 'pgs',
    img: 'sol-pgs',
    name: b('Parking Guidance System', 'أنظمة التوجيه الذكي'),
    line: b('Guests find a space — not frustration.', 'الضيف يجد موقفًا، لا إحباطًا.'),
    intro: b(
      'A network of sensors, digital signage and smart software shows real-time availability and guides each driver to the nearest free space — in a multi-level garage, a shopping center or an airport.',
      'شبكة من الحساسات واللوحات الرقمية والبرمجيات الذكية تعرض الإتاحة لحظيًا وتقود كل سائق إلى أقرب موقف شاغر — في موقف متعدد الطوابق أو مركز تسوق أو مطار.'
    ),
    outcomes: [
      {
        h: b('Less searching, more satisfaction', 'بحث أقل، رضا أكبر'),
        p: b('Sensors detect free spaces and publish them on signage and in the app, so drivers stop circling and idling — which also trims emissions.', 'تكتشف الحساسات المواقف الشاغرة وتعرضها على اللوحات وفي التطبيق، فيتوقف السائقون عن الدوران والانتظار، وتنخفض الانبعاثات.'),
        tech: b('Sensors · live availability · mobile app', 'حساسات · إتاحة لحظية · تطبيق'),
      },
      {
        h: b('Signs that steer traffic', 'لوحات توجّه الحركة'),
        p: b('Dynamic signage sends drivers to the nearest open space, shows occupancy and pricing, and can carry event messages — moving cars away from crowded zones.', 'لوحات ديناميكية توجّه السائقين لأقرب موقف مفتوح وتعرض الإشغال والأسعار ورسائل الفعاليات، وتبعد السيارات عن المناطق المزدحمة.'),
        tech: b('Dynamic digital signage · custom messages', 'لوحات رقمية ديناميكية · رسائل مخصّصة'),
      },
      {
        h: b('Plugs into what you already run', 'يندمج مع ما تملكه بالفعل'),
        p: b('It integrates with existing parking-management software, reservations and payment, with configurations that fit each type of facility.', 'يندمج مع برمجيات إدارة المواقف الحالية والحجز والدفع، بإعدادات تناسب كل نوع من المنشآت.'),
        tech: b('Integration · analytics · reservations', 'تكامل · تحليلات · حجوزات'),
      },
    ],
    cases: ['zia-mall', 'grand-egyptian-museum', 'cairo-opera-house', 'le-lac-du-caire'],
    industries: ['shopping-malls', 'airports', 'hospitals', 'tourist-destinations'],
    faq: ['what-is-pgs', 'pgs-integrate', 'smart-benefits'],
  },
  {
    slug: 'ev-charging',
    icon: 'ev',
    img: 'sol-ev',
    name: b('EV Charging Solutions', 'محطات شحن السيارات الكهربائية'),
    line: b('Be ready for the cars your guests will drive next.', 'كن جاهزًا للسيارات التي سيقودها ضيوفك غدًا.'),
    intro: b(
      'Installation, management and maintenance of EV charging stations that attract customers, add a new revenue line and support sustainability goals — for commercial, residential and public parking.',
      'تركيب وإدارة وصيانة محطات شحن السيارات الكهربائية التي تجذب العملاء وتضيف مصدر دخل جديدًا وتدعم أهداف الاستدامة — للمواقف التجارية والسكنية والعامة.'
    ),
    outcomes: [
      {
        h: b('Reliable charging, minimal downtime', 'شحن موثوق بأقل توقّف'),
        p: b('Multiple charging speeds, real-time station monitoring and simple interfaces, with charging points placed where they cut waiting time.', 'سرعات شحن متعددة ومراقبة لحظية للمحطات وواجهات بسيطة، مع نقاط شحن موزّعة حيث تقلّل الانتظار.'),
        tech: b('Multi-speed chargers · live monitoring', 'شواحن متعددة السرعات · مراقبة لحظية'),
      },
      {
        h: b('Managed like part of the car park', 'تُدار كجزء من الموقف'),
        p: b('Charging plugs into parking management: app-based discovery and payment, usage data, dynamic pricing models and remote diagnostics.', 'الشحن مدمج مع إدارة المواقف: اكتشاف ودفع عبر التطبيق وبيانات استخدام ونماذج تسعير ديناميكي وتشخيص عن بُعد.'),
        tech: b('App payment · dynamic pricing · remote diagnostics', 'دفع عبر التطبيق · تسعير ديناميكي · تشخيص عن بُعد'),
      },
      {
        h: b('A visible sustainability credential', 'شهادة استدامة ظاهرة للعيان'),
        p: b('Accessible charging encourages EV adoption, uses energy-efficient technology and can draw on renewable sources — strengthening the property’s green credentials.', 'يشجّع الشحن المتاح على اعتماد السيارات الكهربائية، ويستخدم تقنيات موفّرة للطاقة ويمكنه الاعتماد على مصادر متجددة — فتتعزّز السمعة البيئية للمنشأة.'),
        tech: b('Energy-efficient · renewable-ready', 'موفّر للطاقة · جاهز للطاقة المتجددة'),
      },
    ],
    cases: ['grand-egyptian-museum', 'le-lac-du-caire'],
    industries: ['shopping-malls', 'office-buildings', 'tourist-destinations'],
    faq: ['customize', 'smart-benefits'],
  },
  {
    slug: 'on-street-parking-system',
    icon: 'street',
    img: 'sol-onstreet',
    name: b('On-Street Parking System', 'أنظمة المواقف العامة'),
    line: b('Turn curb space into a managed, measurable asset.', 'حوّل حرم الشارع إلى أصل يُدار ويُقاس.'),
    intro: b(
      'Smart sensors, mobile apps and analytics help cities and districts manage curbside parking: drivers find spaces faster, pay without cash, and operators gain the data to set prices and enforce rules.',
      'حساسات ذكية وتطبيقات جوال وتحليلات تساعد المدن والأحياء على إدارة مواقف الشوارع: يجد السائق موقفه أسرع، ويدفع دون نقد، ويحصل المشغّل على بيانات لتسعير المواقف وإنفاذ القواعد.'
    ),
    outcomes: [
      {
        h: b('Drivers can see what is free', 'السائق يرى المتاح'),
        p: b('Sensors detect open spaces and publish them on mobile apps and digital signage, with location-based guidance to the nearest spot.', 'تكتشف الحساسات المواقف الشاغرة وتعرضها في التطبيقات واللوحات الرقمية مع إرشاد حسب الموقع لأقرب موقف.'),
        tech: b('Smart sensors · app · signage', 'حساسات ذكية · تطبيق · لوحات'),
      },
      {
        h: b('Pay from the phone', 'ادفع من الهاتف'),
        p: b('App, card, contactless and pay-by-phone options replace physical meters and cash handling, with expiry reminders and clean digital records.', 'خيارات التطبيق والبطاقة والدفع دون تلامس أو عبر الهاتف تحلّ محل العدّادات والتعامل النقدي، مع تنبيهات انتهاء وسجلات رقمية واضحة.'),
        tech: b('Cashless payment · pay-by-phone', 'دفع غير نقدي · دفع عبر الهاتف'),
      },
      {
        h: b('Data for pricing and enforcement', 'بيانات للتسعير والإنفاذ'),
        p: b('Occupancy, revenue and behavior reports, dynamic pricing and integrated monitoring to reduce violations and support authorities.', 'تقارير الإشغال والإيراد والسلوك وتسعير ديناميكي ومراقبة متكاملة لتقليل المخالفات ودعم الجهات المختصة.'),
        tech: b('Analytics · dynamic pricing · enforcement', 'تحليلات · تسعير ديناميكي · إنفاذ'),
      },
    ],
    cases: [],
    industries: ['on-street-parking', 'tourist-destinations'],
    faq: ['onstreet-improve', 'customize'],
  },
  {
    slug: 'toll-gate-solutions',
    icon: 'toll',
    img: 'sol-toll',
    name: b('Toll Gate Solutions', 'بوابات العبور الذكي'),
    line: b('More vehicles through the gate — with fewer errors.', 'مركبات أكثر عبر البوابة، وأخطاء أقل.'),
    intro: b(
      'Toll technology for plazas, highways and parking exits: sensors, automated payment and real-time monitoring that cut wait times, raise throughput and keep every transaction accurate.',
      'تقنيات بوابات لمحطات الرسوم والطرق ومخارج المواقف: حساسات ودفع آلي ومراقبة لحظية تقلّل الانتظار وترفع الطاقة الاستيعابية وتضبط كل معاملة.'
    ),
    outcomes: [
      {
        h: b('Faster lanes, fewer mistakes', 'مسارات أسرع وأخطاء أقل'),
        p: b('Automated, contactless payment removes manual handling — fewer human errors, shorter waits and more secure transactions.', 'الدفع الآلي دون تلامس يلغي التعامل اليدوي: أخطاء بشرية أقل وانتظار أقصر ومعاملات أكثر أمانًا.'),
        tech: b('Automated payment', 'دفع آلي'),
      },
      {
        h: b('See congestion before it forms', 'اكتشف الازدحام قبل أن يتشكّل'),
        p: b('Real-time monitoring and live data show flow as it changes, connect to smart traffic systems and keep accurate daily collection records.', 'مراقبة لحظية وبيانات مباشرة تعرض الحركة أثناء تغيّرها، وترتبط بأنظمة المرور الذكية وتحفظ سجلات تحصيل يومية دقيقة.'),
        tech: b('Live monitoring · smart-traffic integration', 'مراقبة لحظية · تكامل مع المرور الذكي'),
      },
      {
        h: b('Built around your site', 'مصمَّمة حول موقعك'),
        p: b('Custom lane designs, scalable to traffic volume, with add-ons such as license-plate recognition and integration with existing infrastructure.', 'تصاميم مسارات مخصّصة قابلة للتوسّع مع حجم الحركة، وإضافات مثل التعرّف على اللوحات والتكامل مع البنية القائمة.'),
        tech: b('LPR add-on · scalable design', 'إضافة التعرّف على اللوحات · تصميم قابل للتوسّع'),
      },
    ],
    cases: [],
    industries: ['airports', 'tourist-destinations'],
    faq: ['customize'],
  },
  {
    slug: 'weight-in-motion-solutions',
    icon: 'wim',
    img: 'sol-toll',
    focus: '50% 30%',
    name: b('Weight in Motion (WIM) Solutions', 'أنظمة الوزن أثناء الحركة'),
    line: b('Protect the road by weighing trucks at speed.', 'احمِ الطريق بوزن الشاحنات وهي تتحرك.'),
    intro: b(
      'WIM systems measure vehicle weight at highway speed, supporting compliance and road safety while reducing manual inspections and the damage overloaded vehicles do to the road.',
      'تقيس أنظمة الوزن أثناء الحركة وزن المركبات بسرعات الطرق السريعة، لتدعم الالتزام وسلامة الطريق وتقلّل التفتيش اليدوي وأضرار المركبات المحمّلة زيادة عن الحد.'
    ),
    outcomes: [
      {
        h: b('Weight data in real time', 'بيانات الوزن لحظيًا'),
        p: b('Accurate weight captured as each vehicle passes, reducing overload risk and improving compliance with load limits.', 'وزن دقيق يُلتقط لحظة مرور كل مركبة، ما يقلّل مخاطر الحمولة الزائدة ويحسّن الالتزام بحدود الأوزان.'),
        tech: b('Real-time weighing · compliance', 'وزن لحظي · التزام'),
      },
      {
        h: b('No manual data entry', 'بلا إدخال يدوي للبيانات'),
        p: b('Every passing vehicle is recorded automatically, with analytics that feed infrastructure planning.', 'تُسجَّل كل مركبة عابرة تلقائيًا، مع تحليلات تغذّي تخطيط البنية التحتية.'),
        tech: b('Automated data collection · analytics', 'جمع آلي للبيانات · تحليلات'),
      },
      {
        h: b('Roads that last longer', 'طرق تعمّر أطول'),
        p: b('Identifying overweight vehicles prevents road wear, lowers repair costs and lets maintenance be scheduled from data.', 'رصد المركبات الزائدة الوزن يمنع تآكل الطريق ويخفّض تكاليف الإصلاح ويتيح جدولة الصيانة اعتمادًا على البيانات.'),
        tech: b('Infrastructure protection', 'حماية البنية التحتية'),
      },
    ],
    cases: [],
    industries: ['on-street-parking'],
    faq: ['customize'],
  },
  {
    slug: 'traffic-intelligence',
    icon: 'radar',
    img: 'sol-traffic',
    name: b('Traffic Intelligence', 'أنظمة المرور الذكية'),
    line: b('Decisions from data, not guesswork.', 'قرارات من البيانات، لا من التخمين.'),
    intro: b(
      'AI, machine learning and analytics turn real-time data from sensors and cameras into insight — for cities, highways and large infrastructure projects that need to monitor, predict and respond.',
      'الذكاء الاصطناعي وتعلّم الآلة والتحليلات تحوّل بيانات الحساسات والكاميرات اللحظية إلى رؤى — للمدن والطرق السريعة ومشروعات البنية التحتية الكبرى التي تحتاج أن ترصد وتتوقّع وتستجيب.'
    ),
    outcomes: [
      {
        h: b('A live view of the network', 'رؤية مباشرة للشبكة'),
        p: b('Sensors and cameras track flow, speed and density across intersections and toll roads, feeding control centers and smart signal control.', 'حساسات وكاميرات ترصد التدفق والسرعة والكثافة عند التقاطعات وطرق الرسوم، وتغذّي مراكز التحكم وإشارات المرور الذكية.'),
        tech: b('Sensors · cameras · smart signals', 'حساسات · كاميرات · إشارات ذكية'),
      },
      {
        h: b('Forecast congestion', 'توقّع الازدحام'),
        p: b('Predictive analytics flag peak hours and likely bottlenecks, and estimate the impact of closures, events or construction — improving as the model learns.', 'تحليلات تنبؤية تحدّد ساعات الذروة والاختناقات المحتملة وتقدّر أثر الإغلاقات والفعاليات والأعمال الإنشائية، وتتحسّن مع تعلّم النموذج.'),
        tech: b('Predictive analytics · machine learning', 'تحليلات تنبؤية · تعلّم الآلة'),
      },
      {
        h: b('Respond to incidents faster', 'استجابة أسرع للحوادث'),
        p: b('Accidents, stalled vehicles and obstructions are detected automatically, alerts reach authorities, and diversion plans can be triggered to clear incidents sooner.', 'تُكتشف الحوادث والمركبات المتعطلة والعوائق تلقائيًا، وتصل التنبيهات للجهات المعنية، وتُفعَّل خطط التحويل لتسريع فتح الطريق.'),
        tech: b('Incident detection · automated diversions', 'كشف الحوادث · تحويلات آلية'),
      },
    ],
    cases: [],
    industries: ['on-street-parking', 'stadium-and-arena'],
    faq: ['smart-benefits', 'customize'],
  },
];

// The six building blocks decision-makers hear about — translated into what they do for the business.
export const stack = [
  { k: 'lpr', name: b('License-plate recognition', 'التعرّف على اللوحات'), does: b('Recognizes the car at the gate — no ticket, no stop.', 'يتعرّف على السيارة عند البوابة — بلا تذكرة وبلا توقّف.'), to: 'smart-parking-management' },
  { k: 'sensors', name: b('Sensors', 'الحساسات'), does: b('Know which spaces are free, second by second.', 'يعرف أي المواقف شاغر، ثانية بثانية.'), to: 'smart-parking-management' },
  { k: 'guidance', name: b('Parking guidance', 'التوجيه'), does: b('Sends each driver to a free space, not around the block.', 'يقود كل سائق إلى موقف شاغر بدل الدوران حول المبنى.'), to: 'parking-guidance-system' },
  { k: 'access', name: b('Access control', 'التحكّم في الدخول'), does: b('Opens for the right people, keeps the rest out.', 'يفتح للأشخاص المصرّح لهم ويمنع غيرهم.'), to: 'smart-parking-management' },
  { k: 'payments', name: b('Payment systems', 'أنظمة الدفع'), does: b('Contactless, mobile and pre-booked — paid before the exit.', 'دفع دون تلامس وعبر الجوال ومسبق — قبل الوصول للمخرج.'), to: 'smart-parking-management' },
  { k: 'traffic', name: b('Traffic intelligence', 'ذكاء المرور'), does: b('Turns flow data into forecasts and faster incident response.', 'يحوّل بيانات الحركة إلى توقعات واستجابة أسرع للحوادث.'), to: 'traffic-intelligence' },
];
