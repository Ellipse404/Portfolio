"use client";

import {
  ReactNode,
  useEffect,
  useMemo,
  useState,
  type CSSProperties,
} from "react";

import {
  Atom,
  BadgeCheck,
  Boxes,
  Code2,
  ExternalLink,
  FileCode2,
  FileJson2,
  GitBranch,
  GitFork,
  Globe2,
  KeyRound,
  Layers3,
  Network,
  Palette,
  Rocket,
  Server,
  Smartphone,
  TestTube2,
  Users,
  Workflow,
  Zap,
  type LucideIcon
} from "lucide-react";

type Project = {
  name: string;
  period: string;
  role: string;
  stack: string[];
  description: string;
  impact: string[];
  icon?: ReactNode;
  url?: string;
  website?: string;
};

const skills = {
  Languages: ["JavaScript", "TypeScript", "Python3"],
  "Web Technologies": ["HTML5", "CSS3", "Bootstrap", "Tailwind CSS"],
  "Frameworks & Libraries": [
    "React",
    "React Native",
    "Next.js",
    "Angular",
    "Vue",
    "Node.js",
    "Redux",
    "Jotai",
    "Axios",
    "React Query",
  ],
  "GraphQL & APIs": ["GraphQL", "REST APIs"],
  "Form & Validation": ["Zod", "Formik", "Yup", "React Hook Form"],
  "UI & Build": [
    "Material UI",
    "Ant Design",
    "Vite",
    "Webpack",
    "Micro-Frontend",
    "Module Federation",
  ],
  "Unit Test": ["Jest", "Vitest"],
  "Tools & Version Control": [
    "Git",
    "GitHub",
    "Bitbucket",
    "GitLab",
    "Azure DevOps",
    "JIRA",
    "ClickUp",
    "VS Code",
    "Sublime Text",
  ],
  "Soft Skills": [
    "Team Leadership",
    "Agile Development",
    "UI/UX Development",
    "API Integration",
    "Performance Optimization",
  ],
  "Backend Exposure": [
    "Node JS",
    "Nest JS",
    "RESTful API Integration",
    "Authentication",
  ],
};

const skillIcons: Record<string, LucideIcon> = {
  JavaScript: FileJson2,
  TypeScript: FileCode2,
  Python3: Code2,

  HTML5: Globe2,
  CSS3: Palette,
  Bootstrap: Palette,
  "Tailwind CSS": Palette,

  React: Atom,
  "React Native": Smartphone,
  "Next.js": Rocket,
  Angular: Code2,
  Vue: Code2,
  "Node.js": Server,
  "Node JS": Server,
  "Nest JS": Server,
  Redux: Workflow,
  Jotai: Atom,
  Axios: Network,
  "React Query": Network,

  GraphQL: Network,
  "REST APIs": Network,
  "RESTful API Integration": Network,

  Zod: BadgeCheck,
  Formik: BadgeCheck,
  Yup: BadgeCheck,
  "React Hook Form": BadgeCheck,

  "Material UI": Palette,
  "Ant Design": Palette,
  Vite: Zap,
  Webpack: Boxes,
  "Micro-Frontend": Layers3,
  "Module Federation": Boxes,

  Jest: TestTube2,
  Vitest: TestTube2,

  Git: GitBranch,
  GitHub: GitFork,
  Bitbucket: GitBranch,
  GitLab: GitFork,
  "Azure DevOps": Workflow,
  JIRA: Workflow,
  ClickUp: Workflow,
  "VS Code": Code2,
  "Sublime Text": Code2,

  "Team Leadership": Users,
  "Agile Development": Workflow,
  "UI/UX Development": Palette,
  "API Integration": Network,
  "Performance Optimization": Zap,

  Authentication: KeyRound,
};

