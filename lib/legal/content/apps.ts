import type { BilingualDoc } from "@/lib/legal/types";
import { company } from "@/lib/legal/company";

/**
 * Apps & the public repository — how apps are shared for rumahl OS. There is no
 * store service and no account: apps live in the public GitHub repository
 * rumahl/apps and are submitted by pull request.
 */
export const apps: BilingualDoc = {
  de: {
    title: "Apps (öffentliches Repository)",
    subtitle:
      "Apps für rumahl OS leben im öffentlichen Repository rumahl/apps auf GitHub und werden per Pull Request eingereicht.",
    effective: "2026-10-06",
    updated: "2026-10-06",
    version: "1.0",
    sections: [
      {
        id: "ueberblick",
        title: "Überblick",
        blocks: [
          {
            type: "p",
            text: "Es gibt keinen zentralen Store-Dienst und kein Konto. Die Apps und Plugins für rumahl OS liegen im öffentlichen Repository rumahl/apps auf GitHub. Jede App ist eine Datei in diesem Repository, mit einer Manifest-Datei, die die benötigten Berechtigungen deklariert.",
          },
          {
            type: "p",
            text: "Zum Installieren durchsuchst du das Repository oder den App-Katalog in rumahl OS. Alle Apps laufen mit ausdrücklichen Berechtigungen, die die Plattform durchsetzt und die du jederzeit widerrufen kannst.",
          },
        ],
      },
      {
        id: "einreichen",
        title: "Eine App einreichen",
        blocks: [
          {
            type: "p",
            text: "Jede Person kann eine App beisteuern — ganz ohne Registrierung oder Konto:",
          },
          {
            type: "ul",
            items: [
              "Forke https://github.com/rumahl/apps und lege deine App an.",
              "Füge ein Manifest und eine README hinzu, die beschreiben, was die App tut und welche Berechtigungen sie braucht.",
              "Öffne einen Pull Request. Das Review findet öffentlich statt.",
            ],
          },
        ],
      },
      {
        id: "review",
        title: "Review",
        blocks: [
          {
            type: "p",
            text: "Beiträge werden öffentlich und begründet geprüft — auf Sicherheit, Datenschutz, Inhalt und Qualität. Feedback und Diskussion sind Teil des Pull Requests; jede App kann mit einem weiteren Pull Request korrigiert oder aktualisiert werden.",
          },
        ],
      },
      {
        id: "lizenzen",
        title: "Lizenzen und Verantwortung",
        blocks: [
          {
            type: "p",
            text: "Apps werden von ihren jeweiligen Autorinnen und Autoren lizenziert. Prüfe beim Installieren die Lizenz und die Herkunft einer App. Für Apps Dritter gelten deren Bedingungen; für rumahl OS gilt die Apache License 2.0.",
          },
        ],
      },
      {
        id: "sicherheit",
        title: "Sicherheit",
        blocks: [
          {
            type: "p",
            text: "Apps erhalten Fähigkeiten statt direkten Host-Zugriff. Das Berechtigungssystem ist die Vertrauensgrenze: Eine nicht erteilte Berechtigung kann aus der App heraus nicht umgangen werden.",
          },
        ],
      },
      {
        id: "kontakt",
        title: "Kontakt",
        blocks: [
          {
            type: "p",
            text: "Fragen zu Apps oder zum Einreichen? Schreib uns an " + company.email + ".",
          },
        ],
      },
    ],
  },
  en: {
    title: "Apps (public repository)",
    subtitle:
      "Apps for rumahl OS live in the public repository rumahl/apps on GitHub and are submitted by pull request.",
    effective: "2026-10-06",
    updated: "2026-10-06",
    version: "1.0",
    sections: [
      {
        id: "overview",
        title: "Overview",
        blocks: [
          {
            type: "p",
            text: "There is no central store service and no account. Apps and plugins for rumahl OS live in the public GitHub repository rumahl/apps. Each app is a file in that repository, with a manifest that declares the permissions it needs.",
          },
          {
            type: "p",
            text: "To install, browse the repository or the app catalog inside rumahl OS. Every app runs with explicit permissions enforced by the platform, which you can revoke at any time.",
          },
        ],
      },
      {
        id: "submit",
        title: "Submitting an app",
        blocks: [
          {
            type: "p",
            text: "Anyone can contribute an app — no registration or account required:",
          },
          {
            type: "ul",
            items: [
              "Fork https://github.com/rumahl/apps and add your app.",
              "Include a manifest and a README describing what it does and which permissions it needs.",
              "Open a pull request. Review happens in the open.",
            ],
          },
        ],
      },
      {
        id: "review",
        title: "Review",
        blocks: [
          {
            type: "p",
            text: "Contributions are reviewed in the open and with reasons — for safety, privacy, content and quality. Feedback and discussion are part of the pull request, and any app can be fixed or updated with a further pull request.",
          },
        ],
      },
      {
        id: "licensing",
        title: "Licensing and responsibility",
        blocks: [
          {
            type: "p",
            text: "Apps are licensed by their respective authors. Check an app’s licence and origin before installing. Third-party apps are governed by their own terms; rumahl OS itself is under the Apache License 2.0.",
          },
        ],
      },
      {
        id: "security",
        title: "Security",
        blocks: [
          {
            type: "p",
            text: "Apps receive capabilities instead of direct host access. The permission system is the trust boundary: a permission that was not granted cannot be bypassed from inside the app.",
          },
        ],
      },
      {
        id: "contact",
        title: "Contact",
        blocks: [
          {
            type: "p",
            text: "Questions about apps or submitting one? Reach us at " + company.email + ".",
          },
        ],
      },
    ],
  },
};
