import type { FormEvent } from "react";
import type { ClinicInfo, ContactConcern } from "../lib/content-data";
import Container from "./container";

type ContactSectionProps = {
  tr: (key: string) => string;
  concerns: ContactConcern[];
  clinicInfo: ClinicInfo;
  formStatus: "idle" | "submitting" | "success" | "error";
  formError: string | null;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
  onInput: () => void;
};

export default function ContactSection({
  tr,
  concerns,
  clinicInfo,
  formStatus,
  formError,
  onSubmit,
  onInput,
}: ContactSectionProps) {
  const mapBaseUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    clinicInfo.mapQuery
  )}`;

  return (
    <section id="contact" className="relative py-20">
      <Container>
        <div className="space-y-10">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--teal-600)]">
              {tr("contact_label")}
            </p>
            <h2 className="font-display text-3xl font-semibold text-[color:var(--ink-900)] md:text-4xl">
              {tr("contact_title")}
            </h2>
            <p className="max-w-2xl text-base text-[color:var(--ink-700)]">
              {tr("contact_body")}
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <form
              className="glass rounded-3xl p-6"
              onSubmit={onSubmit}
              onInput={onInput}
            >
              <h3 className="font-display text-2xl font-semibold">
                {tr("contact_form_title")}
              </h3>
              <div className="mt-6 grid gap-4">
                <label className="sr-only" htmlFor="company" aria-hidden="true">
                  {tr("contact_form_company_label")}
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  className="sr-only"
                />
                <div className="grid gap-2">
                  <label
                    className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--ink-500)]"
                    htmlFor="full-name"
                  >
                    {tr("contact_form_name_label")}
                  </label>
                  <input
                    id="full-name"
                    name="full-name"
                    type="text"
                    required
                    minLength={2}
                    autoComplete="name"
                    placeholder={tr("contact_form_name_placeholder")}
                    className="w-full rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[color:var(--teal-500)]"
                  />
                </div>
                <div className="grid gap-2">
                  <label
                    className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--ink-500)]"
                    htmlFor="phone"
                  >
                    {tr("contact_form_phone_label")}
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    inputMode="numeric"
                    autoComplete="tel"
                    placeholder={tr("contact_form_phone_placeholder")}
                    className="w-full rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[color:var(--teal-500)]"
                  />
                </div>
                <div className="grid gap-2">
                  <label
                    className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--ink-500)]"
                    htmlFor="email"
                  >
                    {tr("contact_form_email_label")}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder={tr("contact_form_email_placeholder")}
                    className="w-full rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[color:var(--teal-500)]"
                  />
                </div>
                <div className="grid gap-2">
                  <label
                    className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--ink-500)]"
                    htmlFor="concern"
                  >
                    {tr("contact_form_concern_label")}
                  </label>
                  <select
                    id="concern"
                    name="concern"
                    required
                    defaultValue=""
                    className="w-full rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[color:var(--teal-500)]"
                  >
                    <option value="" disabled>
                      {tr("contact_form_concern_placeholder")}
                    </option>
                    {concerns.map((option) => (
                      <option key={option.value} value={option.value}>
                        {tr(option.key)}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="grid gap-2">
                  <label
                    className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--ink-500)]"
                    htmlFor="message"
                  >
                    {tr("contact_form_message_label")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    maxLength={500}
                    placeholder={tr("contact_form_message_placeholder")}
                    className="w-full rounded-2xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[color:var(--teal-500)]"
                  ></textarea>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  className="rounded-full bg-[linear-gradient(135deg,_var(--teal-500),_var(--teal-700))] px-6 py-3 text-sm font-semibold text-white shadow-[var(--shadow-tight)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
                  disabled={formStatus === "submitting"}
                >
                  {formStatus === "submitting"
                    ? tr("contact_form_submitting")
                    : tr("contact_form_submit")}
                </button>
                {formStatus === "success" && (
                  <p
                    className="text-sm font-semibold text-[color:var(--success-500)]"
                    role="status"
                  >
                    {tr("contact_form_success")}
                  </p>
                )}
                {formStatus === "error" && (
                  <p className="text-sm font-semibold text-red-400" role="alert">
                    {formError ?? tr("contact_form_error")}
                  </p>
                )}
              </div>
            </form>
            <div className="space-y-6">
              <div className="glass rounded-3xl p-6">
                <h3 className="font-display text-2xl font-semibold">
                  {tr("contact_info_title")}
                </h3>
                <div className="mt-6 space-y-4 text-sm text-[color:var(--ink-700)]">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--ink-500)]">
                      {tr("contact_address_label")}
                    </p>
                    <p
                      className="mt-2"
                      dangerouslySetInnerHTML={{
                        __html: tr("contact_address_value"),
                      }}
                    />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--ink-500)]">
                      {tr("contact_phone_label")}
                    </p>
                    <p className="mt-2">{clinicInfo.phone}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--ink-500)]">
                      {tr("contact_email_label")}
                    </p>
                    <p className="mt-2">{clinicInfo.email}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--ink-500)]">
                      {tr("contact_hours_label")}
                    </p>
                    <p
                      className="mt-2"
                      dangerouslySetInnerHTML={{
                        __html: tr("contact_hours_value"),
                      }}
                    />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--ink-500)]">
                      {tr("contact_emergency_label")}
                    </p>
                    <p className="mt-2">{tr("contact_emergency_value")}</p>
                  </div>
                </div>
              </div>
              <div className="glass rounded-3xl p-4">
                <iframe
                  title="Max Multi Speciality Hospital"
                  loading="lazy"
                  src={`${mapBaseUrl}&output=embed`}
                  className="h-64 w-full rounded-2xl border-0"
                ></iframe>
                <a
                  className="mt-4 inline-flex w-full items-center justify-center rounded-full border border-white/20 bg-white/5 px-4 py-3 text-sm font-semibold text-[color:var(--ink-700)] hover:bg-white/10"
                  href={mapBaseUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  {tr("contact_map_button")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
