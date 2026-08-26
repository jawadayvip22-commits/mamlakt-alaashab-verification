/**
 * Design philosophy: هوية مملكة الأعشاب الجديدة — لوحة مستوحاة من الشعار:
 * أزرق ملكي عميق، أصفر ذهبي، أحمر أصالة، وأبيض؛ تكوين جريء ومباشر للتحقق.
 */
import { useState } from "react";
import { ArrowDownLeft, ArrowLeft, CheckCircle2, ChevronDown, Leaf, Loader2, Menu, ShieldCheck, X } from "lucide-react";

const productImage = "./media/product-main.png";
const logoImage = "./media/authenticity-warning.avif";
const authenticityStamp = "./media/authenticity-stamp-final.avif";
const warningImage = "./media/authenticity-stamp-final.avif";
const validCodes = ["200040563079", "200040563038", "200040563935", "200040563267"];
const normalizeDigits = (value: string) => value.replace(/[٠-٩]/g, (digit) => String(digit.charCodeAt(0) - 1632)).replace(/[۰-۹]/g, (digit) => String(digit.charCodeAt(0) - 1776)).replace(/\D/g, "").slice(0, 12);

const faqs = [
  ["كيف أستخدم الكريم؟", "ضع كمية مناسبة على المنطقة المراد العناية بها ودلك بلطف حتى يمتصه الجلد، وفق إرشادات العبوة."],
  ["هل يمكنني التحقق من المنتج؟", "نعم، أدخل كود الأصالة المكوّن من 12 رقماً في قسم التحقق بالموقع."],
  ["ما هو الضمان الذهبي؟", "إذا لم تستفد من الكريم خلال ثلاثة أيام، تواصل معنا لمعرفة خطوات الاسترجاع."],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [code, setCode] = useState("");
  const [attempted, setAttempted] = useState(false);
  const [verified, setVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const today = new Intl.DateTimeFormat("ar-SA", { year: "numeric", month: "long", day: "numeric" }).format(new Date());
  const verifyCode = () => { if (loading) return; const normalized = normalizeDigits(code); setCode(normalized); setLoading(true); setAttempted(false); setVerified(false); window.setTimeout(() => { setAttempted(true); setVerified(validCodes.includes(normalized)); setLoading(false); }, 850); };

  return <div dir="rtl" className="fresh-site">
    <div className="top-line"><span>ضماننا الذهبي : إن لم تستفيد من الكريم خلال ثلاثة أيام يمكنك زيارتنا وأسترجاع نقودك .</span></div>
    <header className="fresh-header"><a href="#top" className="fresh-brand"><img src={logoImage} alt="شعار مملكة الأعشاب" /><strong>مملكة الأعشاب</strong></a><nav className={menuOpen ? "fresh-nav open" : "fresh-nav"}><a href="#verify" onClick={() => setMenuOpen(false)}>تحقق من الأصالة</a><a href="#product" onClick={() => setMenuOpen(false)}>المنتج</a><a href="#faq" onClick={() => setMenuOpen(false)}>الأسئلة الشائعة</a></nav><a href="#verify" className="nav-action">ابدأ التحقق <ArrowLeft size={16} /></a><button className="fresh-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="القائمة">{menuOpen ? <X /> : <Menu />}</button></header>

    <main id="top">
      <section className="fresh-hero"><div className="hero-number">01</div><div className="fresh-hero-copy"><div className="yellow-label"><span /> نظام الأصالة الرسمي</div><h1>تحقّق.<br /><span>اطمئن.</span><br />تحرّك.</h1><p>استمتع بحركة مرنة وخالية من الألم الحل الأمثل لتخفيف آلام المفاصل والتهابات العظام والأعصاب.</p><a href="#verify" className="hero-button">تحقق من منتجك <ArrowDownLeft size={18} /></a><div className="hero-micro"><ShieldCheck size={18} /><span>حماية واضحة<br /><b>من أول خطوة</b></span></div></div><div className="fresh-hero-art"><div className="art-block" /><img className="hero-product" src={productImage} alt="كريم الأعصاب والمفاصل" /><img className="auth-stamp" src={authenticityStamp} alt="علامة الأصالة" /><span className="art-caption">كريم الأعصاب<br />والمفاصل</span></div></section>

      <section className="fresh-ribbon"><div><b>01</b><span>أدخل كود العبوة</span></div><div><b>02</b><span>اضغط على تحقق</span></div><div><b>03</b><span>تأكد من النتيجة</span></div><strong>12 رقماً فقط</strong></section>

      <section className="fresh-product" id="product"><div className="product-intro"><div className="yellow-label"><span /> المنتج الأصلي</div><h2>عناية يومية<br /><em>بثقة أكبر.</em></h2><p>طابق شكل العبوة مع الصورة، ثم استخدم كود الأصالة الموجود على المنتج للتحقق قبل الاستخدام.</p><div className="product-rule" /></div><div className="product-gallery"><img className="warning-photo" src={warningImage} alt="احذروا التقليد" /><img className="main-product-photo" src={productImage} alt="صورة المنتج الأصلي" /></div></section>

      <section className="fresh-verify" id="verify"><div className="verify-side"><span className="verify-count">02</span><div className="yellow-label"><span /> التحقق في ثوانٍ</div><h2>هل منتجك<br /><em>أصلي؟</em></h2><p>أدخل الرقم الموجود على العبوة. لا نعرض الأكواد الصحيحة هنا حفاظاً على سرية النظام.</p></div><div className="fresh-form-card"><div className="form-top"><span>AUTHENTICITY CHECK</span><ShieldCheck size={20} /></div><label htmlFor="code">كود الأصالة — 12 رقماً</label><div className="fresh-form"><input id="code" value={code} onChange={(e) => { setCode(normalizeDigits(e.target.value)); setAttempted(false); setVerified(false); }} inputMode="numeric" maxLength={12} placeholder="0000 0000 0000" /><button onClick={verifyCode} disabled={loading}>{loading ? <><Loader2 className="loading-icon" size={17} /> جارٍ التحقق...</> : <>تحقق <ArrowLeft size={17} /></>}</button></div>{attempted && !verified && <div className="error-state">الكود غير صحيح ❌</div>}{attempted && verified && <div className="success-state"><CheckCircle2 size={20} /><div><strong>المنتج أصلي 100% من مصدر موثوق ✅</strong><span>تاريخ الاستخدام: {today}</span><span>التاريخ الحالي: {today}</span><span>شكرًا لاستخدامك نظام التحقق الخاص بنا 🙏.</span></div></div>}<small>بيانات التحقق محمية ولا تظهر الأكواد المعتمدة للزوار.</small></div></section>

      <section className="fresh-faq" id="faq"><div className="faq-title"><div className="yellow-label"><span /> معلومات مهمة</div><h2>إجابات<br /><em>بلا تعقيد.</em></h2></div><div className="faq-list">{faqs.map(([question, answer], index) => <div className="fresh-faq-item" key={question}><button onClick={() => setFaqOpen(faqOpen === index ? null : index)}><span>{question}</span><ChevronDown size={18} className={faqOpen === index ? "turn" : ""} /></button>{faqOpen === index && <p>{answer}</p>}</div>)}</div></section>
    </main>
    <footer className="fresh-footer"><a href="#top" className="fresh-brand"><img src={logoImage} alt="شعار مملكة الأعشاب" /><strong>مملكة الأعشاب</strong></a><span>نظام تحقق يحمي اختيارك.</span><span>© 2026</span></footer>
  </div>;
}
