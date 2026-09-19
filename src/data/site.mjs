import { b } from '../lib/i18n.mjs';

export const SITE = {
  origin: 'https://mohamed-sr-designer.github.io/city-parking-redesign',
  name: b('City Parking Integrated Solutions', 'سيتي باركينج للحلول المتكاملة'),
  short: b('City Parking', 'سيتي باركينج'),
  tagline: b('Your Parking Partner', 'شريكك في مواقف السيارات'),
  tel: '+2 0222 714 200',
  telHref: '+20222714200',
  email: 'info@cityparking-eg.com',
  address: b('21 Nagaty Serag – Makram Ebid – Nasr City – Cairo', '21 نجاتي سراج – مكرم عبيد – مدينة نصر – القاهرة'),
  mapsHref: 'https://www.google.com/maps/search/?api=1&query=21+Nagaty+Serag+Makram+Ebid+Nasr+City+Cairo',
  distributor: b('Distributor for People Access & Car Access', 'موزّع لحلول الوصول للأشخاص والسيارات'),
  social: [
    { k: 'facebook', href: 'https://www.facebook.com/cityparking.eg', label: 'Facebook' },
    { k: 'instagram', href: 'https://www.instagram.com/cityparking_eg', label: 'Instagram' },
    { k: 'linkedin', href: 'https://www.linkedin.com/company/cityparking-eg/', label: 'LinkedIn' },
    { k: 'youtube', href: 'https://youtube.com/@CityParking_eg', label: 'YouTube' },
  ],
  originalSite: 'https://cityparking-eg.com/',
};

