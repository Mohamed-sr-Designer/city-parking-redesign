import { b } from '../lib/i18n.mjs';

// Industries = "segments" on the old site. Reframed around the decision-maker who owns the outcome.
export const industries = [
  {
    slug: 'shopping-malls',
    icon: 'bag',
    img: 'zia',
    name: b('Shopping Malls', 'مراكز التسوق'),
    who: b('Mall GMs · Asset managers · Retail directors', 'المديرون العامون · مديرو الأصول · مديرو التجزئة'),
    ask: b('Is your car park helping the visit — or hurting it?', 'هل يخدم موقف سيارتك الزيارة — أم يضرّ بها؟'),
    intro: b(
      'Parking is the first touchpoint of a shopping trip. We make it fast to find a space, easy to pay and effortless for VIP shoppers — even on the busiest weekend.',
      'المواقف هي أول نقطة تماس في رحلة التسوّق. نجعل العثور على موقف سريعًا والدفع سهلًا وخدمة كبار المتسوّقين سلسة — حتى في أكثر عطلات الأسبوع ازدحامًا.'
    ),
    outcomes: [
      { h: b('Find a space in seconds, not circles', 'موقف في ثوانٍ لا في دوائر'), p: b('Real-time space tracking, digital wayfinding, app integration and automatic barriers keep vehicles moving.', 'تتبّع لحظي للمواقف وإرشاد رقمي وتكامل مع التطبيق وحواجز آلية تُبقي المركبات في حركة.') },
      { h: b('Pay without stopping', 'ادفع دون توقّف'), p: b('Mobile and card payment, automated terminals and loyalty-programme integration cut queues and bring shoppers back.', 'دفع بالجوال والبطاقة ومحطات آلية وتكامل مع برامج الولاء تقلّل الطوابير وتعيد المتسوّق مرة أخرى.') },
      { h: b('A red-carpet welcome for VIP shoppers', 'استقبال خاص لكبار المتسوّقين'), p: b('Premium valet, priority spaces near entrances and added security for high-value vehicles.', 'فاليه فاخر ومواقف ذات أولوية قرب المداخل وأمان إضافي للسيارات عالية القيمة.') },
    ],
    cases: ['zia-mall', 'masr-al-mahrousa', 'north-square-mall', 'polaris-mall'],
    solutions: ['parking-guidance-system', 'smart-parking-management'],
    services: ['valet-services', 'traffic-management'],
    faq: ['mall-services', 'mall-peaks'],
  },
  {
    slug: 'airports',
    icon: 'plane',
    img: 'ind-airports',
    name: b('Airports', 'المطارات'),
    who: b('Airport operators · Commercial directors', 'مشغّلو المطارات · مديرو الأعمال التجارية'),
    ask: b('Is your parking yielding what it should — and moving as fast as your terminals?', 'هل تحقّق مواقفك ما ينبغي — وهل تتحرك بسرعة مبانيك؟'),
    intro: b(
      'Travelers, employees and visitors all park differently. We give airports the visibility, automation and premium options to serve short-stay, long-stay and staff parking without bottlenecks.',
      'يركن المسافرون والموظفون والزوار بطرق مختلفة. نمنح المطارات الرؤية والأتمتة والخيارات المميّزة لخدمة المواقف القصيرة والطويلة ومواقف العاملين دون اختناقات.'
    ),
    outcomes: [
      { h: b('See and steer every space', 'رؤية وتوجيه لكل موقف'), p: b('Real-time space monitoring and digital signage direct drivers to open spots, easing congestion and improving traffic flow.', 'مراقبة لحظية للمواقف ولوحات رقمية توجّه السائقين للمواقف المفتوحة وتخفّف الازدحام وتحسّن التدفق.') },
      { h: b('Payment and gates that keep pace', 'دفع وبوابات تواكب الإيقاع'), p: b('Contactless payment, automated barriers and integration with airport loyalty and travel apps for quick entry and exit.', 'دفع دون تلامس وحواجز آلية وتكامل مع برامج الولاء وتطبيقات السفر لدخول وخروج سريعين.') },
      { h: b('Premium options at the terminal door', 'خيارات مميّزة عند باب المبنى'), p: b('Valet and premium zones near terminal entrances for business travelers and VIPs, with added security for long-term vehicles.', 'فاليه ومناطق مميّزة قرب مداخل المبنى لرجال الأعمال وكبار الزوار، مع أمان إضافي للمركبات طويلة المكوث.') },
    ],
    cases: [],
    solutions: ['smart-parking-management', 'parking-guidance-system'],
    services: ['valet-services', 'parking-management'],
    quote: true,
    faq: ['smart-benefits', 'customize'],
  },
  {
    slug: 'hospitals',
    icon: 'cross',
    img: 'ind-hospitals',
    name: b('Hospitals', 'المستشفيات'),
    who: b('Hospital administrators · Facility directors', 'مديرو المستشفيات · مديرو المرافق'),
    ask: b('Can patients and ambulances reach the door without a fight for parking?', 'هل يصل المرضى وسيارات الإسعاف إلى الباب دون صراع على موقف؟'),
    intro: b(
      'In a hospital, time and convenience are critical. We design parking that prioritizes patient care, safety and accessibility — for patients, visitors, staff and emergency vehicles.',
      'في المستشفى، الوقت والراحة أمران حاسمان. نصمّم مواقف تضع رعاية المريض والسلامة وسهولة الوصول أولًا — للمرضى والزوار والعاملين ومركبات الطوارئ.'
    ),
    outcomes: [
      { h: b('Accessible for every patient', 'متاحة لكل مريض'), p: b('Accessible spaces and pathways, designated drop-off zones for patients and elderly visitors, and guidance that makes navigation easy.', 'مواقف وممرات ميسّرة ومناطق نزول مخصّصة للمرضى وكبار السن وتوجيه يسهّل الوصول.') },
      { h: b('Routes that stay open for emergencies', 'مسارات مفتوحة للطوارئ'), p: b('Dedicated zones and fast routes for emergency vehicles, plus live availability and shift-friendly management for staff.', 'مناطق ومسارات سريعة لمركبات الطوارئ، مع إتاحة لحظية وإدارة مناسبة لورديات العاملين.') },
      { h: b('Help for those who need it most', 'مساندة لمن يحتاجها'), p: b('Convenient valet for visitors in need, quick retrieval in emergencies and premium options for executives and VIPs.', 'فاليه ميسّر للزوار المحتاجين واسترجاع سريع للسيارة في الطوارئ وخيارات مميّزة للإدارة وكبار الزوار.') },
    ],
    cases: [],
    solutions: ['parking-guidance-system', 'smart-parking-management'],
    services: ['valet-services', 'traffic-management'],
    faq: ['smart-benefits', 'customize'],
  },
  {
    slug: 'stadium-and-arena',
    icon: 'stadium',
    img: 'ind-stadium',
    name: b('Stadium & Arena', 'الاستادات والساحات'),
    who: b('Venue operators · Promoters · Sports federations', 'مشغّلو المقارّ · منظّمو الفعاليات · الاتحادات الرياضية'),
    ask: b('Can your venue fill and empty without gridlock?', 'هل يمتلئ مقرّك ويفرغ دون اختناق؟'),
    intro: b(
      'Sports, concerts and entertainment bring crowds that arrive together and leave together. We plan crowd control, flow and premium access so that the parking is part of a good event.',
      'الرياضة والحفلات والترفيه تجلب حشودًا تصل معًا وتغادر معًا. نخطّط ضبط الحشود والتدفق والوصول المميّز ليكون الموقف جزءًا من فعالية ناجحة.'
    ),
    outcomes: [
      { h: b('Built for large-scale events', 'مصمَّمة للفعاليات الكبرى'), p: b('Layouts for high vehicle volumes, flow strategies that reduce bottlenecks, and dedicated zones for VIPs, staff and event personnel.', 'مخططات للأحجام الكبيرة واستراتيجيات تدفق تقلّل الاختناقات ومناطق مخصّصة لكبار الضيوف والعاملين وفرق الحدث.') },
      { h: b('Smart tech that scales', 'تقنية ذكية تتّسع'), p: b('Digital wayfinding, contactless payment, mobile reservations and automated barriers for quick entry and exit.', 'إرشاد رقمي ودفع دون تلامس وحجز عبر الجوال وحواجز آلية لدخول وخروج سريعين.') },
      { h: b('Premium for those who expect it', 'مميّزة لمن يتوقعها'), p: b('Valet for VIP attendees, reserved spaces near entrances and fast retrieval for quicker exits after the event.', 'فاليه لكبار الحضور ومواقف محجوزة قرب المداخل واسترجاع سريع للمغادرة بعد الحدث.') },
    ],
    cases: ['alamein-festival', 'ulter-techno-events', 'egyptian-international-exhibition-center'],
    solutions: ['smart-parking-management', 'traffic-intelligence'],
    services: ['event-parking', 'traffic-management'],
    faq: ['event-what', 'traffic-improve'],
  },
  {
    slug: 'on-street-parking',
    icon: 'street',
    img: 'ind-onstreet',
    name: b('On-Street Parking', 'مواقف السيارات العامة'),
    who: b('Municipalities · Governorates · District authorities', 'البلديات · المحافظات · إدارات الأحياء'),
    ask: b('Is your curb space managed — or just occupied?', 'هل حرم شوارعك مُدار — أم مشغول فقط؟'),
    intro: b(
      'On-street parking has limited space, heavy demand and compliance to enforce. We help cities give residents, visitors and businesses a better experience — and give authorities the data to run it.',
      'مواقف الشوارع محدودة المساحة وعالية الطلب وتحتاج إنفاذًا. نساعد المدن على تقديم تجربة أفضل للسكان والزوار والأعمال — وتزويد الجهات بالبيانات اللازمة لإدارتها.'
    ),
    outcomes: [
      { h: b('Guidance that cuts circling', 'توجيه يقلّل الدوران'), p: b('Real-time monitoring of on-street spaces with signage and apps, less time spent searching and data to tune availability.', 'مراقبة لحظية لمواقف الشوارع مع لوحات وتطبيقات، ووقت بحث أقل وبيانات لضبط الإتاحة.') },
      { h: b('Cashless, contactless payment', 'دفع غير نقدي ودون تلامس'), p: b('Mobile app and kiosk payment that integrates with existing meters, with automated ticketing and secure options.', 'دفع عبر التطبيق والأكشاك يتكامل مع العدّادات القائمة، مع مخالفات آلية وخيارات آمنة.') },
      { h: b('Enforcement that keeps up', 'إنفاذ يواكب الحركة'), p: b('Automated compliance monitoring, real-time tracking of violations and expired meters, and integration with local authorities.', 'مراقبة آلية للالتزام وتتبّع لحظي للمخالفات وانتهاء العدّادات وتكامل مع الجهات المحلية.') },
    ],
    cases: [],
    solutions: ['on-street-parking-system', 'traffic-intelligence'],
    services: ['parking-management', 'parking-and-traffic-consultancy'],
    faq: ['onstreet-improve', 'customize'],
  },
  {
    slug: 'office-buildings',
    icon: 'office',
    img: 'ind-office',
    name: b('Office Buildings', 'المباني الإدارية'),
    who: b('Building managers · Corporate real-estate heads', 'مديرو المباني · رؤساء العقارات المؤسسية'),
    ask: b('Does your parking reflect the professionalism of your business?', 'هل تعكس مواقفك احترافية عملك؟'),
    intro: b(
      'Employees, clients and visitors form an impression before they reach the lobby. We manage parking for large workforces so it feels as organized as the business inside.',
      'يكوّن الموظفون والعملاء والزوار انطباعًا قبل أن يصلوا إلى الردهة. ندير المواقف لأعداد كبيرة من العاملين لتبدو منظّمة كالعمل في الداخل.'
    ),
    outcomes: [
      { h: b('Smart allocation for large workforces', 'تخصيص ذكي لأعداد كبيرة'), p: b('Real-time space tracking, wayfinding, mobile reservations and automated barriers for smooth entry and exit at peak hours.', 'تتبّع لحظي للمواقف وإرشاد وحجز عبر الجوال وحواجز آلية لدخول وخروج سلسين وقت الذروة.') },
      { h: b('Zones for every audience', 'مناطق لكل فئة'), p: b('Reserved spaces for executives and VIP clients, employee areas, visitor parking near the entrance and secure parking for company vehicles.', 'مواقف محجوزة للتنفيذيين وعملاء كبار وأخرى للموظفين وللزوار قرب المدخل ومواقف آمنة لمركبات الشركة.') },
      { h: b('Access that fits building security', 'دخول يتوافق مع أمن المبنى'), p: b('Contactless payment for visitors, mobile or RFID access for employees and integration with building security.', 'دفع دون تلامس للزوار ودخول بالجوال أو RFID للموظفين وتكامل مع أمن المبنى.') },
    ],
    cases: [],
    solutions: ['smart-parking-management', 'ev-charging'],
    services: ['parking-management', 'meet-and-greet-services'],
    faq: ['customize', 'smart-benefits'],
  },
  {
    slug: 'event-venues',
    icon: 'ticket',
    img: 'ind-events',
    name: b('Event Venues', 'أماكن الفعاليات'),
    who: b('Venue managers · Event organizers · Hospitality leads', 'مديرو المقارّ · منظّمو الفعاليات · قادة الضيافة'),
    ask: b('Do your guests arrive relaxed — or already stressed?', 'هل يصل ضيوفك مرتاحين — أم متوترين بالفعل؟'),
    intro: b(
      'For concerts, conferences and weddings, parking is often the first interaction guests have with your event. We create a positive first impression with hassle-free arrival at any scale.',
      'في الحفلات والمؤتمرات والأعراس، غالبًا ما تكون المواقف أول تفاعل للضيوف مع فعاليتك. نصنع انطباعًا أول إيجابيًا بوصول سلس مهما كان الحجم.'
    ),
    outcomes: [
      { h: b('Flexible and scalable', 'مرنة وقابلة للتوسّع'), p: b('Custom layouts for each event size, live space monitoring, flow strategies and solutions that handle large crowds at peak hours.', 'مخططات مخصّصة لحجم كل فعالية ومراقبة لحظية للمواقف واستراتيجيات تدفق وحلول تتحمّل الحشود وقت الذروة.') },
      { h: b('Smart technology for the day', 'تقنية ذكية ليوم الحدث'), p: b('Digital signage and app integration, contactless payment, mobile reservations for VIP and premium parking, automated barriers.', 'لوحات رقمية وتكامل مع التطبيق ودفع دون تلامس وحجز عبر الجوال للمواقف المميّزة وحواجز آلية.') },
      { h: b('VIP and special-event service', 'خدمة كبار الضيوف والمناسبات'), p: b('Dedicated VIP areas for guests and sponsors, valet for high-profile attendees and private events, and quick drop-off and retrieval.', 'مناطق مخصّصة لكبار الضيوف والرعاة وفاليه للحضور رفيعي المستوى والمناسبات الخاصة وتسليم واسترجاع سريعان.') },
    ],
    cases: ['alamein-festival', 'egyptian-international-exhibition-center', 'ulter-techno-events'],
    solutions: ['smart-parking-management', 'parking-guidance-system'],
    services: ['event-parking', 'valet-services', 'golf-cart-services'],
    faq: ['event-what', 'valet-trained'],
  },
  {
    slug: 'educational-buildings',
    icon: 'cap',
    img: 'ind-edu',
    name: b('Educational Buildings', 'المباني التعليمية'),
    who: b('University administrators · School operators', 'مديرو الجامعات · مشغّلو المدارس'),
    ask: b('Can students, faculty and parents all arrive on time — and safely?', 'هل يصل الطلاب وأعضاء هيئة التدريس وأولياء الأمور في الوقت المناسب — وبأمان؟'),
    intro: b(
      'Campuses must balance students, faculty, visitors and staff while keeping people safe. We provide scalable parking that lets institutions focus on their mission of education.',
      'على الحرم الجامعي أن يوازن بين الطلاب وأعضاء التدريس والزوار والعاملين مع الحفاظ على سلامة الجميع. نوفّر مواقف قابلة للتوسّع تتيح للمؤسسة التركيز على رسالتها التعليمية.'
    ),
    outcomes: [
      { h: b('Smart systems for campus scale', 'أنظمة ذكية بحجم الحرم'), p: b('Real-time space tracking for students and staff, digital wayfinding across campus, mobile reservations and contactless entry.', 'تتبّع لحظي للمواقف للطلاب والعاملين وإرشاد رقمي داخل الحرم وحجز عبر الجوال ودخول دون تلامس.') },
      { h: b('Faculty and visitor management', 'إدارة أعضاء التدريس والزوار'), p: b('Reserved areas for faculty and administration, visitor parking near main entrances, and support for campus events and parent visits.', 'مناطق محجوزة لأعضاء التدريس والإدارة ومواقف للزوار قرب المداخل الرئيسية ودعم لفعاليات الحرم وزيارات أولياء الأمور.') },
      { h: b('Accessibility and safety first', 'إتاحة الوصول والسلامة أولًا'), p: b('Designated accessible spaces, safe drop-off and pick-up zones for parents and school buses, and well-lit, monitored lots.', 'مواقف مخصّصة لذوي الإعاقة ومناطق نزول واستلام آمنة لأولياء الأمور وحافلات المدارس ومواقف مضاءة ومراقبة.') },
    ],
    cases: [],
    solutions: ['smart-parking-management', 'parking-guidance-system'],
    services: ['parking-and-traffic-consultancy', 'traffic-management'],
    faq: ['customize', 'smart-benefits'],
  },
  {
    slug: 'tourist-destinations',
    icon: 'pyramid',
    img: 'ind-tourist',
    name: b('Tourist Destinations', 'الوجهات السياحية'),
    who: b('Tourism boards · Attraction operators · Heritage authorities', 'هيئات السياحة · مشغّلو المزارات · جهات التراث'),
    ask: b('Is the first thing visitors experience a parking struggle?', 'هل أول ما يواجهه الزائر هو معاناة الموقف؟'),
    intro: b(
      'Peak seasons bring tour buses, groups and individual visitors to the same gates. We partner with tourism boards and attraction operators so visitors can focus on the experience.',
      'تجلب المواسم حافلات ومجموعات وزوّارًا أفرادًا إلى البوابات نفسها. نتعاون مع هيئات السياحة ومشغّلي المزارات ليركّز الزائر على التجربة.'
    ),
    outcomes: [
      { h: b('Smart arrival technology', 'تقنية وصول ذكية'), p: b('Real-time availability through mobile apps, digital signage, contactless payment and automated barriers for fast entry and exit.', 'إتاحة لحظية عبر التطبيقات ولوحات رقمية ودفع دون تلامس وحواجز آلية لدخول وخروج سريعين.') },
      { h: b('Flexible for groups and individuals', 'مرنة للمجموعات والأفراد'), p: b('Solutions for tour groups and single visitors, scalable for peak seasons, with overflow management and zones for VIPs and tour buses.', 'حلول للمجموعات السياحية والزوار الأفراد قابلة للتوسّع في المواسم، مع إدارة الفائض ومناطق لكبار الضيوف وحافلات السياحة.') },
      { h: b('A better visitor experience', 'تجربة زائر أفضل'), p: b('Convenient parking close to major attractions, accessible spaces, valet for premium visitors and secure parking for long stays.', 'مواقف مريحة قرب أبرز المزارات ومواقف ميسّرة وفاليه للزوار المميّزين ومواقف آمنة للإقامات الطويلة.') },
    ],
    cases: ['grand-egyptian-museum', 'salah-eldeen-citadel', 'cairo-opera-house'],
    solutions: ['parking-guidance-system', 'smart-parking-management'],
    services: ['traffic-management', 'valet-services', 'golf-cart-services'],
    faq: ['smart-benefits', 'customize'],
  },
];
