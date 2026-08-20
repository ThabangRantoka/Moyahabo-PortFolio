import { createFileRoute } from "@tanstack/react-router";
import profileAsset from "@/assets/thabang-profile.png.asset.json";
import cvAsset from "@/assets/cv.pdf.asset.json";

const GITHUB = "https://github.com/ThabangRantoka";
const EMAIL = "thabangrantoka@gmail.com";
const PHONE = "076 364 9536";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Moyahabo Thabang Rantoka — AI & Software Developer" },
      {
        name: "description",
        content:
          "Portfolio of Moyahabo Thabang Rantoka, Computer Systems Engineering student in Pretoria building AI, automation, embedded and web systems with Python, C++, PHP and JavaScript.",
      },
      { property: "og:title", content: "Moyahabo Thabang Rantoka — AI & Software Developer" },
      {
        property: "og:description",
        content:
          "AI, automation and software projects: OpsFlow operations system, BrainWave Work AI, Program Manager web app, Raspberry Pi home automation and more.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const skillGroups = [
  { title: "Programming", items: ["C++", "Python", "JavaScript", "SQL", "HTML5", "CSS3", "PHP"] },
  {
    title: "AI & Automation",
    items: [
      "Machine Learning",
      "Unity ML-Agents",
      "Workflow Automation",
      "ChatGPT",
      "Microsoft Copilot",
      "Google Gemini",
    ],
  },
  {
    title: "Systems & Hardware",
    items: ["Raspberry Pi", "Arduino", "Embedded Systems", "PCB Design", "Mobile Robotics", "PLCs"],
  },
  {
    title: "Data & Tools",
    items: ["MySQL / MariaDB", "Power BI", "Excel", "Git & GitHub", "Flask", "XAMPP"],
  },
];

const projects = [
  {
    name: "OpsFlow — Business Operations Management System",
    summary:
      "Role-based operations platform with live KPI dashboards, employee and department CRUD, project tracking, attendance, leave approvals, CSV reports and admin activity logs.",
    tech: ["PHP 8", "MySQL/MariaDB", "Vanilla CSS", "XAMPP"],
    highlight: "Admin / Manager / Employee permission matrix with bcrypt password hashing.",
    link: `${GITHUB}/OpsFlow-Project`,
  },
  {
    name: "BrainWave Work AI",
    summary:
      "AI productivity workspace: email generator with tone and audience control, meeting-notes summarizer, task planner, research assistant and AI chat, all behind an analytics dashboard.",
    tech: ["TypeScript", "React", "TanStack Start", "Tailwind CSS"],
    highlight: "Human-in-the-loop design — AI drafts, the professional decides.",
    link: `${GITHUB}/brainwave-work-ai`,
  },
  {
    name: "Program Manager Web Application",
    summary:
      "Responsive program management tool with LocalStorage persistence, search, edit and delete flows and a clean modern interface. Deployed on GitHub Pages.",
    tech: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    highlight: "Fully client-side, zero-backend CRUD with instant search.",
    link: `${GITHUB}/Program-Manager-Web-Application`,
  },
  {
    name: "Municipal Billing System",
    summary:
      "Desktop C++ application automating customer accounts, tariff management and billing calculations with file-handling based storage.",
    tech: ["C++", "OOP", "File Handling", "Visual Studio"],
    highlight: "Object-oriented billing engine covering tariffs and account statements.",
    link: `${GITHUB}/Municipal-Billing-System`,
  },
  {
    name: "Raspberry Pi Home Automation",
    summary:
      "Flask web interface driving GPIO-controlled relays, enabling remote switching of electrical devices from any browser on the network.",
    tech: ["Python", "Flask", "Raspberry Pi", "GPIO"],
    highlight: "Hardware and web software integrated into one control surface.",
  },
  {
    name: "Robotics & Sensor Systems",
    summary:
      "Unity ML-Agents model trained for autonomous stealth navigation, obstacle-avoidance and wall-following logic for a mobile robot, plus an Arduino ultrasonic distance system and a PCB fire-detection design.",
    tech: ["Unity ML-Agents", "Arduino", "Sensors", "PCB Design"],
    highlight: "Reinforcement learning and classic control applied to real hardware.",
  },
];

