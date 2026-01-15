import navItemsData from "../content/nav-items.json";
import servicesData from "../content/services.json";
import timelineData from "../content/timeline.json";
import affiliationsData from "../content/affiliations.json";
import contactConcernsData from "../content/contact-concerns.json";
import whatsappOptionsData from "../content/whatsapp-options.json";
import clinicInfoData from "../content/clinic-info.json";
import seoData from "../content/seo.json";

export type NavItem = { href: string; key: string };
export type ServiceItem = {
  key: string;
  titleKey: string;
  descKey: string;
  tags: string[];
  size: "large" | "wide";
  icon: "bone" | "spine" | "joint" | "sports";
};
export type TimelineItem = {
  year: string;
  labelKey: string;
  detailKey: string;
  active?: boolean;
};
export type AffiliationItem = {
  icon: "hospital" | "bone" | "medical";
  key: string;
};
export type ContactConcern = { value: string; key: string };
export type WhatsappOption = { key: string; labelKey: string };
export type ClinicInfo = {
  doctorName: string;
  specialty: string;
  phone: string;
  phoneDigits: string;
  email: string;
  mapQuery: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
  };
  openingHours: string;
  priceRange: string;
};
export type SeoData = { keywords: string[]; ogImageAlt: string };

export const navItems = navItemsData as NavItem[];
export const services = servicesData as ServiceItem[];
export const timeline = timelineData as TimelineItem[];
export const affiliations = affiliationsData as AffiliationItem[];
export const contactConcerns = contactConcernsData as ContactConcern[];
export const whatsappOptions = whatsappOptionsData as WhatsappOption[];
export const clinicInfo = clinicInfoData as ClinicInfo;
export const seo = seoData as SeoData;
