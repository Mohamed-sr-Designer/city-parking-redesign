import { b } from '../lib/i18n.mjs';

// Services = the people and operations we run. Same outcome-first structure as solutions.
export const services = [
  {
    slug: 'parking-and-traffic-consultancy',
    icon: 'compass',
    img: 'sv-consult',
    stage: 'advise',
    name: b('Parking and Traffic Consultancy', 'الاستشارات في مجال المواقف وإدارة المرور'),
    line: b('Get the plan right before the concrete is poured.', 'اضبط الخطة قبل أن تُصبّ الخرسانة.'),
    intro: b(
      'For new developments and existing facilities alike, we analyze parking demand, space use and traffic patterns, then design layouts, flows and smart-parking strategies that maximize efficiency and minimize congestion.',
      'للمشروعات الجديدة والمنشآت القائمة، نحلّل الطلب على المواقف واستخدام المساحات وأنماط الحركة، ثم نصمّم المخططات والتدفقات واستراتيجيات المواقف الذكية بما يرفع الكفاءة ويقلّل الازدحام.'
    ),
    outcomes: [
      {
        h: b('Layouts that earn their space', 'مخططات تستحق مساحتها'),
        p: b('Parking design and layout optimization: entry and exit points, signage and wayfinding, and accessible design that fits every user.', 'تصميم وتحسين مخططات المواقف: نقاط الدخول والخروج واللوحات الإرشادية وتصميم يناسب جميع المستخدمين.'),
        tech: b('Layout optimization · wayfinding · accessibility', 'تحسين المخطط · الإرشاد · إتاحة الوصول'),
      },
      {
        h: b('Evidence before investment', 'أدلة قبل الاستثمار'),
        p: b('Demand, utilization and flow analysis turns opinions into a case you can take to your board.', 'تحليل الطلب والاستخدام والحركة يحوّل الآراء إلى حجّة تعرضها على مجلس الإدارة.'),
        tech: b('Demand analysis · traffic studies', 'تحليل الطلب · دراسات حركة'),
      },
      {
        h: b('From first sketch to daily operation', 'من أول رسم حتى التشغيل اليومي'),
        p: b('We work alongside city planners, architects and developers, and can stay through implementation and ongoing management.', 'نعمل مع مخططي المدن والمعماريين والمطوّرين، ويمكننا مرافقة المشروع في التنفيذ والإدارة المستمرة.'),
        tech: b('Planning · implementation support', 'تخطيط · دعم التنفيذ'),
      },
    ],
    cases: ['grand-egyptian-museum', 'le-lac-du-caire'],
    industries: ['shopping-malls', 'office-buildings', 'educational-buildings'],
    faq: ['consultancy-who', 'customize'],
  },
  {
    slug: 'parking-management',
    icon: 'pmark',
    img: 'sv-parking',
    stage: 'operate',
    name: b('Parking Management', 'إدارة المواقف'),
    line: b('Hand us the keys. Keep the reputation.', 'سلّمنا المفاتيح، واحتفظ بسمعتك.'),
    intro: b(
      'We run the day-to-day operation of your parking — people, processes, payments and access — for commercial lots, residential garages and event spaces of every size.',
      'نتولّى التشغيل اليومي لمواقفك — الأفراد والإجراءات والمدفوعات والدخول — للمواقف التجارية والجراجات السكنية ومواقع الفعاليات بمختلف أحجامها.'
    ),
    outcomes: [
      {
        h: b('Operations that simply run', 'تشغيل يسير من تلقاء نفسه'),
        p: b('Space allocation, entry and exit oversight, routine maintenance and customer service for parkers — handled by an experienced team.', 'تخصيص المواقف والإشراف على الدخول والخروج والصيانة الدورية وخدمة المستخدمين، بفريق ذي خبرة.'),
        tech: b('Daily operations · facility management', 'تشغيل يومي · إدارة منشأة'),
      },
      {
        h: b('Payments and access, automated', 'المدفوعات والدخول آليًا'),
        p: b('Contactless and mobile payment with automated access control reduces manual handling and speeds every entry and exit.', 'الدفع دون تلامس وعبر الجوال مع التحكّم الآلي في الدخول يقلّل التعامل اليدوي ويسرّع كل دخول وخروج.'),
        tech: b('Payment · access control', 'دفع · تحكّم في الدخول'),
      },
      {
        h: b('Congestion and revenue under control', 'الازدحام والإيراد تحت السيطرة'),
        p: b('Reporting, congestion reduction and revenue management give owners a clear view of what the car park earns and how it performs.', 'التقارير وتقليل الازدحام وإدارة الإيرادات تمنح المالك صورة واضحة عمّا يحققه الموقف وكيف يؤدي.'),
        tech: b('Reporting · revenue management', 'تقارير · إدارة إيرادات'),
      },
    ],
    cases: ['zia-mall', 'mivida-complex'],
    industries: ['shopping-malls', 'office-buildings', 'hospitals'],
    faq: ['customize', 'smart-benefits'],
  },
  {
    slug: 'valet-services',
    icon: 'valet',
    img: 'sv-valet',
    stage: 'operate',
    name: b('Valet Services', 'خدمات صف السيارات'),
    line: b('White-glove arrival, on demand.', 'استقبال راقٍ عند الطلب.'),
    intro: b(
      'Valet is more than parking cars — it is the first impression of your hotel, mall, restaurant or event. Our attendants are trained to deliver a polished, efficient welcome that lets guests relax from the moment they arrive.',
      'الفاليه أكثر من ركن السيارات — إنه الانطباع الأول عن فندقك أو مولّك أو مطعمك أو فعاليتك. فريقنا مدرَّب على تقديم استقبال أنيق وسريع يتيح للضيف أن يرتاح من لحظة وصوله.'
    ),
    outcomes: [
      {
        h: b('Personalized for your venue', 'مصمَّمة لموقعك'),
        p: b('Custom valet options, courteous trained attendants who handle high volumes, VIP service for high-profile guests and real-time monitoring to avoid congestion.', 'خيارات فاليه مخصّصة وفريق مدرَّب ولبِق يتعامل مع الأعداد الكبيرة، وخدمة كبار الشخصيات ومتابعة لحظية لتفادي الازدحام.'),
        tech: b('VIP valet · real-time monitoring', 'فاليه كبار الشخصيات · متابعة لحظية'),
      },
      {
        h: b('Faster arrivals, fewer queues', 'وصول أسرع وطوابير أقل'),
        p: b('An optimized layout and live tracking of spaces and vehicle movement keep arrivals and departures flowing without build-up at the entrance.', 'مخطط محسَّن وتتبّع مباشر للمواقف وحركة السيارات يبقيان الوصول والمغادرة سلسَين دون تكدّس عند المدخل.'),
        tech: b('Layout optimization · live tracking', 'تحسين المخطط · تتبّع مباشر'),
      },
      {
        h: b('Safe hands', 'في أيدٍ أمينة'),
        p: b('Trained attendants, secure procedures and controlled vehicle handling protect guests’ cars and your reputation.', 'فريق مدرَّب وإجراءات آمنة وتعامل منضبط مع السيارات يحمي سيارات الضيوف وسمعتك.'),
        tech: b('Trained attendants · secure procedures', 'فريق مدرَّب · إجراءات آمنة'),
      },
    ],
    cases: ['masr-al-mahrousa', 'marrasi-north-coast', 'mivida-complex', 'north-square-mall', 'polaris-mall'],
    industries: ['shopping-malls', 'event-venues', 'hospitals', 'tourist-destinations'],
    faq: ['valet-safe', 'valet-trained'],
  },
  {
    slug: 'traffic-management',
    icon: 'cone',
    img: 'sv-traffic',
    stage: 'operate',
    name: b('Traffic Management', 'إدارة الحركة المرورية'),
    line: b('Keep everything moving, even on your busiest day.', 'أبقِ كل شيء في حركة، حتى في أكثر أيامك ازدحامًا.'),
    intro: b(
      'We plan and control the flow of vehicles in and around your facility or event — combining analysis, dynamic signage, automated barriers and on-site personnel — so movement stays safe and predictable.',
      'نخطّط ونتحكّم في تدفق المركبات داخل منشأتك أو فعاليتك وحولها — بالجمع بين التحليل واللوحات الديناميكية والحواجز الآلية والأفراد في الموقع — لتبقى الحركة آمنة ومتوقّعة.'
    ),
    outcomes: [
      {
        h: b('Congestion and flow control', 'ضبط الازدحام والتدفق'),
        p: b('We analyze traffic patterns, find the problem areas and design flow plans for peak times, backed by data to predict busy periods.', 'نحلّل أنماط الحركة ونحدّد نقاط المشكلة ونصمّم خطط تدفق لأوقات الذروة، مدعومة ببيانات لتوقّع الفترات المزدحمة.'),
        tech: b('Flow plans · data analytics', 'خطط تدفق · تحليل بيانات'),
      },
      {
        h: b('Safety for drivers and pedestrians', 'سلامة للسائقين والمشاة'),
        p: b('Dynamic signage, automated barriers and traffic-control devices, with on-site personnel guiding vehicles and separating pedestrian routes.', 'لوحات ديناميكية وحواجز آلية وأدوات ضبط مروري، مع أفراد في الموقع يوجّهون المركبات ويفصلون مسارات المشاة.'),
        tech: b('Dynamic signage · barriers · on-site teams', 'لوحات ديناميكية · حواجز · فرق ميدانية'),
      },
      {
        h: b('Proactive at the peak', 'استباقي في الذروة'),
        p: b('An experienced team and advanced systems keep operations smooth during large events and rush hours, at a sensible cost.', 'فريق ذو خبرة وأنظمة متقدمة يحافظان على سلاسة التشغيل في الفعاليات الكبرى وساعات الذروة وبتكلفة معقولة.'),
        tech: b('Command center · peak planning', 'مركز عمليات · تخطيط الذروة'),
      },
    ],
    cases: ['alamein-festival', 'egyptian-international-exhibition-center', 'salah-eldeen-citadel', 'mivida-complex'],
    industries: ['event-venues', 'stadium-and-arena', 'tourist-destinations', 'hospitals'],
    faq: ['traffic-improve', 'customize'],
  },
  {
    slug: 'event-parking',
    icon: 'event',
    img: 'event-aerial',
    stage: 'operate',
    name: b('Event Parking & Traffic Management', 'إدارة المواقف والحركة المرورية للفعاليات'),
    line: b('Make the arrival part of the show.', 'اجعل الوصول جزءًا من العرض.'),
    intro: b(
      'Festivals, concerts, exhibitions and conferences need a specialized approach. We work with organizers on a detailed parking strategy — from planning to execution — so attendees arrive and leave without hassle.',
      'المهرجانات والحفلات والمعارض والمؤتمرات تحتاج نهجًا متخصصًا. نعمل مع المنظّمين على استراتيجية مواقف تفصيلية — من التخطيط إلى التنفيذ — ليصل الحضور ويغادر دون عناء.'
    ),
    outcomes: [
      {
        h: b('A parking plan built with the organizer', 'خطة مواقف تُبنى مع المنظّم'),
        p: b('Optimized layouts, clear routing and strategic planning that absorb high-volume arrivals and reduce congestion on approach roads.', 'مخططات محسَّنة وتوجيه واضح وتخطيط استراتيجي يستوعب الوصول الكثيف ويخفّف الازدحام على طرق الاقتراب.'),
        tech: b('Layout design · traffic routing', 'تصميم مخططات · توجيه الحركة'),
      },
      {
        h: b('Technology that scales for the day', 'تقنية تتوسّع ليوم الحدث'),
        p: b('Rapid-deployment gates, portable signage and cashless pre-booking bring smart-parking control to temporary sites.', 'بوابات سريعة النشر ولوحات متنقلة وحجز مسبق دون نقد تجلب التحكّم الذكي إلى المواقع المؤقتة.'),
        tech: b('Temporary LPR gates · portable signage · pre-booking', 'بوابات مؤقتة · لوحات متنقلة · حجز مسبق'),
      },
      {
        h: b('People who know crowds', 'فريق يعرف الحشود'),
        p: b('Trained attendants and traffic coordinators greet guests courteously from arrival to departure, and keep VIP, artist and general lanes separate.', 'منظّمو حركة ومشرفون مدرَّبون يستقبلون الضيوف بلباقة من الوصول حتى المغادرة، ويفصلون مسارات كبار الشخصيات والفنانين والجمهور.'),
        tech: b('Trained attendants · zoned lanes', 'فريق مدرَّب · مسارات مقسّمة'),
      },
    ],
    cases: ['alamein-festival', 'ulter-techno-events', 'egyptian-international-exhibition-center'],
    industries: ['event-venues', 'stadium-and-arena', 'tourist-destinations'],
    faq: ['event-what', 'valet-trained'],
  },
  {
    slug: 'meet-and-greet-services',
    icon: 'greet',
    img: 'sv-meet',
    stage: 'operate',
    name: b('Meet and Greet Services', 'خدمات الاستقبال والترحيب'),
    line: b('A personal welcome for the guests who matter most.', 'استقبال شخصي للضيوف الأهم.'),
    intro: b(
      'Trained parking attendants greet each guest, take care of their vehicle and remove every parking decision — an elevated experience for corporate events, hotels, high-profile occasions and daily VIP arrivals.',
      'يستقبل مضيفون مدرَّبون كل ضيف ويتولّون سيارته ويُزيلون عنه أي قرار يخصّ الموقف — تجربة راقية للفعاليات المؤسسية والفنادق والمناسبات الكبرى وكبار الزوار يوميًا.'
    ),
    outcomes: [
      {
        h: b('A personal welcome', 'ترحيب شخصي'),
        p: b('Friendly, professional attendants and seamless drop-off and retrieval, tailored to your corporate event, hotel or occasion.', 'مضيفون ودودون ومحترفون وتسليم واسترجاع سلس للسيارة، بحسب فعاليتك المؤسسية أو فندقك أو مناسبتك.'),
        tech: b('Attendants · drop-off & retrieval', 'مضيفون · تسليم واسترجاع'),
      },
      {
        h: b('Secure vehicle handling', 'تعامل آمن مع السيارة'),
        p: b('A dedicated valet team, designated secure areas and real-time vehicle tracking keep guests’ cars safe.', 'فريق فاليه مخصّص ومناطق آمنة محدّدة وتتبّع لحظي للسيارات يحفظ سيارات الضيوف.'),
        tech: b('Real-time vehicle tracking · secure areas', 'تتبّع لحظي · مناطق آمنة'),
      },
      {
        h: b('Time saved, stress removed', 'وقت موفَّر وقلق مُزال'),
        p: b('Guests walk straight in. Parking stops being a decision and becomes part of the hospitality.', 'يدخل الضيف مباشرة. ويتحوّل الموقف من قرار يشغله إلى جزء من الضيافة.'),
        tech: b('Premium valet experience', 'تجربة فاليه فاخرة'),
      },
    ],
    cases: ['mivida-complex', 'marrasi-north-coast', 'grand-egyptian-museum'],
    industries: ['shopping-malls', 'event-venues', 'office-buildings'],
    faq: ['valet-trained'],
  },
  {
    slug: 'golf-cart-services',
    icon: 'cart',
    img: 'sv-golf',
    stage: 'operate',
    name: b('Golf Cart Services', 'خدمات عربات الجولف'),
    line: b('Move guests across large sites — without moving their cars.', 'انقل الضيوف عبر المواقع الكبيرة، دون تحريك سياراتهم.'),
    intro: b(
      'A flexible, eco-friendly way to move guests, staff and goods across resorts, event venues, hospitals and campuses. We provide rental, fleet management and maintenance, tailored to terrain and use.',
      'وسيلة نقل مرنة وصديقة للبيئة لنقل الضيوف والعاملين والبضائع داخل المنتجعات ومواقع الفعاليات والمستشفيات والحرم الجامعي. نوفّر التأجير وإدارة الأسطول والصيانة بما يناسب الموقع والاستخدام.'
    ),
    outcomes: [
      {
        h: b('Flexible rental', 'تأجير مرن'),
        p: b('Short- and long-term plans, customizable carts to match your branding, delivery and pickup — for weddings, conferences, tournaments and daily operations.', 'خطط قصيرة وطويلة الأجل وعربات قابلة للتخصيص بهوية علامتك مع التوصيل والاستلام — للأعراس والمؤتمرات والبطولات والتشغيل اليومي.'),
        tech: b('Rental · branding · delivery', 'تأجير · هوية · توصيل'),
      },
      {
        h: b('Fleet managed end to end', 'أسطول يُدار من الألف للياء'),
        p: b('Planning, deployment, routine maintenance, repairs and performance monitoring keep every cart available and downtime low.', 'تخطيط ونشر وصيانة دورية وإصلاح ومتابعة أداء تُبقي كل عربة متاحة وتقلّل التوقف.'),
        tech: b('Fleet management · maintenance', 'إدارة أسطول · صيانة'),
      },
      {
        h: b('Comfort, safety and less foot traffic', 'راحة وأمان وازدحام مشاة أقل'),
        p: b('Short-distance transit that eases movement across large properties and reduces pedestrian congestion.', 'نقل لمسافات قصيرة يسهّل التنقّل داخل الممتلكات الكبيرة ويخفّف ازدحام المشاة.'),
        tech: b('Eco-friendly mobility', 'تنقّل صديق للبيئة'),
      },
    ],
    cases: ['marrasi-north-coast'],
    industries: ['event-venues', 'tourist-destinations', 'hospitals', 'educational-buildings'],
    faq: ['golf-fleet'],
  },
  {
    slug: 'waterless-car-wash',
    icon: 'drop',
    img: 'sv-wash',
    stage: 'operate',
    name: b('Waterless Car Wash', 'غسيل السيارات بدون ماء'),
    line: b('Care for guests’ cars while they are with you — and save the water.', 'اعتنِ بسيارات الضيوف أثناء وجودهم، ووفّر الماء.'),
    intro: b(
      'A sustainable, convenient way to keep vehicles clean while they are parked — perfect for busy professionals and event guests, using specially formulated products and trained staff, with no rinsing.',
      'طريقة مستدامة ومريحة للحفاظ على نظافة السيارات أثناء توقفها — مثالية للمهنيين المشغولين وضيوف الفعاليات، بمنتجات مخصّصة وفريق مدرَّب ودون شطف.'
    ),
    outcomes: [
      {
        h: b('Eco-friendly by design', 'صديق للبيئة بطبيعته'),
        p: b('No water needed — up to 150 liters saved per wash — with biodegradable, non-toxic products and minimal environmental impact.', 'دون ماء — توفير يصل إلى 150 لترًا لكل غسلة — بمنتجات قابلة للتحلّل وغير سامة وأثر بيئي ضئيل.'),
        tech: b('Up to 150 L saved per wash', 'توفير حتى 150 لترًا للغسلة'),
      },
      {
        h: b('Done while they are parked', 'يتم أثناء توقف السيارة'),
        p: b('The car is cleaned on site while parked — no extra stop, ideal for professionals and event attendees.', 'تُنظَّف السيارة في الموقع أثناء توقفها — دون محطة إضافية، مثالي للمهنيين وحضور الفعاليات.'),
        tech: b('On-site · quick service', 'في الموقع · خدمة سريعة'),
      },
      {
        h: b('Suitable for every vehicle', 'يناسب كل المركبات'),
        p: b('From sedans to SUVs: a quick clean or a more detailed wash by trained staff.', 'من السيارات الصغيرة إلى الدفع الرباعي: تنظيف سريع أو غسيل أكثر تفصيلًا بفريق مدرَّب.'),
        tech: b('Trained staff', 'فريق مدرَّب'),
      },
    ],
    cases: [],
    industries: ['office-buildings', 'shopping-malls', 'event-venues'],
    faq: ['customize'],
  },
];
