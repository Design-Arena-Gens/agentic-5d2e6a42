import { ArrowRight, Briefcase, CheckCircle2, ShieldCheck, Sparkles, Star, Users } from "lucide-react";

const navLinks = [
  { name: "Solutions", href: "#solutions" },
  { name: "Projects", href: "#projects" },
  { name: "Freelancers", href: "#freelancers" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Pricing", href: "#pricing" },
];

const stats = [
  { label: "Active freelancers", value: "18k+" },
  { label: "Projects delivered", value: "92k" },
  { label: "Avg. hire time", value: "48h" },
];

const categories = [
  {
    icon: Sparkles,
    title: "Product & Design",
    description: "Product designers, UX researchers, brand strategists, UI specialists.",
    tags: ["Figma", "Product Strategy", "UX Audits"],
  },
  {
    icon: Briefcase,
    title: "Development",
    description: "Full-stack engineers, API developers, AI automation experts, QA teams.",
    tags: ["Next.js", "Python", "TypeScript"],
  },
  {
    icon: Users,
    title: "Marketing",
    description: "Growth marketers, performance strategists, email automation & SEO experts.",
    tags: ["Lifecycle", "SEO", "Paid Media"],
  },
  {
    icon: ShieldCheck,
    title: "Operations",
    description: "Project leads, virtual assistants, finance pros, compliance specialists.",
    tags: ["Fractional COO", "Bookkeeping", "Legal"],
  },
];

const projects = [
  {
    title: "Rebuild SaaS marketing site",
    company: "Northwind Cloud",
    budget: "$4,800",
    duration: "3 weeks",
    skills: ["Next.js", "Tailwind", "SEO"],
    description: "Launch a conversion-first website for a B2B SaaS product with clear messaging and gated content.",
  },
  {
    title: "Automate customer onboarding",
    company: "Pulse Finance",
    budget: "$6,500",
    duration: "6 weeks",
    skills: ["Python", "Zapier", "Airflow"],
    description: "Connect CRM, support desk, and billing to deliver a seamless onboarding workflow with real-time alerts.",
  },
  {
    title: "Launch content engine",
    company: "Aster Labs",
    budget: "$2,200",
    duration: "4 weeks",
    skills: ["Copywriting", "Notion", "Webflow"],
    description: "Build a content calendar, optimize SEO strategy, and publish weekly industry deep dives to drive leads.",
  },
];

const freelancers = [
  {
    name: "Leah Rowan",
    title: "Product Designer",
    rate: "$95/hr",
    experience: "8 years • Ex-Shopify",
    skills: ["Design systems", "User flows", "Qual research"],
  },
  {
    name: "Mateo Silva",
    title: "Full-stack Engineer",
    rate: "$110/hr",
    experience: "10 years • YC alum",
    skills: ["Next.js", "GraphQL", "AI Integrations"],
  },
  {
    name: "Aisha Benali",
    title: "Growth Strategist",
    rate: "$85/hr",
    experience: "6 years • Ex-Mailchimp",
    skills: ["Lifecycle", "Paid social", "Content ops"],
  },
];

const testimonials = [
  {
    quote:
      "We hired a fractional product squad in less than 72 hours. Velocity doubled and we shipped a redesign without adding headcount.",
    name: "Jordan McKenzie",
    role: "VP Product, Relay",
  },
  {
    quote:
      "The onboarding was instant and the shortlist nailed our brief. Our growth marketing partner paid for herself in the first month.",
    name: "Priya Singh",
    role: "Founder, Aurora Analytics",
  },
  {
    quote:
      "Invoicing, contracts, and compliance are handled out of the box. We focus on working with top-tier talent instead of admin.",
    name: "Conor Blake",
    role: "COO, Harbor Logistics",
  },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "$0",
    description: "Post unlimited projects and hire freelancers on-demand.",
    features: ["Unlimited briefs", "AI-assisted job templates", "Secure contracts & escrow"],
  },
  {
    name: "Scale",
    price: "$349/mo",
    description: "For teams building long-term relationships with curated talent.",
    features: ["Dedicated talent partner", "Curated shortlists", "Team onboarding & private workspace"],
  },
  {
    name: "Enterprise",
    price: "Talk to us",
    description: "Compliance, reporting, and procurement-friendly billing.",
    features: ["Custom SLAs", "Single invoice billing", "Security & compliance support"],
  },
];

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="mb-3 inline-flex items-center rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-200">
        {eyebrow}
      </span>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      <p className="mt-4 text-lg text-slate-300">{description}</p>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-lg font-semibold text-emerald-400">
              FL
            </span>
            <div>
              <p className="text-sm uppercase tracking-wide text-emerald-400">FreelanceFlow</p>
              <p className="text-sm text-slate-300">Talent marketplace for modern teams</p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-200 md:flex">
            {navLinks.map((item) => (
              <a key={item.name} href={item.href} className="transition hover:text-white">
                {item.name}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#"
              className="rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-slate-500 hover:text-white"
            >
              Sign in
            </a>
            <a
              href="#"
              className="flex items-center gap-2 rounded-full bg-emerald-400 px-4 py-2 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-300"
            >
              Hire talent
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <button className="md:hidden" type="button" aria-label="Open menu">
            <span className="block h-0.5 w-6 bg-white"></span>
            <span className="mt-1 block h-0.5 w-6 bg-white"></span>
            <span className="mt-1 block h-0.5 w-6 bg-white"></span>
          </button>
        </div>
      </header>

      <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-24 px-6 pb-32 pt-20">
        <section className="relative overflow-hidden rounded-3xl bg-slate-900/80 p-10 shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.2),_transparent_65%)]" />
          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200">
                <Sparkles className="h-4 w-4 text-emerald-300" />
                Curated talent, lightning fast hires
              </div>
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
                Build the products you imagine with world-class freelance teams.
              </h1>
              <p className="text-lg text-slate-300">
                FreelanceFlow pairs high-growth companies with vetted freelance specialists across design, engineering,
                and growth. Ship outcomes faster with flexible engagements powered by trust, compliance, and transparent
                pricing.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#projects"
                  className="flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-emerald-950 shadow-lg shadow-emerald-400/30 transition hover:bg-emerald-300"
                >
                  Explore projects
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#freelancers"
                  className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40"
                >
                  Meet the talent
                </a>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
                    <p className="text-2xl font-semibold text-white">{stat.value}</p>
                    <p className="text-sm text-slate-300">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-6 rounded-3xl border border-emerald-400/20 bg-gradient-to-br from-emerald-500/10 via-transparent to-blue-500/10 blur-2xl" />
              <div className="relative h-full space-y-6 rounded-3xl bg-slate-950/70 p-6">
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div>
                    <p className="text-sm text-slate-400">Sr. Product Designer</p>
                    <p className="text-lg font-semibold">Portfolio refresh</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-semibold text-emerald-300">$85/hr</p>
                    <p className="text-xs text-slate-500">Remote • 15 hrs/week</p>
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-slate-400">Client brief</p>
                  <p className="mt-2 text-base text-slate-200">
                    “We need a clean, conversion-focused product site in four weeks. Excited to partner with a design lead
                    who can ship and iterate quickly.”
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-slate-400">Shortlisted talent</p>
                  <div className="mt-3 flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {[freelancers[0], freelancers[1], freelancers[2]].map((freelancer) => (
                        <div
                          key={freelancer.name}
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500/40 to-blue-500/40 text-sm font-semibold text-white"
                        >
                          {freelancer.name
                            .split(" ")
                            .map((part) => part[0])
                            .join("")}
                        </div>
                      ))}
                    </div>
                    <p className="text-sm text-slate-300">Vetted availability within hours</p>
                  </div>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4">
                  <div>
                    <p className="text-sm text-emerald-200">Escrow protected</p>
                    <p className="text-sm text-emerald-100">Milestones released automatically</p>
                  </div>
                  <ShieldCheck className="h-6 w-6 text-emerald-300" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Trusted by product-led teams</p>
          <div className="mt-6 grid gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {["Relume", "Vectorly", "Northwind", "Evergreen", "Lumen", "Layerbase"].map((brand) => (
              <p key={brand} className="text-sm font-semibold text-slate-200">
                {brand}
              </p>
            ))}
          </div>
        </section>

        <section id="solutions" className="space-y-12">
          <SectionHeading
            eyebrow="What you can build"
            title="Launch with freelancers who think like product partners."
            description="Whether you need a battle-tested engineer, a lightning-fast marketer, or a seasoned operator, each talent profile is vetted for outcomes."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {categories.map((category) => (
              <div key={category.title} className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8">
                <div className="absolute right-6 top-6 rounded-full bg-emerald-500/20 p-3 text-emerald-300">
                  <category.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                <p className="mt-4 text-base text-slate-300">{category.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {category.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-200">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex items-center gap-2 text-sm font-medium text-emerald-300">
                  See talent in this track
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="space-y-12">
          <SectionHeading
            eyebrow="Featured briefs"
            title="Recent projects teams are hiring for right now."
            description="Get a shortlist of specialists within hours. Collaborate inside our workspace, set milestones, and pay with transparent escrow."
          />
          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <div key={project.title} className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-emerald-200">{project.company}</p>
                    <h3 className="mt-2 text-xl font-semibold text-white">{project.title}</h3>
                  </div>
                  <div className="text-right text-sm text-slate-300">
                    <p>{project.budget}</p>
                    <p className="text-xs text-slate-500">{project.duration}</p>
                  </div>
                </div>
                <p className="mt-6 text-sm text-slate-300">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <span key={skill} className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-200">
                      {skill}
                    </span>
                  ))}
                </div>
                <a className="mt-8 flex items-center gap-2 text-sm font-medium text-emerald-300" href="#">
                  View brief
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="freelancers" className="space-y-12">
          <SectionHeading
            eyebrow="Talent spotlight"
            title="Meet the independent operators trusted by top startups."
            description="Profiles are hand-screened for craft, communication, and measurable impact. Retain talent for sprints or multi-quarter missions."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {freelancers.map((freelancer) => (
              <div key={freelancer.name} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="absolute -right-10 top-10 h-32 w-32 rounded-full bg-emerald-500/10 blur-3xl transition group-hover:scale-125" />
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-emerald-500/10 text-base font-semibold text-emerald-200">
                    {freelancer.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{freelancer.name}</p>
                    <p className="text-xs text-emerald-200">{freelancer.title}</p>
                  </div>
                  <span className="ml-auto rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                    {freelancer.rate}
                  </span>
                </div>
                <p className="mt-4 text-xs text-slate-400">{freelancer.experience}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-200">
                  {freelancer.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                      {skill}
                    </li>
                  ))}
                </ul>
                <a className="mt-6 flex items-center gap-2 text-sm font-medium text-emerald-300" href="#">
                  Request intro
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-12 rounded-3xl border border-white/10 bg-white/5 p-8 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="How it works"
              title="Spin up your flexible workforce in three steps."
              description="We match your brief with vetted specialists, manage contracts and payments, and provide the rails for seamless collaboration."
            />
          </div>
          <div className="space-y-6">
            {[
              {
                title: "Blueprint your project",
                description:
                  "Use guided templates or collaborate with a talent partner to clarify scope, metrics, and budget.",
                icon: Sparkles,
              },
              {
                title: "Review curated shortlists",
                description:
                  "Receive a shortlist within 24 hours. Interview asynchronously or jump straight into a paid trial.",
                icon: Users,
              },
              {
                title: "Launch with confidence",
                description:
                  "Milestones, escrow, and automated invoicing keep everyone aligned so outcomes ship on time.",
                icon: ShieldCheck,
              },
            ].map((step) => (
              <div key={step.title} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="rounded-full bg-emerald-500/15 p-3 text-emerald-300">
                  <step.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-base font-semibold text-white">{step.title}</p>
                  <p className="mt-2 text-sm text-slate-300">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="testimonials" className="space-y-12">
          <SectionHeading
            eyebrow="Proof of impact"
            title="Teams stay because they ship faster with less risk."
            description="FreelanceFlow blends curated talent and operator-level support so you can deliver outcomes, not overhead."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6">
                <Star className="h-6 w-6 text-emerald-300" />
                <p className="mt-4 flex-1 text-sm text-slate-200">{testimonial.quote}</p>
                <div className="mt-6 text-sm">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="pricing" className="space-y-12">
          <SectionHeading
            eyebrow="Flexible plans"
            title="Choose the engagement model that fits your roadmap."
            description="Start free, then graduate to guided talent partnerships and enterprise-grade compliance when you need it."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {pricingPlans.map((plan) => (
              <div key={plan.name} className="flex h-full flex-col rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-baseline justify-between">
                  <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                  <p className="text-lg font-semibold text-emerald-300">{plan.price}</p>
                </div>
                <p className="mt-4 text-sm text-slate-300">{plan.description}</p>
                <ul className="mt-6 space-y-3 text-sm text-slate-200">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-1 h-4 w-4 text-emerald-300" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
                  href="#"
                >
                  Talk to team
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-emerald-500/30 bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-purple-500/20 p-10 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-200">Get started today</p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Build your fractional dream team.</h2>
          <p className="mt-4 text-lg text-slate-100">
            Join thousands of operators shipping smarter with FreelanceFlow. Create your brief, meet curated talent, and
            launch in under 48 hours.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#"
              className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
            >
              Create a brief
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="rounded-full border border-white/50 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Join as freelancer
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-semibold text-white">FreelanceFlow</p>
            <p className="mt-2 text-sm text-slate-400">Where modern teams scale with independent talent.</p>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-slate-300">
            <a className="transition hover:text-white" href="#">
              About
            </a>
            <a className="transition hover:text-white" href="#">
              Talent network
            </a>
            <a className="transition hover:text-white" href="#">
              Privacy
            </a>
            <a className="transition hover:text-white" href="#">
              Support
            </a>
          </div>
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} FreelanceFlow Labs. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
