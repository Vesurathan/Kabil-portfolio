import { services, testimonials } from "@/data/portfolio";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";
import { serviceIcons, QuoteIcon } from "../Icons";

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="Services"
          title="How I can help"
          description="Whether you need a feature, a system, or a whole product — here's where I add value."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.icon as keyof typeof serviceIcons];
            return (
              <Reveal key={service.title} delay={index * 80}>
                <div className="group h-full rounded-box border border-base-content/10 bg-base-200/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 text-primary transition-colors group-hover:from-primary group-hover:to-accent group-hover:text-primary-content">
                    {Icon && <Icon className="h-6 w-6" />}
                  </div>
                  <h3 className="mt-4 text-base font-semibold">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-base-content/65">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.author} delay={index * 90}>
              <figure className="flex h-full flex-col rounded-box border border-base-content/10 bg-base-200/40 p-6">
                <QuoteIcon className="h-7 w-7 text-primary/40" />
                <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-base-content/75">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 border-t border-base-content/10 pt-4">
                  <p className="text-sm font-semibold">{testimonial.author}</p>
                  <p className="text-xs text-base-content/55">
                    {testimonial.role}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
