/**
 * Design philosophy: عيادة الأعشاب الهادئة — واجهة عربية تحريرية دافئة،
 * أخضر عشبي عميق، عاجي مريح، ولمسات نحاسية مع تفاعل هادئ وواضح.
 */
import { useState } from "react";
import { ArrowLeft, Check, ChevronDown, CircleCheck, Leaf, Menu, ShieldCheck, Sparkles, X } from "lucide-react";

const heroImage = "/manus-storage/joint-care-hero_eb72d2ad.jpg";
const productImage = "/manus-storage/joint-care-product_1981e764.jpg";
const logoMark = "/manus-storage/joint-care-mark_0611e366.png";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [code, setCode] = useState("");
  const [verified, setVerified] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  const verifyCode = () => {
    if (code.trim().length >= 4) setVerified(true);
  };

  return (
    <div dir="rtl" className="min-h-screen overflow-hidden bg-[#F7F3EA] text-[#17352D]">
      <div className="announcement"><span>ضماننا الذهبي</span><span className="announcement-dot" /> إن لم تستفد من الكريم خلال 3 أيام، تواصل معنا لاسترجاع نقودك.</div>
      <header className="site-header">
        <div className="site-header-inner">
          <a href="#top" className="brand" aria-label="مملكة الأعشاب - الصفحة الرئيسية">
            <img src={logoMark} alt="" className="brand-mark" />
            <span><strong>مملكة</strong><small>الأعشاب</small></span>
          </a>
          <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="التنقل الرئيسي">
            <a href="#benefits" onClick={() => setMenuOpen(false)}>لماذا نحن</a>
            <a href="#product" onClick={() => setMenuOpen(false)}>المنتج</a>
            <a href="#verify" onClick={() => setMenuOpen(false)}>تحقق من الأصالة</a>
            <a href="#faq" onClick={() => setMenuOpen(false)}>الأسئلة الشائعة</a>
          </nav>
          <a className="header-cta" href="#order">اطلب الآن <ArrowLeft size={16} /></a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-copy">
            <div className="eyebrow"><Leaf size={15} /> عناية يومية من قلب الطبيعة</div>
            <h1>حركة أهدأ،<br /><em>وحياة أقرب</em> لما تحب.</h1>
            <p className="hero-lead">كريم مملكة الأعشاب للعناية بالمفاصل والعظام والأعصاب. تركيبة عشبية تمنحك إحساساً بالراحة لتتحرك بثقة كل يوم.</p>
            <div className="hero-actions"><a className="button button-primary" href="#order">اكتشف الكريم <ArrowLeft size={18} /></a><a className="text-link" href="#verify">تحقق من أصالة منتجك <CircleCheck size={18} /></a></div>
            <div className="hero-note"><ShieldCheck size={20} /><span><strong>أصالة مضمونة</strong><br />كل عبوة تحمل كود تحقق خاصاً بها</span></div>
          </div>
          <div className="hero-visual"><img src={heroImage} alt="سيدة تستمتع بحركة مريحة في منزل هادئ" /><div className="hero-stamp"><span>طبيعي</span><strong>100%</strong><span>موثوق</span></div><div className="hero-caption"><span>01</span><span>راحة تبدأ من عنايتك اليومية</span></div></div>
        </section>

        <section className="trust-strip"><div><span className="trust-number">01</span><span><strong>تركيبة عشبية</strong><small>مختارة بعناية</small></span></div><div><span className="trust-number">02</span><span><strong>سهل الاستخدام</strong><small>يمتصه الجلد سريعاً</small></span></div><div><span className="trust-number">03</span><span><strong>ضمان ذهبي</strong><small>راحة بالك أولاً</small></span></div></section>

        <section className="intro-section" id="benefits"><div className="section-kicker">لماذا مملكة الأعشاب؟</div><div className="intro-layout"><h2>العناية التي<br /><span>تواكب يومك.</span></h2><div><p className="large-copy">لأن الحركة ليست تفصيلاً صغيراً. صممنا عنايتنا لتكون جزءاً بسيطاً ومريحاً من روتينك، من أول استخدام وحتى كل خطوة بعدها.</p><a className="text-link dark" href="#product">تعرّف على التفاصيل <ArrowLeft size={17} /></a></div></div></section>

        <section className="benefits-section"><div className="benefit-card"><div className="benefit-icon"><Leaf /></div><span>01 / من الطبيعة</span><h3>مكونات تعرفها<br />وتثق بها.</h3><p>اختيارات عشبية بعناية، في تركيبة عملية تناسب روتينك اليومي.</p></div><div className="benefit-card featured"><div className="benefit-icon"><Sparkles /></div><span>02 / إحساس أخف</span><h3>راحة تلاحظها<br />مع كل حركة.</h3><p>قوام مريح وسريع الامتصاص لتستمر في يومك دون تعقيد.</p></div><div className="benefit-card"><div className="benefit-icon"><ShieldCheck /></div><span>03 / ثقة أكبر</span><h3>منتج أصلي،<br />عناية أوضح.</h3><p>تحقق من أصالة عبوتك بسهولة قبل الاستخدام واطمئن لاختيارك.</p></div></section>

        <section className="product-section" id="product"><div className="product-image-wrap"><img src={productImage} alt="عبوة كريم مملكة الأعشاب بين الأعشاب الطبيعية" /><span className="image-label">عناية المفاصل<br /><strong>من مملكة الأعشاب</strong></span></div><div className="product-copy"><div className="section-kicker">المنتج المميز</div><h2>رفيقك في<br /><em>كل خطوة.</em></h2><p>كريم مملكة الأعشاب للعناية بالمفاصل والعظام والأعصاب. استخدمه ضمن روتينك اليومي لتمنح جسمك لحظة عناية يستحقها.</p><ul><li><Check size={17} /> تركيبة عشبية للاستخدام اليومي</li><li><Check size={17} /> قوام مريح وسريع الامتصاص</li><li><Check size={17} /> عبوة محمية بكود أصالة</li></ul><a href="#order" className="button button-primary">احصل على عنايتك <ArrowLeft size={18} /></a></div></section>

        <section className="verify-section" id="verify"><div className="verify-inner"><div className="section-kicker light">خدمة ما بعد الشراء</div><h2>تحقق من أصالة<br /><em>منتجك الآن.</em></h2><p>أدخل الكود الموجود على عبوتك للتأكد من أن المنتج أصلي ومن مصدر موثوق.</p><div className="verify-form"><input value={code} onChange={(e) => { setCode(e.target.value); setVerified(false); }} placeholder="أدخل كود الأصالة" aria-label="كود الأصالة" /><button onClick={verifyCode}>تحقق <CircleCheck size={18} /></button></div>{verified && <div className="verify-success"><CircleCheck size={18} /> الكود صحيح — منتجك أصلي وموثوق.</div>}<small>الكود مكوّن من 4 أحرف أو أرقام على الأقل.</small></div><div className="verify-number">03</div></section>

        <section className="order-section" id="order"><div><div className="section-kicker">جاهز لخطوتك التالية؟</div><h2>ابدأ عناية<br /><em>أكثر راحة.</em></h2></div><div className="order-card"><div><span>كريم مملكة الأعشاب</span><strong>اطلبه الآن</strong></div><a href="https://wa.me/966500000000" className="button button-copper">تواصل للطلب <ArrowLeft size={17} /></a><small>سيتم تحويلك إلى واتساب لإتمام الطلب</small></div></section>

        <section className="faq-section" id="faq"><div className="section-kicker">أسئلة متكررة</div><div className="faq-layout"><h2>كل ما تريد<br /><em>معرفته.</em></h2><div>{["كيف أستخدم الكريم؟", "هل يمكنني التحقق من المنتج؟", "كيف أطلب المنتج؟", "ما هو الضمان الذهبي؟"].map((question, index) => <div className="faq-item" key={question}><button onClick={() => setFaqOpen(faqOpen === index ? null : index)}><span>{question}</span><ChevronDown size={18} className={faqOpen === index ? "rotate" : ""} /></button>{faqOpen === index && <p>{index === 0 ? "ضع كمية مناسبة على المنطقة المراد العناية بها ودلك بلطف حتى يمتصه الجلد، وفق إرشادات العبوة." : index === 1 ? "نعم، أدخل كود الأصالة الموجود على العبوة في قسم التحقق بالموقع." : index === 2 ? "اضغط على زر اطلب الآن وتواصل معنا عبر واتساب لتأكيد طلبك." : "إذا لم تستفد من الكريم خلال ثلاثة أيام، تواصل معنا لمعرفة خطوات الاسترجاع."}</p>}</div>)}</div></div></section>
      </main>
      <footer className="footer"><div className="brand"><img src={logoMark} alt="" className="brand-mark" /><span><strong>مملكة</strong><small>الأعشاب</small></span></div><p>عناية طبيعية تمنحك مساحة أكبر للحركة.</p><span>© 2026 مملكة الأعشاب</span></footer>
    </div>
  );
}
