import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Phone,
  MessageCircle,
  Menu,
  X,
  Sparkles,
  Bug,
  Building2,
  Home,
  Hammer,
  BoxesIcon,
  Stethoscope,
  Church,
  PartyPopper,
  Sofa,
  Layers,
  SprayCan,
  CloudFog,
  Rat,
  Bird,
  ShieldCheck,
  Repeat,
  MapPin,
  Instagram,
  ArrowUpRight,
  Leaf,
  HeartPulse,
  Gem,
} from "lucide-react";

const WA = "https://wa.me/2349063217044";
const WA_GENERAL = `${WA}?text=${encodeURIComponent(
  "Hello ABM Cleaning & Fumigation Services, I would like to request a free quotation for your services.",
)}`;
const WA_CORPORATE = `${WA}?text=${encodeURIComponent(
  "Hello ABM Cleaning & Fumigation Services, I would like to request a corporate cleaning quotation.",
)}`;
const TEL1 = "tel:+2349063217044";


const IMG = {
  fumigation: "/images/abm-fumigation-equipment.jpg",
  indoor: "/images/abm-indoor-treatment.jpg",
  floor: "/images/abm-floor-cleaning.jpg",
  upholstery: "/images/abm-upholstery-cleaning.jpg",
  room: "/images/abm-clean-room.jpg",
};

