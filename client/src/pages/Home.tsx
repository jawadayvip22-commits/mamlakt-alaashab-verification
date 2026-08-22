/**
 * Design philosophy: عيادة الأعشاب الهادئة — واجهة عربية تحريرية دافئة،
 * أخضر عشبي وعاجي، مع تركيز واضح على التحقق من أصالة المنتج.
 */
import { useState } from "react";
import { ArrowLeft, Check, ChevronDown, CircleCheck, Leaf, Menu, ShieldCheck, X } from "lucide-react";

const productImage = "/manus-storage/product-main_9f687ce0.png";
const logoImage = "/manus-storage/authenticity-warning_5bba3f81.avif";
const warningImage = "/manus-storage/product-detail_18fd4a4f.avif";
const validCodes = ["482716305914", "739204681527", "165938470226", "904372615880", "628501947336", "351867209445", "817430562791", "246795813604"];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [code, setCode] = useState("");
  const [attempted, setAttempted] = useState(false);
  const [verified, setVerified] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const today = new Intl.DateTimeFormat("ar-SA", { year: "numeric", month: "long", day: "numeric" }).format(new Date());

  const verifyCode = () => {
    const normalized = code.replace(/\D/g, "").slice(0, 12);
    setCode(normalized);
    setAttempted(true);
    setVerified(validCodes.includes(normalized));
  };

  return (
    <div dir="rtl" className="min-h-screen overflow-hidden bg-[#F7F3EA] text-[#17352D]">
      <div className="announcement"><span>ضماننا الذهبي</span><span className="announcement-dot" /> إن لم تستفد من الكريم خلال 3 أيام، تواصل معنا لاسترجاع نقودك.</div>
      <header className="site-header"><div className="site-header-inner">
        <a href="#top" className="brand" aria-label="مملكة الأعشاب"><span className="brand-mark-wrap"><img src={logoImage} alt="شعار مملكة الأعشاب" className="brand-mark" /></span><span><strong>مملكة</strong><small>الأعشاب</small></span></a>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="التنقل الرئيسي"><a href="#verify" onClick={() => setMenuOpen(false)}>التحقق</a><a href="#benefits" onClick={() => setMenuOpen(false)}>لماذا نحن</a><a href="#product" onClick={() => setMenuOpen(false)}>المنتج</a><a href="#faq" onClick={() => setMenuOpen(false)}>الأسئلة الشائعة</a></nav>
        <a className="header-cta" href="#verify">تحقق الآن <CircleCheck size={16} /></a><button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}>{menuOpen ? <X /> : <Menu />}</button>
      </div></header>

      <main id="top">
        <section className="hero-section"><div className="hero-copy"><div className="eyebrow"><Leaf size={15} /> عناية يومية من قلب الطبيعة</div><h1>استمتع بحركة مرنة<br /><em>وخالية من الألم</em><br />الحل الأمثل.</h1><p className="hero-lead">لتخفيف آلام المفاصل والتهابات العظام والأعصاب.</p><div className="hero-actions"><a className="button button-primary" href="#verify">تحقق من منتجك <ArrowLeft size={18} /></a><a className="text-link" href="#product">تعرف على المنتج <ArrowLeft size={18} /></a></div><div className="hero-note"><ShieldCheck size={20} /><span><strong>أصالة مضمونة</strong><br />كل عبوة تحمل كود تحقق خاصاً بها</span></div></div><div className="hero-visual"><img src={productImage} alt="كريم الأعصاب والمفاصل الأصلي" /><div className="hero-stamp"><span>أصلي</span><strong>100%</strong><span>موثوق</span></div><div className="hero-caption"><span>01</span><span>عناية طبيعية تثق بها</span></div></div></section>

        <section className="trust-strip"><div><span className="trust-number">01</span><span><strong>تركيبة عشبية</strong><small>مختارة بعناية</small></span></div><div><span className="trust-number">02</span><span><strong>تحقق سهل</strong><small>نتيجة واضحة وفورية</small></span></div><div><span className="trust-number">03</span><span><strong>ضمان ذهبي</strong><small>راحة بالك أولاً</small></span></div></section>

        <section className="intro-section" id="benefits"><div className="section-kicker">لماذا مملكة الأعشاب؟</div><div className="intro-layout"><h2>العناية التي<br /><span>تواكب يومك.</span></h2><div><p className="large-copy">لأن الحركة ليست تفصيلاً صغيراً. صممنا عنايتنا لتكون جزءاً بسيطاً ومريحاً من روتينك، من أول استخدام وحتى كل خطوة بعدها.</p><a className="text-link dark" href="#product">تعرّف على التفاصيل <ArrowLeft size={17} /></a></div></div></section>
        <section className="benefits-section"><div className="benefit-card"><div className="benefit-icon"><Leaf /></div><span>01 / من الطبيعة</span><h3>مكونات تعرفها<br />وتثق بها.</h3><p>اختيارات عشبية بعناية، في تركيبة عملية تناسب روتينك اليومي.</p></div><div className="benefit-card featured"><div className="benefit-icon"><CircleCheck /></div><span>02 / تحقق أوضح</span><h3>منتج أصلي<br />بثقة أكبر.</h3><p>تحقق من أصالة عبوتك بسهولة قبل الاستخدام واطمئن لاختيارك.</p></div><div className="benefit-card"><div className="benefit-icon"><ShieldCheck /></div><span>03 / عناية يومية</span><h3>راحة تلاحظها<br />مع كل حركة.</h3><p>قوام مريح وسريع الامتصاص لتستمر في يومك دون تعقيد.</p></div></section>

        <section className="product-section" id="product"><div className="product-image-wrap"><img src={warningImage} alt="احذروا التقليد" className="warning-image" /><img src={productImage} alt="عبوة كريم الأعصاب والمفاصل الأصلية" className="product-image" /></div><div className="product-copy"><div className="section-kicker">المنتج المميز</div><h2>رفيقك في<br /><em>كل خطوة.</em></h2><p>كريم مملكة الأعشاب للعناية بالمفاصل والعظام والأعصاب. استخدمه ضمن روتينك اليومي لتمنح جسمك لحظة عناية يستحقها.</p><ul><li><Check size={17} /> تركيبة عشبية للاستخدام اليومي</li><li><Check size={17} /> قوام مريح وسريع الامتصاص</li><li><Check size={17} /> عبوة محمية بكود أصالة</li></ul><a href="#verify" className="button button-primary">تحقق من الأصالة <ArrowLeft size={18} /></a></div></section>

        <section className="verify-section" id="verify"><div className="verify-inner"><div className="section-kicker light">خدمة ما بعد الشراء</div><h2>تحقق من أصالة<br /><em>منتجك الآن.</em></h2><p>أدخل الكود الموجود على عبوتك للتأكد من أن المنتج أصلي ومن مصدر موثوق.</p><div className="verify-form"><input value={code} onChange={(e) => { setCode(e.target.value.replace(/\D/g, "").slice(0, 12)); setAttempted(false); setVerified(false); }} inputMode="numeric" maxLength={12} placeholder="أدخل كود الأصالة" aria-label="كود الأصالة" /><button onClick={verifyCode}>تحقق <CircleCheck size={18} /></button></div>{attempted && !verified && <div className="verify-error">الكود غير صحيح ❌</div>}{attempted && verified && <div className="verify-success"><CircleCheck size={18} /><div><strong>المنتج أصلي 100% من مصدر موثوق ✅</strong><span>تاريخ الاستخدام: {today}</span><span>التاريخ الحالي: {today}</span><span>شكرًا لاستخدامك نظام التحقق الخاص بنا 🙏.</span></div></div>}<small>أدخل 12 رقماً للتحقق من أصالة المنتج.</small></div><div className="verify-number">03</div></section>

        <section className="faq-section" id="faq"><div className="section-kicker">أسئلة متكررة</div><div className="faq-layout"><h2>كل ما تريد<br /><em>معرفته.</em></h2><div>{[["كيف أستخدم الكريم؟", "ضع كمية مناسبة على المنطقة المراد العناية بها ودلك بلطف حتى يمتصه الجلد، وفق إرشادات العبوة."], ["هل يمكنني التحقق من المنتج؟", "نعم، أدخل كود الأصالة المكوّن من 12 رقماً في قسم التحقق بالموقع."], ["ما هو الضمان الذهبي؟", "إذا لم تستفد من الكريم خلال ثلاثة أيام، تواصل معنا لمعرفة خطوات الاسترجاع."]].map(([question, answer], index) => <div className="faq-item" key={question}><button onClick={() => setFaqOpen(faqOpen === index ? null : index)}><span>{question}</span><ChevronDown size={18} className={faqOpen === index ? "rotate" : ""} /></button>{faqOpen === index && <p>{answer}</p>}</div>)}</div></div></section>
      </main>
      <footer className="footer"><div className="brand"><span className="brand-mark-wrap"><img src={logoImage} alt="شعار مملكة الأعشاب" className="brand-mark" /></span><span><strong>مملكة</strong><small>الأعشاب</small></span></div><p>عناية طبيعية تمنحك مساحة أكبر للحركة.</p><span>© 2026 مملكة الأعشاب</span></footer>
    </div>
  );
}
