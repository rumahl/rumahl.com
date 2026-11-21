import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal/legal-document";
import { codeOfConduct } from "@/lib/legal/content/code-of-conduct";

export const metadata: Metadata = {
  title: "Code of Conduct",
  description:
    "The rumahl Code of Conduct — how we treat each other across all projects, repositories, issues and discussions.",
};

export default function CodeOfConductPage() {
  return (
    <LegalDocument
      de={codeOfConduct.de}
      en={codeOfConduct.en}
      defaultLang="en"
      categoryLabel="Open Source · Open Source"
    />
  );
}
