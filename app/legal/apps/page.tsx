import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal/legal-document";
import { apps } from "@/lib/legal/content/apps";

export const metadata: Metadata = {
  title: "Apps",
  description:
    "Apps for rumahl OS live in the public GitHub repository rumahl/apps and are submitted by pull request — no store service and no account.",
};

export default function AppsPage() {
  return (
    <LegalDocument
      de={apps.de}
      en={apps.en}
      defaultLang="en"
      categoryLabel="Open Source · Open Source"
    />
  );
}
