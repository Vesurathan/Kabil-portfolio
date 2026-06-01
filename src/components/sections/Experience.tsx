import { experiences } from "@/data/portfolio";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          description="Roles where I've grown, shipped, and helped teams move faster."
        />

        <div className="relative mt-14">
          {/* Vertical timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-base-content/15 to-transparent sm:left-1/2" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <Reveal key={`${exp.company}-${exp.role}`} delay={index * 80}>
                <div
                  className={`relative pl-8 sm:w-1/2 sm:pl-0 ${
                    index % 2 === 0
                      ? "sm:pr-12 sm:text-right"
                      : "sm:ml-auto sm:pl-12"
                  }`}
                >
                  {/* Node */}
                  <span
                    className={`absolute top-1.5 grid h-4 w-4 place-items-center rounded-full bg-base-100 ring-2 ring-primary left-0 sm:left-auto ${
                      index % 2 === 0
                        ? "sm:-right-2 sm:translate-x-1/2"
                        : "sm:-left-2 sm:-translate-x-1/2"
                    }`}
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  </span>

                  <div className="rounded-box border border-base-content/10 bg-base-200/50 p-6 transition-colors hover:border-primary/30">
                    <span className="text-xs font-medium text-primary">
                      {exp.period}
                    </span>
                    <h3 className="mt-1 text-lg font-semibold">{exp.role}</h3>
                    <p className="text-sm text-base-content/70">
                      {exp.company} · {exp.location}
                    </p>
                    <p className="mt-3 text-sm text-base-content/65">
                      {exp.summary}
                    </p>
                    <ul
                      className={`mt-3 space-y-1.5 ${
                        index % 2 === 0 ? "sm:text-right" : ""
                      }`}
                    >
                      {exp.achievements.map((achievement) => (
                        <li
                          key={achievement}
                          className="text-xs text-base-content/55"
                        >
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