const projects: Project[] = [
  {
    name: "TDSG",
    period: "Mar 2026 — Present",
    role: "Software Engineer - Frontend · NextZen Minds Technologies Pvt Ltd",
    stack: [
      "React",
      "Vite",
      "Ant Design",
      "Zod",
      "Vitest",
      "Context API",
      "TypeScript",
    ],
    description:
      "Centralized organization management system with dashboard-driven access control, organization hierarchy, and workflow approvals.",
    impact: [
      "Built scalable frontend architecture using React, Vite, and TypeScript.",
      "Implemented Microsoft SSO authentication.",
      "Role Based Access Control.",
      "Led 3 frontend developers on dynamic forms, decision trees, and hierarchy workflows.",
      "Created drag-and-drop dashboards with widget layout persistence.",
    ],
  },
  {
    name: "HawkShield",
    period: "Aug 2024 — Mar 2026",
    role: "Frontend Developer · NextZen Minds",
    stack: [
      "React",
      "Material UI",
      "Context API",
      "JavaScript",
      "pdftron",
      "Docker",
    ],
    description:
      "Enterprise Zero Trust data security platform focused on secure collaboration, file protection, and content access control.",
    impact: [
      "Designed modular reusable UI components for consistent product experience.",
      "Implemented encryption and decryption flows for email and shared files.",
      "Role Based Access Control",
      "Integrated internal file viewer with watermarking, download, and preview support.",
    ],
  },
  {
    name: "Swift Security",
    period: "Sep 2021 — Jul 2024",
    role: "Programme Analyst · CBNITS India Private Limited",
    stack: [
      "React",
      "Material UI",
      "TypeScript",
      "Micro-Frontend",
      "Module Federation",
      "Jotai",
      "Vite",
    ],
    description:
      "Cloud security platform built with modular components for handling diverse security and management challenges.",
    impact: [
      "Developed reusable components and graph visualizations aligned with UX requirements.",
      "Used Jotai for smooth data flow across a micro-frontend application.",
      "Role Based Access Control",
      "Implemented routing, navigation, and API integrations for richer user interaction.",
    ],
  },
  {
    name: "Usage Insights",
    period: "CBNITS",
    role: "Frontend Engineer",
    stack: ["Angular 11", "VDL", "TypeScript", "RxJs", "NgRx"],
    description:
      "Data analytics platform providing visibility into data usage, storage, and IT infrastructure management.",
    impact: [
      "Upgraded the application from Angular 7 to Angular 11.",
      "Improved code architecture and product-level data flow.",
    ],
  },
  {
    name: "Squadcast",
    period: "CBNITS",
    role: "Frontend / Mobile Engineer",
    stack: [
      "React Native",
      "Native Base",
      "React Query",
      "TypeScript",
      "Context API",
    ],
    description:
      "Incident management platform built around DevOps and SRE practices for faster collaborative incident resolution.",
    impact: [
      "Implemented functional UI features and navigation flows.",
      "Integrated APIs with React Query to improve app performance and user experience.",
    ],
  },
  {
    name: "i2Chain",
    period: "Apr 2021 — Sep 2021",
    role: "Internship · CBNITS India Private Limited",
    stack: ["React", "Material UI", "JavaScript", "Redux"],
    description:
      "Security platform for securely chaining, reading, and sharing files across private and public cloud services.",
    impact: [
      "Implemented UI based on UX specifications with seamless navigation.",
      "Integrated APIs and developed Redux architecture for data management.",
    ],
  },
];

const personalProjects: Project[] = [
  {
    name: "Stacklens",
    period: "2026 — Recently Built",
    role: "Personal Project · AI Developer Productivity Tool",
    stack: [
      "VS Code Extension API",
      "TypeScript",
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "llama-3.1",
      "Gemini",
      "Nemotron3",
      "Mermaid.js",
      "AI Integration",
    ],
    description:
      "Stacklens is an AI-powered VS Code extension built to help developers understand codebases faster through architecture visualization, intelligent documentation generation, and code quality analysis.",
    impact: [
      "Built a VS Code extension that can generate architecture diagrams for opened projects.",
      "Implemented file-level documentation generation with language-aware output such as JSDoc[.js/.ts], Docstring [.py], Java docs[.java], and Go docs[.go]",
      "Designed the backend as a secure AI gateway using NestJS for provider access, validation, fallback, and future rate limiting.",
      "Integrated llama-3.1 as the primary AI provider with Gemini and Nemotron3 as fallback for reliable AI responses.",
      "Focused on developer productivity, local-first privacy, and future SaaS monetization.",
    ],
    icon: (
      <img
        src="/assets/icon.png"
        alt="Stacklens icon"
        className="h-14 w-14 rounded-2xl object-contain pt-2"
      />
    ),
    url: "https://marketplace.visualstudio.com/items?itemName=BhaskarNeogi.stacklens",
    website: "https://stack-lens-website-five.vercel.app/",
  },
];

