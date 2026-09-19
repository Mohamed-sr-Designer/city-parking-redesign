import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { b } from '../lib/i18n.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const bodies = JSON.parse(fs.readFileSync(path.join(HERE, 'articles-body.json'), 'utf8'));
const body = (start) => bodies.find((a) => a.slug.startsWith(start));

// Five existing articles, kept word for word (English). What is new: a decision-maker layer on top of each —
// who it is for, three takeaways in plain business language, and the solutions / services it points to.
const meta = [
  {
    slug: 'smart-systems-in-urban-mobility',
    src: 'revolutionizing-parking-operations',
    img: 'in-ops',
    tag: b('Urban mobility', 'التنقّل الحضري'),
    title_ar: 'ثورة في تشغيل المواقف: دور الأنظمة الذكية في التنقّل الحضري',
    excerpt_ar: 'مع ازدحام المدن وضيق المساحات، تصبح حلول المواقف الكفؤة أساسية لتقليل الازدحام وتحسين استخدام المساحة وتجربة المستخدم.',
    who: b('City authorities · Operators', 'الجهات المحلية · المشغّلون'),
    takeaways: [
      b('Drivers circling for a space cause a significant share of urban congestion — guidance and sensors remove the cause, not just the symptom.', 'دوران السائقين بحثًا عن موقف يسبّب جزءًا كبيرًا من ازدحام المدن — والتوجيه والحساسات تعالج السبب لا العَرَض فقط.'),
      b('The core stack: sensors and IoT, AI-driven guidance, mobile apps with cloud platforms, and license-plate recognition for ticketless entry.', 'المكوّنات الأساسية: حساسات وإنترنت الأشياء وتوجيه بالذكاء الاصطناعي وتطبيقات مع منصات سحابية وتعرّف على اللوحات لدخول بلا تذاكر.'),
      b('The upside goes beyond convenience: more revenue for operators and lower emissions as vehicles idle less.', 'العائد يتجاوز الراحة: إيراد أكبر للمشغّلين وانبعاثات أقل مع قلة توقّف المركبات.'),
    ],
    links: ['smart-parking-management', 'parking-guidance-system', 'traffic-intelligence'],
  },
  {
    slug: 'seamless-parking-and-valet',
    src: 'enhancing-customer-experience',
    img: 'sv-valet',
    tag: b('Guest experience', 'تجربة الضيف'),
    title_ar: 'تجربة عملاء أفضل بمواقف وفاليه سلسة',
    excerpt_ar: 'الانطباع الأول والأخير لدى العميل — في المول أو الفندق أو الفعالية — يتحدّد غالبًا عند الموقف.',
    who: b('GMs · Hospitality & retail leaders', 'المديرون العامون · قادة الضيافة والتجزئة'),
    takeaways: [
      b('Long waits, unclear signage and clumsy payment are where a visit first goes wrong — and parking is often the first and last impression.', 'الانتظار الطويل واللوحات غير الواضحة والدفع المعقّد هي حيث تسوء الزيارة أولًا — والموقف غالبًا هو الانطباع الأول والأخير.'),
      b('Valet adds personalization, time saving and security; smart systems add guidance, easy payment and live status.', 'الفاليه يضيف الطابع الشخصي وتوفير الوقت والأمان؛ والأنظمة الذكية تضيف التوجيه والدفع السهل والحالة اللحظية.'),
      b('The return: a stronger brand image, higher customer loyalty and lower operating overhead.', 'العائد: صورة علامة أقوى وولاء أعلى للعملاء وتكاليف تشغيل أقل.'),
    ],
    links: ['valet-services', 'parking-guidance-system', 'shopping-malls'],
  },
  {
    slug: 'ai-and-the-future-of-parking-management',
    src: 'unlocking-efficiency',
    img: 'in-ai',
    tag: b('Technology & AI', 'التقنية والذكاء الاصطناعي'),
    title_ar: 'كفاءة أعلى: كيف يصنع الذكاء الاصطناعي مستقبل إدارة المواقف',
    excerpt_ar: 'مع نمو المدن يصبح البحث المستمر عن موقف مصدرًا للازدحام واستهلاك الوقود والانبعاثات وإحباط السائقين. فكيف يغيّر الذكاء الاصطناعي ذلك؟',
    who: b('Operators · CFOs', 'المشغّلون · المديرون الماليون'),
    takeaways: [
      b('AI analyzes live and historical data to predict demand and allocate spaces more intelligently.', 'يحلّل الذكاء الاصطناعي البيانات اللحظية والتاريخية لتوقّع الطلب وتخصيص المواقف بذكاء أكبر.'),
      b('Four business benefits: better space utilization, a smoother customer experience, lower operating cost through automation, and smart dynamic pricing.', 'أربع فوائد للأعمال: استفادة أفضل من المساحة وتجربة عملاء أسلس وتكلفة تشغيل أقل عبر الأتمتة وتسعير ديناميكي ذكي.'),
      b('Next on the horizon: EV-charging integration, autonomous parking and smart-city connection.', 'على الأفق: تكامل الشحن الكهربائي والركن الذاتي والارتباط بالمدن الذكية.'),
    ],
    links: ['smart-parking-management', 'ev-charging', 'traffic-intelligence'],
  },
  {
    slug: 'sustainable-solutions-with-smart-technology',
    src: 'parking-beyond-the-basics',
    img: 'sol-ev',
    tag: b('Sustainability', 'الاستدامة'),
    title_ar: 'ما وراء الأساسيات: دمج الحلول المستدامة مع التقنية الذكية',
    excerpt_ar: 'العالم الحديث يريد أكثر من الأساسيات — أنظمة مواقف كفؤة وصديقة للبيئة للمدن والشركات والمطوّرين.',
    who: b('Developers · Sustainability leads', 'المطوّرون · قادة الاستدامة'),
    takeaways: [
      b('Sustainable parking combines EV charging, energy-efficient infrastructure and AI-powered management.', 'المواقف المستدامة تجمع بين الشحن الكهربائي والبنية الموفّرة للطاقة والإدارة بالذكاء الاصطناعي.'),
      b('It lowers environmental impact, improves the customer experience and saves operators money over time — even if the initial investment is higher.', 'تقلّل الأثر البيئي وتحسّن تجربة العميل وتوفّر على المشغّل مع الوقت — وإن كان الاستثمار الأولي أعلى.'),
      b('Next: smart-city integration, more advanced sustainable features and autonomous vehicles.', 'القادم: التكامل مع المدن الذكية وميزات استدامة أكثر تقدّمًا والمركبات ذاتية القيادة.'),
    ],
    links: ['ev-charging', 'smart-parking-management', 'waterless-car-wash'],
  },
  {
    slug: 'smart-parking-for-commercial-spaces',
    src: 'from-concept-to-reality',
    img: 'sol-smart',
    tag: b('Commercial property', 'العقار التجاري'),
    title_ar: 'من الفكرة إلى الواقع: فوائد المواقف الذكية للمساحات التجارية',
    excerpt_ar: 'من مراكز التسوق إلى المكاتب ومواقع الترفيه، تواجه المساحات التجارية تحدّي استيعاب أعداد متزايدة من المركبات.',
    who: b('Property owners · Asset managers', 'ملّاك العقارات · مديرو الأصول'),
    takeaways: [
      b('Three commercial benefits: a better customer experience, optimized space utilization, and cost efficiency with new revenue.', 'ثلاث فوائد تجارية: تجربة عملاء أفضل واستفادة أمثل من المساحة وكفاءة في التكلفة مع إيراد جديد.'),
      b('It works in three steps: IoT sensors detect vehicles, real-time navigation guides drivers, contactless payment closes the loop.', 'يعمل في ثلاث خطوات: حساسات تكتشف المركبات وتوجيه لحظي يقود السائقين ودفع دون تلامس يُنهي الدورة.'),
      b('It suits malls, office complexes and airports — and prepares you for smart-city integration, EVs and advanced analytics.', 'يناسب المولات والمجمعات الإدارية والمطارات — ويهيّئك للتكامل مع المدن الذكية والسيارات الكهربائية والتحليلات المتقدمة.'),
    ],
    links: ['smart-parking-management', 'shopping-malls', 'office-buildings'],
  },
];

export const insights = meta.map((m) => {
  const src = body(m.src);
  if (!src) throw new Error('article body not found: ' + m.src);
  const lead = src.blocks.find((x) => x.t === 'p')?.x ?? '';
  const words = src.blocks.reduce((n, x) => n + x.x.split(' ').length, 0);
  return {
    ...m,
    date: src.date,
    title: b(src.title, m.title_ar),
    excerpt: b(lead.length > 210 ? lead.slice(0, lead.lastIndexOf(' ', 205)) + '…' : lead, m.excerpt_ar),
    blocks: src.blocks,
    mins: Math.max(3, Math.round(words / 200)),
  };
});
