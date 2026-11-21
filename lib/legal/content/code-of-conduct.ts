import type { BilingualDoc } from "@/lib/legal/types";
import { company } from "@/lib/legal/company";

/**
 * Code of Conduct — based on the Contributor Covenant v2.1 (CC BY 4.0),
 * adapted for the rumahl community and its repositories.
 */
export const codeOfConduct: BilingualDoc = {
  de: {
    title: "Code of Conduct",
    subtitle:
      "Wie wir in der rumahl-Community miteinander umgehen — für alle Projekte, Repositories, Issues und Diskussionen.",
    effective: "2026-08-20",
    updated: "2026-08-20",
    version: "1.0",
    sections: [
      {
        id: "unser-versprechen",
        title: "Unser Versprechen",
        blocks: [
          {
            type: "p",
            text: "Wir als Mitglieder, Mitwirkende und Verantwortliche verpflichten uns, die Teilnahme an unserer Community für alle zu einer belästigungsfreien Erfahrung zu machen — unabhängig von Alter, Körpergröße, sichtbarer oder unsichtbarer Behinderung, ethnischer Herkunft, Geschlechtsmerkmalen, Geschlechtsidentität und -ausdruck, Erfahrungsgrad, Bildung, sozioökonomischem Status, Nationalität, persönlichem Erscheinungsbild, Herkunft, Religion oder sexueller Identität und Orientierung.",
          },
        ],
      },
      {
        id: "standards",
        title: "Unsere Standards",
        blocks: [
          {
            type: "p",
            text: "Beispiele für Verhalten, das zu einem positiven Umfeld beiträgt:",
          },
          {
            type: "ul",
            items: [
              "Einfühlsam und freundlich gegenüber anderen Menschen sein",
              "Unterschiedliche Meinungen, Standpunkte und Erfahrungen respektieren",
              "Konstruktives Feedback geben und annehmen",
              "Verantwortung übernehmen, sich entschuldigen und aus Fehlern lernen",
              "Sich auf das konzentrieren, was für die Community am besten ist",
            ],
          },
          {
            type: "p",
            text: "Beispiele für inakzeptables Verhalten:",
          },
          {
            type: "ul",
            items: [
              "Sexualisierte Sprache oder Aufmerksamkeit, Belästigung oder unerwünschte Annäherung",
              "Trollen, beleidigende oder herabwürdigende Kommentare, persönliche oder politische Angriffe",
              "Öffentliche oder private Belästigung",
              "Veröffentlichen privater Informationen anderer ohne ausdrückliche Erlaubnis",
              "Anderes Verhalten, das in einem professionellen Umfeld vernünftigerweise als unangemessen gilt",
            ],
          },
        ],
      },
      {
        id: "verantwortung",
        title: "Verantwortung der Moderation",
        blocks: [
          {
            type: "p",
            text: "Die Moderation ist dafür verantwortlich, diese Standards durchzusetzen. Sie ergreift angemessene und faire Korrekturmaßnahmen bei inakzeptablem Verhalten und kann Beiträge, Kommentare, Commits, Code, Issues und andere Inhalte entfernen, bearbeiten oder ablehnen, die nicht mit diesem Code of Conduct vereinbar sind.",
          },
        ],
      },
      {
        id: "geltungsbereich",
        title: "Geltungsbereich",
        blocks: [
          {
            type: "p",
            text: "Dieser Code of Conduct gilt in allen Community-Räumen — Repositories, Issues, Pull Requests, Diskussionen, Chats und bei Veranstaltungen — sowie dann, wenn eine Person die Community offiziell vertritt.",
          },
        ],
      },
      {
        id: "durchsetzung",
        title: "Durchsetzung",
        blocks: [
          {
            type: "p",
            text: "Meldungen über belästigendes, missbräuchliches oder anderweitig inakzeptables Verhalten können an " +
              company.email +
              " gesendet werden. Alle Beschwerden werden zeitnah und fair geprüft. Die Moderation ist verpflichtet, die Privatsphäre und Sicherheit der meldenden Person zu respektieren.",
          },
        ],
      },
      {
        id: "richtlinien",
        title: "Durchsetzungsrichtlinien",
        blocks: [
          {
            type: "table",
            headers: ["Stufe", "Beschreibung", "Konsequenz"],
            rows: [
              [
                "1. Korrektur",
                "Unangemessene Sprache oder anderes unprofessionelles Verhalten",
                "Private, schriftliche Verwarnung mit Erklärung; ggf. öffentliche Entschuldigung",
              ],
              [
                "2. Verwarnung",
                "Ein Vorfall oder eine Reihe von Vorfällen",
                "Verwarnung mit Konsequenzen bei weiterem Verhalten; zeitweise keine Interaktion",
              ],
              [
                "3. Zeitweiliger Ausschluss",
                "Schwere Verstöße oder wiederholtes Fehlverhalten",
                "Zeitweiliger Ausschluss von jeglicher Interaktion mit der Community",
              ],
              [
                "4. Dauerhafter Ausschluss",
                "Wiederholte Verstöße oder anhaltende Belästigung",
                "Dauerhafter Ausschluss von der Community",
              ],
            ],
          },
        ],
      },
      {
        id: "attribution",
        title: "Attribution",
        blocks: [
          {
            type: "p",
            text: "Dieser Code of Conduct basiert auf dem Contributor Covenant, Version 2.1, verfügbar unter https://www.contributor-covenant.org/version/2/1/code_of_conduct.html. Er ist unter CC BY 4.0 lizenziert.",
          },
        ],
      },
      {
        id: "kontakt",
        title: "Kontakt",
        blocks: [
          {
            type: "p",
            text: "Fragen oder Meldungen? Schreib uns an " + company.email + ".",
          },
        ],
      },
    ],
  },
  en: {
    title: "Code of Conduct",
    subtitle:
      "How we treat each other in the rumahl community — across all projects, repositories, issues and discussions.",
    effective: "2026-08-20",
    updated: "2026-08-20",
    version: "1.0",
    sections: [
      {
        id: "pledge",
        title: "Our pledge",
        blocks: [
          {
            type: "p",
            text: "We as members, contributors and leaders pledge to make participation in our community a harassment-free experience for everyone, regardless of age, body size, visible or invisible disability, ethnicity, sex characteristics, gender identity and expression, level of experience, education, socio-economic status, nationality, personal appearance, race, religion, or sexual identity and orientation.",
          },
        ],
      },
      {
        id: "standards",
        title: "Our standards",
        blocks: [
          {
            type: "p",
            text: "Examples of behaviour that contributes to a positive environment:",
          },
          {
            type: "ul",
            items: [
              "Being empathetic and kind to other people",
              "Respecting differing opinions, viewpoints and experiences",
              "Giving and gracefully accepting constructive feedback",
              "Taking responsibility, apologising and learning from mistakes",
              "Focusing on what is best for the community",
            ],
          },
          {
            type: "p",
            text: "Examples of unacceptable behaviour:",
          },
          {
            type: "ul",
            items: [
              "Sexualised language or attention, harassment, or unwelcome advances",
              "Trolling, insulting or derogatory comments, and personal or political attacks",
              "Public or private harassment",
              "Publishing others' private information without explicit permission",
              "Other conduct that could reasonably be considered inappropriate in a professional setting",
            ],
          },
        ],
      },
      {
        id: "responsibilities",
        title: "Enforcement responsibilities",
        blocks: [
          {
            type: "p",
            text: "Maintainers are responsible for enforcing these standards. They take appropriate and fair corrective action in response to unacceptable behaviour and may remove, edit or reject contributions, comments, commits, code, issues and other content that is not aligned with this Code of Conduct.",
          },
        ],
      },
      {
        id: "scope",
        title: "Scope",
        blocks: [
          {
            type: "p",
            text: "This Code of Conduct applies in all community spaces — repositories, issues, pull requests, discussions, chats and events — and when an individual is officially representing the community.",
          },
        ],
      },
      {
        id: "enforcement",
        title: "Enforcement",
        blocks: [
          {
            type: "p",
            text: "Reports of harassing, abusive or otherwise unacceptable behaviour may be sent to " +
              company.email +
              ". All complaints will be reviewed and investigated promptly and fairly. Maintainers are obligated to respect the privacy and safety of the reporter.",
          },
        ],
      },
      {
        id: "guidelines",
        title: "Enforcement guidelines",
        blocks: [
          {
            type: "table",
            headers: ["Step", "Description", "Consequence"],
            rows: [
              [
                "1. Correction",
                "Inappropriate language or other unprofessional behaviour",
                "Private written warning with clarity; a public apology may be requested",
              ],
              [
                "2. Warning",
                "A single incident or a series of incidents",
                "Warning with consequences for continued behaviour; temporary no interaction",
              ],
              [
                "3. Temporary ban",
                "Serious violations or sustained inappropriate behaviour",
                "Temporary ban from any interaction with the community",
              ],
              [
                "4. Permanent ban",
                "Repeated violations or sustained harassment",
                "Permanent ban from the community",
              ],
            ],
          },
        ],
      },
      {
        id: "attribution",
        title: "Attribution",
        blocks: [
          {
            type: "p",
            text: "This Code of Conduct is based on the Contributor Covenant, version 2.1, available at https://www.contributor-covenant.org/version/2/1/code_of_conduct.html and licensed under CC BY 4.0.",
          },
        ],
      },
      {
        id: "contact",
        title: "Contact",
        blocks: [
          {
            type: "p",
            text: "Questions or reports? Reach us at " + company.email + ".",
          },
        ],
      },
    ],
  },
};