const experience = [
  {
    title: "Software Engineer - Frontend",
    company: "NextZen Minds Technologies Pvt Ltd",
    period: "March 2026 — Present",
    details:
      "Leading frontend work for TDSG with React, Vite, Ant Design, Zod, Vitest, and TypeScript.",
  },
  {
    title: "Frontend Developer",
    company: "NextZen Minds",
    period: "August 2024 — March 2026",
    details:
      "Built secure enterprise UI modules for HawkShield using React, Material UI, Formik, Yup, and JavaScript.",
  },
  {
    title: "Programme Analyst",
    company: "CBNITS India Private Limited",
    period: "September 2021 — July 2024",
    details:
      "Worked across Swift Security, Usage Insights, and Squadcast using React, Angular, React Native, and micro-frontend architecture.",
  },
  {
    title: "Internship",
    company: "CBNITS India Private Limited",
    period: "April 2021 — September 2021",
    details:
      "Started with i2Chain, building React UI, API integrations, and Redux-based data flow.",
  },
];

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "10+", label: "Product Projects" },
  { value: "3", label: "Languages" },
];

const marqueeItems = [
  "React",
  "TypeScript",
  "JavaScript",
  "Vue",
  "React Native",
  "Angular",
  "Micro-Frontend",
  "Module Federation",
  "Vite",
  "Webpack",
  "Material UI",
  "Ant Design",
  "Context API",
  "Redux",
  "GraphQL",
  "REST APIs",
  "Performance Optimization",
];

function CursorGlow() {
  const [position, setPosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      setPosition({
        x: Math.round((event.clientX / window.innerWidth) * 100),
        y: Math.round((event.clientY / window.innerHeight) * 100),
      });
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-10 transition duration-300 spotlight"
      style={
        { "--x": `${position.x}%`, "--y": `${position.y}%` } as CSSProperties
      }
    />
  );
}

function SectionLabel({ eyebrow, title }: { eyebrow: string; title?: string }) {
  return (
    <div className="mb-10">
      <p className="text-sm font-semibold uppercase tracking-[0.32em] text-amber-300/90">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-4xl font-black tracking-tight text-white md:text-5xl">
        {title}
      </h2>
    </div>
  );
}