/* ------------------------------------------------------------------ UI strings */
const raw = {
  solutions: b('Solutions', 'الحلول'),
  services: b('Services', 'الخدمات'),
  industries: b('Industries', 'القطاعات'),
  cases: b('Case studies', 'قصص النجاح'),
  insights: b('Insights', 'رؤى'),
  about: b('About', 'من نحن'),
  careers: b('Careers', 'الوظائف'),
  contact: b('Contact', 'تواصل معنا'),
  talk: b('Talk to an expert', 'تحدّث مع خبير'),
  talkShort: b('Talk to us', 'تواصل معنا'),
  home: b('Home', 'الرئيسية'),
  seeAll: b('See all', 'عرض الكل'),
  seeAllCases: b('All case studies', 'كل قصص النجاح'),
  seeAllSolutions: b('All solutions', 'كل الحلول'),
  seeAllServices: b('All services', 'كل الخدمات'),
  seeAllIndustries: b('All industries', 'كل القطاعات'),
  seeAllInsights: b('All insights', 'كل الرؤى'),
  readStory: b('Read the story', 'اقرأ القصة'),
  readArticle: b('Read the article', 'اقرأ المقال'),
  learnMore: b('Learn more', 'اعرف المزيد'),
  explore: b('Explore', 'استكشف'),
  skip: b('Skip to content', 'انتقل إلى المحتوى'),
  menu: b('Menu', 'القائمة'),
  close: b('Close', 'إغلاق'),
  language: b('العربية', 'English'),
  langAria: b('Switch language to Arabic', 'Switch language to English'),
  breadcrumbs: b('Breadcrumb', 'مسار التنقل'),
  minRead: b('min read', 'دقائق قراءة'),
  by: b('Published', 'نُشر في'),
  /* home */
  heroEyebrow: b('Integrated parking solutions · Egypt & Saudi Arabia', 'حلول مواقف متكاملة · مصر والمملكة العربية السعودية'),
  heroL1: b('The first thing your guests meet.', 'أول ما يقابله ضيوفك،'),
  heroL2: b('The last thing they remember.', 'وآخر ما يتذكّرونه.'),
  heroSub: b(
    'City Parking plans, equips and runs parking for landmark destinations across Egypt — from the Grand Egyptian Museum to Mivida — so every arrival feels effortless and every space earns its keep.',
    'تخطّط سيتي باركينج وتجهّز وتدير المواقف في أبرز الوجهات في مصر — من المتحف المصري الكبير إلى ميفيدا — لتصبح كل رحلة وصول سلسة وكل موقف مصدر قيمة.'
  ),
  heroCta1: b('See the Grand Egyptian Museum story', 'اقرأ قصة المتحف المصري الكبير'),
  heroCta2: b('Talk to a parking expert', 'تحدّث مع خبير مواقف'),
  nowShowing: b('Case study', 'قصة نجاح'),
  ledCaption: b('Illustrative guidance display', 'عرض توضيحي لنظام التوجيه'),
  level: b('LEVEL', 'الطابق'),
  free: b('FREE', 'متاح'),
  full: b('FULL', 'ممتلئ'),
  /* sections */
  pioEyebrow: b('How we work', 'كيف نعمل'),
  pioTitle: b('One accountable partner — from the first drawing to the last car of the night.', 'شريك واحد مسؤول — من أول مخطط حتى آخر سيارة في الليل.'),
  pioSub: b('Most parking problems fall between the consultant, the technology vendor and the operator. We are all three.', 'معظم مشكلات المواقف تقع بين المستشار ومورّد التقنية والمشغّل. نحن الثلاثة معًا.'),
  lensEyebrow: b('The decision-maker’s lens', 'زاوية صاحب القرار'),
  lensTitle: b('What are you trying to achieve?', 'ما الذي تسعى لتحقيقه؟'),
  lensSub: b('Parking touches revenue, reputation, safety and sustainability. Pick the outcome that matters most to you.', 'المواقف تمسّ الإيرادات والسمعة والسلامة والاستدامة. اختر النتيجة الأهم لك.'),
  proof: b('Proof', 'الدليل'),
  howWeHelp: b('How we help', 'كيف نساعد'),
  theProblem: b('The problem', 'المشكلة'),
  journeyEyebrow: b('The arrival journey', 'رحلة الوصول'),
  journeyTitle: b('Follow one guest through your property.', 'تابع رحلة ضيف واحد داخل منشأتك.'),
  journeySub: b('Six moments decide how your parking is remembered. Here is what happens at each — and the system or service behind it.', 'ست لحظات تحدّد كيف يُذكَر موقفك. هذا ما يحدث في كل منها، والنظام أو الخدمة التي تقف خلفه.'),
  behind: b('Behind the scenes', 'خلف الكواليس'),
  casesEyebrow: b('Case studies', 'قصص النجاح'),
  casesTitle: b('Landmarks that trusted us with their first impression.', 'معالم وثقت بنا في انطباعها الأول.'),
  casesSub: b('Thirteen references — culture, retail, mixed-use and events — each told as a business story.', 'ثلاثة عشر مشروعًا مرجعيًا — ثقافة وتجزئة ومشروعات متعددة الاستخدامات وفعاليات — يُروى كل منها كقصة أعمال.'),
  all: b('All', 'الكل'),
  numbersEyebrow: b('In numbers', 'بالأرقام'),
  numbersTitle: b('Proof you can point to.', 'دليل يمكنك الإشارة إليه.'),
  numbersSub: b('Figures taken from our own projects and services.', 'أرقام من مشروعاتنا وخدماتنا الفعلية.'),
  indEyebrow: b('Industries', 'القطاعات'),
  indTitle: b('Built around the person who owns the outcome.', 'مصمَّمة حول من يملك النتيجة.'),
  indSub: b('Nine sectors, nine different questions. Start with the one on your desk.', 'تسعة قطاعات وتسعة أسئلة مختلفة. ابدأ بالسؤال الذي على مكتبك.'),
  peopleEyebrow: b('On the ground', 'في الميدان'),
  peopleTitle: b('Technology opens the gate. People make the arrival.', 'التقنية تفتح البوابة. والناس يصنعون الوصول.'),
  peopleSub: b('Every project runs on trained, uniformed teams — valets, traffic attendants, supervisors and command-center operators — visible, courteous and coordinated.', 'كل مشروع يعمل بفريق مدرَّب وبزي موحّد — سائقو فاليه ومنظّمو حركة ومشرفون ومشغّلو مركز عمليات — حضور واضح ولباقة وتنسيق.'),
  voicesEyebrow: b('In their words', 'بكلماتهم'),
  voicesTitle: b('What our clients say', 'ماذا يقول عملاؤنا'),
  mapEyebrow: b('Where we operate', 'أين نعمل'),
  mapTitle: b('Egypt and Saudi Arabia.', 'مصر والمملكة العربية السعودية.'),
  mapSub: b('Thirteen landmark references across Cairo, Giza and the North Coast.', 'ثلاثة عشر مشروعًا مرجعيًا في القاهرة والجيزة والساحل الشمالي.'),
  ksa: b('Saudi Arabia', 'المملكة العربية السعودية'),
  egypt: b('Egypt', 'مصر'),
  cairoGiza: b('Cairo & Giza', 'القاهرة والجيزة'),
  northCoast: b('North Coast', 'الساحل الشمالي'),
  projectsWord: b('projects', 'مشروعًا'),
  insEyebrow: b('Insights', 'رؤى'),
  insTitle: b('Ideas for the people who run properties.', 'أفكار لمن يديرون العقارات.'),
  insSub: b('Every article opens with three takeaways for decision-makers.', 'يبدأ كل مقال بثلاث خلاصات لصانعي القرار.'),
  faqEyebrow: b('FAQ', 'أسئلة شائعة'),
  faqTitle: b('Questions we hear first.', 'الأسئلة التي نسمعها أولًا.'),
  ctaTitle: b('Let’s review your arrival.', 'لنراجع تجربة الوصول لديك.'),
  ctaSub: b('Tell us about your property. We will come back with what we would look at first — layout, flow, systems or people.', 'أخبرنا عن منشأتك، وسنعود إليك بما سننظر فيه أولًا — المخطط أو الحركة أو الأنظمة أو الفريق.'),
  /* forms */
  fFirst: b('First name', 'الاسم الأول'),
  fLast: b('Last name', 'الاسم الأخير'),
  fEmail: b('Email', 'البريد الإلكتروني'),
  fPhone: b('Phone / mobile', 'الهاتف / الجوال'),
  fCompany: b('Company / property', 'الشركة / المنشأة'),
  fMsg: b('Your inquiry', 'استفسارك'),
  fMsgPh: b('Tell us about the property, the problem, or the date that worries you.', 'أخبرنا عن المنشأة أو المشكلة أو الموعد الذي يشغلك.'),
  fTopic: b('I would like to talk about…', 'أودّ التحدّث عن…'),
  fSend: b('Send inquiry', 'إرسال الاستفسار'),
  fThanks: b('Thank you — your message is ready to go.', 'شكرًا لك — رسالتك جاهزة للإرسال.'),
  fThanksSub: b('This is a design prototype, so nothing was actually sent. In production, this form posts to the City Parking team.', 'هذا نموذج تصميمي، لذا لم يُرسَل شيء فعليًا. في النسخة الفعلية يصل النموذج إلى فريق سيتي باركينج.'),
  fRequired: b('Required', 'مطلوب'),
  topicConsult: b('A parking plan / consultancy', 'خطة مواقف / استشارة'),
  topicSmart: b('Smart parking systems', 'أنظمة مواقف ذكية'),
  topicOps: b('Valet & operations', 'فاليه وتشغيل'),
  topicEvent: b('An event', 'فعالية'),
  topicOther: b('Something else', 'أمر آخر'),
  /* footer */
  footPartner: b('Your Parking Partner', 'شريكك في مواقف السيارات'),
  quickLinks: b('Quick links', 'روابط سريعة'),
  resources: b('Resources', 'الموارد'),
  privacy: b('Data privacy', 'خصوصية البيانات'),
  terms: b('Terms of use', 'شروط الاستخدام'),
  sitemap: b('Sitemap', 'خريطة الموقع'),
  faq: b('FAQ', 'الأسئلة الشائعة'),
  rights: b('© 2026 City Parking Integrated Solutions | All rights reserved.', '© 2026 سيتي باركينج للحلول المتكاملة | جميع الحقوق محفوظة.'),
  proto: b('Redesign concept — not the live site.', 'تصوّر إعادة تصميم — وليس الموقع الفعلي.'),
  visitOriginal: b('Visit cityparking-eg.com', 'زر cityparking-eg.com'),
  /* detail pages */
  theBusinessCase: b('What it does for the business', 'ماذا تفعل للأعمال'),
  whereUsed: b('Where we have used it', 'أين استخدمناها'),
  whereApplies: b('Where it matters most', 'أين تهمّ أكثر'),
  faqs: b('Frequently asked', 'أسئلة متكررة'),
  stake: b('The stake', 'ما كان على المحك'),
  whatWeDid: b('What we did', 'ما فعلناه'),
  whatChanged: b('What it delivered', 'ما حقّقناه'),
  whatWeDeployed: b('What we deployed', 'ما نشرناه'),
  factsFigures: b('Facts & figures', 'حقائق وأرقام'),
  entryTicket: b('ENTRY', 'دخول'),
  fLocation: b('Location', 'الموقع'),
  fDate: b('Date', 'التاريخ'),
  fReq: b('Requirement', 'المتطلّب'),
  fSol: b('Solution', 'الحل'),
  fSpec: b('Special features', 'ميزات خاصة'),
  field: b('From the field', 'من الميدان'),
  nextStory: b('Next story', 'القصة التالية'),
  related: b('Related', 'مرتبط'),
  forWho: b('Built for', 'مصمَّمة لـ'),
  question: b('The question on your desk', 'السؤال على مكتبك'),
  takeaways: b('In 30 seconds — three takeaways', 'في 30 ثانية — ثلاث خلاصات'),
  arabicNote: b('The full article is available in English.', 'المقال الكامل متاح باللغة الإنجليزية.'),
  legalNote: b('The legal text is provided in English.', 'النص القانوني متاح باللغة الإنجليزية.'),
  ourSolutions: b('Solutions', 'الحلول'),
  ourServices: b('Services', 'الخدمات'),
  thePlan: b('The plan', 'الخطة'),
  stackTitle: b('The technology, in business terms', 'التقنية، بلغة الأعمال'),
  stackSub: b('Six building blocks decision-makers keep hearing about — and what each one does for you.', 'ست لبنات يسمع عنها صانعو القرار — وما تفعله كل منها لك.'),
  ourPeople: b('Our people', 'فريقنا'),
  filterBy: b('Filter case studies', 'تصفية قصص النجاح'),
  viewProject: b('View project', 'عرض المشروع'),
  vehicles: b('vehicles', 'مركبة'),
  notFoundT: b('This lane is closed.', 'هذا المسار مغلق.'),
  notFoundP: b('The page you are looking for does not exist. Let’s get you back on the road.', 'الصفحة التي تبحث عنها غير موجودة. لنعُد بك إلى الطريق.'),
  backHome: b('Back to the homepage', 'العودة إلى الرئيسية'),
};

