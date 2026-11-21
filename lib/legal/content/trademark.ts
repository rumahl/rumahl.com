import type { BilingualDoc } from "@/lib/legal/types";
import { company } from "@/lib/legal/company";

/**
 * Trademark Policy — mirrors TRADEMARK.md in the rumahl/rumahl repository.
 * The code is open (Apache-2.0); the name and logo are protected separately.
 */
export const trademark: BilingualDoc = {
  de: {
    title: "rumahl Markenrichtlinie",
    subtitle:
      "Der Quellcode steht unter Apache-2.0. Name und Logo sind markenrechtlich geschützt und werden getrennt geregelt.",
    effective: "2026-08-20",
    updated: "2026-10-06",
    version: "1.0",
    sections: [
      {
        id: "ueberblick",
        title: "Überblick",
        blocks: [
          {
            type: "p",
            text: "Der rumahl-Quellcode wird unter der Apache License 2.0 veröffentlicht. Diese Lizenz betrifft nur das Urheberrecht. Abschnitt 6 der Apache License 2.0 gewährt ausdrücklich keine Rechte an Handelsnamen, Marken, Dienstleistungsmarken oder Produktnamen. Markenrechte werden daher — wie unten beschrieben — gesondert vorbehalten.",
          },
          {
            type: "p",
            text: "Dieses Repository wird deshalb manchmal als „source-available with a protected identity“ beschrieben: Der Code ist offen, der Name und das Logo sind es nicht.",
          },
        ],
      },
      {
        id: "marken",
        title: "Geschützte Marken",
        blocks: [
          {
            type: "ul",
            items: [
              "Der Name rumahl und rumahl OS",
              "Das rumahl-Wortmark und das rumahl-„r“-Logomark, einschließlich des SVG in frontend/packages/shell/src/components/RumahlMark.tsx und des zugehörigen Markengrüns",
              "Die visuelle Identität und das Trade Dress der rumahl OS-Shell",
            ],
          },
          {
            type: "p",
            text: "Diese Marken kennzeichnen den offiziellen Build und dürfen nicht verwendet werden, um eine veränderte oder weitergegebene Version ohne Zustimmung zu kennzeichnen.",
          },
        ],
      },
      {
        id: "erlaubt",
        title: "Ohne Zustimmung erlaubt",
        blocks: [
          {
            type: "ul",
            items: [
              "Wahrheitsgemäße, referenzielle Aussagen wie „based on rumahl OS“, „fork of rumahl“ oder „compatible with rumahl OS“, sofern sie korrekt sind und keine Billigung implizieren.",
              "Nutzung des Quellcodes unter der Apache License 2.0, einschließlich kommerzieller Nutzung.",
              "Kopieren und Verändern von First-Party-Artwork unter der jeweils in rumahl/assets deklarierten Lizenz, vorbehaltlich dieser Lizenz.",
            ],
          },
        ],
      },
      {
        id: "zustimmung",
        title: "Zustimmung erforderlich",
        blocks: [
          {
            type: "ul",
            items: [
              "rumahl oder das rumahl-Logomark als Name oder Branding einer veränderten Distribution, eines Produkts, Dienstes oder Unternehmens zu verwenden.",
              "Die Marken so zu verwenden, dass Sponsoring, Verbindung oder Billigung durch das rumahl-Projekt nahegelegt wird.",
              "Marken, Domains, App-Namen oder Social-Media-Handles zu registrieren, die den Marken verwirrend ähnlich sind.",
            ],
          },
        ],
      },
      {
        id: "forks",
        title: "Forks und Weitergabe",
        blocks: [
          {
            type: "p",
            text: "Ein Fork ist willkommen. Um einen veränderten Build weiterzugeben, muss er:",
          },
          {
            type: "ul",
            items: [
              "das Produkt umbenennen und rumahl aus Name und UI entfernen,",
              "das rumahl-Logomark und markenspezifisches Artwork ersetzen,",
              "die Apache License 2.0 und die Asset-Hinweise unverändert beibehalten,",
              "nicht den Eindruck erwecken, der offizielle rumahl OS zu sein.",
            ],
          },
          {
            type: "p",
            text: "Technische Identifikatoren, die kein Branding sind — Crate-/Paketnamen wie rumahl-core, Protokoll-Identifikatoren und Dateipfade — dürfen bleiben, wenn sie für Kompatibilität nötig sind.",
          },
        ],
      },
      {
        id: "assets",
        title: "Verhältnis zur Asset-Lizenz",
        blocks: [
          {
            type: "p",
            text: "Die für ein Asset im multi-lizenzierten Repository rumahl/assets deklarierte Lizenz regelt das Kopieren und Anpassen von First-Party-Artwork. Diese Markenrichtlinie regelt die quellenkennzeichnende Verwendung der Marken. Beides ist komplementär: Du darfst das Logo nicht verwenden, um einen Fork zu branden, selbst wenn die Asset-Lizenz das Kopieren des Artworks erlauben würde.",
          },
        ],
      },
      {
        id: "kontakt",
        title: "Kontakt",
        blocks: [
          {
            type: "p",
            text: "Anfragen zur Zustimmung oder Fragen zur zulässigen Nutzung: " + company.email + ".",
          },
        ],
      },
    ],
  },
  en: {
    title: "rumahl Trademark Policy",
    subtitle:
      "The source code is Apache-2.0. The name and logo are trademark-protected and handled separately.",
    effective: "2026-08-20",
    updated: "2026-10-06",
    version: "1.0",
    sections: [
      {
        id: "overview",
        title: "Overview",
        blocks: [
          {
            type: "p",
            text: "The rumahl source code is released under the Apache License 2.0. That license covers copyright only. Section 6 of the Apache License 2.0 explicitly does not grant rights to use trade names, trademarks, service marks or product names. Trademark rights are therefore reserved separately, as described below.",
          },
          {
            type: "p",
            text: "This repository is sometimes described as “source-available with a protected identity”: the code is open, the name and logo are not.",
          },
        ],
      },
      {
        id: "marks",
        title: "Covered marks",
        blocks: [
          {
            type: "ul",
            items: [
              "The name rumahl and rumahl OS",
              "The rumahl wordmark and the rumahl “r” logomark, including the SVG in frontend/packages/shell/src/components/RumahlMark.tsx and the associated brand green",
              "The visual identity and trade dress of the rumahl OS shell",
            ],
          },
          {
            type: "p",
            text: "These marks identify the official build and may not be used to identify a modified or redistributed version without permission.",
          },
        ],
      },
      {
        id: "allowed",
        title: "What you may do without permission",
        blocks: [
          {
            type: "ul",
            items: [
              "Make truthful, referential statements such as “based on rumahl OS”, “fork of rumahl” or “compatible with rumahl OS”, provided they are accurate and do not imply endorsement.",
              "Use the source code under the Apache License 2.0, including commercially.",
              "Copy and modify first-party artwork under the license declared for it in rumahl/assets, subject to that license.",
            ],
          },
        ],
      },
      {
        id: "permission",
        title: "What requires permission",
        blocks: [
          {
            type: "ul",
            items: [
              "Using rumahl or the rumahl logomark as the name or branding of a modified distribution, product, service or company.",
              "Using the marks in a way that suggests sponsorship, affiliation or endorsement by the rumahl project.",
              "Registering trademarks, domains, app names or social handles that are confusingly similar to the marks.",
            ],
          },
        ],
      },
      {
        id: "forks",
        title: "Forks and redistributions",
        blocks: [
          {
            type: "p",
            text: "A fork is welcome. To distribute a modified build it must:",
          },
          {
            type: "ul",
            items: [
              "rename the product and remove rumahl from its name and UI,",
              "replace the rumahl logomark and brand-specific artwork,",
              "keep the Apache License 2.0 and asset notices intact,",
              "not imply that it is the official rumahl OS.",
            ],
          },
          {
            type: "p",
            text: "Technical identifiers that are not branding — crate/package names such as rumahl-core, protocol identifiers and file paths — may remain if they are needed for compatibility.",
          },
        ],
      },
      {
        id: "assets",
        title: "Relationship to the asset license",
        blocks: [
          {
            type: "p",
            text: "The license declared for an asset in the multi-license rumahl/assets repository governs copying and adapting first-party artwork. This trademark policy governs the source-identifying use of the marks. The two are complementary: you may not use the logo to brand a fork, even where the asset license would otherwise permit copying the artwork.",
          },
        ],
      },
      {
        id: "contact",
        title: "Contact",
        blocks: [
          {
            type: "p",
            text: "For permission requests or questions about acceptable use, contact " + company.email + ".",
          },
        ],
      },
    ],
  },
};