function HeroOrb() {
  return (
    <div className="relative mx-auto flex h-[360px] w-[360px] items-center justify-center rounded-full border border-white/10 bg-white/[0.03] shadow-glow md:h-[430px] md:w-[430px]">
      <div className="absolute inset-10 rounded-full border border-dashed border-amber-300/30" />
      <div className="absolute inset-20 rounded-full border border-dashed border-fuchsia-300/30" />
      <div className="absolute h-44 w-44 rounded-full bg-gradient-to-br from-amber-300 via-pink-500 to-violet-600 blur-2xl opacity-50 animate-pulseSoft" />
      <div className="relative z-10 h-56 w-56 rounded-full border border-white/20 bg-[#0d0818] p-5 shadow-2xl">
        <div className="flex h-full flex-col items-center justify-center rounded-full bg-gradient-to-br from-white/10 to-white/[0.02] text-center">
          <span className="text-xs uppercase tracking-[0.28em] text-amber-200">
            Frontend Core
          </span>
          <strong className="mt-3 font-display text-5xl text-white">BN</strong>
          <span className="mt-3 max-w-[150px] text-xs text-slate-300">
            React • TypeScript • Secure UI Systems
          </span>
        </div>
      </div>
      {["React", "TS", "MFE", "API"].map((item, index) => (
        <div
          key={item}
          className="absolute flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-black/50 text-sm font-bold text-amber-100 shadow-amberGlow backdrop-blur-xl animate-orbit"
          style={{ animationDelay: `${index * -4.5}s` }}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

function PersonalProjects() {
  return (
    <div className="grid gap-6 lg:grid-cols-1">
      {personalProjects.map((project) => (
        <article
          key={project.name}
          className="aurora-border glass-card group relative overflow-hidden rounded-[2rem] p-6 transition duration-500 hover:-translate-y-2 hover:shadow-amberGlow md:p-8"
        >
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-amber-300/20 blur-3xl transition group-hover:bg-fuchsia-400/25" />
          <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl" />

          <div className="relative z-10 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-sm font-semibold text-amber-100">
                <Rocket className="h-4 w-4" />
                Personal Product
              </div>

              <div className="mt-5 flex items-center gap-2">
                {project.icon && <div>{project.icon}</div>}

                <h3 className="font-display text-4xl font-black text-white md:text-5xl">
                  {project.name}
                </h3>
              </div>

              <p className="mt-3 text-sm font-semibold text-fuchsia-200">
                {project.role}
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-300">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-sm text-amber-100"
                  >
                    <Code2 className="h-3.5 w-3.5 text-amber-300" />
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-sm font-semibold text-amber-100 transition hover:border-amber-300/60 hover:bg-amber-300/20"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Download URL
                  </a>
                )}

                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-fuchsia-300/30 bg-fuchsia-300/10 px-4 py-2 text-sm font-semibold text-fuchsia-100 transition hover:border-fuchsia-300/60 hover:bg-fuchsia-300/20"
                  >
                    <Globe2 className="h-4 w-4" />
                    Website
                  </a>
                )}
              </div>
            </div>

            <div className="grid gap-4">
              {project.impact.map((item, index) => (
                <div
                  key={item}
                  className="card-tilt flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-amber-300/40 hover:bg-amber-300/10"
                >
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-to-br from-amber-300 to-pink-500 text-sm font-black text-black">
                    {index + 1}
                  </span>
                  <p className="leading-7 text-slate-300">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

function ProjectExplorer() {
  const [active, setActive] = useState(0);
  const project = projects[active];

  return (
    <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
      <div className="space-y-3">
        {projects.map((item, index) => (
          <button
            key={item.name}
            onClick={() => setActive(index)}
            className={`group w-full rounded-3xl border p-5 text-left transition duration-300 ${
              active === index
                ? "border-amber-300/50 bg-amber-300/10 shadow-amberGlow"
                : "border-white/10 bg-white/[0.035] hover:border-fuchsia-300/40 hover:bg-white/[0.06]"
            }`}
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                {/* <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                  {item.period}
                </p> */}
                <h3 className="mt-2 font-display text-2xl font-bold text-white">
                  {item.name}
                </h3>
              </div>
              <span className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-black/30 text-xl transition group-hover:rotate-45">
                ↗
              </span>
            </div>
          </button>
        ))}
      </div>

      <article className="aurora-border glass-card rounded-[2rem] p-6 md:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            {/* <p className="text-sm font-semibold text-amber-200">
              {project.role}
            </p> */}
            <h3 className="mt-2 font-display text-4xl font-black text-white">
              {project.name}
            </h3>
          </div>
          {/* <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
            {project.period}
          </span> */}
        </div>

        <p className="mt-6 text-lg leading-8 text-slate-300">
          {project.description}
        </p>

        <div className="mt-7 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-black/30 px-3 py-1.5 text-sm text-amber-100"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-8 grid gap-4">
          {project.impact.map((item, index) => (
            <div
              key={item}
              className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4"
            >
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-to-br from-amber-300 to-pink-500 text-sm font-black text-black">
                {index + 1}
              </span>
              <p className="text-slate-300">{item}</p>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
}

function SkillMatrix() {
  const categories = Object.keys(skills);
  const [active, setActive] = useState(categories[0]);

  return (
    <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
      <div className="glass-card rounded-[2rem] p-4">
        {categories.map((category) => (
          <button
            key={category}
            onMouseEnter={() => setActive(category)}
            onClick={() => setActive(category)}
            className={`mb-2 w-full rounded-2xl px-5 py-4 text-left transition ${
              active === category
                ? "bg-white text-black"
                : "text-slate-300 hover:bg-white/10 hover:text-white"
            }`}
          >
            <span className="font-semibold">{category}</span>
          </button>
        ))}
      </div>

      <div className="glass-card min-h-[320px] rounded-[2rem] p-6 md:p-8">
        <h3 className="mt-3 font-display text-3xl font-black text-white">
          {active}
        </h3>

        <div className="mt-8 flex flex-wrap gap-3">
          {skills[active as keyof typeof skills]?.map((skill, index) => {
            const Icon = skillIcons[skill] ?? Code2;

            return (
              <span
                key={skill}
                className="card-tilt group inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-black/30 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-amber-300/40 hover:bg-amber-300/10 hover:text-amber-100"
                style={{ transitionDelay: `${index * 28}ms` }}
              >
                <Icon className="h-4 w-4 text-amber-300 transition group-hover:scale-110" />
                {skill}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ExperienceTimeline() {
  return (
    <div className="relative">
      <div className="timeline-line absolute left-4 top-0 h-full w-px md:left-1/2" />
      <div className="space-y-7">
        {experience.map((item, index) => (
          <div
            key={item.title + item.period}
            className={`relative grid gap-5 md:grid-cols-2 ${index % 2 ? "md:text-left" : "md:text-right"}`}
          >
            <div
              className={`${index % 2 ? "md:col-start-2" : ""} ml-12 md:ml-0`}
            >
              <div className="card-tilt rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl">
                <p className="text-sm font-semibold text-amber-200">
                  {item.period}
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-1 text-fuchsia-200">{item.company}</p>
                <p className="mt-4 leading-7 text-slate-300">{item.details}</p>
              </div>
            </div>
            <span className="absolute left-4 top-7 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-[#05030a] bg-amber-300 shadow-amberGlow md:left-1/2" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const doubledMarquee = useMemo(() => [...marqueeItems, ...marqueeItems], []);

  return (
    <main className="noise relative min-h-screen overflow-hidden font-sans text-white">
      <CursorGlow />
      <div className="grid-bg pointer-events-none fixed inset-0 z-0" />

      <nav className="fixed left-1/2 top-4 z-50 w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2 rounded-full border border-white/10 bg-black/45 px-4 py-3 backdrop-blur-2xl">
        <div className="flex items-center justify-between gap-4">
          <a
            href="#home"
            className="font-display text-lg font-black tracking-tight"
          >
            Bhaskar<span className="text-amber-300">.</span>
          </a>
          <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#projects" className="hover:text-amber-200">
              Projects
            </a>
            <a href="#personal-projects" className="hover:text-amber-200">
              Personal Build
            </a>
            <a href="#skills" className="hover:text-amber-200">
              Skills
            </a>
            <a href="#experience" className="hover:text-amber-200">
              Experience
            </a>
            <a href="#contact" className="hover:text-amber-200">
              Contact
            </a>
          </div>
          <a
            href="/cv_bhaskar_neogi.pdf"
            download
            className="rounded-full bg-white px-4 py-2 text-sm font-bold text-black transition hover:bg-amber-200"
          >
            Download CV
          </a>
        </div>
      </nav>

      <section
        id="home"
        className="relative z-20 mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 pb-20 pt-32 lg:grid-cols-[1.05fr_0.95fr]"
      >
        <div>
          <div className="inline-flex items-center gap-3 rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-sm text-amber-100">
            <span className="h-2 w-2 rounded-full bg-amber-300 animate-pulse" />
            Software Engineer
          </div>

          <h2 className="mt-7 max-w-4xl font-display text-4xl font-black leading-[0.95] tracking-[-0.06em] md:text-6xl xl:text-7xl">
            I build <span className="gradient-text">secure</span>, fast and
            polished web experiences.
          </h2>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
            I’m Bhaskar Neogi, a Kolkata-based frontend developer with 5+ years
            of experience building responsive, high-performance web
            applications, secure enterprise products, workflow dashboards,
            micro-frontends, and API-driven user interfaces.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="mailto:bhaskarneogi1999@gmail.com"
              className="aurora-border rounded-full bg-black px-6 py-3 font-bold text-white transition hover:scale-105"
            >
              Email Me
            </a>
            <a
              href="#projects"
              className="rounded-full border border-white/15 bg-white/10 px-6 py-3 font-bold text-white transition hover:bg-white hover:text-black"
            >
              Explore Work
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label} className="glass-card rounded-3xl p-4">
                <p className="font-display text-3xl font-black text-white">
                  {item.value}
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <HeroOrb />
      </section>

      <div className="relative z-20 marquee-mask border-y border-white/10 bg-white/[0.03] py-5">
        <div className="flex w-max animate-marquee gap-4">
          {doubledMarquee.map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="rounded-full border border-white/10 bg-black/30 px-5 py-2 text-sm font-semibold text-slate-200"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <section
        id="projects"
        className="relative z-20 mx-auto max-w-7xl px-6 py-24"
      >
        <SectionLabel eyebrow="Selected work" title="Project Exposure" />
        <ProjectExplorer />
      </section>

      <section
        id="personal-projects"
        className="relative z-20 mx-auto max-w-7xl px-6 py-24"
      >
        <SectionLabel
          eyebrow="Personal build"
          title="AI developer tool I recently built"
        />
        <PersonalProjects />
      </section>

      <section
        id="skills"
        className="relative z-20 mx-auto max-w-7xl px-6 py-24"
      >
        <SectionLabel eyebrow="Technical stack" />
        <SkillMatrix />
      </section>

      <section
        id="experience"
        className="relative z-20 mx-auto max-w-7xl px-6 py-24"
      >
        <SectionLabel eyebrow="Career path" title="Experience Timeline" />
        <ExperienceTimeline />
      </section>

      <section className="relative z-20 mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="glass-card rounded-[2rem] p-7">
            <p className="text-sm uppercase tracking-[0.28em] text-amber-200">
              Education
            </p>
            <h3 className="mt-4 font-display text-3xl font-black text-white">
              B.Tech in Computer Science
            </h3>
            <p className="mt-4 leading-7 text-slate-300">
              Maulana Abul Kalam Azad University of Technology, West Bengal,
              India.
            </p>
          </div>

          <div className="glass-card rounded-[2rem] p-7">
            <p className="text-sm uppercase tracking-[0.28em] text-amber-200">
              Languages
            </p>
            <h3 className="mt-4 font-display text-3xl font-black text-white">
              English, Bengali, Hindi
            </h3>
            <p className="mt-4 leading-7 text-slate-300">
              Comfortable collaborating across product, design, and engineering
              teams.
            </p>
          </div>

          <div className="glass-card rounded-[2rem] p-7">
            <p className="text-sm uppercase tracking-[0.28em] text-amber-200">
              Location
            </p>
            <h3 className="mt-4 font-display text-3xl font-black text-white">
              Newtown, Kolkata
            </h3>
            <p className="mt-4 leading-7 text-slate-300">
              Open to frontend, full-stack frontend-heavy, SaaS, security, and
              AI-enabled product engineering roles.
            </p>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative z-20 mx-auto max-w-7xl px-6 pb-28 pt-10"
      >
        <div className="aurora-border rounded-[2.5rem] bg-[#090512] p-8 md:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-amber-200">
                Available for opportunities
              </p>
              <h2 className="mt-4 font-display text-4xl font-black tracking-tight md:text-6xl">
                Let’s build a product users can trust.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                I focus on clean Interfaces, Stable Architecture, Reusable
                Components, Secure Data Flows, Smooth API Integrations and
                Performance Optimization.
              </p>
            </div>

            <div className="grid gap-3 text-sm">
              <a
                href="mailto:bhaskarneogi1999@gmail.com"
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-amber-300/40 hover:bg-amber-300/10"
              >
                <span className="block text-slate-400">Email</span>
                <strong className="mt-1 block text-white">
                  bhaskarneogi1999@gmail.com
                </strong>
              </a>
              <a
                href="tel:+918617873619"
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-amber-300/40 hover:bg-amber-300/10"
              >
                <span className="block text-slate-400">Phone</span>
                <strong className="mt-1 block text-white">
                  +91 86178 73619
                </strong>
              </a>
              <a
                href="https://www.linkedin.com/in/bhaskar-neogi-20b2a11b2/"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-amber-300/40 hover:bg-amber-300/10"
              >
                <span className="block text-slate-400">LinkedIn</span>
                <strong className="mt-1 block text-white">bhaskar.neogi</strong>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
