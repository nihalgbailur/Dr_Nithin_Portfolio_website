import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { defaultLang, isSupportedLang } from "../lib/locale";

export default async function Page() {
  const cookieStore = await cookies();
  const cookieLang = cookieStore.get("preferredLang")?.value;
  if (isSupportedLang(cookieLang)) {
    redirect(`/${cookieLang}`);
  }

  const headerStore = await headers();
  const acceptLanguage = headerStore.get("accept-language") ?? "";
  const prefersKannada = acceptLanguage.toLowerCase().includes("kn");
  const lang = prefersKannada ? "kn" : defaultLang;

  redirect(`/${lang}`);
}
