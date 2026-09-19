import { b } from '../lib/i18n.mjs';

// One pool of answers; pages pull the ones that fit. Wording follows the FAQs on the current site.
export const faqs = {
  offer: {
    q: b('What does City Parking offer?', 'ماذا تقدّم سيتي باركينج؟'),
    a: b('Smart parking systems, parking management, traffic management, parking consultancy, valet services, event parking, meet-and-greet services and customized parking solutions — for many industries and facility types.', 'أنظمة مواقف ذكية وإدارة مواقف وإدارة حركة مرورية واستشارات مواقف وخدمات فاليه ومواقف فعاليات وخدمات استقبال وحلول مخصّصة — لقطاعات ومنشآت متنوعة.'),
  },
  'smart-benefits': {
    q: b('How do smart parking systems improve traffic flow and efficiency?', 'كيف تحسّن أنظمة المواقف الذكية الحركة والكفاءة؟'),
    a: b('They monitor availability, optimize space use and streamline vehicle movement. Drivers spend less time searching, which reduces congestion, improves flow and creates a more convenient parking experience.', 'ترصد الإتاحة وتحسّن استخدام المساحات وتسهّل حركة المركبات. يقلّ وقت البحث عن موقف، فينخفض الازدحام ويتحسّن التدفق وتصبح التجربة أريح.'),
  },
  industries: {
    q: b('Which industries can benefit from your parking solutions?', 'أي القطاعات تستفيد من حلولكم؟'),
    a: b('Commercial buildings, shopping malls, hotels, hospitals, residential communities, airports, event venues, educational institutions and public facilities. Each solution is designed around the property’s operational needs.', 'المباني التجارية ومراكز التسوق والفنادق والمستشفيات والمجمعات السكنية والمطارات وأماكن الفعاليات والمؤسسات التعليمية والمرافق العامة. يُصمَّم كل حل حول احتياجات المنشأة التشغيلية.'),
  },
  'consult-valet': {
    q: b('Do you provide parking consultancy and valet management?', 'هل تقدّمون استشارات المواقف وإدارة الفاليه؟'),
    a: b('Yes. We help businesses optimize parking operations, improve traffic management and deliver a seamless customer experience, with planning, design recommendations and operational support.', 'نعم. نساعد الشركات على تحسين تشغيل المواقف وإدارة الحركة وتقديم تجربة عملاء سلسة، مع التخطيط وتوصيات التصميم والدعم التشغيلي.'),
  },
  customize: {
    q: b('Can you customize solutions for commercial and public facilities?', 'هل يمكنكم تخصيص الحلول للمنشآت التجارية والعامة؟'),
    a: b('Yes. We work closely with each client to develop parking strategies and technology that match the location’s requirements — for commercial, residential and public facilities.', 'نعم. نعمل عن قرب مع كل عميل لوضع استراتيجيات وتقنيات تناسب متطلبات الموقع — للمنشآت التجارية والسكنية والعامة.'),
  },
  'what-is-smart': {
    q: b('What is a smart parking management system, and how does it work?', 'ما هو نظام إدارة المواقف الذكي وكيف يعمل؟'),
    a: b('It uses sensors, cameras, real-time monitoring and automated access control to manage parking: it detects availability, guides drivers to vacant spaces, streamlines entry and exit and produces data to optimize performance.', 'يستخدم الحساسات والكاميرات والمراقبة اللحظية والتحكّم الآلي في الدخول لإدارة المواقف: يكتشف الإتاحة ويقود السائقين للمواقف الشاغرة ويسرّع الدخول والخروج ويوفّر بيانات لتحسين الأداء.'),
  },
  'what-is-pgs': {
    q: b('What is a parking guidance system?', 'ما هو نظام التوجيه الذكي للمواقف؟'),
    a: b('A smart parking solution that helps drivers find available spaces quickly using sensors, digital displays and real-time monitoring. It reduces search time, minimizes congestion and improves parking efficiency.', 'حل ذكي يساعد السائقين على إيجاد المواقف المتاحة بسرعة باستخدام الحساسات والشاشات الرقمية والمراقبة اللحظية. يقلّل وقت البحث والازدحام ويحسّن كفاءة المواقف.'),
  },
  'pgs-integrate': {
    q: b('Can a guidance system integrate with what we already have?', 'هل يندمج نظام التوجيه مع ما لدينا بالفعل؟'),
    a: b('Yes. It can be integrated with access control, payment solutions, license-plate recognition, smart parking technologies and traffic management platforms into one data-driven operation.', 'نعم. يمكن دمجه مع التحكّم في الدخول وحلول الدفع والتعرّف على اللوحات وتقنيات المواقف الذكية ومنصات إدارة الحركة في تشغيل واحد قائم على البيانات.'),
  },
  'onstreet-improve': {
    q: b('How does an on-street system improve availability?', 'كيف يحسّن نظام مواقف الشوارع الإتاحة؟'),
    a: b('It gives real-time information on vacant spaces, so drivers find parking faster. That reduces unnecessary circulation, optimizes utilization and improves traffic flow in busy urban areas.', 'يقدّم معلومات لحظية عن المواقف الشاغرة فيجد السائق موقفه أسرع. ذلك يقلّل الدوران غير الضروري ويحسّن الاستفادة ويخفّف الازدحام في المناطق المزدحمة.'),
  },
  'consultancy-who': {
    q: b('Who is parking and traffic consultancy for?', 'لمن تناسب استشارات المواقف والمرور؟'),
    a: b('New developments, existing facilities, mixed-use projects, government and public infrastructure, hospitals, universities, hotels, airports, shopping centers and large event venues.', 'المشروعات الجديدة والمنشآت القائمة والمشروعات متعددة الاستخدامات والبنية التحتية الحكومية والعامة والمستشفيات والجامعات والفنادق والمطارات ومراكز التسوق ومقارّ الفعاليات الكبرى.'),
  },
  'valet-safe': {
    q: b('How do you keep guests’ vehicles safe?', 'كيف تحافظون على سلامة سيارات الضيوف؟'),
    a: b('Through professionally trained attendants, secure parking procedures, controlled vehicle handling and organized operations, following strict protocols to minimize risk.', 'عبر فريق مدرَّب باحتراف وإجراءات ركن آمنة وتعامل منضبط مع المركبات وتشغيل منظّم، مع بروتوكولات صارمة لتقليل المخاطر.'),
  },
  'valet-trained': {
    q: b('Are your attendants trained and professional?', 'هل مضيفوكم مدرَّبون ومحترفون؟'),
    a: b('Yes. Trained attendants in branded attire manage arrivals and departures, backed by supervisors and a command center that coordinates the team in real time.', 'نعم. يدير المنظّمون المدرَّبون بزي موحّد الوصول والمغادرة، بدعم من مشرفين ومركز عمليات ينسّق الفريق لحظيًا.'),
  },
  'traffic-improve': {
    q: b('How does your traffic management improve flow?', 'كيف تحسّن إدارة الحركة لديكم التدفق؟'),
    a: b('By analyzing vehicle movement, identifying congestion points and applying flow strategies — optimized layouts, smart traffic technologies, automated barriers and trained personnel — to reduce delays and improve safety.', 'بتحليل حركة المركبات وتحديد نقاط الازدحام وتطبيق استراتيجيات التدفق — مخططات محسَّنة وتقنيات مرور ذكية وحواجز آلية وأفراد مدرَّبين — لتقليل التأخير وتحسين السلامة.'),
  },
  'event-what': {
    q: b('How does event parking make large events stress-free?', 'كيف تجعل مواقف الفعاليات الأحداث الكبرى بلا توتر؟'),
    a: b('We organize temporary parking, control entry and exit and guide attendees efficiently, with strategic layouts, clear routing and trained personnel — to avoid jams and delays for events of any size.', 'ننظّم المواقف المؤقتة ونتحكّم في الدخول والخروج ونوجّه الحضور بكفاءة، بمخططات استراتيجية وتوجيه واضح وأفراد مدرَّبين — لتجنّب الاختناق والتأخير في الفعاليات بأي حجم.'),
  },
  'golf-fleet': {
    q: b('What does golf-cart fleet management include?', 'ماذا تشمل إدارة أسطول عربات الجولف؟'),
    a: b('Fleet planning, vehicle deployment, routine maintenance, repairs, operational support and performance monitoring — keeping carts available and downtime low.', 'تخطيط الأسطول ونشر العربات والصيانة الدورية والإصلاح والدعم التشغيلي ومتابعة الأداء — لتبقى العربات متاحة وتقلّ فترات التوقف.'),
  },
  'mall-services': {
    q: b('What mall parking services do you provide?', 'ما خدمات مواقف المولات التي تقدّمونها؟'),
    a: b('Smart parking systems, valet, traffic management, parking guidance, access control, attendants, revenue management and real-time monitoring — for malls of all sizes.', 'أنظمة مواقف ذكية وفاليه وإدارة حركة وتوجيه وتحكّم في الدخول ومنظّمون وإدارة إيرادات ومراقبة لحظية — للمولات بمختلف أحجامها.'),
  },
  'mall-peaks': {
    q: b('Can you handle weekends, holidays and sales peaks?', 'هل تتحملون عطلات نهاية الأسبوع والمواسم والتخفيضات؟'),
    a: b('Yes. Strategic traffic planning, trained personnel, smart technologies and optimized vehicle flow keep operations smooth during busy periods.', 'نعم. تخطيط حركة استراتيجي وأفراد مدرَّبون وتقنيات ذكية وتدفق محسَّن يحافظون على سلاسة التشغيل في الفترات المزدحمة.'),
  },
  'cairo-fit': {
    q: b('Are these services suitable for businesses in Cairo?', 'هل تناسب هذه الخدمات الأعمال في القاهرة؟'),
    a: b('Yes. They optimize urban and private parking, improve customer satisfaction and boost operational efficiency — and Cairo is where most of our landmark references are.', 'نعم. تحسّن المواقف الحضرية والخاصة وترفع رضا العملاء وكفاءة التشغيل — والقاهرة هي موطن معظم مشروعاتنا المرجعية.'),
  },
  'hire-valet': {
    q: b('Why hire valet parking?', 'لماذا نستعين بخدمة الفاليه؟'),
    a: b('Valet gives guests convenience, faster parking and a professional experience at events, hotels and restaurants — and takes pressure off your entrance.', 'يمنح الفاليه الضيوف راحة ووقتًا أقل في الركن وتجربة احترافية في الفعاليات والفنادق والمطاعم — ويخفّف الضغط عن مدخلك.'),
  },
  'lot-mgmt': {
    q: b('How can parking management services improve efficiency?', 'كيف تحسّن خدمات إدارة المواقف الكفاءة؟'),
    a: b('They optimize layouts, monitor traffic and manage operations so flow stays smooth and space use is maximized.', 'تحسّن المخططات وترصد الحركة وتدير التشغيل ليبقى التدفق سلسًا وتُستغل المساحات إلى أقصى حد.'),
  },
};

export const homeFaq = ['offer', 'smart-benefits', 'industries', 'consult-valet', 'customize'];

export const faqPage = [
  { title: b('Getting started', 'البداية'), ids: ['offer', 'industries', 'customize', 'cairo-fit'] },
  { title: b('Smart systems', 'الأنظمة الذكية'), ids: ['what-is-smart', 'smart-benefits', 'what-is-pgs', 'pgs-integrate', 'onstreet-improve'] },
  { title: b('Operations & services', 'التشغيل والخدمات'), ids: ['lot-mgmt', 'hire-valet', 'valet-safe', 'valet-trained', 'traffic-improve', 'event-what', 'golf-fleet', 'consult-valet', 'consultancy-who'] },
  { title: b('Industries', 'القطاعات'), ids: ['mall-services', 'mall-peaks'] },
];
