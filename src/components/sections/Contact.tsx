"use client";

import { useState, type FormEvent } from "react";
import { profile, socials } from "@/data/portfolio";
import SectionHeading from "../SectionHeading";
import Reveal from "../Reveal";
import { socialIcons, MailIcon, MapPinIcon, PhoneIcon } from "../Icons";

const contactDetails = [
  { icon: MailIcon, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: PhoneIcon, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
  { icon: MapPinIcon, label: "Location", value: profile.location },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  // No backend: compose a mailto link from the form data.
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const subject = encodeURIComponent(`Portfolio inquiry from ${name || "someone"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    );

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
    form.reset();
  };

  return (
    <section id="contact" className="relative py-24 sm:py-28">
      <div className="aurora-blob left-1/4 top-10 h-72 w-72 bg-accent/50" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something"
          description="Have a project in mind or just want to say hi? My inbox is always open."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="space-y-4">
            {contactDetails.map((detail) => {
              const Icon = detail.icon;
              const content = (
                <div className="flex items-center gap-4 rounded-box border border-base-content/10 bg-base-200/50 p-5 transition-colors hover:border-primary/30">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-base-content/45">
                      {detail.label}
                    </p>
                    <p className="text-sm font-medium text-base-content/85">
                      {detail.value}
                    </p>
                  </div>
                </div>
              );
              return detail.href ? (
                <a key={detail.label} href={detail.href} className="block">
                  {content}
                </a>
              ) : (
                <div key={detail.label}>{content}</div>
              );
            })}

            <div className="flex items-center gap-2 pt-2">
              {socials.map((social) => {
                const Icon = socialIcons[social.icon];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={social.label}
                    className="grid h-11 w-11 place-items-center rounded-xl border border-base-content/10 text-base-content/70 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form
              onSubmit={handleSubmit}
              className="rounded-box border border-base-content/10 bg-base-200/50 p-6 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="form-control">
                  <span className="mb-1.5 text-sm font-medium text-base-content/80">
                    Name
                  </span>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Jane Doe"
                    className="input input-bordered w-full bg-base-100/60 focus:border-primary"
                  />
                </label>
                <label className="form-control">
                  <span className="mb-1.5 text-sm font-medium text-base-content/80">
                    Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="jane@example.com"
                    className="input input-bordered w-full bg-base-100/60 focus:border-primary"
                  />
                </label>
              </div>

              <label className="form-control mt-5">
                <span className="mb-1.5 text-sm font-medium text-base-content/80">
                  Message
                </span>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="textarea textarea-bordered w-full bg-base-100/60 focus:border-primary"
                />
              </label>

              <button type="submit" className="btn btn-primary mt-6 w-full sm:w-auto">
                Send message
                <MailIcon className="h-4 w-4" />
              </button>

              {sent && (
                <p className="mt-4 text-sm text-success" role="status">
                  Thanks! Your email client should now open with your message
                  ready to send.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