export const ui = new Proxy(raw, {
  get(t, k) {
    if (k in t) return t[k];
    if (typeof k === 'symbol') return undefined;
    throw new Error(`Missing UI string: ${String(k)}`);
  },
});

/* ------------------------------------------------------------------ marquee */
export const marquee = [
  'Grand Egyptian Museum', 'Mivida', 'Zia Mall', 'Alamein Festival', 'Egyptian International Exhibition Center', 'Marrasi North Coast',
  'Polaris Mall', 'Cairo Opera House', 'Salah Eldeen Citadel', 'Le Lac du Caire', 'North Square Mall', 'Masr Al Mahrousa', 'ULTER Techno Events',
];
export const marqueeAr = [
  'المتحف المصري الكبير', 'ميفيدا', 'زيا مول', 'مهرجان العلمين', 'مركز مصر للمعارض الدولية', 'مراسي الساحل الشمالي',
  'بولاريس مول', 'دار الأوبرا المصرية', 'قلعة صلاح الدين', 'بحيرة القاهرة', 'نورث سكوير مول', 'مصر المحروسة', 'حفلات ألتر مصر',
];

/* ------------------------------------------------------------------ home: numbers, LED strip */
export const heroStats = [
  { led: '7', suffix: 'M+', label: b('parkers every year', 'مستخدم للمواقف سنويًا') },
  { led: '20', suffix: '+', label: b('years of industry expertise', 'عامًا من الخبرة في القطاع') },
  { led: '13', suffix: '', label: b('landmark references', 'مشروعًا مرجعيًا بارزًا') },
];
export const numbers = [
  { led: '20000', suffix: '+', label: b('vehicles managed in one festival weekend', 'مركبة أُديرت في عطلة مهرجان واحدة'), from: b('Alamein Festival', 'مهرجان العلمين'), to: 'alamein-festival', kind: 'cases' },
  { led: '15000', suffix: '+', label: b('vehicle capacity, rapid-deployment gates', 'مركبة سعة ببوابات سريعة النشر'), from: b('ULTER Techno Events', 'حفلات ألتر مصر'), to: 'ulter-techno-events', kind: 'cases' },
  { led: '9800', suffix: '', label: b('valet services', 'خدمة فاليه'), from: b('City Parking valet operations', 'عمليات الفاليه في سيتي باركينج'), to: 'valet-services', kind: 'services' },
  { led: '150', suffix: 'L', label: b('of water saved per waterless wash, up to', 'لتر ماء يُوفَّر لكل غسلة بلا ماء، حتى'), from: b('Waterless Car Wash', 'غسيل السيارات بدون ماء'), to: 'waterless-car-wash', kind: 'services' },
];

