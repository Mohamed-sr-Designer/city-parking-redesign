import { b } from '../lib/i18n.mjs';

export const kinds = {
  retail: b('Luxury retail', 'التجزئة الفاخرة'),
  mixed: b('Mixed-use & residential', 'متعدد الاستخدامات وسكني'),
  events: b('Events & exhibitions', 'الفعاليات والمعارض'),
  culture: b('Culture & heritage', 'الثقافة والتراث'),
};

/*
  Business-story case studies. Every fact (place, date, systems, volumes) comes from the reference pages on
  cityparking-eg.com — the headline, the framing and the three-beat structure are the redesign.
  `stack` = solution / service slugs shown as "What we deployed".
*/
export const cases = [
  {
    slug: 'grand-egyptian-museum',
    name: b('Grand Egyptian Museum', 'المتحف المصري الكبير'),
    kind: 'culture',
    city: b('Giza, Egypt', 'الجيزة، مصر'),
    date: b('March 2024', 'مارس 2024'),
    year: 2024.2,
    img: 'gem',
    gallery: ['gem-crew-1', 'gem-crew-2', 'gem-crew-3'],
    headline: b('An arrival as world-class as the museum itself.', 'وصول بمستوى المتحف العالمي نفسه.'),
    summary: b('Smart guidance, contactless payment, license-plate recognition and EV charging for a museum built for millions of visitors.', 'توجيه ذكي ودفع دون تلامس وتعرّف على اللوحات وشحن كهربائي لمتحف صُمِّم لملايين الزوار.'),
    stake: b(
      'Beside the Giza Pyramids, the Grand Egyptian Museum expects millions of visitors a year. Its parking had to handle large volumes, protect the visitor experience and match world-class infrastructure — for tourists, staff and VIP guests alike.',
      'بجوار أهرامات الجيزة، يتوقّع المتحف المصري الكبير ملايين الزوار سنويًا. كان على المواقف أن تستوعب الأحجام الكبيرة وتحمي تجربة الزائر وتتناسب مع بنية تحتية عالمية — للسائح والعاملين وكبار الضيوف على حد سواء.'
    ),
    did: [
      b('Real-time parking guidance through digital signage and a mobile app, so visitors find a space fast.', 'توجيه لحظي للمواقف عبر لوحات رقمية وتطبيق جوال ليجد الزائر موقفه سريعًا.'),
      b('Dedicated zones for VIPs, tour buses and staff, with contactless payment and license-plate-secured entry and exit.', 'مناطق مخصّصة لكبار الضيوف وحافلات السياحة والعاملين، مع دفع دون تلامس ودخول وخروج مؤمَّنان بالتعرّف على اللوحات.'),
      b('EV charging stations designed in from the start, supporting the museum’s long-term sustainability goals.', 'محطات شحن كهربائي ضمن التصميم منذ البداية، تدعم أهداف المتحف الطويلة في الاستدامة.'),
    ],
    outcomes: [
      b('Less time spent searching for a space, less congestion in and around the museum.', 'وقت أقل في البحث عن موقف وازدحام أقل داخل المتحف وحوله.'),
      b('A scalable system prepared for large visitor volumes.', 'منظومة قابلة للتوسّع جاهزة لأحجام الزوار الكبيرة.'),
      b('Sustainability built into the visitor journey through EV charging.', 'الاستدامة جزء من رحلة الزائر عبر الشحن الكهربائي.'),
    ],
    stack: ['parking-guidance-system', 'smart-parking-management', 'ev-charging', 'valet-services'],
    facts: {
      req: b('Develop a smart parking management system for a world-class cultural site.', 'تطوير منظومة إدارة مواقف ذكية لموقع ثقافي عالمي.'),
      sol: b('Smart parking guidance, contactless payment, dedicated VIP and tour-bus zones, EV charging stations.', 'توجيه ذكي للمواقف ودفع دون تلامس ومناطق مخصّصة لكبار الضيوف والحافلات ومحطات شحن كهربائي.'),
      spec: b('Integrated license-plate recognition, mobile app for guidance, a system that scales for large visitor volumes.', 'تعرّف متكامل على اللوحات وتطبيق للتوجيه ومنظومة قابلة للتوسّع لأعداد الزوار الكبيرة.'),
    },
    feature: true,
  },
  {
    slug: 'mivida-complex',
    name: b('Mivida Complex', 'مجمع ميفيدا'),
    kind: 'mixed',
    city: b('New Cairo, Egypt', 'القاهرة الجديدة، مصر'),
    date: b('September 2023', 'سبتمبر 2023'),
    year: 2023.7,
    img: 'mivida',
    gallery: [],
    headline: b('A neighborhood that never stops — and never feels crowded.', 'حيّ لا يتوقف، ولا يبدو مزدحمًا أبدًا.'),
    summary: b('Multi-zone traffic management and tailored valet for residents, tenants and VIP visitors, around the clock.', 'إدارة حركة متعددة المناطق وفاليه مخصّص للسكان والمستأجرين وكبار الزوار، على مدار الساعة.'),
    stake: b(
      'Mivida blends luxury residential living with high-end retail and offices in New Cairo. Residents, office tenants, shoppers and VIPs all needed one operation that works round the clock — without ever feeling like a car park.',
      'يجمع ميفيدا بين السكن الفاخر والتجزئة الراقية والمكاتب في القاهرة الجديدة. احتاج السكان ومستأجرو المكاتب والمتسوّقون وكبار الزوار إلى تشغيل واحد يعمل على مدار الساعة — دون أن يبدو كموقف سيارات.'
    ),
    did: [
      b('A zoning strategy that separates residential, guest, retail and service-vehicle flows.', 'استراتيجية تقسيم تفصل حركة السكان والضيوف والتجزئة ومركبات الخدمة.'),
      b('Traffic attendants at key points to steer vehicles and smooth the morning and evening peaks.', 'منظّمو حركة عند النقاط الرئيسية لتوجيه المركبات وتسهيل ذروتَي الصباح والمساء.'),
      b('Personalized valet at residential lobbies and white-glove service for corporate tenants and VIPs, with dedicated zones for deliveries.', 'فاليه شخصي في مداخل السكن وخدمة راقية للشركات وكبار الزوار، مع مناطق مخصّصة للتوصيل.'),
    ],
    outcomes: [
      b('24/7 traffic-flow optimization and security across residential, retail and commercial zones.', 'تحسين للحركة وأمن على مدار الساعة عبر المناطق السكنية والتجارية.'),
      b('Discreet VIP service and secured parking with enhanced surveillance.', 'خدمة كبار الزوار بسرية ومواقف مؤمَّنة بمراقبة معزَّزة.'),
      b('Flexible support for community, retail and corporate events.', 'دعم مرن للفعاليات المجتمعية والتجارية والمؤسسية.'),
    ],
    stack: ['valet-services', 'traffic-management', 'event-parking'],
    facts: {
      req: b('Deliver a seamless parking and traffic operation for a luxury mixed-use development serving residents, tenants and visitors.', 'تقديم تشغيل سلس للمواقف والحركة لمجمع فاخر متعدد الاستخدامات يخدم السكان والمستأجرين والزوار.'),
      sol: b('Multi-zone traffic management, residential and VIP valet, dedicated service-vehicle areas, 24/7 operational oversight.', 'إدارة حركة متعددة المناطق وفاليه للسكان وكبار الزوار ومناطق مخصّصة لمركبات الخدمة وإشراف تشغيلي على مدار الساعة.'),
      spec: b('Tailored valet programs, peak-hour optimization, discreet VIP service and flexible event support.', 'برامج فاليه مخصّصة وتحسين ساعات الذروة وخدمة كبار الزوار بسرية ودعم مرن للفعاليات.'),
    },
    feature: true,
  },
  {
    slug: 'zia-mall',
    name: b('Zia Mall', 'مول زيا'),
    kind: 'retail',
    city: b('Cairo, Egypt', 'القاهرة، مصر'),
    date: b('2024', '2024'),
    year: 2024.5,
    img: 'zia',
    gallery: [],
    headline: b('A flagship smart-parking installation for a next-generation mall.', 'منظومة مواقف ذكية رائدة لمول من الجيل الجديد.'),
    summary: b('AI-powered guidance, automated plate recognition and digital VIP valet — run from one command center.', 'توجيه بالذكاء الاصطناعي وتعرّف آلي على اللوحات وفاليه رقمي لكبار الزوار — يُدار من مركز عمليات واحد.'),
    stake: b(
      'Zia Mall is a next-generation luxury retail destination. It needed a fully integrated smart-parking ecosystem — not a patchwork of separate systems — to serve as its premium parking solution.',
      'زيا مول وجهة تجزئة فاخرة من الجيل الجديد. احتاج إلى منظومة مواقف ذكية متكاملة — لا مجموعة أنظمة منفصلة — تكون حلّه الأمثل للمواقف.'
    ),
    did: [
      b('An AI-powered parking guidance system with real-time space availability and automated vehicle counting.', 'نظام توجيه بالذكاء الاصطناعي بإتاحة لحظية للمواقف وعدّ آلي للمركبات.'),
      b('Automated license-plate recognition for entry and exit.', 'تعرّف آلي على اللوحات للدخول والخروج.'),
      b('Premium valet with digital VIP management, coordinated from a centralized operational command center.', 'فاليه فاخر بإدارة رقمية لكبار الزوار، بتنسيق من مركز عمليات مركزي.'),
    ],
    outcomes: [
      b('Real-time availability and guidance across the property.', 'إتاحة وتوجيه لحظيان في أرجاء المول.'),
      b('Data-driven optimization for peak performance.', 'تحسين مبني على البيانات لأداء الذروة.'),
      b('One command center managing traffic flow and VIP service live.', 'مركز عمليات واحد يدير الحركة وخدمة كبار الزوار مباشرة.'),
    ],
    stack: ['parking-guidance-system', 'smart-parking-management', 'valet-services', 'parking-management'],
    facts: {
      req: b('Design and implement a fully integrated smart-parking ecosystem for a next-generation luxury mall.', 'تصميم وتنفيذ منظومة مواقف ذكية متكاملة لمول فاخر من الجيل الجديد.'),
      sol: b('AI-powered guidance system (PGS), automated license-plate recognition (LPR), premium valet, centralized command center.', 'نظام توجيه بالذكاء الاصطناعي وتعرّف آلي على اللوحات وفاليه فاخر ومركز عمليات مركزي.'),
      spec: b('Flagship smart-system installation: real-time guidance, automated counting, digital VIP valet management.', 'تركيب منظومة ذكية رائدة: توجيه لحظي وعدّ آلي وإدارة رقمية لفاليه كبار الزوار.'),
    },
    feature: true,
  },
  {
    slug: 'alamein-festival',
    name: b('Alamein Festival', 'مهرجان العلمين'),
    kind: 'events',
    city: b('Alamein, Egypt', 'العلمين، مصر'),
    date: b('Seasonal · annual', 'موسمي · سنوي'),
    year: 2024.9,
    img: 'alamein',
    gallery: ['event-aerial'],
    headline: b('20,000+ vehicles in one festival weekend — and a welcome to match the music.', 'أكثر من 20,000 مركبة في عطلة مهرجان واحدة — واستقبال يليق بالموسيقى.'),
    summary: b('Official parking and traffic operations partner for a multi-day coastal festival.', 'شريك تشغيل المواقف والحركة الرسمي لمهرجان ساحلي متعدد الأيام.'),
    stake: b(
      'A seasonal coastal festival on sprawling, unpaved terrain draws thousands over multi-day celebrations. Access had to cope with surges at peak performance times, keep the relaxed festival atmosphere and keep everyone safe.',
      'مهرجان ساحلي موسمي على أرض واسعة غير ممهّدة يجذب الآلاف على مدى أيام. كان على منظومة الوصول أن تتحمّل الذروات وقت العروض الكبرى وتحافظ على أجواء المهرجان المريحة وتضمن سلامة الجميع.'
    ),
    did: [
      b('A centralized command center coordinating multiple entry points and dedicated zones for each guest category.', 'مركز عمليات مركزي ينسّق عدة بوابات دخول ومناطق مخصّصة لكل فئة من الضيوف.'),
      b('Trained traffic wardens guiding flow from the main roads into marked parking zones — adapting in real time to evening peaks.', 'منظّمو حركة مدرَّبون يقودون التدفق من الطرق الرئيسية إلى مناطق مواقف محدّدة، مع تكيّف لحظي مع ذروة المساء.'),
      b('An exclusive valet lane for artists, VIPs and sponsors, plus marked pedestrian paths, emergency routes and 24/7 security patrols.', 'مسار فاليه خاص للفنانين وكبار الضيوف والرعاة، مع ممرات مشاة واضحة ومسارات للطوارئ ودوريات أمن على مدار الساعة.'),
    ],
    outcomes: [
      b('20,000+ vehicles managed across the festival weekend.', 'أكثر من 20,000 مركبة أُديرت خلال عطلة المهرجان.'),
      b('Every guest — from general admission to headline artists — arrived smoothly.', 'وصل كل ضيف — من الجمهور العام إلى نجوم العروض — بسلاسة.'),
      b('Selected as the official parking and traffic operations partner.', 'اختيار سيتي باركينج شريكًا رسميًا لتشغيل المواقف والحركة.'),
    ],
    stack: ['event-parking', 'traffic-management', 'valet-services'],
    metric: { led: '20000', suffix: '+', label: b('vehicles across one festival weekend', 'مركبة خلال عطلة مهرجان واحدة') },
    facts: {
      req: b('Comprehensive traffic management and valet services for a large-scale coastal music festival with diverse attendee needs.', 'إدارة حركة وخدمات فاليه شاملة لمهرجان موسيقي ساحلي كبير باحتياجات حضور متنوعة.'),
      sol: b('Multi-zone parking management, artist and VIP valet, traffic-flow optimization, seasonal operational teams.', 'إدارة مواقف متعددة المناطق وفاليه للفنانين وكبار الضيوف وتحسين التدفق وفرق تشغيل موسمية.'),
      spec: b('Coastal-environment adaptation, large-scale crowd management (20,000+ vehicles), dynamic flow optimization for peak times.', 'تكيّف مع البيئة الساحلية وإدارة حشود ضخمة (أكثر من 20,000 مركبة) وتحسين ديناميكي للتدفق وقت الذروة.'),
    },
    feature: true,
  },
  {
    slug: 'egyptian-international-exhibition-center',
    name: b('Egyptian International Exhibition Center', 'مركز مصر للمعارض والمؤتمرات الدولية'),
    kind: 'events',
    city: b('Cairo, Egypt', 'القاهرة، مصر'),
    date: b('January 2024 · ongoing', 'يناير 2024 · مستمر'),
    year: 2024.0,
    img: 'eiec',
    gallery: ['eiec-flags', 'eiec-crew', 'eiec-sign'],
    headline: b('From consumer shows to state delegations — one arrival system that flexes.', 'من المعارض الجماهيرية إلى الوفود الرسمية — منظومة وصول واحدة تتكيّف.'),
    summary: b('An adaptive traffic and valet operation for Egypt’s premier exhibition venue, in an ongoing partnership.', 'تشغيل حركة وفاليه مرن لأبرز مركز معارض في مصر، بشراكة مستمرة.'),
    stake: b(
      'EIEC hosts everything from mass-market public shows to high-security international trade fairs. Thousands of attendees, exhibitors and VIP delegates arrive at once, and the operation has to scale up and down with every event.',
      'يستضيف المركز كل شيء من المعارض الجماهيرية إلى المعارض التجارية الدولية عالية التأمين. يصل الآلاف من الحضور والعارضين والوفود في وقت واحد، ويتعيّن على التشغيل أن يتّسع ويتقلّص مع كل حدث.'
    ),
    did: [
      b('A central command center deploying attendants to steer vehicles into lots for the public, exhibitors and media.', 'مركز عمليات مركزي ينشر المنظّمين لتوجيه المركبات إلى مواقف الجمهور والعارضين والإعلام.'),
      b('Separate, streamlined entry lanes for exhibitors and VIPs, and a premium valet at the main conference hall entrance.', 'مسارات دخول منفصلة وسريعة للعارضين وكبار الضيوف، وفاليه فاخر عند مدخل قاعة المؤتمرات الرئيسية.'),
      b('Clear protocols for emergency-vehicle access and end-of-day egress.', 'بروتوكولات واضحة لدخول مركبات الطوارئ وخروج آخر اليوم.'),
    ],
    outcomes: [
      b('Traffic kept moving through opening-time surges, with queues minimized.', 'حركة مستمرة في ذروة الافتتاح وطوابير أقل ما يمكن.'),
      b('Tiered service that fits exhibitors, media, international guests and the public.', 'خدمة متدرجة تناسب العارضين والإعلام والضيوف الدوليين والجمهور.'),
      b('An ongoing partnership since January 2024.', 'شراكة مستمرة منذ يناير 2024.'),
    ],
    stack: ['traffic-management', 'event-parking', 'valet-services'],
    facts: {
      req: b('A scalable traffic and valet solution for a major exhibition center serving very different event types.', 'حل حركة وفاليه قابل للتوسّع لمركز معارض كبير يخدم أنواع فعاليات مختلفة تمامًا.'),
      sol: b('Comprehensive traffic management, dedicated exhibitor and VIP valet, multi-zone parking allocation, event-day command.', 'إدارة حركة شاملة وفاليه مخصّص للعارضين وكبار الضيوف وتوزيع مواقف متعدد المناطق وقيادة عمليات يوم الحدث.'),
      spec: b('Adaptive operating model, exhibitor loading zones, premium valet for delegates, optimized flow for surges.', 'نموذج تشغيل متكيّف ومناطق تحميل للعارضين وفاليه فاخر للوفود وتدفق محسَّن وقت الذروات.'),
    },
    feature: true,
  },
  {
    slug: 'masr-al-mahrousa',
    name: b('Masr Al Mahrousa', 'مول مصر المحروسة'),
    kind: 'retail',
    city: b('Nasr City, Cairo', 'مدينة نصر، القاهرة'),
    date: b('March 2024', 'مارس 2024'),
    year: 2024.2,
    img: 'masr',
    gallery: [],
    headline: b('Where luxury shopping starts at the curb.', 'حيث يبدأ التسوّق الفاخر من عند الرصيف.'),
    summary: b('A premium valet-led operation for a sophisticated Nasr City shopping destination.', 'تشغيل فاخر بقيادة الفاليه لوجهة تسوّق راقية في مدينة نصر.'),
    stake: b(
      'Masr Al Mahrousa’s discerning clientele expects an upscale experience from arrival to departure — including peak shopping hours and weekends.',
      'يتوقّع زوّار مصر المحروسة المتميزون تجربة راقية من الوصول حتى المغادرة — بما في ذلك ساعات الذروة وعطلات نهاية الأسبوع.'
    ),
    did: [
      b('Trained valets and traffic attendants managing the multiple entrances with precision and courtesy.', 'سائقو فاليه ومنظّمو حركة مدرَّبون يديرون المداخل المتعددة بدقة ولباقة.'),
      b('A premier valet at the main entrance and a secured VIP area for luxury-boutique patrons.', 'خدمة فاليه متميّزة عند المدخل الرئيسي ومنطقة آمنة لكبار الزوار وعملاء البوتيكات الفاخرة.'),
      b('An operational command center in constant contact with every team member for dynamic peak-hour flow.', 'مركز عمليات على اتصال دائم بكل الفريق لضبط الحركة ديناميكيًا وقت الذروة.'),
    ],
    outcomes: [
      b('Peak-period traffic optimized at every entrance.', 'حركة الذروة محسَّنة عند كل مدخل.'),
      b('White-glove valet and dedicated VIP zones with attendant service.', 'فاليه راقٍ ومناطق مخصّصة لكبار الزوار بخدمة مرافقة.'),
      b('Enhanced security through visible operational presence.', 'أمان أعلى بحضور تشغيلي ظاهر.'),
    ],
    stack: ['valet-services', 'traffic-management'],
    facts: {
      req: b('Premium valet and traffic management for a luxury mall, ensuring a seamless high-end arrival.', 'فاليه وإدارة حركة فاخران لمول راقٍ يضمنان وصولًا سلسًا بمستوى رفيع.'),
      sol: b('Comprehensive valet, dedicated traffic personnel, VIP drop-off zones, operational command center.', 'خدمات فاليه شاملة وأفراد حركة مخصّصون ومناطق نزول لكبار الزوار ومركز عمليات.'),
      spec: b('Peak-period optimization, white-glove valet, dedicated VIP zones, visible operational presence.', 'تحسين فترات الذروة وفاليه راقٍ ومناطق مخصّصة لكبار الزوار وحضور تشغيلي ظاهر.'),
    },
  },
  {
    slug: 'north-square-mall',
    name: b('North Square Mall', 'نورث سكوير مول'),
    kind: 'retail',
    city: b('Cairo, Egypt', 'القاهرة، مصر'),
    date: null, // the source page shows Cairo Opera House data in its facts table — no reliable date
    year: 2024.0,
    img: 'north-square',
    gallery: ['north-square-crew-1', 'north-square-crew-2', 'north-square-crew-3'],
    headline: b('Parking as the prelude to the shopping experience.', 'المواقف كمقدّمة لتجربة التسوّق.'),
    summary: b('A valet-led operation that makes arrival at a luxury mall feel effortless.', 'تشغيل بقيادة الفاليه يجعل الوصول إلى مول فاخر سلسًا.'),
    stake: b(
      'North Square Mall is a landmark luxury destination in Cairo with high-end brands and an exclusive clientele. Evenings and weekends bring heavy traffic, while VIP shoppers and dignitaries expect discretion.',
      'نورث سكوير مول وجهة فاخرة بارزة في القاهرة بعلامات راقية وعملاء مميّزين. تشهد الأمسيات وعطلات نهاية الأسبوع حركة كثيفة، بينما يتوقّع كبار المتسوّقين والشخصيات الرسمية خصوصية.'
    ),
    did: [
      b('Professionally trained valets and traffic attendants managing the main entrances with precision and courtesy.', 'سائقو فاليه ومنظّمو حركة مدرَّبون باحتراف يديرون المداخل الرئيسية بدقة ولباقة.'),
      b('Dedicated VIP drop-off zones and discreet premium service.', 'مناطق نزول مخصّصة لكبار الزوار وخدمة فاخرة بسرية.'),
      b('An operational command center that keeps vehicle flow smooth in evening and weekend peaks.', 'مركز عمليات يحافظ على سلاسة حركة السيارات في ذروة المساء ونهاية الأسبوع.'),
    ],
    outcomes: [
      b('Smooth, continuous vehicle flow at the main entrances.', 'تدفق سلس ومستمر للسيارات عند المداخل الرئيسية.'),
      b('A five-star welcome for every guest.', 'استقبال بخمس نجوم لكل ضيف.'),
      b('Discreet service for VIPs and dignitaries.', 'خدمة سرية لكبار الزوار والشخصيات الرسمية.'),
    ],
    stack: ['valet-services', 'traffic-management'],
    facts: {
      req: b('A premium valet and traffic operation that reflects the mall’s brand and keeps arrival seamless.', 'تشغيل فاليه وحركة فاخر يعكس هوية المول ويحافظ على سلاسة الوصول.'),
      sol: b('Valet services, dedicated traffic personnel, VIP drop-off zones, operational command center.', 'خدمات فاليه وأفراد حركة مخصّصون ومناطق نزول لكبار الزوار ومركز عمليات.'),
      spec: b('Peak-period optimization, five-star valet experience, visible operational presence.', 'تحسين فترات الذروة وتجربة فاليه بخمس نجوم وحضور تشغيلي ظاهر.'),
    },
  },
  {
    slug: 'marrasi-north-coast',
    name: b('Marrasi North Coast', 'مراسي الساحل الشمالي'),
    kind: 'mixed',
    city: b('North Coast, Egypt', 'الساحل الشمالي، مصر'),
    date: b('Seasonal · annual', 'موسمي · سنوي'),
    year: 2024.4,
    img: 'marrasi',
    gallery: ['marrasi-crew-1', 'marrasi-crew-2', 'marrasi-crew-3'],
    headline: b('Five-star from the first gate.', 'خمس نجوم من البوابة الأولى.'),
    summary: b('A seasonal, valet-led arrival for a premier North Coast resort.', 'وصول موسمي بقيادة الفاليه إلى منتجع ساحلي مرموق.'),
    stake: b(
      'Marrasi attracts a discerning summer clientele. Weekend check-ins and check-outs create heavy vehicle volumes, yet the arrival still had to feel like a five-star resort.',
      'يجذب مراسي زوّارًا متميّزين في الصيف. تصنع عمليات الوصول والمغادرة في عطلة نهاية الأسبوع أحجامًا كبيرة من المركبات، ومع ذلك كان على الوصول أن يبدو كمنتجع بخمس نجوم.'
    ),
    did: [
      b('A team of valets and attendants in branded attire managing the entire porte-cochère.', 'فريق من سائقي الفاليه والمنظّمين بزي موحّد يديرون مدخل السيارات بالكامل.'),
      b('Exclusive valet lanes for VIP villa owners and beach-club members.', 'مسارات فاليه حصرية لملاك الفيلات وأعضاء النادي الشاطئي.'),
      b('A logistics plan for internal vehicle movement, including golf carts and service vehicles.', 'خطة لوجستية لحركة المركبات الداخلية، بما فيها عربات الجولف ومركبات الخدمة.'),
    ],
    outcomes: [
      b('Efficient peak-period traffic management for weekend turnover.', 'إدارة حركة كفؤة في ذروة تبديل الضيوف نهاية الأسبوع.'),
      b('White-glove valet experience for villa residents.', 'تجربة فاليه راقية لسكان الفيلات.'),
      b('Safer grounds through visible operational oversight, day and night.', 'أمان أعلى بإشراف تشغيلي ظاهر ليلًا ونهارًا.'),
    ],
    stack: ['valet-services', 'traffic-management', 'golf-cart-services'],
    facts: {
      req: b('A premium, valet-led traffic solution for a high-end seasonal resort with a seamless, luxurious arrival.', 'حل حركة فاخر بقيادة الفاليه لمنتجع موسمي راقٍ يضمن وصولًا سلسًا وفاخرًا.'),
      sol: b('Comprehensive valet, resort-entrance traffic control, dedicated VIP valet lanes, seasonal operational teams.', 'فاليه شامل وتحكّم في حركة مدخل المنتجع ومسارات فاليه مخصّصة لكبار الزوار وفرق تشغيل موسمية.'),
      spec: b('Seasonal deployment of trained staff, peak weekend turnover management, enhanced guest safety.', 'نشر موسمي لفريق مدرَّب وإدارة ذروة تبديل نهاية الأسبوع وسلامة أعلى للضيوف.'),
    },
  },
  {
    slug: 'ulter-techno-events',
    name: b('ULTER Techno Events', 'حفلات ألتر مصر'),
    kind: 'events',
    city: b('Cairo, Egypt', 'القاهرة، مصر'),
    date: b('Multiple dates', 'مواعيد متعددة'),
    year: 2024.6,
    img: 'ulter-night',
    gallery: [],
    headline: b('A 15,000-vehicle car park that exists for a weekend.', 'موقف يتّسع لأكثر من 15,000 مركبة، لعطلة أسبوع واحدة.'),
    summary: b('Rapid-deployment plate-recognition gates and cashless pre-booking for a temporary festival site.', 'بوابات تعرّف على اللوحات سريعة النشر وحجز مسبق دون نقد لموقع مهرجان مؤقت.'),
    stake: b(
      'A major music festival needs a parking system that can be set up and taken down fast — yet still absorb extreme surges of traffic before and after the show.',
      'يحتاج مهرجان موسيقي كبير إلى نظام مواقف يمكن تركيبه وفكّه بسرعة — ومع ذلك يستوعب ذروات الحركة الشديدة قبل العرض وبعده.'
    ),
    did: [
      b('Rapid-deployment LPR entry gates and portable signage for dynamic zone management.', 'بوابات دخول للتعرّف على اللوحات سريعة النشر ولوحات متنقلة لإدارة المناطق ديناميكيًا.'),
      b('Cashless pre-booking and on-the-day payment for maximum throughput.', 'حجز مسبق ودفع يوم الحدث دون نقد لأعلى طاقة استيعابية.'),
      b('Dedicated VIP and ride-share lanes with integrated security and traffic control.', 'مسارات مخصّصة لكبار الضيوف وسيارات الأجرة التطبيقية مع أمن وضبط حركة متكاملَين.'),
    ],
    outcomes: [
      b('A scalable system for 15,000+ vehicles.', 'منظومة قابلة للتوسّع لأكثر من 15,000 مركبة.'),
      b('Temporary infrastructure that deploys quickly.', 'بنية مؤقتة تُنشر سريعًا.'),
      b('Optimized traffic flow through peak surge times.', 'تدفق حركة محسَّن خلال ذروات الحضور.'),
    ],
    stack: ['smart-parking-management', 'event-parking', 'traffic-management'],
    metric: { led: '15000', suffix: '+', label: b('vehicle capacity, rapid-deployment gates', 'مركبة سعة، ببوابات سريعة النشر') },
    facts: {
      req: b('A flexible, temporary parking solution for extreme traffic volumes at a major music festival, with rapid setup and teardown.', 'حل مواقف مرن ومؤقت لأحجام حركة شديدة في مهرجان موسيقي كبير مع تركيب وفكّ سريعَين.'),
      sol: b('Rapid-deployment LPR entry gates, dynamic zone management with portable signage, VIP and ride-share lanes, integrated security.', 'بوابات تعرّف على اللوحات سريعة النشر وإدارة مناطق ديناميكية بلوحات متنقلة ومسارات لكبار الضيوف وسيارات الأجرة التطبيقية وأمن متكامل.'),
      spec: b('Scalable to 15,000+ vehicles, cashless pre-booking, temporary infrastructure, optimized surge flow.', 'قابل للتوسّع لأكثر من 15,000 مركبة وحجز مسبق دون نقد وبنية مؤقتة وتدفق محسَّن للذروات.'),
    },
  },
  {
    slug: 'polaris-mall',
    name: b('Polaris Mall', 'بولاريس مول'),
    kind: 'retail',
    city: b('Cairo, Egypt', 'القاهرة، مصر'),
    date: b('May 2024', 'مايو 2024'),
    year: 2024.4,
    img: 'polaris-1',
    gallery: ['polaris-2', 'polaris-3', 'polaris-crew'],
    headline: b('A multi-level mall that welcomes families at the door.', 'مول متعدد الطوابق يستقبل العائلات عند الباب.'),
    summary: b('Valet and traffic operations that ease congestion at every entrance.', 'تشغيل فاليه وحركة يخفّف الازدحام عند كل مدخل.'),
    stake: b(
      'Polaris is a multi-level shopping mall where congestion at the entrances could sour a visit before it starts.',
      'بولاريس مول تسوّق متعدد الطوابق، وقد يفسد الازدحام عند المداخل الزيارة قبل أن تبدأ.'
    ),
    did: [
      b('High-volume valet and traffic management at the key entrance points.', 'فاليه وإدارة حركة عالية الطاقة عند نقاط الدخول الرئيسية.'),
      b('Dedicated family parking zones managed by attendants.', 'مناطق مواقف مخصّصة للعائلات يديرها منظّمون.'),
      b('VIP drop-off zones and an operational command center.', 'مناطق نزول لكبار الزوار ومركز عمليات.'),
    ],
    outcomes: [
      b('Peak-period traffic optimized.', 'حركة الذروة محسَّنة.'),
      b('A premium valet experience that reduces congestion at entrances.', 'تجربة فاليه فاخرة تقلّل الازدحام عند المداخل.'),
      b('Enhanced security through visible operational presence.', 'أمان أعلى بحضور تشغيلي ظاهر.'),
    ],
    stack: ['valet-services', 'traffic-management'],
    facts: {
      req: b('A premium valet and traffic operation to improve flow and elevate the customer experience at a multi-level mall.', 'تشغيل فاليه وحركة فاخر لتحسين التدفق ورفع تجربة العميل في مول متعدد الطوابق.'),
      sol: b('Comprehensive valet, dedicated traffic personnel, VIP drop-off zones, operational command center.', 'خدمات فاليه شاملة وأفراد حركة مخصّصون ومناطق نزول لكبار الزوار ومركز عمليات.'),
      spec: b('Peak-period optimization, premium valet, family parking zones managed by attendants.', 'تحسين فترات الذروة وفاليه فاخر ومناطق مواقف عائلية يديرها منظّمون.'),
    },
  },
  {
    slug: 'salah-eldeen-citadel',
    name: b('Salah Eldeen Citadel', 'قلعة صلاح الدين الأيوبي'),
    kind: 'culture',
    city: b('Cairo, Egypt', 'القاهرة، مصر'),
    date: b('October 2023', 'أكتوبر 2023'),
    year: 2023.8,
    img: 'citadel',
    gallery: ['citadel-1', 'citadel-2', 'citadel-3'],
    headline: b('A 12th-century fortress, a 21st-century arrival.', 'قلعة من القرن الثاني عشر، ووصول من القرن الحادي والعشرين.'),
    summary: b('Traffic and valet operations on narrow access roads — for tour buses, VIPs and official delegations.', 'تشغيل حركة وفاليه على طرق ضيقة — لحافلات السياحة وكبار الضيوف والوفود الرسمية.'),
    stake: b(
      'The Citadel is a high-traffic historic landmark with narrow, constrained access. Tour buses, international visitors, VIPs and official delegations all need to arrive smoothly — by day and by night.',
      'القلعة معلم تاريخي كثيف الحركة بمداخل ضيقة ومحدودة. تحتاج حافلات السياحة والزوار الدوليون وكبار الضيوف والوفود الرسمية إلى وصول سلس — نهارًا وليلًا.'
    ),
    did: [
      b('Traffic flow optimized for the narrow access roads, with dedicated lanes for tour buses and VIPs.', 'تدفق حركة محسَّن للطرق الضيقة، مع مسارات مخصّصة لحافلات السياحة وكبار الضيوف.'),
      b('A centralized valet command with professional valets for officials and VIP guests.', 'قيادة فاليه مركزية بسائقين محترفين للمسؤولين وكبار الضيوف.'),
      b('24/7 operational management and event-day teams for large tour groups.', 'إدارة تشغيلية على مدار الساعة وفرق ليوم الحدث للمجموعات السياحية الكبيرة.'),
    ],
    outcomes: [
      b('Seamless management of large tour groups.', 'إدارة سلسة للمجموعات السياحية الكبيرة.'),
      b('A premium valet experience for officials.', 'تجربة فاليه فاخرة للمسؤولين.'),
      b('Round-the-clock operational cover.', 'تغطية تشغيلية على مدار الساعة.'),
    ],
    stack: ['traffic-management', 'valet-services', 'event-parking'],
    facts: {
      req: b('Design and manage seamless traffic flow and valet for a high-traffic historic fortress with challenging access.', 'تصميم وإدارة تدفق حركة وفاليه سلسَين لقلعة تاريخية كثيفة الحركة بمداخل صعبة.'),
      sol: b('Centralized valet command, dedicated lanes for tour buses and VIPs, professional valet, 24/7 operations.', 'قيادة فاليه مركزية ومسارات مخصّصة للحافلات وكبار الضيوف وفاليه محترف وتشغيل على مدار الساعة.'),
      spec: b('Flow optimization for narrow access roads, premium valet for officials, event-day teams, large tour-group management.', 'تحسين التدفق للطرق الضيقة وفاليه فاخر للمسؤولين وفرق يوم الحدث وإدارة المجموعات السياحية الكبيرة.'),
    },
  },
  {
    slug: 'cairo-opera-house',
    name: b('Cairo Opera House', 'دار الأوبرا المصرية'),
    kind: 'culture',
    city: b('Cairo, Egypt', 'القاهرة، مصر'),
    date: b('December 2022', 'ديسمبر 2022'),
    year: 2022.9,
    img: 'opera',
    gallery: ['opera-1', 'opera-2'],
    headline: b('Every performance starts in the car park.', 'كل عرض يبدأ من الموقف.'),
    summary: b('Smart guidance, VIP valet and secure staff and performer parking for a prestigious venue.', 'توجيه ذكي وفاليه لكبار الضيوف ومواقف آمنة للعاملين والفنانين في مقرّ مرموق.'),
    stake: b(
      'A prestigious cultural venue draws high-volume evening traffic. Audiences, VIP guests, staff and performers all need a smooth, secure arrival.',
      'يجذب المقرّ الثقافي المرموق حركة مسائية كثيفة. يحتاج الجمهور وكبار الضيوف والعاملون والفنانون إلى وصول سلس وآمن.'
    ),
    did: [
      b('A smart parking guidance system with real-time availability updates.', 'نظام توجيه ذكي للمواقف مع تحديثات إتاحة لحظية.'),
      b('Valet service for high-profile guests.', 'خدمة فاليه للضيوف رفيعي المستوى.'),
      b('Secure, dedicated zones for staff and performers, and optimized traffic flow around the venue.', 'مناطق آمنة ومخصّصة للعاملين والفنانين وتدفق حركة محسَّن حول المقرّ.'),
    ],
    outcomes: [
      b('Real-time availability visible to arriving guests.', 'الإتاحة اللحظية ظاهرة للضيوف عند وصولهم.'),
      b('Secure dedicated zones for staff and performers.', 'مناطق آمنة ومخصّصة للعاملين والفنانين.'),
      b('Smoother traffic flow around the venue.', 'تدفق حركة أسلس حول المقرّ.'),
    ],
    stack: ['parking-guidance-system', 'valet-services'],
    facts: {
      req: b('Design a high-capacity parking system for a prestigious cultural venue.', 'تصميم نظام مواقف عالي الطاقة لمقرّ ثقافي مرموق.'),
      sol: b('Smart parking guidance, VIP valet, dedicated staff and performer parking.', 'توجيه ذكي للمواقف وفاليه لكبار الضيوف ومواقف مخصّصة للعاملين والفنانين.'),
      spec: b('Real-time availability updates, valet for high-profile guests, secure dedicated zones, optimized flow.', 'تحديثات إتاحة لحظية وفاليه للضيوف رفيعي المستوى ومناطق آمنة ومخصّصة وتدفق محسَّن.'),
    },
  },
  {
    slug: 'le-lac-du-caire',
    name: b('Le Lac du Caire', 'بحيرة القاهرة'),
    kind: 'mixed',
    city: b('Cairo, Egypt', 'القاهرة، مصر'),
    date: b('2022 – 2025', '2022 – 2025'),
    year: 2023.0,
    img: 'lelac',
    gallery: ['lelac-1', 'lelac-2', 'lelac-3'],
    headline: b('Luxury living, with parking that stays out of the way.', 'حياة فاخرة، بمواقف لا تعترض الطريق.'),
    summary: b('A luxury smart-parking system with guidance, valet, EV charging and a mobile app.', 'منظومة مواقف ذكية فاخرة بتوجيه وفاليه وشحن كهربائي وتطبيق جوال.'),
    stake: b(
      'Le Lac du Caire is a high-end mixed-use development where technology had to add convenience without disturbing an upscale environment.',
      'بحيرة القاهرة مشروع راقٍ متعدد الاستخدامات، وكان على التقنية أن تضيف الراحة دون أن تُزعج البيئة الفاخرة.'
    ),
    did: [
      b('A smart parking guidance system with real-time information and mobile-app integration.', 'نظام توجيه ذكي للمواقف بمعلومات لحظية وتكامل مع تطبيق الجوال.'),
      b('Premium valet services and secure long-term parking.', 'خدمات فاليه فاخرة ومواقف آمنة طويلة الأجل.'),
      b('EV charging stations and a scalable design.', 'محطات شحن كهربائي وتصميم قابل للتوسّع.'),
    ],
    outcomes: [
      b('Sustainability-focused EV charging built in.', 'شحن كهربائي يخدم الاستدامة ضمن التصميم.'),
      b('Real-time guidance for residents and visitors.', 'توجيه لحظي للسكان والزوار.'),
      b('A scalable design for a growing development.', 'تصميم قابل للتوسّع لمشروع ينمو.'),
    ],
    stack: ['parking-guidance-system', 'ev-charging', 'valet-services', 'smart-parking-management'],
    facts: {
      req: b('Develop a luxury smart-parking system for a mixed-use development.', 'تطوير منظومة مواقف ذكية فاخرة لمشروع متعدد الاستخدامات.'),
      sol: b('Smart parking guidance, valet services, EV charging stations, scalable design.', 'توجيه ذكي للمواقف وخدمات فاليه ومحطات شحن كهربائي وتصميم قابل للتوسّع.'),
      spec: b('Premium valet, mobile-app integration, real-time guidance, secure long-term parking, EV charging.', 'فاليه فاخر وتكامل مع تطبيق الجوال وتوجيه لحظي ومواقف طويلة الأجل آمنة وشحن كهربائي.'),
    },
  },
];

export const caseBySlug = Object.fromEntries(cases.map((c) => [c.slug, c]));
