import { profile } from "@/data/portfolio";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";
import SmartImage from "../SmartImage";
import { CheckIcon } from "../Icons";

const principles = [
  "Pragmatic, well-tested code over clever abstractions",
  "Strong ownership from architecture to production",
  "Clear communication and thoughtful documentation",
  "Continuous learning and mentoring others",
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="About me"
          title="Engineering with intent"
          description="A quick look at how I think about building software and the teams around it."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal className="lg:sticky lg:top-28">
            <div className="group relative">
              <div className="absolute -inset-2 rounded-box bg-gradient-to-tr from-primary/30 via-accent/15 to-transparent blur-xl" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-box border border-base-content/10 shadow-2xl shadow-primary/10">
                <SmartImage
                  src={profile.aboutImage}
                  alt={`${profile.name} portrait`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  fallback={
                    <span className="grid h-full w-full place-items-center bg-gradient-to-br from-primary to-accent text-7xl font-bold text-primary-content">
                      {profile.firstName[0]}
                    </span>
                  }
                />
              </div>
            </div>
          </Reveal>

          <div className="space-y-8">
            <Reveal>
              <div className="space-y-5 text-base leading-relaxed text-base-content/75">
                <p>{profile.bio}</p>
                <p>
                  Over the years I&apos;ve worked across the full stack — from
                  low-level data pipelines and infrastructure to pixel-perfect
                  interfaces. I thrive in ambiguity, enjoy turning fuzzy
                  problems into crisp systems, and believe great engineering is
                  ultimately in service of real people.
                </p>
                <p>
                  When I&apos;m not shipping, you&apos;ll find me contributing
                  to open source, writing about systems design, or mentoring the
                  next generation of engineers.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="rounded-box border border-base-content/10 bg-base-200/50 p-7 shadow-xl shadow-primary/5">
                <h3 className="text-lg font-semibold">What I value</h3>
                <ul className="mt-5 space-y-4">
                  {principles.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
                        <CheckIcon className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-base-content/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
