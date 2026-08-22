/**
 * Design philosophy: هوية المنتج الأصلية — ألوان العبوة الأزرق الملكي والأحمر والأبيض،
 * واجهة مباشرة تضع التحقق في مركز التجربة وتزيل أي مسار للطلب.
 */
import { useMemo, useState } from "react";
import { CheckCircle2, ChevronDown, Copy, LockKeyhole, Menu, ShieldAlert, ShieldCheck, X } from "lucide-react";

const productImage = "/manus-storage/product-main_9f687ce0.png";
const logoImage = "/manus-storage/authenticity-warning_5bba3f81.avif";
const warningImage = "/manus-storage/product-detail_18fd4a4f.avif";

const validCodes = [
  "482716305914",
  "739204681527",
  "165938470226",
  "904372615880",
  "628501947336",
  "351867209445",
  "817430562791",
  "246795813604",
];

const faqs = [
  ["كيف أستخدم الكريم؟", "ضع كمية مناسبة على المنطقة المراد العناية بها ودلك بلطف حتى يمتصه الجلد، وفق إرشادات العبوة."],
  ["هل يمكنني التحقق من المنتج؟", "نعم، أدخل كود الأصالة الموجود على العبوة في حقل التحقق أعلاه."],
  ["ما هو الضمان الذهبي؟", "إذا لم تستفد من الكريم خلال ثلاثة أيام، تواصل معنا لمعرفة خطوات الاسترجاع."],
];

