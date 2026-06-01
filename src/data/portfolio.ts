/**
 * Central, hard-coded portfolio content.
 * Edit the values here to personalize the site — no backend required.
 */

export type NavLink = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "twitter" | "mail" | "globe";
};

export type Stat = {
  label: string;
  value: string;
};

export type SkillGroup = {
  category: string;
  items: { name: string; level: number }[];
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  highlights: string[];
  /** Path to a thumbnail in /public (e.g. "/images/projects/helix.jpg"). */
  image?: string;
  liveUrl?: string;
  repoUrl?: string;
  featured?: boolean;
  year: string;
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  summary: string;
  achievements: string[];
};

export type Service = {
  title: string;
  description: string;
  icon: string;
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export const profile = {
  name: "Alex Driscoll",
  firstName: "Alex",
  role: "Senior Software Engineer",
  tagline: "I design and ship resilient, human-centered software at scale.",
  bio: "Full-stack engineer with 8+ years building distributed systems, developer tools, and delightful product experiences. I care about clean architecture, fast feedback loops, and shipping things people actually love to use.",
  location: "San Francisco, CA",
  email: "alex.driscoll@example.com",
  phone: "+1 (415) 555-0142",
  availability: "Open to senior & staff-level roles",
  resumeUrl: "#",
  // Drop your own images in /public/images and update these paths.
  // Leave empty ("") to fall back to an initials / gradient placeholder.
  avatar: "/images/profile.svg",
  aboutImage: "/images/about.svg",
} as const;

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com", icon: "github" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
  { label: "Twitter", href: "https://twitter.com", icon: "twitter" },
  { label: "Email", href: "mailto:alex.driscoll@example.com", icon: "mail" },
];

export const stats: Stat[] = [
  { label: "Years of experience", value: "8+" },
  { label: "Projects shipped", value: "40+" },
  { label: "Open-source stars", value: "12k" },
  { label: "Happy teams", value: "15" },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    items: [
      { name: "TypeScript", level: 95 },
      { name: "Python", level: 88 },
      { name: "Go", level: 80 },
      { name: "Rust", level: 70 },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "React / Next.js", level: 95 },
      { name: "Tailwind CSS", level: 92 },
      { name: "React Native", level: 78 },
      { name: "Three.js", level: 65 },
    ],
  },
  {
    category: "Backend & Data",
    items: [
      { name: "Node.js", level: 92 },
      { name: "PostgreSQL", level: 86 },
      { name: "GraphQL", level: 82 },
      { name: "Redis", level: 80 },
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "AWS", level: 85 },
      { name: "Docker / K8s", level: 83 },
      { name: "Terraform", level: 76 },
      { name: "CI/CD", level: 88 },
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Helix Analytics Platform",
    description:
      "Real-time analytics platform processing 2B+ events per day with sub-second query latency across multi-tenant dashboards.",
    image: "/images/projects/helix.svg",
    tags: ["Next.js", "Go", "ClickHouse", "Kafka", "AWS"],
    highlights: [
      "Cut p95 query latency by 70% with a custom columnar caching layer",
      "Designed multi-tenant isolation handling 1,200+ enterprise accounts",
    ],
    liveUrl: "#",
    repoUrl: "#",
    featured: true,
    year: "2025",
  },
  {
    title: "Orbit Design System",
    description:
      "Open-source, accessible React component library adopted across 30+ internal products with full theming support.",
    image: "/images/projects/orbit.svg",
    tags: ["React", "TypeScript", "Storybook", "a11y"],
    highlights: [
      "120+ components with 98% accessibility audit score",
      "12k+ GitHub stars and an active contributor community",
    ],
    liveUrl: "#",
    repoUrl: "#",
    featured: true,
    year: "2024",
  },
  {
    title: "Nimbus Deploy CLI",
    description:
      "Zero-config deployment toolkit that provisions infrastructure and ships full-stack apps to the cloud in under a minute.",
    image: "/images/projects/nimbus.svg",
    tags: ["Rust", "Terraform", "AWS", "Docker"],
    highlights: [
      "Reduced average deploy time from 14 min to 45 sec",
      "Pluggable provider architecture (AWS, GCP, Fly.io)",
    ],
    liveUrl: "#",
    repoUrl: "#",
    featured: true,
    year: "2024",
  },
  {
    title: "Pulse Mobile Banking",
    description:
      "Cross-platform mobile banking app with biometric auth, instant transfers, and real-time spending insights.",
    image: "/images/projects/pulse.svg",
    tags: ["React Native", "Node.js", "PostgreSQL"],
    highlights: [
      "4.8★ rating across 200k+ downloads",
      "PCI-DSS compliant payments pipeline",
    ],
    liveUrl: "#",
    year: "2023",
  },
  {
    title: "Atlas Knowledge Graph",
    description:
      "Internal knowledge graph + semantic search connecting docs, code, and people using embeddings and vector search.",
    image: "/images/projects/atlas.svg",
    tags: ["Python", "FastAPI", "pgvector", "LLMs"],
    highlights: [
      "Reduced internal search time by 60%",
      "Indexed 1.5M documents with hybrid retrieval",
    ],
    repoUrl: "#",
    year: "2023",
  },
  {
    title: "Echo Realtime Chat SDK",
    description:
      "Developer SDK for embedding scalable, end-to-end encrypted realtime messaging into any application.",
    image: "/images/projects/echo.svg",
    tags: ["TypeScript", "WebSockets", "Redis", "WebRTC"],
    highlights: [
      "Handles 100k concurrent connections per node",
      "End-to-end encryption with forward secrecy",
    ],
    liveUrl: "#",
    repoUrl: "#",
    year: "2022",
  },
];

