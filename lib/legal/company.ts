/** Project operator details, shared by the legal pages.
 * rumahl is an independent project. The operator is a private individual.
 * The legacy export name is retained for existing document imports.
 */
export const company = {
  name: "Kai Lukas Marquardt",
  legalForm: "",
  addressLine1: "Beethovenstraße 9",
  addressLine2: "86438 Kissing",
  country: "Germany",
  phone: "+49 8233 381 0",
  email: "legal@rumahl.com",
  supportEmail: "support@rumahl.com",
  securityEmail: "security@rumahl.com",
  vatId: "",
  registry: "",
  registryNumber: "",
  representative: "Kai Lukas Marquardt",
  duns: "",
  websiteUrl: "https://rumahl.com",
  appsUrl: "https://github.com/rumahl/apps",
} as const;

export const legalContact = {
  email: company.email,
  supportEmail: company.supportEmail,
  appsUrl: company.appsUrl,
} as const;

/** Full legal name without trailing spaces when no legal form is set. */
export const legalName = [company.name, company.legalForm]
  .filter(Boolean)
  .join(" ");