function formatDate(date: Date) {
  return new Intl.DateTimeFormat("ar-SA", { year: "numeric", month: "long", day: "numeric" }).format(date);
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [code, setCode] = useState("");
  const [verifiedCode, setVerifiedCode] = useState<string | null>(null);
  const [attempted, setAttempted] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const currentDate = useMemo(() => new Date(), []);
  const formattedDate = formatDate(currentDate);
  const isValid = verifiedCode !== null;

  const verifyCode = () => {
    const normalized = code.replace(/\D/g, "").slice(0, 12);
    setCode(normalized);
    setAttempted(true);
    setVerifiedCode(validCodes.includes(normalized) ? normalized : null);
  };

  const copyCodes = async () => {
    await navigator.clipboard?.writeText(validCodes.join("\n"));
  };

  return (
    <div dir="rtl" className="min-h-screen overflow-hidden bg-[#F4F7FB] text-[#151C3B]">
      <div className="notice-bar"><ShieldCheck size={16} /> نظام التحقق من أصالة كريم الأعصاب والمفاصل</div>
      <header className="site-header">
        <div className="site-header-inner">
          <a href="#top" className="brand" aria-label="كريم الأعصاب والمفاصل">
            <span className="brand-badge"><img src={logoImage} alt="شعار المنتج" /></span>
            <span className="brand-copy"><strong>نظام التحقق</strong><small>الأصالة أولاً</small></span>
          </a>
          <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="التنقل الرئيسي">
            <a href="#verify" onClick={() => setMenuOpen(false)}>تحقق من المنتج</a>
            <a href="#product" onClick={() => setMenuOpen(false)}>معلومات المنتج</a>
            <a href="#faq" onClick={() => setMenuOpen(false)}>الأسئلة الشائعة</a>
          </nav>
          <a className="header-link" href="#verify"><LockKeyhole size={15} /> تحقق الآن</a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <main id="top">
        <section className="verify-hero" id="verify">
          <div className="verify-hero-copy">
            <div className="eyebrow"><span /> حماية منتجك تبدأ من هنا</div>
            <h1>تحقق من<br /><em>أصالة منتجك.</em></h1>
            <p>أدخل الرقم الموجود على عبوتك للتأكد من أن المنتج أصلي 100% ومن مصدر موثوق.</p>
            <div className="verify-box">
              <label htmlFor="code">أدخل كود الأصالة المكوّن من 12 رقماً</label>
              <div className="verify-form"><input id="code" value={code} inputMode="numeric" maxLength={12} onChange={(e) => { setCode(e.target.value.replace(/\D/g, "").slice(0, 12)); setAttempted(false); setVerifiedCode(null); }} placeholder="000000000000" /><button onClick={verifyCode}>تحقق الآن <CheckCircle2 size={18} /></button></div>
              {attempted && !isValid && <div className="result invalid"><ShieldAlert size={18} /> الكود غير صحيح ❌</div>}
              {attempted && isValid && <div className="result valid"><CheckCircle2 size={18} /><div><strong>المنتج أصلي 100% من مصدر موثوق ✅</strong><span>تاريخ الاستخدام: {formattedDate}</span><span>التاريخ الحالي: {formattedDate}</span><span>شكرًا لاستخدامك نظام التحقق الخاص بنا 🙏.</span></div></div>}
            </div>
            <div className="secure-note"><LockKeyhole size={17} /><span>يتم التحقق من الكود مباشرة عبر نظام الأصالة الخاص بنا.</span></div>
          </div>
          <div className="hero-product"><div className="hero-blue-shape" /><img src={productImage} alt="كريم الأعصاب والمفاصل - المنتج الأصلي" /><div className="hero-tag">أصلي<br /><strong>100%</strong></div></div>
        </section>

        <section className="proof-strip"><div><b>01</b><span><strong>أدخل الكود</strong><small>12 رقماً من العبوة</small></span></div><div><b>02</b><span><strong>اضغط تحقق</strong><small>نتيجة فورية واضحة</small></span></div><div><b>03</b><span><strong>اطمئن لمنتجك</strong><small>أصلي من مصدر موثوق</small></span></div></section>

        <section className="product-section" id="product"><div className="product-heading"><div className="eyebrow"><span /> تعرف على المنتج</div><h2>المنتج الأصلي<br /><em>يستحق ثقتك.</em></h2><p>طابق شكل العبوة مع الصورة، ثم استخدم كود الأصالة الموجود على المنتج للتحقق قبل الاستخدام.</p></div><div className="warning-wrap"><img src={warningImage} alt="تحذير من المنتجات المقلدة" /></div><div className="product-photo"><img src={productImage} alt="العبوة الأصلية لكريم الأعصاب والمفاصل" /></div><div className="detail-photo"><img src={logoImage} alt="شعار المنتج" /></div></section>

        <section className="codes-section"><div><div className="eyebrow light"><span /> للاستخدام الإداري</div><h2>الأكواد<br /><em>المعتمدة.</em></h2><p>هذه هي الأكواد الصحيحة المسجلة في نظام التحقق. لا تشاركها إلا مع فريقك الإداري.</p></div><div className="codes-card"><div className="codes-card-head"><strong>8 أكواد أصلية</strong><button onClick={copyCodes} title="نسخ الأكواد"><Copy size={16} /> نسخ</button></div><div className="codes-grid">{validCodes.map((validCode, index) => <code key={validCode}><span>{String(index + 1).padStart(2, "0")}</span>{validCode}</code>)}</div></div></section>

        <section className="faq-section" id="faq"><div className="eyebrow"><span /> أسئلة متكررة</div><div className="faq-layout"><h2>إجابات<br /><em>واضحة.</em></h2><div>{faqs.map(([question, answer], index) => <div className="faq-item" key={question}><button onClick={() => setFaqOpen(faqOpen === index ? null : index)}><span>{question}</span><ChevronDown size={18} className={faqOpen === index ? "rotate" : ""} /></button>{faqOpen === index && <p>{answer}</p>}</div>)}</div></div></section>
      </main>
      <footer className="footer"><div className="brand"><span className="brand-badge"><img src={logoImage} alt="شعار المنتج" /></span><span className="brand-copy"><strong>نظام التحقق</strong><small>الأصالة أولاً</small></span></div><p>نظام تحقق بسيط لحماية اختيارك.</p><span>© 2026</span></footer>
    </div>
  );
}