/* ------------------------------------------------------------------ home: plan · integrate · operate */
export const pio = [
  {
    n: '01',
    k: 'advise',
    name: b('Advise', 'استشارة'),
    line: b('Get the plan right before the concrete is poured.', 'اضبط الخطة قبل أن تُصبّ الخرسانة.'),
    text: b('Demand analysis, layout design and traffic strategy for new facilities and existing ones.', 'تحليل الطلب وتصميم المخططات واستراتيجية الحركة للمنشآت الجديدة والقائمة.'),
    chips: [b('Layout design', 'تصميم المخطط'), b('Flow analysis', 'تحليل الحركة'), b('Smart-parking roadmap', 'خارطة المواقف الذكية')],
    href: 'services/parking-and-traffic-consultancy/',
    img: 'sv-consult',
  },
  {
    n: '02',
    k: 'integrate',
    name: b('Integrate', 'تكامل'),
    line: b('Systems that work as one.', 'أنظمة تعمل كمنظومة واحدة.'),
    text: b('License-plate recognition, sensors, guidance, access control, payments and EV charging — integrated on a single platform.', 'التعرّف على اللوحات والحساسات والتوجيه والتحكّم في الدخول والدفع وشحن السيارات الكهربائية — في منصة واحدة.'),
    chips: [b('LPR', 'التعرّف على اللوحات'), b('Sensors', 'حساسات'), b('Guidance', 'توجيه'), b('Payments', 'دفع'), b('EV', 'شحن')],
    href: 'solutions/',
    img: 'sol-pgs',
  },
  {
    n: '03',
    k: 'operate',
    name: b('Operate', 'تشغيل'),
    line: b('People who run it, every day.', 'فريق يديرها كل يوم.'),
    text: b('Trained valets, traffic attendants and supervisors — coordinated from an operational command center.', 'سائقو فاليه ومنظّمو حركة ومشرفون مدرَّبون — بتنسيق من مركز عمليات.'),
    chips: [b('Valet', 'فاليه'), b('Traffic', 'حركة'), b('Events', 'فعاليات'), b('Meet & greet', 'استقبال')],
    href: 'services/',
    img: 'gem-crew-2',
  },
];