export const experiences: Experience[] = [
  {
    role: "Senior Software Engineer",
    company: "Helix Data",
    period: "2022 — Present",
    location: "San Francisco, CA",
    summary:
      "Lead engineer on the real-time analytics platform, owning architecture from ingestion to visualization.",
    achievements: [
      "Architected event pipeline scaling to 2B+ daily events",
      "Mentored 6 engineers and ran the platform guild",
      "Drove a 40% reduction in infrastructure spend",
    ],
  },
  {
    role: "Software Engineer",
    company: "Orbit Labs",
    period: "2019 — 2022",
    location: "Remote",
    summary:
      "Built and open-sourced the company design system and core developer tooling.",
    achievements: [
      "Created the Orbit design system used by 30+ products",
      "Shipped the Nimbus deploy CLI used company-wide",
      "Improved CI pipeline speed by 3x",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Brightwave Studio",
    period: "2017 — 2019",
    location: "Austin, TX",
    summary:
      "Delivered web and mobile products for early-stage startups and agencies.",
    achievements: [
      "Launched 12+ client products end to end",
      "Built reusable component libraries adopted across projects",
    ],
  },
];

export const services: Service[] = [
  {
    title: "Web Application Development",
    description:
      "Production-grade web apps with Next.js, React, and modern tooling — fast, accessible, and maintainable.",
    icon: "code",
  },
  {
    title: "System Architecture",
    description:
      "Scalable, resilient backend systems and APIs designed for growth, observability, and reliability.",
    icon: "layers",
  },
  {
    title: "Cloud & DevOps",
    description:
      "Infrastructure as code, CI/CD pipelines, and cloud deployments that ship safely and often.",
    icon: "cloud",
  },
  {
    title: "Technical Leadership",
    description:
      "Mentoring teams, defining architecture, and driving engineering best practices end to end.",
    icon: "compass",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Alex is the rare engineer who pairs deep technical mastery with genuine product sense. Our platform wouldn't exist without them.",
    author: "Jordan Lee",
    role: "VP Engineering, Helix Data",
  },
  {
    quote:
      "One of the most thoughtful engineers I've worked with. Every system Alex touches becomes simpler and more reliable.",
    author: "Priya Nair",
    role: "Staff Engineer, Orbit Labs",
  },
  {
    quote:
      "Alex shipped our entire deployment toolchain solo and made the whole team faster. A true force multiplier.",
    author: "Marcus Webb",
    role: "CTO, Brightwave Studio",
  },
];
