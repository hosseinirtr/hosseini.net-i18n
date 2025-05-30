"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const timeZoneToLocaleMap: { [key: string]: string } = {
  // Iran Time Zone
  "Asia/Tehran": "fa",
  // Italy Time Zone
  "Europe/Rome": "it",
  // Default to 'en' for other time zones
};

export default function ClientRedirect() {
  const router = useRouter();

  useEffect(() => {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const locale = timeZoneToLocaleMap[timeZone] || "en"; // Fallback to 'en'
    router.replace(`/${locale}`);
  }, [router]);

  return null;
}