/* ------------------------------------------------------------------ home: decision lens */
export const lenses = [
  {
    k: 'revenue',
    label: b('Revenue & yield', 'الإيرادات والعائد'),
    role: b('For CFOs, asset managers and operators', 'للمديرين الماليين ومديري الأصول والمشغّلين'),
    goal: b('Turn every space into measurable revenue.', 'حوّل كل موقف إلى إيراد يمكن قياسه.'),
    problem: b('Empty spaces you cannot see, queues you cannot sell through, and revenue you cannot reconcile.', 'مواقف شاغرة لا تراها، وطوابير تعطّل البيع، وإيرادات يصعب مطابقتها.'),
    answers: [
      b('Live occupancy and demand analytics show what the car park is really doing.', 'تحليلات الإشغال والطلب اللحظية تُظهر ما يحدث فعلًا في الموقف.'),
      b('Contactless payment, reservations and dynamic pricing raise throughput and yield.', 'الدفع دون تلامس والحجز والتسعير الديناميكي ترفع الطاقة الاستيعابية والعائد.'),
      b('Automated entry and exit reduces manual handling and its errors.', 'الدخول والخروج الآليان يقلّلان التعامل اليدوي وأخطاءه.'),
    ],
    case: 'zia-mall',
    links: ['smart-parking-management', 'parking-guidance-system'],
  },
  {
    k: 'experience',
    label: b('Guest experience', 'تجربة الضيف'),
    role: b('For GMs, hospitality and brand leaders', 'للمديرين العامين وقادة الضيافة والعلامة'),
    goal: b('Make arrival feel like hospitality.', 'اجعل الوصول يبدو كالضيافة.'),
    problem: b('Parking is the first touchpoint of the visit — and the last impression a guest leaves with.', 'المواقف هي أول نقطة تماس في الزيارة — وآخر انطباع يغادر به الضيف.'),
    answers: [
      b('White-glove valet and meet-and-greet from the very first gate.', 'فاليه واستقبال راقٍ من البوابة الأولى.'),
      b('VIP drop-off and priority zones, discreet by design.', 'مناطق نزول وأولوية لكبار الضيوف، بسرية تامة.'),
      b('Trained, uniformed teams — visible, courteous, coordinated.', 'فرق مدرَّبة بزي موحّد — حضور واضح ولباقة وتنسيق.'),
    ],
    case: 'masr-al-mahrousa',
    links: ['valet-services', 'meet-and-greet-services'],
  },
  {
    k: 'operations',
    label: b('Operations & safety', 'التشغيل والسلامة'),
    role: b('For operations, events and security heads', 'لمديري التشغيل والفعاليات والأمن'),
    goal: b('Stay in control on your busiest day.', 'ابقَ متحكّمًا في أكثر أيامك ازدحامًا.'),
    problem: b('Peak surges, temporary sites and several guest categories arriving through the same gate.', 'ذروات مفاجئة ومواقع مؤقتة وفئات ضيوف متعددة تصل عبر البوابة نفسها.'),
    answers: [
      b('Event parking and traffic plans built with the organizer.', 'خطط مواقف وحركة للفعاليات تُبنى مع المنظّم.'),
      b('A command center coordinating every entry point and team in real time.', 'مركز عمليات ينسّق كل بوابة وفريق لحظيًا.'),
      b('Safe pedestrian paths and clear emergency-vehicle routes.', 'ممرات مشاة آمنة ومسارات واضحة لمركبات الطوارئ.'),
    ],
    case: 'alamein-festival',
    links: ['event-parking', 'traffic-management'],
  },
  {
    k: 'future',
    label: b('Future-ready', 'جاهزية المستقبل'),
    role: b('For development and sustainability leads', 'لقادة التطوير والاستدامة'),
    goal: b('Build for the cars — and the standards — that are coming.', 'ابنِ للسيارات — والمعايير — القادمة.'),
    problem: b('EV adoption, water scarcity and ESG expectations are becoming part of what a property is judged on.', 'انتشار السيارات الكهربائية وشحّ المياه وتوقعات الاستدامة أصبحت جزءًا مما يُحكم به على العقار.'),
    answers: [
      b('EV charging stations — installed, managed and maintained as part of the car park.', 'محطات شحن كهربائي — تُركَّب وتُدار وتُصان كجزء من الموقف.'),
      b('Waterless car wash saves up to 150 liters per wash.', 'غسيل السيارات بلا ماء يوفّر حتى 150 لترًا في كل غسلة.'),
      b('Eco-friendly golf-cart mobility and energy-efficient systems.', 'تنقّل بعربات جولف صديقة للبيئة وأنظمة موفّرة للطاقة.'),
    ],
    case: 'grand-egyptian-museum',
    links: ['ev-charging', 'waterless-car-wash'],
  },
  {
    k: 'city',
    label: b('City-scale mobility', 'التنقّل على مستوى المدينة'),
    role: b('For municipalities and road authorities', 'للبلديات وهيئات الطرق'),
    goal: b('Manage the road network, not just the car park.', 'أدِر شبكة الطرق، لا الموقف وحده.'),
    problem: b('Congestion, incidents and overloaded trucks that you only find out about afterwards.', 'ازدحام وحوادث وشاحنات محمّلة زيادة لا تعرف بها إلا بعد وقوعها.'),
    answers: [
      b('Traffic intelligence: real-time monitoring, predictive analytics and incident detection.', 'ذكاء المرور: مراقبة لحظية وتحليلات تنبؤية وكشف للحوادث.'),
      b('Weight-in-motion protects roads by weighing trucks at speed.', 'أنظمة الوزن أثناء الحركة تحمي الطرق بوزن الشاحنات وهي تتحرك.'),
      b('On-street systems and toll gates that make curbs and lanes measurable.', 'أنظمة مواقف الشوارع وبوابات العبور تجعل الأرصفة والمسارات قابلة للقياس.'),
    ],
    case: null,
    links: ['traffic-intelligence', 'on-street-parking-system'],
  },
];

