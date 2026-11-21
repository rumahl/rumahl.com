import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal/legal-document";
import { contributing } from "@/lib/legal/content/contributing";

export const metadata: Metadata = {
  title: "Contributing Guidelines",
  description:
    "How to report bugs, propose features and submit pull requests to rumahl projects on GitHub.",
};

export default function ContributingPage() {
  return (
    <LegalDocument
      de={contributing.de}
      en={contributing.en}
      defaultLang="en"
      categoryLabel="Open Source · Open Source"
    />
  );
}