const education = [
  {
    school: "Tshwane University of Technology",
    place: "Pretoria, Gauteng",
    period: "Jan 2022 – Dec 2026",
    title: "Diploma in Computer Systems Engineering",
    detail:
      "Software Engineering, Artificial Intelligence, Embedded Systems, Mobile Robotics, Databases, Network Systems, Digital Process Control, PLCs, Operating Systems and Project Design.",
  },
  {
    school: "George Tladi Technical High School",
    place: "Mohodi, Limpopo",
    period: "Jan 2016 – Dec 2020",
    title: "National Senior Certificate (Grade 12)",
    detail: "Mathematics, Physical Sciences, Mechanical Technology, Engineering Graphics & Design.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <nav
          aria-label="Main"
          className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4"
        >
          <a href="#top" className="font-semibold tracking-tight">
            Thabang<span className="text-primary">.</span>
          </a>
          <ul className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            {sections.map((s) => (
              <li key={s.id}>
                <a className="transition-colors hover:text-foreground" href={`#${s.id}`}>
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={cvAsset.url}
            download
            className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Download CV
          </a>
        </nav>
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]"
          />
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:py-28 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="animate-rise">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs tracking-wide text-muted-foreground uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Pretoria, South Africa
              </p>
              <h1 className="text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl">
                <span className="text-gradient">Moyahabo Thabang Rantoka</span>
              </h1>
              <p className="mt-4 text-lg font-medium text-primary sm:text-xl">
                AI &amp; Software Developer · Computer Systems Engineering
              </p>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
                I build intelligent systems that connect hardware, software and data — from
                role-based operations platforms and AI productivity tools to Raspberry Pi automation
                and autonomous robotics.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  View projects
                </a>
                <a
                  href={GITHUB}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-accent"
                >
                  GitHub
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-accent"
                >
                  Hire me
                </a>
              </div>
            </div>
            <div className="animate-rise justify-self-center">
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-primary/40 to-transparent blur-xl"
                />
                <img
                  src={profileAsset.url}
                  alt="Portrait of Moyahabo Thabang Rantoka"
                  width={420}
                  height={420}
                  className="relative w-64 rounded-[2rem] border border-border object-cover shadow-2xl sm:w-80"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <Section id="about" title="About" kicker="Who I am">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm a motivated Computer Systems Engineering student with a strong foundation in
              artificial intelligence, automation and software development. I have hands-on
              experience building intelligent systems and data-driven applications using Python, SQL
              and Power BI, and I work comfortably across AI platforms such as ChatGPT, Microsoft
              Copilot and Google Gemini. I'm passionate about using AI and digital transformation to
              solve real-world problems and improve business processes.
            </p>
            <ul className="glass-card space-y-4 rounded-2xl p-6 text-sm">
              <Fact label="Focus" value="AI, automation & systems engineering" />
              <Fact label="Location" value="Pretoria, Gauteng" />
              <Fact label="Languages" value="English, Sepedi, isiZulu" />
              <Fact label="Certification" value="Introduction to Python — Cisco (2023)" />
              <Fact label="Licence" value="Code 10" />
            </ul>
          </div>
        </Section>

        {/* Skills */}
        <Section id="skills" title="Skills" kicker="What I work with">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((g) => (
              <div key={g.title} className="glass-card rounded-2xl p-6">
                <h3 className="text-sm font-semibold tracking-wide text-primary uppercase">
                  {g.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((i) => (
                    <li
                      key={i}
                      className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                    >
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section id="projects" title="Projects" kicker="Selected work">
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p) => (
              <article
                key={p.name}
                className="glass-card flex flex-col rounded-2xl p-7 transition-transform duration-300 hover:-translate-y-1"
              >
                <h3 className="text-xl font-semibold">{p.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
                <p className="mt-4 border-l-2 border-primary pl-3 text-sm text-foreground/90">
                  {p.highlight}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
                {p.link ? (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary hover:underline"
                  >
                    View on GitHub
                    <span aria-hidden="true">→</span>
                  </a>
                ) : (
                  <p className="mt-6 text-xs text-muted-foreground">
                    Academic / hardware project — details on request
                  </p>
                )}
              </article>
            ))}
          </div>
        </Section>

        {/* Education */}
        <Section id="education" title="Education & Experience" kicker="Background">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-6">
              {education.map((e) => (
                <div key={e.school} className="glass-card rounded-2xl p-6">
                  <p className="text-xs tracking-wide text-primary uppercase">{e.period}</p>
                  <h3 className="mt-2 text-lg font-semibold">{e.title}</h3>
                  <p className="text-sm text-foreground/80">
                    {e.school} · {e.place}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.detail}</p>
                </div>
              ))}
            </div>
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-lg font-semibold">AI, Automation & Systems Project Experience</h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                {[
                  "Developing academic and personal projects across AI, automation, robotics and data analysis.",
                  "Building solutions that integrate hardware, software and data to solve real-world problems.",
                  "Designing software applications and embedded systems in C++, Python and web technologies.",
                  "Working with databases and dashboards to analyse and visualise data for decision-making.",
                  "Collaborating with peers on multi-disciplinary projects using agile methodologies.",
                  "Documenting project progress, testing results and system performance.",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" title="Contact" kicker="Let's work together">
          <div className="glass-card rounded-3xl p-8 sm:p-12">
            <p className="max-w-xl text-lg text-muted-foreground">
              Open to internships and graduate roles in AI, software development and automation.
              The fastest way to reach me is email.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <ContactItem label="Email" value={EMAIL} href={`mailto:${EMAIL}`} />
              <ContactItem label="Phone" value={PHONE} href="tel:+27763649536" />
              <ContactItem label="GitHub" value="ThabangRantoka" href={GITHUB} external />
            </div>
            <a
              href={cvAsset.url}
              download
              className="mt-8 inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Download my CV
            </a>
          </div>
        </Section>
      </main>

      <footer className="border-t border-border/60 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Moyahabo Thabang Rantoka</p>
          <p>Pretoria, Gauteng · South Africa</p>
        </div>
      </footer>
    </div>
  );
}

function Section({
  id,
  title,
  kicker,
  children,
}: {
  id: string;
  title: string;
  kicker: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-border/40 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">{kicker}</p>
        <h2 className="mt-3 mb-10 text-3xl font-bold sm:text-4xl">{title}</h2>
        {children}
      </div>
    </section>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <li className="flex flex-col gap-1 border-b border-border/60 pb-3 last:border-0 last:pb-0">
      <span className="text-xs tracking-wide text-muted-foreground uppercase">{label}</span>
      <span className="font-medium">{value}</span>
    </li>
  );
}

function ContactItem({
  label,
  value,
  href,
  external,
}: {
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      className="rounded-2xl border border-border p-5 transition-colors hover:bg-accent"
    >
      <span className="block text-xs tracking-wide text-muted-foreground uppercase">{label}</span>
      <span className="mt-1 block font-medium break-words">{value}</span>
    </a>
  );
}