/* ------------------------------------------------------------------ home: arrival journey */
export const journey = [
  { n: '01', name: b('Approach', 'الاقتراب'), out: b('The queue never reaches the street.', 'الطابور لا يصل إلى الشارع.'), tech: [b('Traffic management', 'إدارة الحركة'), b('Dynamic signage', 'لوحات ديناميكية'), b('On-site attendants', 'منظّمون في الموقع')], to: 'services/traffic-management/', icon: 'cone' },
  { n: '02', name: b('Enter', 'الدخول'), out: b('Recognized at the gate — no ticket, no stop.', 'يُتعرَّف عليه عند البوابة — بلا تذكرة وبلا توقّف.'), tech: [b('License-plate recognition', 'التعرّف على اللوحات'), b('Access control', 'التحكّم في الدخول'), b('Automated barriers', 'حواجز آلية')], to: 'solutions/smart-parking-management/', icon: 'toll' },
  { n: '03', name: b('Find', 'العثور على موقف'), out: b('Guided to a free space, not around the block.', 'يُقاد إلى موقف شاغر بدل الدوران حول المبنى.'), tech: [b('Sensors', 'حساسات'), b('Dynamic digital signage', 'لوحات رقمية ديناميكية'), b('Mobile app', 'تطبيق جوال')], to: 'solutions/parking-guidance-system/', icon: 'pgs' },
  { n: '04', name: b('Park or hand over', 'الركن أو التسليم'), out: b('Handed over with white-glove care.', 'يُسلَّم بعناية راقية.'), tech: [b('Valet', 'فاليه'), b('Meet & greet', 'استقبال'), b('VIP zones', 'مناطق كبار الضيوف')], to: 'services/valet-services/', icon: 'valet' },
  { n: '05', name: b('Pay', 'الدفع'), out: b('Paid before they reach the exit.', 'يُدفع قبل الوصول إلى المخرج.'), tech: [b('Contactless payment', 'دفع دون تلامس'), b('Reservations', 'حجز مسبق'), b('Mobile wallets', 'محافظ إلكترونية')], to: 'solutions/smart-parking-management/', icon: 'pay' },
  { n: '06', name: b('Leave', 'المغادرة'), out: b('An exit that clears smoothly — watched from one control room.', 'مخرج ينساب بسلاسة — تحت عين غرفة تحكّم واحدة.'), tech: [b('Command center', 'مركز عمليات'), b('Smart exits', 'مخارج ذكية'), b('Analytics', 'تحليلات')], to: 'services/parking-management/', icon: 'smart' },
];