const TITLE = "Cleaning & Fumigation Services in Abuja | ABM Cleaning & Fumigation";
const DESC =
  "ABM Cleaning & Fumigation Services provides professional deep cleaning, office cleaning, post-construction cleaning, upholstery cleaning, fumigation and pest control in Abuja. Free quote on WhatsApp.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "ABM Cleaning & Fumigation Services",
          description: DESC,
          telephone: "+2349063217044",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Maitama, Abuja",
            addressCountry: "NG",
          },
          areaServed: "Abuja, Nigeria",
          sameAs: ["https://www.instagram.com/abm00.01/"],
        }),
      },
    ],
  }),
});

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Corporate", href: "#corporate" },
  { label: "Our Work", href: "#work" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const CLEANING = [
  { icon: Repeat, title: "Regular Cleaning", desc: "Homes and offices requiring reliable routine cleaning." },
  { icon: Sparkles, title: "Deep Cleaning", desc: "Detailed cleaning for properties requiring a more thorough service." },
  { icon: Hammer, title: "Post-Construction Cleaning", desc: "Cleaning and preparation of newly constructed or renovated spaces." },
  { icon: Home, title: "Move-In Cleaning", desc: "Preparing a property before occupants move in." },
  { icon: BoxesIcon, title: "Move-Out / End-of-Tenancy Cleaning", desc: "Detailed cleaning before property handover." },
  { icon: Building2, title: "Office & Commercial Cleaning", desc: "Professional cleaning for workplaces and commercial facilities." },
  { icon: Stethoscope, title: "Medical Centre Cleaning", desc: "Cleaning solutions for medical centres and healthcare environments." },
  { icon: Church, title: "Church & Religious Centre Cleaning", desc: "Cleaning services for churches and religious facilities." },
  { icon: PartyPopper, title: "Event Cleaning", desc: "Cleaning support for event and function spaces." },
  { icon: Sofa, title: "Upholstery Cleaning", desc: "Cleaning of upholstered furniture and surfaces." },
  { icon: Layers, title: "Floor Cleaning & Polishing", desc: "Professional floor cleaning and maintenance." },
];

const FUMIGATION = [
  { icon: SprayCan, title: "Spray Fumigation" },
  { icon: CloudFog, title: "Fogging Fumigation" },
  { icon: Bug, title: "Cockroach Control" },
  { icon: Bird, title: "Mosquito Control" },
  { icon: Rat, title: "Rodent Control" },
  { icon: Leaf, title: "Termite Control" },
  { icon: ShieldCheck, title: "General Pest Control" },
];

const WHY = [
  ["Professional Approach", "We take every assignment seriously and work according to the requirements of the property and client."],
  ["Attention to Detail", "We pay attention to areas that are often overlooked during ordinary cleaning."],
  ["Reliable Service", "We respect agreed schedules and communicate with clients throughout the service process."],
  ["Tailored Solutions", "Every property is different. We assess the job and recommend the appropriate service."],
  ["Quality Customer Service", "Good service includes both quality workmanship and respectful communication."],
  ["Professional Equipment", "We use appropriate equipment and materials for the work being carried out."],
  ["Residential & Commercial Services", "We serve homes, offices, churches, medical centres and other facilities."],
  ["Flexible Scheduling", "Services can be arranged around the client's requirements."],
];

const PROCESS = [
  ["01", "Site Inspection", "We assess the property and understand the client's requirements."],
  ["02", "Quotation", "We provide a clear quotation based on the scope of work."],
  ["03", "Preparation", "Our team arrives with appropriate equipment and cleaning materials."],
  ["04", "Cleaning", "We clean systematically from high surfaces to floors and detailed areas."],
  ["05", "Quality Check", "We inspect the work before handover."],
  ["06", "Client Handover", "The client checks the completed work and confirms satisfaction."],
];

const TESTIMONIALS = [
  ["I love the way you clean my upholstery chairs and my window. The dining table and the chairs look nice and smell well now.", "Riyoma Kefas"],
  ["Your service is top notch. My room is pest free and clean like snow.", "Blessing Achenu"],
  ["Cleaning and fumigation job is your calling. Please keep it up.", "Ugwoke UG"],
  ["I was happy to recommend you for anyone for cleaning and fumigation. My one bedroom is still looking clean and I am free from pests since your team came.", "Focus Gunners"],
  ["Wow, indeed you render a good and quality service to my home. I have been free from pests now since two months.", "Alice Ferdinand"],
  ["My three bedroom is looking great due to your service. I really appreciate your consideration and the good service provided by your team.", "Ramatu Mallki"],
  ["Best service ever! Thank you, now my house is free from unnecessary insects.", "Christy Ivy"],
  ["Your cleaning services is top notch.", "Agnes Ameh"],
];

const FAQS = [
  ["How much does deep cleaning cost?", "Our deep cleaning prices depend on the size and condition of the property, the areas requiring attention, and the scope of work. We can arrange a site inspection or request details from you on WhatsApp before providing a quotation."],
  ["Do you provide upholstery cleaning?", "Yes. We provide professional upholstery cleaning to help remove dirt, stains, dust, and accumulated grime from sofas, chairs, and other upholstered furniture. The cleaning method depends on the type and condition of the upholstery."],
  ["Do you clean offices?", "Yes. We provide professional office cleaning services for businesses and workplaces. Our services can be arranged as one-time deep cleaning or scheduled cleaning depending on your needs."],
  ["Do you provide post-construction cleaning?", "Yes. We provide post-construction cleaning to help prepare newly constructed or renovated properties for use. This includes removing construction dust, debris, dirt, and other leftover materials from the cleaning process."],
  ["Do you provide fumigation?", "Yes. We provide professional fumigation and pest-control services for residential and commercial properties. We assess the property and recommend the appropriate treatment based on the pest problem."],
  ["What pests do you treat?", "We treat common household and commercial pests, including cockroaches, ants, mosquitoes, bed bugs, termites, rodents, and other pest infestations. The appropriate treatment depends on the type and severity of the infestation."],
  ["Can you fumigate offices?", "Yes. We provide fumigation and pest-control services for offices and other commercial spaces. We can arrange treatment based on the size of the office, the type of pest problem, and the preferred treatment schedule."],
  ["How do I get a quotation?", "You can contact ABM Cleaning & Fumigation Services through 09063217044 or WhatsApp. Provide details about the property, the type of cleaning or fumigation service required, and your location. We can then provide further information and arrange an inspection where necessary."],
];

function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#home" className="flex items-baseline gap-2.5 group">
      <span className="font-display text-2xl font-extrabold tracking-tight text-primary">ABM</span>
      {!compact && (
        <span className="hidden text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground sm:block">
          Cleaning &amp; Fumigation Services
        </span>
      )}
    </a>
  );
}

