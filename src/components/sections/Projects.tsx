import { projects } from "@/data/portfolio";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";
import SmartImage from "../SmartImage";
import { ArrowUpRightIcon, ExternalLinkIcon, GitHubIcon } from "../Icons";

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-28">
      <div className="aurora-blob right-0 top-20 h-72 w-72 bg-primary/60" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="A handful of projects that show how I approach hard problems end to end."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal
              key={project.title}
              delay={(index % 3) * 90}
              as="article"
              className={project.featured ? "lg:row-span-1" : ""}
            >
              <div className="group relative flex h-full flex-col overflow-hidden rounded-box border border-base-content/10 bg-base-200/50 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10">
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative aspect-[16/9] overflow-hidden border-b border-base-content/10">
                  <SmartImage
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    fallback={
                      <span className="grid h-full w-full place-items-center bg-gradient-to-br from-primary/30 via-base-300 to-accent/20 text-4xl font-bold text-base-content/70">
                        {project.title[0]}
                      </span>
                    }
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-base-200/80 to-transparent" />
                </div>

                <div className="flex flex-1 flex-col p-6 pt-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2">
                    {project.featured && (
                      <span className="rounded-full bg-accent/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent">
                        Featured
                      </span>
                    )}
                    <span className="text-xs text-base-content/45">
                      {project.year}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${project.title} source code`}
                        className="grid h-8 w-8 place-items-center rounded-full text-base-content/55 transition-colors hover:bg-base-content/10 hover:text-base-content"
                      >
                        <GitHubIcon className="h-4 w-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        aria-label={`${project.title} live demo`}
                        className="grid h-8 w-8 place-items-center rounded-full text-base-content/55 transition-colors hover:bg-base-content/10 hover:text-base-content"
                      >
                        <ExternalLinkIcon className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="mt-4 flex items-center gap-1.5 text-lg font-semibold">
                  {project.title}
                  <ArrowUpRightIcon className="h-4 w-4 -translate-y-0.5 text-primary opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100" />
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-base-content/65">
                  {project.description}
                </p>

                <ul className="mt-4 space-y-1.5">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-2 text-xs text-base-content/60"
                    >
                      <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-base-content/10 bg-base-100/60 px-2 py-1 text-[11px] font-medium text-base-content/65"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
