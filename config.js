/* ================================================================
   LUMINAY TECHNICALS — CENTRAL CONFIG
   Edit this file to update all pages simultaneously
   ================================================================ */
const LT_CONFIG = {
  company: {
    name: "Luminay Technicals",
    shortName: "LT Books",
    tagline: "Where Authors Become Published",
    email: "luminarytechnicals@gmail.com",
    website: "books.luminarytechnicals.com",
    founded: "2024",
    phone: "+91 00000 00000",
  },
  founder: {
    name: "AR. Abhinav Ranjan",
    initials: "AR",
    title: "Founder & CEO",
    bio: "Abhinav Ranjan founded Luminay Technicals to democratise book publishing in India — giving every author the tools to publish professionally on the world's biggest platforms.",
  },
  plans: [
    {
      id: "starter",
      icon: "📄",
      name: "Starter",
      price: 99,
      badge: null,
      platforms: ["PDF", "eBook", "ePub"],
      features: ["PDF + eBook + ePub formats", "LT Book ID assigned", "Author dashboard", "Email support"],
    },
    {
      id: "gplay",
      icon: "🎵",
      name: "Google Play",
      price: 49,
      badge: null,
      platforms: ["Google Play Books"],
      features: ["Google Play Books listing", "EPUB conversion", "ISBN assigned", "Sales analytics"],
    },
    {
      id: "kindle",
      icon: "📱",
      name: "Amazon Kindle",
      price: 79,
      badge: "Popular",
      platforms: ["Amazon Kindle"],
      features: ["Amazon Kindle listing", "KDP upload handled", "Royalty tracking", "Priority review"],
    },
    {
      id: "hardcopy",
      icon: "📦",
      name: "Hardcopy",
      price: 149,
      badge: null,
      platforms: ["Amazon Print"],
      features: ["Amazon print-on-demand", "Physical book listing", "Global distribution", "Cover design check"],
    },
    {
      id: "allinone",
      icon: "🌟",
      name: "All-in-One",
      price: 299,
      badge: "Best Value",
      platforms: ["Google Play", "Amazon Kindle", "Amazon Print", "PDF/ePub"],
      features: ["All 4 platforms", "All formats included", "Priority support 24/7", "Marketing boost", "Full royalty dashboard"],
    },
  ],
  stats: [
    { num: "500+", label: "Authors" },
    { num: "4", label: "Platforms" },
    { num: "₹49", label: "Starting" },
    { num: "24hr", label: "Support" },
  ],
  steps: [
    { icon: "✍️", num: "01", title: "Upload Manuscript", desc: "Submit your book in Word, PDF, or plain text. We handle all format conversions." },
    { icon: "💳", num: "02", title: "Choose a Plan", desc: "Pick the platform — digital, print, or all of them. Monthly billing, cancel anytime." },
    { icon: "⚙️", num: "03", title: "We Process & Review", desc: "Our team formats your book professionally. You get updates at every step." },
    { icon: "🌍", num: "04", title: "Go Live Worldwide", desc: "Your book reaches readers on Amazon, Google Play, and in print globally." },
  ],
  faq: [
    { q: "How long does publishing take?", a: "3–7 business days after plan activation, depending on the platform and review queue." },
    { q: "Do I keep my royalties?", a: "100%. We charge a flat monthly fee. All platform royalties go directly to you." },
    { q: "What formats should I submit?", a: "Word (.docx), PDF, or plain text. We convert everything to EPUB, PDF, and print-ready formats." },
    { q: "What is an LT Book ID?", a: "Every book gets a unique LT-BOOK-XXXX tracking code plus an ISBN for Amazon and Google plans." },
    { q: "Can I cancel anytime?", a: "Yes. Monthly billing, no contracts. Cancel from your dashboard anytime." },
    { q: "Who owns my book?", a: "You do — always. We are a publishing service, not a rights holder." },
  ],
};

// Make available globally
if (typeof window !== "undefined") window.LT_CONFIG = LT_CONFIG;
if (typeof module !== "undefined") module.exports = LT_CONFIG;
