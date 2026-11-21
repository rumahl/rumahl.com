import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal/legal-document";
import { trademark } from "@/lib/legal/content/trademark";

export const metadata: Metadata = {
  title: "Trademark Policy",
  description:
    "How the rumahl name and logo may be used — what is allowed, what requires permission, and the rules for forks and redistributions.",
};

export default function TrademarkPage() {
  return (
    <LegalDocument
      de={trademark.de}
      en={trademark.en}
      defaultLang="en"
      categoryLabel="Open Source · Open Source"
    />
  );
}
