"use client";

import { useRef, useState } from "react";
import type { CopyProps } from "@/src/data/site";
import { SectionIntro } from "@/src/components/SectionIntro";

export function TakePart({ copy }: CopyProps) {
  const { contactEmail, joinEndpoint, joinForm, pillars, takePart } = copy;
  const form = useRef<HTMLFormElement>(null);
  const thanks = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendFailed, setSendFailed] = useState(false);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    setSendFailed(false);
    const current = form.current;
    if (!current || !current.checkValidity()) {
      current?.reportValidity();
      return;
    }
    setSending(true);
    try {
      if (joinEndpoint.startsWith("https://") || joinEndpoint.startsWith("http://")) {
        const response = await fetch(joinEndpoint, {
          method: "POST",
          body: new FormData(current),
          headers: { Accept: "application/json" },
        });
        if (!response.ok) {
          throw new Error("send");
        }
      }
      setSubmitted(true);
      queueMicrotask(() => thanks.current?.focus());
    } catch {
      setSendFailed(true);
      setSending(false);
    }
  }

  return (
    <section id="take-part" className="section" aria-labelledby="take-part-title">
      <div className="wrap split split-start">
        <img
          className="split-media"
          src={takePart.src}
          alt={takePart.alt}
          width={1152}
          height={864}
        />
        <div>
          <SectionIntro kicker={takePart.kicker} title={takePart.title} titleId="take-part-title" />
          <p>{takePart.body}</p>
          {submitted ? (
            <div ref={thanks} className="join-thanks" tabIndex={-1}>
              <h3>{joinForm.thanksTitle}</h3>
              <p>{joinForm.thanksBody}</p>
            </div>
          ) : (
            <form ref={form} className="join-form" noValidate onSubmit={onSubmit}>
              {sendFailed ? <p className="join-error">{joinForm.sendError}</p> : null}
              <label>
                {joinForm.nameLabel}
                <input type="text" name="name" autoComplete="name" required />
              </label>
              <label>
                {joinForm.emailLabel}
                <input type="email" name="email" autoComplete="email" required />
              </label>
              <label>
                {joinForm.affiliationLabel}
                <input type="text" name="affiliation" autoComplete="organization" />
              </label>
              <label>
                {joinForm.interestLabel}
                <select name="interest" required defaultValue="">
                  <option value="" disabled>
                    {joinForm.interestPlaceholder}
                  </option>
                  <option>{joinForm.interestGeneral}</option>
                  {pillars.map((pillar) => (
                    <option key={pillar.number}>{pillar.title}</option>
                  ))}
                </select>
              </label>
              <label>
                {joinForm.purposeLabel}
                <textarea name="purpose" rows={5} required />
              </label>
              <button className="join-submit" type="submit" disabled={sending}>
                {joinForm.submitLabel}
              </button>
            </form>
          )}
          {contactEmail ? (
            <p className="take-part-mail">
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
