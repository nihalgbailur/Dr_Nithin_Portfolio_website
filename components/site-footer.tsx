import type { ClinicInfo, NavItem } from "../lib/content-data";
import Container from "./container";

type SiteFooterProps = {
  navItems: NavItem[];
  clinicInfo: ClinicInfo;
  tr: (key: string) => string;
};

export default function SiteFooter({ navItems, clinicInfo, tr }: SiteFooterProps) {
  return (
    <footer className="relative bg-black/80 py-12">
      <Container>
        <div className="grid gap-8 md:grid-cols-[1.5fr_1fr_1fr]">
          <div className="space-y-3">
            <p className="font-display text-2xl font-semibold">Dr. Nithin KR</p>
            <p className="text-sm font-semibold text-[color:var(--ink-700)]">
              {tr("footer_tagline")}
            </p>
            <p className="text-sm text-[color:var(--ink-500)]">
              {tr("footer_description")}
            </p>
          </div>
          <div className="space-y-2 text-sm text-[color:var(--ink-700)]">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--ink-500)]">
              {tr("footer_links_title")}
            </p>
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="block">
                {tr(item.key)}
              </a>
            ))}
          </div>
          <div className="space-y-2 text-sm text-[color:var(--ink-700)]">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--ink-500)]">
              {tr("footer_connect_title")}
            </p>
            <p>{clinicInfo.phone}</p>
            <p>{clinicInfo.email}</p>
            <p>{tr("footer_address")}</p>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 text-xs text-[color:var(--ink-500)]">
          <p>{tr("footer_copyright")}</p>
          <p>{tr("footer_designed")}</p>
        </div>
      </Container>
    </footer>
  );
}
