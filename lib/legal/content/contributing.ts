import type { BilingualDoc } from "@/lib/legal/types";
import { company } from "@/lib/legal/company";

/**
 * Contributing Guidelines — mirrors CONTRIBUTING.md in the rumahl/rumahl
 * repository (ways to contribute, setup, conventions, checks, licensing).
 */
export const contributing: BilingualDoc = {
  de: {
    title: "Contributing Guidelines",
    subtitle:
      "Wie du zu rumahl beiträgst — Entwicklungsumgebung, Konventionen, Checks, Review und Lizenzierung.",
    effective: "2026-08-20",
    updated: "2026-10-06",
    version: "1.1",
    sections: [
      {
        id: "willkommen",
        title: "Willkommen",
        blocks: [
          {
            type: "p",
            text: "Danke für dein Interesse an rumahl. Diese Anleitung beschreibt die Entwicklungsumgebung, die Konventionen, wie Änderungen geprüft werden und unter welcher Lizenz Beiträge stehen.",
          },
        ],
      },
      {
        id: "wege",
        title: "Wie du beitragen kannst",
        blocks: [
          {
            type: "ul",
            items: [
              "Fehlerberichte und Vorschläge — eröffne ein Issue mit klarer Reproduktion oder konkreter Begründung.",
              "Code — behebe Fehler, implementiere Funktionen, verbessere Tests.",
              "Dokumentation — README.md, ARCHITECTURE.md und docs/.",
              "Artwork — gehört in das Repository rumahl/assets, nicht hierher (siehe Lizenzierung).",
            ],
          },
        ],
      },
      {
        id: "setup",
        title: "Entwicklungsumgebung",
        blocks: [
          {
            type: "p",
            text: "Siehe den Entwicklerleitfaden docs/development.md für die echte Rust-Plattform, SQLite-Konten, React SSR/Vite und lokales HTTPS. Voraussetzungen: Linux oder WSL2, die gepinnte Rust-Toolchain (rust-toolchain.toml), Node 22.12+ (oder Node 24), pnpm 11.19.0 und OpenSSL.",
          },
          {
            type: "markdown",
            text: "```sh\npnpm --dir frontend install --frozen-lockfile\npnpm --dir frontend dev\n```",
          },
        ],
      },
      {
        id: "prinzipien",
        title: "Architekturprinzipien",
        blocks: [
          {
            type: "p",
            text: "rumahl OS ist eine Local-First-Plattform. Lies vor Änderungen ARCHITECTURE.md. Die plattformweiten Invarianten zählen mehr als jedes einzelne Feature:",
          },
          {
            type: "ul",
            items: [
              "Core stellt Mechanismen bereit, keine Produkte; core/ enthält kein App-spezifisches Verhalten.",
              "Apps hängen von Capabilities ab, nicht von konkreten Providern.",
              "Eine Berechtigung anzufragen ist keine Gewährung.",
              "First-Party-Apps nutzen dieselben Plattform-Verträge wie Third-Party-Apps.",
              "Ressourcen sind logische Referenzen, niemals Host-Pfade.",
              "Transport, Persistenz, Authentifizierung und UI liegen außerhalb des Domänenkerns.",
              "Privilegierte OS-Operationen werden von isolierten Diensten ausgeführt.",
            ],
          },
          {
            type: "p",
            text: "Abhängigkeiten zeigen zu den Abstraktionen hin, nicht von ihnen weg.",
          },
        ],
      },
      {
        id: "branches-commits",
        title: "Branches und Commits",
        blocks: [
          {
            type: "p",
            text: "Nutze kurze, typisierte Branchnamen:",
          },
          {
            type: "markdown",
            text: "```text\nfeat/<topic>   fix/<topic>   docs/<topic>   ci/<topic>   test/<topic>\nrefactor/<topic>   perf/<topic>   build/<topic>   chore/<topic>   security/<topic>\n```",
          },
          {
            type: "p",
            text: "Commits folgen Conventional Commits: <type>(<scope>): <summary>. Typen sind feat, fix, refactor, perf, test, docs, ci, chore, build und security. Die Zusammenfassung steht im Imperativ ohne Schlusspunkt. Halte jeden Commit fokussiert; Maintainer können um Aufteilung bitten.",
          },
        ],
      },
      {
        id: "dco",
        title: "Sign-off und DCO",
        blocks: [
          {
            type: "p",
            text: "Jeder Commit muss signiert sein (git commit -s). Das bestätigt, dass du das Recht hast, den Beitrag unter der für die geänderten Pfade geltenden Lizenz einzureichen (Developer Certificate of Origin 1.1). Der dco-CI-Job lehnt Pull Requests ab, wenn einem Commit das Sign-off fehlt.",
          },
          {
            type: "markdown",
            text: "```sh\ngit commit -s -m \"fix: correct login redirect\"\n```",
          },
        ],
      },
      {
        id: "checks",
        title: "Checks",
        blocks: [
          {
            type: "p",
            text: "Führe die Checks für die berührten Bereiche vor dem Push aus:",
          },
          {
            type: "markdown",
            text: "```sh\n# Rust\ncargo fmt --all -- --check\ncargo clippy --workspace --all-targets --locked -- -D warnings\ncargo test --workspace --locked\n\n# Frontend\npnpm --dir frontend lint\npnpm --dir frontend typecheck\npnpm --dir frontend test\npnpm --dir frontend build\n\n# Licensing\nreuse lint\n```",
          },
          {
            type: "p",
            text: "CI führt zusätzlich Dependency-, Lizenz- (reuse), DCO- und Workflow-Checks aus.",
          },
        ],
      },
      {
        id: "tests",
        title: "Tests",
        blocks: [
          {
            type: "ul",
            items: [
              "Rust: Unit-Tests neben dem Code, Integrationstests unter */tests/.",
              "Frontend: *.test.ts / *.test.tsx neben dem Code.",
              "Bevorzuge es, Verhalten über die Plattform-Verträge statt über Interna zu testen.",
            ],
          },
        ],
      },
      {
        id: "abhaengigkeiten",
        title: "Abhängigkeiten",
        blocks: [
          {
            type: "ul",
            items: [
              "Rust: Cargo.lock wird eingecheckt. Die Richtlinie in deny.toml verbietet Wildcard-Versionen; neue Abhängigkeiten müssen der Lizenz-Allowlist entsprechen.",
              "Frontend: pnpm-lock.yaml wird eingecheckt und Abhängigkeiten sind auf exakte Versionen gepinnt.",
              "Füge keine Abhängigkeit für etwas Triviales hinzu. Besprich größere Ergänzungen vorher in Issue oder Pull Request.",
            ],
          },
        ],
      },
      {
        id: "lizenzierung",
        title: "Lizenzierung",
        blocks: [
          {
            type: "p",
            text: "rumahl nutzt SPDX / REUSE, damit jede verfolgte Projektdatei eine deklarierte Lizenz hat. Die Pfad-zu-Lizenz-Zuordnung steht in REUSE.toml, die Lizenztexte liegen in LICENSES/. Der Code steht unter Apache-2.0; Artwork wird über das separate, multi-lizenzierte Repository rumahl/assets geregelt; Name und Logo unterliegen der Markenrichtlinie.",
          },
          {
            type: "note",
            text: "Es gibt derzeit KEIN Contributor License Agreement (CLA). Apache-2.0-Beiträge können später nicht ohne deine Zustimmung umlizenziert werden. Gehe nicht von einem Relizenzierungsrecht aus, nur weil du signiert hast.",
          },
          {
            type: "ul",
            items: [
              "Jede neue Datei fällt unter eine bestehende Schicht, oder du ergänzt eine Annotation und einen LICENSES/-Text.",
              "Third-Party-Assets brauchen Quell-URL und die tatsächliche Lizenz.",
              "reuse lint muss bestehen.",
            ],
          },
        ],
      },
      {
        id: "pull-requests",
        title: "Pull Requests",
        blocks: [
          {
            type: "ul",
            items: [
              "Eine logische Änderung pro Pull Request; erkläre was und warum und verlinke zugehörige Issues.",
              "Jeder Commit ist signiert und alle Checks bestehen.",
              "Erwarte ein Review und beantworte Fragen in eigenen Worten.",
              "Vermeide unbezogene Refactorings und Neuformatierungen im selben Pull Request.",
              "Maintainer führen den Merge durch; force-push über Review-Kommentare hinweg nicht ohne Erklärung.",
            ],
          },
        ],
      },
      {
        id: "labels",
        title: "Labels",
        blocks: [
          {
            type: "p",
            text: "Pull Requests und Issues teilen einen Labelsatz in .github/labels.json. Pull Requests werden automatisch nach geändertem Pfad beschriftet (.github/labeler.yml). Areas: backend, frontend, ci, dependencies, docs, assets, security. Components: core, auth, persistence, platform, buildroot, app-operations, app-packages, ui-contracts, frontend/shell, frontend/ssr, frontend/ui, frontend/contracts.",
          },
        ],
      },
      {
        id: "kontakt",
        title: "Kontakt",
        blocks: [
          {
            type: "p",
            text: "Fragen zum Beitragsprozess? Schreib uns an " + company.email + ".",
          },
        ],
      },
    ],
  },
  en: {
    title: "Contributing Guidelines",
    subtitle:
      "How to contribute to rumahl — development setup, conventions, checks, review and licensing.",
    effective: "2026-08-20",
    updated: "2026-10-06",
    version: "1.1",
    sections: [
      {
        id: "welcome",
        title: "Welcome",
        blocks: [
          {
            type: "p",
            text: "Thanks for your interest in rumahl. This guide covers the development setup, the conventions this repository follows, how changes are reviewed, and how contributions are licensed.",
          },
        ],
      },
      {
        id: "ways",
        title: "Ways to contribute",
        blocks: [
          {
            type: "ul",
            items: [
              "Bug reports and proposals — open an issue with a clear reproduction or a concrete rationale.",
              "Code — fix bugs, implement features, improve tests.",
              "Documentation — README.md, ARCHITECTURE.md and docs/.",
              "Artwork — belongs in the rumahl/assets repository, not here (see Licensing).",
            ],
          },
        ],
      },
      {
        id: "setup",
        title: "Development setup",
        blocks: [
          {
            type: "p",
            text: "See the developer guide at docs/development.md for the real Rust platform, SQLite accounts, React SSR/Vite and local HTTPS. Requirements: Linux or WSL2, the pinned Rust toolchain (rust-toolchain.toml), Node 22.12+ (or Node 24), pnpm 11.19.0 and OpenSSL.",
          },
          {
            type: "markdown",
            text: "```sh\npnpm --dir frontend install --frozen-lockfile\npnpm --dir frontend dev\n```",
          },
        ],
      },
      {
        id: "principles",
        title: "Architecture principles",
        blocks: [
          {
            type: "p",
            text: "rumahl OS is a local-first platform. Before changing code, read ARCHITECTURE.md. The platform-wide invariants matter more than any single feature:",
          },
          {
            type: "ul",
            items: [
              "Core provides mechanisms, not products; core/ must not contain app-specific behaviour.",
              "Apps depend on capabilities, not concrete providers.",
              "Requesting a permission is not a grant.",
              "First-party apps use the same platform contracts as third-party apps.",
              "Resources are logical references, never host paths.",
              "Transport, persistence, authentication and UI concerns stay outside the domain core.",
              "Privileged OS operations are performed by isolated services.",
            ],
          },
          {
            type: "p",
            text: "Keep dependencies pointing toward the abstractions, not away from them.",
          },
        ],
      },
      {
        id: "branches-commits",
        title: "Branches and commits",
        blocks: [
          {
            type: "p",
            text: "Use short, typed branch names:",
          },
          {
            type: "markdown",
            text: "```text\nfeat/<topic>   fix/<topic>   docs/<topic>   ci/<topic>   test/<topic>\nrefactor/<topic>   perf/<topic>   build/<topic>   chore/<topic>   security/<topic>\n```",
          },
          {
            type: "p",
            text: "Commits follow Conventional Commits: <type>(<scope>): <summary>. The types are feat, fix, refactor, perf, test, docs, ci, chore, build and security. Write the summary in the imperative mood without a trailing period. Keep each commit focused; maintainers may ask you to split an oversized change.",
          },
        ],
      },
      {
        id: "dco",
        title: "Sign-off and DCO",
        blocks: [
          {
            type: "p",
            text: "Every commit must be signed off (git commit -s). The sign-off confirms that you have the right to submit the contribution under the license applicable to the paths you changed (Developer Certificate of Origin 1.1). The dco CI job rejects a pull request if any of its commits is missing the sign-off.",
          },
          {
            type: "markdown",
            text: "```sh\ngit commit -s -m \"fix: correct login redirect\"\n```",
          },
        ],
      },
      {
        id: "checks",
        title: "Checks",
        blocks: [
          {
            type: "p",
            text: "Run the checks for the areas you touched before pushing:",
          },
          {
            type: "markdown",
            text: "```sh\n# Rust\ncargo fmt --all -- --check\ncargo clippy --workspace --all-targets --locked -- -D warnings\ncargo test --workspace --locked\n\n# Frontend\npnpm --dir frontend lint\npnpm --dir frontend typecheck\npnpm --dir frontend test\npnpm --dir frontend build\n\n# Licensing\nreuse lint\n```",
          },
          {
            type: "p",
            text: "CI additionally runs dependency, license (reuse), DCO and workflow checks.",
          },
        ],
      },
      {
        id: "tests",
        title: "Tests",
        blocks: [
          {
            type: "ul",
            items: [
              "Rust: unit tests next to the code, integration tests under */tests/.",
              "Frontend: *.test.ts / *.test.tsx files colocated with the code.",
              "Prefer exercising behaviour through the platform contracts rather than internal details.",
            ],
          },
        ],
      },
      {
        id: "dependencies",
        title: "Dependencies",
        blocks: [
          {
            type: "ul",
            items: [
              "Rust: Cargo.lock is committed. The policy in deny.toml denies wildcard version requirements; new dependencies must match the license allowlist.",
              "Frontend: pnpm-lock.yaml is committed and dependencies are pinned to exact versions.",
              "Do not add a dependency for something trivial. Discuss larger additions in the issue or pull request first.",
            ],
          },
        ],
      },
      {
        id: "licensing",
        title: "Licensing",
        blocks: [
          {
            type: "p",
            text: "rumahl uses SPDX / REUSE so that every tracked project file has a declared license. The path-to-license mapping lives in REUSE.toml and the license texts in LICENSES/. Code is Apache-2.0; artwork is governed by the separate, multi-license rumahl/assets repository; the name and logo are governed by the trademark policy.",
          },
          {
            type: "note",
            text: "There is currently NO Contributor License Agreement (CLA). Apache-2.0 contributions cannot later be relicensed without your agreement. Do not assume a relicensing right because you signed off.",
          },
          {
            type: "ul",
            items: [
              "Every new file falls under an existing layer, or you add an annotation plus a LICENSES/ text.",
              "Third-party assets need a source URL and their real license.",
              "reuse lint must pass.",
            ],
          },
        ],
      },
      {
        id: "pull-requests",
        title: "Pull requests",
        blocks: [
          {
            type: "ul",
            items: [
              "Keep one logical change per pull request; explain what and why, and link related issues.",
              "Make sure every commit is signed off and all checks pass.",
              "Expect review. Answer questions in your own words.",
              "Avoid unrelated refactors and reformatting in the same pull request.",
              "Maintainers merge; do not force-push over review comments without explanation.",
            ],
          },
        ],
      },
      {
        id: "labels",
        title: "Labels",
        blocks: [
          {
            type: "p",
            text: "Pull requests and issues share one label set, defined in .github/labels.json. Pull requests are labelled automatically by changed path (.github/labeler.yml). Areas: backend, frontend, ci, dependencies, docs, assets, security. Components: core, auth, persistence, platform, buildroot, app-operations, app-packages, ui-contracts, frontend/shell, frontend/ssr, frontend/ui, frontend/contracts.",
          },
        ],
      },
      {
        id: "contact",
        title: "Contact",
        blocks: [
          {
            type: "p",
            text: "Questions about the contribution process? Reach us at " + company.email + ".",
          },
        ],
      },
    ],
  },
};