/* ------------------------------------------------------------------ home: voices */
export const voices = [
  {
    q: b(
      'At Schiphol we invest a lot to provide mobility solutions. There is really a transition in mobility going on with more electric cars and electric buses. But yield management is also important to optimize revenue. We have to be prepared to integrate tomorrow’s mobility into our systems.',
      'في سخيبول نستثمر كثيرًا في حلول التنقّل. هناك تحوّل حقيقي في التنقّل مع زيادة السيارات والحافلات الكهربائية. لكن إدارة العائد مهمّة أيضًا لتحسين الإيرادات. علينا أن نكون مستعدين لدمج تنقّل الغد في أنظمتنا.'
    ),
    who: b('Dhiredj Sadhoe', 'ديهريدج سادهو'),
    role: b('Director Parking & Mobility Services, Schiphol Group', 'مدير خدمات المواقف والتنقّل، مجموعة سخيبول'),
  },
  {
    q: b(
      'The support is absolutely important — thus, service organizations have to respond quickly: they pick up and solve all issues. With respect to business operation, powerful tools are needed and a powerful Control Center gives a helicopter view over all systems.',
      'الدعم مهمّ للغاية — لذا يجب أن تستجيب مؤسسات الخدمة بسرعة: تلتقط كل المشكلات وتحلّها. وفيما يخصّ التشغيل، نحتاج أدوات قوية، ومركز تحكّم قويّ يمنح رؤية شاملة لكل الأنظمة.'
    ),
    who: b('Dhiredj Sadhoe', 'ديهريدج سادهو'),
    role: b('Agile Service Manager, Schiphol Group', 'مدير الخدمة المرنة، مجموعة سخيبول'),
  },
];

/* ------------------------------------------------------------------ map pins (percent of the cropped 625×380 map) */
export const pins = [
  { k: 'cairo', x: 25.1, y: 15.9, count: 11, label: b('Cairo & Giza', 'القاهرة والجيزة') },
  { k: 'coast', x: 17.2, y: 9.4, count: 2, label: b('North Coast', 'الساحل الشمالي') },
];

