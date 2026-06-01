import { profile, socials, stats } from "@/data/portfolio";
import { socialIcons, ArrowUpRightIcon, DownloadIcon, MapPinIcon } from "../Icons";
import Reveal from "../Reveal";
import SmartImage from "../SmartImage";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      {/* Decorative animated background */}
      <div className="pointer-events-none absolute inset-0 grid-backdrop opacity-70" />
      <div className="aurora-blob -left-20 top-10 h-72 w-72 bg-primary" />
      <div
        className="aurora-blob right-0 top-40 h-80 w-80 bg-accent"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="aurora-blob bottom-0 left-1/3 h-72 w-72 bg-secondary"
        style={{ animationDelay: "-12s" }}
      />

      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-5 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-success/30 bg-success/10 px-3 py-1.5 text-xs font-medium text-success">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
              </span>
              {profile.availability}
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Hi, I&apos;m <span className="gradient-text">{profile.firstName}</span>.
              <br />
              {profile.role}.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-5 max-w-xl text-lg text-base-content/70">
              {profile.tagline}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#projects" className="btn btn-primary">
                View my work
                <ArrowUpRightIcon className="h-4 w-4" />
              </a>
              <a href={profile.resumeUrl} className="btn btn-outline">
                <DownloadIcon className="h-4 w-4" />
                Download CV
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-base-content/60">
                <MapPinIcon className="h-4 w-4 text-primary" />
                {profile.location}
              </div>
              <div className="h-4 w-px bg-base-content/15" />
              <div className="flex items-center gap-2">
                {socials.map((social) => {
                  const Icon = socialIcons[social.icon];
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label={social.label}
                      className="grid h-9 w-9 place-items-center rounded-full border border-base-content/10 text-base-content/70 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Profile card */}
        <Reveal delay={200} className="lg:justify-self-end">
          <div className="relative">
            <div className="absolute -inset-1 rounded-box bg-gradient-to-tr from-primary/40 via-accent/20 to-transparent blur-xl" />
            <div className="animate-float relative w-full max-w-sm rounded-box border border-base-content/10 bg-base-200/60 p-6 shadow-2xl shadow-primary/10 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 shrink-0 overflow-hidden rounded-2xl shadow-lg shadow-primary/30">
                  <SmartImage
                    src={profile.avatar}
                    alt={`${profile.name} portrait`}
                    className="h-full w-full object-cover"
                    fallback={
                      <span className="grid h-full w-full place-items-center bg-gradient-to-br from-primary to-accent text-2xl font-bold text-primary-content">
                        {profile.firstName[0]}
                      </span>
                    }
                  />
                </div>
                <div>
                  <p className="text-lg font-semibold">{profile.name}</p>
                  <p className="text-sm text-base-content/60">{profile.role}</p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-field border border-base-content/10 bg-base-100/50 p-4 text-center"
                  >
                    <p className="text-2xl font-bold text-primary">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs text-base-content/55">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-field bg-gradient-to-r from-primary/15 to-accent/10 p-4">
                <p className="font-mono text-xs leading-relaxed text-base-content/70">
                  <span className="text-accent">const</span>{" "}
                  <span className="text-primary">engineer</span> = {"{"}
                  <br />
                  &nbsp;&nbsp;passion:{" "}
                  <span className="text-success">&apos;building&apos;</span>,
                  <br />
                  &nbsp;&nbsp;coffee:{" "}
                  <span className="text-success">&apos;always&apos;</span>,
                  <br />
                  {"}"};
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
