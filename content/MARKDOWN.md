# Artikel schreiben

Docs und Support nutzen `ArticleSection`. Jede Sektion hat einen `title` und
beliebig viele Inhaltselemente — sie werden in dieser Reihenfolge gerendert:

| Feld | Typ | Beschreibung |
| --- | --- | --- |
| `text` | `string` | Fließtext, unterstützt vollständiges Markdown |
| `markdown` | `string` | Zusätzlicher Markdown-Block |
| `list` | `string[]` | Aufzählung |
| `steps` | `string[]` | Nummerierte Schritte |
| `code` | `{language, content}` | Codeblock mit Sprachlabel, Syntaxfarben und Kopieren |
| `table` | `{columns, rows}` | Datentabelle |
| `callout` | `{tone, title?, text}` | Hinweisbox (`note`, `tip`, `important`, `warning`, `caution`) |
| `checklist` | `{id?, title?, items}` | Interaktive Checkliste zum Abhaken (Fortschritt wird lokal gespeichert) |

Rechtsdokumente unterstützen zusätzlich den Block `{type: 'markdown', text: '…'}`.
Bestehende Rechtsblöcke werden unverändert als Text ausgegeben.

## Markdown

Unterstützt werden Überschriften, Links, Bilder mit Alternativtext, **Fettdruck**,
*Kursivschrift*, ~~Durchstreichungen~~, Inline-Code, verschachtelte Listen,
Tabellen, Aufgabenlisten, Fußnoten, Zitate, Trennlinien und Codeblöcke.
Überschriften erhalten eindeutige Abschnittslinks. Codeblöcke zeigen die Sprache,
Syntaxfarben und eine Kopierfunktion. HTML und ausführbarer Inhalt sind deaktiviert.
Fußnoten müssen innerhalb desselben Markdown-Feldes definiert werden.

````markdown
### Vorbereitung

Lies die [Installation](/docs/installation) und öffne `Settings`.

- [ ] Voraussetzungen geprüft
- [ ] Sicherung angelegt

> [!NOTE]
> Ein ergänzender Hinweis mit **Hervorhebung**.

> [!TIP]
> Ein hilfreicher Tipp.

> [!WARNING]
> Ein wichtiger Hinweis vor dem nächsten Schritt.

| Einstellung | Bedeutung |
| --- | --- |
| Beispiel | Eine kurze Erklärung |

```json
{"example": true}
```

Zusätzliche Information.[^quelle]

[^quelle]: Eine Erklärung mit [weiterführendem Link](/docs).
````

Weitere Hinweisarten: `[!IMPORTANT]` und `[!CAUTION]`.
Aufgabenlisten (`- [ ]` / `- [x]`) sind **interaktiv**: Man kann sie direkt im
Browser abhaken, der Fortschritt wird lokal gespeichert.

## Strukturierte Elemente

Callout und Checkliste sind eigene Felder — praktisch, wenn kein Markdown nötig ist:

```ts
{
  title: 'Post-installation checklist',
  callout: {tone: 'warning', title: 'Secure it first', text: 'Change the default credentials immediately.'},
  checklist: {
    id: 'installation-post-install',
    title: 'After installation',
    items: ['Credentials changed', 'Admin account created', 'Backup configured'],
  },
}
```

Die Überschriften der äußeren Artikelabschnitte bestimmen das Inhaltsverzeichnis;
Markdown-Unterüberschriften erhalten zusätzlich ihre eigenen Ankerlinks.
