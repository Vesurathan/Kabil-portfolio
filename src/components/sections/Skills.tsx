import { skillGroups } from "@/data/portfolio";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="Skills"
          title="My technical toolkit"
          description="Technologies and tools I reach for to design, build, and ship reliable software."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {skillGroups.map((group, groupIndex) => (
            <Reveal key={group.category} delay={groupIndex * 90}>
              <div className="h-full rounded-box border border-base-content/10 bg-base-200/50 p-6 transition-colors hover:border-primary/30">
                <h3 className="flex items-center gap-2 text-lg font-semibold">
                  <span className="h-4 w-1.5 rounded-full bg-gradient-to-b from-primary to-accent" />
                  {group.category}
                </h3>

                <ul className="mt-5 space-y-4">
                  {group.items.map((skill) => (
                    <li key={skill.name}>
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium text-base-content/85">
                          {skill.name}
                        </span>
                        <span className="text-xs text-base-content/50">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="mt-2 h-2 overflow-hidden rounded-full bg-base-content/10">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