/* ------------------------------------------------------------------ about */
export const about = {
  h1: b('Welcoming people is our business. Parking is how we do it.', 'استقبال الناس هو عملنا. والمواقف هي وسيلتنا.'),
  lead: b(
    'City Parking Integrated Solutions is a leading parking operator and smart-parking system integrator. We believe parking is more than finding a space — it is a seamless journey, an efficient operation and technology woven into everyday experiences.',
    'سيتي باركينج للحلول المتكاملة مشغّل مواقف رائد ومتكامل لأنظمة المواقف الذكية. نؤمن بأن المواقف أكثر من العثور على مكان — إنها رحلة سلسة وتشغيل كفؤ وتقنية تتغلغل في التجارب اليومية.'
  ),
  storyTitle: b('From a local initiative to a regional operator', 'من مبادرة محلية إلى مشغّل إقليمي'),
  story: [
    b('City Parking Integrated Solutions was born from a vision to redefine parking management by blending creativity, technology and functionality. What began as a local initiative to improve traffic flow and parking efficiency grew quickly, driven by a need for smarter, faster and more intuitive parking systems.', 'وُلدت سيتي باركينج من رؤية لإعادة تعريف إدارة المواقف بالجمع بين الإبداع والتقنية والوظيفة. بدأت كمبادرة محلية لتحسين حركة المرور وكفاءة المواقف، ثم نمت سريعًا بدافع الحاجة إلى أنظمة أذكى وأسرع وأكثر سلاسة.'),
    b('Today we serve cultural landmarks, commercial developments, public spaces and luxury venues. Our team collaborates with city planners, architects and developers to create tailored parking solutions for each project.', 'نخدم اليوم المعالم الثقافية والمشروعات التجارية والأماكن العامة والمقارّ الفاخرة. ويتعاون فريقنا مع مخططي المدن والمعماريين والمطوّرين لصياغة حلول مواقف مخصّصة لكل مشروع.'),
  ],
  visionTitle: b('Our vision', 'رؤيتنا'),
  visionQuote: b('Innovation is at the heart of everything we do. By embracing technology and staying ahead of the curve, we are not just managing parking — we are shaping the future of urban mobility.', 'الابتكار في قلب كل ما نفعله. بتبنّي التقنية وسبق المنحنى، نحن لا ندير المواقف فقط — بل نشارك في تشكيل مستقبل التنقّل الحضري.'),
  vision: b('A future where parking and traffic management are as seamless and intuitive as possible — integrated with smart-city initiatives, using data and technology to improve convenience, sustainability and efficiency.', 'مستقبل تكون فيه إدارة المواقف والحركة سلسة وبديهية قدر الإمكان — متكاملة مع مبادرات المدن الذكية، وتستثمر البيانات والتقنية لتحسين الراحة والاستدامة والكفاءة.'),
  ceoTitle: b('A message from our CEO', 'رسالة من الرئيس التنفيذي'),
  ceoQuote: b('We blend innovation and service to transform the parking experience. With 20 years of industry expertise, we deliver tailored solutions and build lasting partnerships, driving growth across the Middle East.', 'نمزج بين الابتكار والخدمة لتحويل تجربة المواقف. وبفضل 20 عامًا من الخبرة في القطاع، نقدّم حلولًا مخصّصة ونبني شراكات دائمة تدفع النمو في أنحاء الشرق الأوسط.'),
  ceoText: b('With over 20 years of experience, our team has managed and delivered numerous parking and traffic projects across commercial, residential and public infrastructure — and understands the region’s unique challenges.', 'بأكثر من 20 عامًا من الخبرة، أدار فريقنا وسلّم عددًا كبيرًا من مشروعات المواقف والحركة في القطاعات التجارية والسكنية والبنية التحتية العامة — ويفهم تحديات المنطقة الفريدة.'),
  whyTitle: b('The City Parking difference', 'ما يميّز سيتي باركينج'),
  why: [
    { h: b('Tailored solutions', 'حلول مخصّصة'), p: b('We do not believe in one-size-fits-all. Every project is unique, and so are our solutions.', 'لا نؤمن بحل واحد يناسب الجميع. كل مشروع فريد، وكذلك حلولنا.') },
    { h: b('Cutting-edge technology', 'تقنية متقدمة'), p: b('From real-time guidance to EV charging and license-plate recognition, we keep innovating.', 'من التوجيه اللحظي إلى الشحن الكهربائي والتعرّف على اللوحات، نواصل الابتكار.') },
    { h: b('Customer-first', 'العميل أولًا'), p: b('At the heart of everything is customer satisfaction. We listen, we understand, we deliver.', 'في قلب كل ما نفعله رضا العميل. نستمع ونفهم وننفّذ.') },
    { h: b('Sustainability-focused', 'مهتمّون بالاستدامة'), p: b('Eco-friendly practices such as EV charging and energy-efficient systems are built into our projects.', 'ممارسات صديقة للبيئة مثل الشحن الكهربائي والأنظمة الموفّرة للطاقة جزء من مشروعاتنا.') },
    { h: b('Proven expertise', 'خبرة مثبتة'), p: b('Years of experience and a portfolio of successful projects behind every challenge.', 'سنوات من الخبرة ومحفظة مشروعات ناجحة خلف كل تحدٍّ.') },
  ],
  routeTitle: b('The route so far', 'الطريق حتى الآن'),
  routeSub: b('Landmark references, in order of installation.', 'المشروعات المرجعية، بترتيب التركيب.'),
};

/* ------------------------------------------------------------------ careers */
export const careers = {
  h1: b('Join the crew.', 'انضم إلى الفريق.'),
  lead: b('Our people are the product: valets, traffic attendants, supervisors, command-center operators and systems engineers, working side by side.', 'فريقنا هو المنتج: سائقو فاليه ومنظّمو حركة ومشرفون ومشغّلو مركز عمليات ومهندسو أنظمة، يعملون جنبًا إلى جنب.'),
  step1: b('Your personal information', 'بياناتك الشخصية'),
  step2: b('More about you', 'المزيد عنك'),
  position: b('Position', 'الوظيفة'),
  about: b('Tell us about yourself', 'حدّثنا عن نفسك'),
  resume: b('Upload your resume', 'ارفع سيرتك الذاتية'),
  resumeHint: b('PDF, DOC or DOCX · max 25 MB', 'PDF أو DOC أو DOCX · حتى 25 ميجابايت'),
  callTime: b('Best time to call you', 'أفضل وقت للاتصال بك'),
  times: [b('Mornings', 'صباحًا'), b('Early afternoon', 'بعد الظهر مبكرًا'), b('Late afternoon', 'آخر النهار'), b('Early evening', 'مساءً')],
  agree: b('I agree to the terms and conditions.', 'أوافق على الشروط والأحكام.'),
  next: b('Next', 'التالي'),
  prev: b('Previous', 'السابق'),
  submit: b('Submit application', 'إرسال الطلب'),
  thanks: b('Application ready.', 'الطلب جاهز.'),
};