function WhatsAppButton({
  href = WA_GENERAL,
  children,
  variant = "solid",
  className = "",
}: {
  href?: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3.5 text-sm font-semibold transition-all duration-200";
  const style =
    variant === "solid"
      ? "bg-primary text-primary-foreground hover:bg-ink shadow-[0_10px_30px_-12px_oklch(0.44_0.096_176/60%)]"
      : "border border-border bg-background text-foreground hover:border-primary hover:text-primary";
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${style} ${className}`}>
      <MessageCircle className="h-4 w-4" aria-hidden="true" />
      {children}
    </a>
  );
}

function SectionHead({
  eyebrow,
  title,
  sub,
  center = false,
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
  center?: boolean;
}) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">{title}</h2>
      {sub && <p className="mt-4 text-base leading-relaxed text-muted-foreground">{sub}</p>}
    </div>
  );
}

function Index() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top bar */}
      <div className="bg-ink text-primary-foreground">
        <div className="container-x flex flex-wrap items-center justify-between gap-x-6 gap-y-1 py-2 text-[11px] sm:text-xs">
          <span className="font-semibold tracking-wide">CAC No: 9659464</span>
          <span className="hidden items-center gap-1.5 opacity-90 sm:flex">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" /> Maitama, Abuja, Nigeria
          </span>
          <a href={TEL1} className="flex items-center gap-1.5 font-medium opacity-90 hover:opacity-100">
            <Phone className="h-3.5 w-3.5" aria-hidden="true" /> 0906 321 7044
          </a>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="container-x flex h-16 items-center justify-between gap-4">
          <Wordmark />
          <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={WA_GENERAL}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-ink sm:inline-flex"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {open && (
          <nav aria-label="Mobile" className="border-t border-border bg-background lg:hidden">
            <div className="container-x grid gap-1 py-4">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-2.5 text-sm font-medium text-foreground hover:bg-muted"
                >
                  {n.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main>
        {/* Hero */}
        <section id="home" className="relative overflow-hidden bg-sand">
          <div className="container-x grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
            <div>
              <p className="inline-flex items-center rounded-full border border-border bg-background px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                Professional Cleaning &amp; Fumigation Services in Abuja
              </p>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] text-foreground sm:text-5xl lg:text-[3.4rem]">
                Professional Cleaning &amp; Fumigation Services in Abuja
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Creating cleaner, healthier and more comfortable spaces for homes, offices, churches,
                medical centres, estates and businesses across Abuja.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                From deep cleaning and regular cleaning to fumigation, pest control, upholstery and
                post-construction cleaning, ABM Cleaning &amp; Fumigation Services delivers professional
                solutions tailored to your property.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <WhatsAppButton>Get a Free Quote on WhatsApp</WhatsAppButton>
                <a
                  href={TEL1}
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" /> Call 0906 321 7044
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-lg border border-border shadow-[0_40px_80px_-50px_oklch(0.3_0.06_178/60%)]">
                <img
                  src={IMG.fumigation}
                  alt="ABM Cleaning & Fumigation Services team member with professional fogging fumigation equipment in Abuja"
                  width={1050}
                  height={1400}
                  className="aspect-[4/5] w-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-6 left-6 hidden max-w-[16rem] rounded-md border border-border bg-background p-5 shadow-lg sm:block">
                <p className="text-sm font-semibold text-foreground">Residential · Corporate · Commercial</p>
                <p className="mt-1 text-xs text-muted-foreground">Serving properties across Abuja</p>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-20 lg:py-28">
          <div className="container-x grid items-center gap-14 lg:grid-cols-2">
            <div className="order-2 grid gap-4 lg:order-1 sm:grid-cols-2">
              <img
                src={IMG.floor}
                alt="ABM team member cleaning and polishing a tiled floor during a post-construction clean in Abuja"
                loading="lazy"
                className="aspect-[3/4] w-full rounded-lg border border-border object-cover sm:mt-8"
              />
              <img
                src={IMG.indoor}
                alt="ABM team member carrying out indoor fumigation treatment inside an Abuja property"
                loading="lazy"
                className="aspect-[3/4] w-full rounded-lg border border-border object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <SectionHead
                eyebrow="About ABM"
                title="Professional Cleaning & Fumigation You Can Trust"
              />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  ABM Cleaning &amp; Fumigation Services is a professional cleaning and fumigation company
                  providing reliable cleaning, hygiene and pest-control solutions for homes, offices,
                  churches, medical centres, estates and commercial properties across Abuja.
                </p>
                <p>
                  We understand that a clean environment is more than just appearance. Proper cleaning and
                  pest control contribute to a healthier, more comfortable and productive space.
                </p>
                <p>
                  Our goal is simple: to provide quality service, treat every property with care and leave
                  our clients satisfied with the result.
                </p>
              </div>
              <div className="mt-8 rounded-lg border-l-2 border-primary bg-muted/60 p-6">
                <h3 className="text-lg font-bold text-foreground">Who We Are</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  At ABM Cleaning &amp; Fumigation Services, we provide practical cleaning and pest-control
                  solutions tailored to the needs of each client.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="bg-ink py-20 text-primary-foreground lg:py-24">
          <div className="container-x grid gap-10 md:grid-cols-2">
            {[
              ["Our Mission", "To provide dependable, professional and high-quality cleaning and fumigation services that help our clients maintain cleaner, healthier and more comfortable environments."],
              ["Our Vision", "To become one of the most trusted cleaning and fumigation service providers in Abuja and beyond, known for quality workmanship, professionalism, reliability and excellent customer service."],
            ].map(([t, d]) => (
              <div key={t} className="border-t border-primary-foreground/20 pt-8">
                <h2 className="text-2xl font-bold">{t}</h2>
                <p className="mt-4 text-base leading-relaxed opacity-80">{d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-20 lg:py-28">
          <div className="container-x">
            <SectionHead
              eyebrow="Our Services"
              title="Cleaning Services"
              sub="Reliable cleaning solutions for residential, corporate and commercial properties across Abuja."
            />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {CLEANING.map(({ icon: Icon, title, desc }) => (
                <article key={title} className="card-soft flex flex-col p-6">
                  <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                  <h3 className="mt-5 text-base font-bold text-foreground">{title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                  <a
                    href={WA_GENERAL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
                  >
                    Get a Free Quote <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </article>
              ))}
            </div>

            <div className="mt-20">
              <SectionHead
                eyebrow="Fumigation & Pest Control"
                title="Fumigation & Pest Control Services in Abuja"
                sub="Spray and fogging fumigation with pest-control treatments for residential and commercial properties."
              />
              <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {FUMIGATION.map(({ icon: Icon, title }) => (
                  <article key={title} className="card-soft flex flex-col p-6">
                    <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
                    <h3 className="mt-5 text-base font-bold text-foreground">{title}</h3>
                    <a
                      href={WA_GENERAL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
                    >
                      Get a Free Quote <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Corporate */}
        <section id="corporate" className="bg-sand py-20 lg:py-28">
          <div className="container-x grid items-center gap-14 lg:grid-cols-2">
            <div>
              <SectionHead
                eyebrow="For Businesses"
                title="Corporate & Commercial Cleaning Services in Abuja"
              />
              <p className="mt-4 text-lg font-semibold text-foreground">
                Professional Cleaning Solutions for Businesses &amp; Organisations
              </p>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  A clean workplace creates a better environment for employees, customers and visitors.
                </p>
                <p>
                  ABM Cleaning &amp; Fumigation Services provides professional corporate and commercial
                  cleaning solutions for offices, companies, churches, medical centres, schools, estates,
                  shops and other business facilities across Abuja.
                </p>
                <p>
                  Whether you need a one-time deep clean, post-construction cleaning or ongoing regular
                  cleaning, we tailor our service to the needs of your organisation.
                </p>
              </div>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <WhatsAppButton href={WA_CORPORATE}>Request a Corporate Cleaning Quote on WhatsApp</WhatsAppButton>
                <a
                  href={TEL1}
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" /> Call / WhatsApp 0906 321 7044
                </a>
              </div>
            </div>
            <img
              src={IMG.room}
              alt="Freshly cleaned interior of an Abuja property after professional cleaning by ABM"
              loading="lazy"
              className="aspect-[4/5] w-full rounded-lg border border-border object-cover shadow-[0_40px_80px_-50px_oklch(0.3_0.06_178/60%)]"
            />
          </div>
        </section>

        {/* Why choose */}
        <section className="py-20 lg:py-28">
          <div className="container-x">
            <SectionHead eyebrow="Why ABM" title="Why Choose ABM?" center />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {WHY.map(([t, d]) => (
                <div key={t} className="card-soft p-6">
                  <h3 className="text-base font-bold text-foreground">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* One reliable provider */}
        <section className="bg-primary py-16 text-primary-foreground lg:py-20">
          <div className="container-x flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold sm:text-4xl">Cleaning and Fumigation — One Reliable Provider</h2>
              <p className="mt-4 text-base leading-relaxed opacity-85">
                From deep cleaning to pest control, ABM helps homeowners, offices, churches, medical centres
                and businesses maintain cleaner, safer spaces without dealing with multiple service providers.
              </p>
            </div>
            <a
              href={WA_GENERAL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-background px-7 py-4 text-sm font-semibold text-primary transition-colors hover:bg-sand"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" /> Request a Free Quote
            </a>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 lg:py-28">
          <div className="container-x">
            <SectionHead eyebrow="How We Work" title="Our Professional Cleaning Process" center />
            <ol className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {PROCESS.map(([n, t, d]) => (
                <li key={n} className="bg-background p-8">
                  <span className="font-display text-sm font-extrabold tracking-widest text-primary">{n}</span>
                  <h3 className="mt-4 text-lg font-bold text-foreground">{t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Our work */}
        <section id="work" className="bg-sand py-20 lg:py-28">
          <div className="container-x">
            <SectionHead
              eyebrow="Portfolio"
              title="Our Recent Work"
              sub="See examples of ABM's cleaning and fumigation work across residential and commercial properties."
              center
            />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                [IMG.fumigation, "ABM team member with fogging fumigation equipment on site in Abuja", "Fumigation & pest control"],
                [IMG.indoor, "ABM team member carrying out indoor fumigation treatment in a residential property", "Indoor fumigation treatment"],
                [IMG.upholstery, "ABM team member cleaning a fabric sofa with upholstery cleaning equipment", "Upholstery cleaning"],
              ].map(([src, alt, caption]) => (
                <figure key={src} className="overflow-hidden rounded-lg border border-border bg-background">
                  <img
                    src={src}
                    alt={alt}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                  />
                  <figcaption className="px-5 py-4 text-sm font-semibold text-foreground">{caption}</figcaption>
                </figure>
              ))}
            </div>
            <div className="mt-10 flex justify-center">
              <WhatsAppButton>Get a Free Quote on WhatsApp</WhatsAppButton>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="reviews" className="py-20 lg:py-28">
          <div className="container-x">
            <SectionHead eyebrow="Client Feedback" title="What Our Clients Say" center />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {TESTIMONIALS.map(([quote, name]) => (
                <blockquote key={name} className="card-soft flex flex-col p-6">
                  <p className="flex-1 text-sm leading-relaxed text-foreground">“{quote}”</p>
                  <footer className="mt-5 border-t border-border pt-4 text-sm font-semibold text-primary">
                    — {name}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-sand py-20 lg:py-24">
          <div className="container-x">
            <SectionHead eyebrow="Benefits" title="Why Regular Cleaning Matters" center />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                [HeartPulse, "Improves Health", "Regular cleaning helps reduce dust, bacteria and allergens in your environment."],
                [Gem, "Keeps Spaces Beautiful", "Consistent cleaning helps maintain furniture and floors while reducing unwanted odours."],
                [Leaf, "Protects the Environment", "Proper cleaning, waste handling and pest prevention contribute to healthier environments."],
              ].map(([Icon, t, d]) => {
                const I = Icon as typeof Leaf;
                return (
                  <div key={t as string} className="rounded-lg border border-border bg-background p-8">
                    <I className="h-7 w-7 text-primary" aria-hidden="true" />
                    <h3 className="mt-5 text-lg font-bold text-foreground">{t as string}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d as string}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20 lg:py-28">
          <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHead eyebrow="FAQ" title="Frequently Asked Questions" sub="Answers to common questions about ABM's cleaning and fumigation services in Abuja." />
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map(([q, a], i) => (
                <AccordionItem key={q} value={`item-${i}`}>
                  <AccordionTrigger className="text-left text-base font-semibold">{q}</AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">{a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA / Contact */}
        <section id="contact" className="bg-ink py-20 text-primary-foreground lg:py-28">
          <div className="container-x text-center">
            <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">Ready for a Cleaner, Healthier Space?</h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed opacity-80">
              Contact ABM Cleaning &amp; Fumigation Services today for a professional assessment and quotation.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={WA_GENERAL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-background px-7 py-4 text-sm font-semibold text-primary transition-colors hover:bg-sand"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" /> Chat on WhatsApp Now
              </a>
              <a
                href={TEL1}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-primary-foreground/25 px-7 py-4 text-sm font-semibold transition-colors hover:bg-primary-foreground/10"
              >
                <Phone className="h-4 w-4" aria-hidden="true" /> Call: 0906 321 7044
              </a>
            </div>
            <div className="mx-auto mt-12 grid max-w-3xl gap-6 border-t border-primary-foreground/15 pt-10 text-sm sm:grid-cols-3">
              <div>
                <p className="font-semibold">ABM Cleaning &amp; Fumigation Services</p>
                <p className="mt-1 opacity-75">CAC No: 9659464</p>
              </div>
              <div>
                <p className="font-semibold">Maitama, Abuja, Nigeria</p>
                <p className="mt-1 opacity-75">Serving Abuja and environs</p>
              </div>
              <div className="grid gap-1">
                <a href={TEL1} className="font-semibold hover:underline">0906 321 7044</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-14 pb-28 lg:pb-14">
        <div className="container-x grid gap-10 md:grid-cols-3">
          <div>
            <Wordmark />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Professional Cleaning. Effective Pest Control. Better Environments.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">CAC No: 9659464</p>
            <p className="text-sm text-muted-foreground">Maitama, Abuja, Nigeria</p>
            <p className="mt-2 text-sm">
              <a href={TEL1} className="font-semibold text-foreground hover:text-primary">0906 321 7044</a>
              <span className="text-muted-foreground"> · </span>
              <a href={TEL2} className="text-muted-foreground hover:text-primary">0905 593 0169</a>
            </p>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-foreground">Quick Links</h3>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-sm text-muted-foreground hover:text-primary">{n.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-foreground">Connect</h3>
            <div className="mt-4 grid gap-3">
              <a
                href={WA_GENERAL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp
              </a>
              <a
                href="https://www.instagram.com/abm00.01/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 text-sm text-muted-foreground hover:text-primary"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" /> Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="container-x mt-12 border-t border-border pt-6 text-xs text-muted-foreground">
          © 2026 ABM Cleaning and Fumigation Services. All rights reserved.
        </div>
      </footer>

      {/* Mobile action bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-border bg-background/95 backdrop-blur lg:hidden">
        <a
          href={WA_GENERAL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-primary py-4 text-sm font-semibold text-primary-foreground"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp
        </a>
        <a href={TEL1} className="flex items-center justify-center gap-2 py-4 text-sm font-semibold text-foreground">
          <Phone className="h-4 w-4" aria-hidden="true" /> Call Now
        </a>
      </div>
    </div>
  );
}
