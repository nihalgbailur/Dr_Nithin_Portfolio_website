import type { ServiceItem } from "../lib/content-data";
import Container from "./container";
import {
  BoneIcon,
  JointIcon,
  SpineIcon,
  SportsIcon,
} from "./icon-library";

type ServicesSectionProps = {
  services: ServiceItem[];
  tr: (key: string) => string;
};

const iconMap = {
  bone: BoneIcon,
  spine: SpineIcon,
  joint: JointIcon,
  sports: SportsIcon,
};

export default function ServicesSection({ services, tr }: ServicesSectionProps) {
  return (
    <section id="services" className="relative py-20">
      <Container>
        <div className="space-y-10">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[color:var(--teal-600)]">
              {tr("services_label")}
            </p>
            <h2 className="font-display text-3xl font-semibold text-[color:var(--ink-900)] md:text-4xl">
              {tr("services_title")}
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-[color:var(--ink-700)]">
              {tr("services_body")}
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((service) => {
              const Icon = iconMap[service.icon];
              const isLarge = service.size === "large";

              return (
                <div
                  key={service.key}
                  className={`glass group rounded-3xl p-6 transition duration-300 hover:-translate-y-2 hover:border-[color:rgba(212,175,55,0.6)] hover:shadow-[0_25px_50px_rgba(15,118,110,0.15)] ${
                    isLarge
                      ? "flex flex-col gap-4 min-h-[200px]"
                      : "flex flex-row items-center gap-5"
                  }`}
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[color:rgba(13,148,136,0.15)] text-[color:var(--teal-600)] transition group-hover:scale-110 group-hover:bg-[color:rgba(13,148,136,0.25)]">
                    <Icon className="h-7 w-7" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-[color:var(--ink-900)]">
                      {tr(service.titleKey)}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[color:var(--ink-700)]">
                      {tr(service.descKey)}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2 opacity-0 translate-y-2 transition duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                      {service.tags.map((tagKey) => (
                        <span
                          key={tagKey}
                          className="inline-block rounded-full border border-teal-600/20 bg-teal-600/10 px-3 py-1 text-xs font-semibold text-[color:var(--teal-600)]"
                        >
                          {tr(tagKey)}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
