# Content

This directory holds the site's editorial content.

> **Blog & releases now live in Discourse.** The community platform at
> `community.rumahl.com` is the source of truth for articles, releases and
> announcements; the website fetches them at runtime via `lib/discourse.ts`.
> The Markdown files below are the **offline fallback** used whenever Discourse
> is not configured or unreachable.

## Blog & releases (fallback) — `content/blog/*.md`

Articles are plain Markdown files with YAML frontmatter. The site discovers them
at build time and generates the blog index, article pages, the sitemap and the
RSS feed (`/rss.xml`) automatically. Release notes are simply articles in the
`Release` category.

To publish something new, add a file such as `content/blog/my-post.md`:

```md
---
title: "My new article"
slug: "my-post"            # optional; defaults to the file name
excerpt: "One or two sentences shown in listings and the feed."
category: "Engineering"    # use "Release" for release notes
date: "2026-10-06"         # YYYY-MM-DD
author: "The rumahl team"
readTime: 5                # optional; estimated from the body otherwise
cover: "/images/editorial/hardware-unsplash.jpg"   # or use coverClass: "cover-green"
tags: ["local-first", "design"]
featured: true             # optional; the featured post leads the index
---

# Heading

Body in Markdown. The site supports headings, lists, tables, task lists, code
fences, blockquotes and callouts like `> [!NOTE] …`, `> [!TIP] …`,
`> [!WARNING] …`.
```

Nothing else is required: save the file and it appears in the index, the feed and
the sitemap. `lib/blog.ts` is the loader.

## Homepage — `content/homepage.ts`

In homepage.ts steht homepageModules. Die Reihenfolge im Array ist die Reihenfolge auf der Seite. enabled: false blendet einen Abschnitt aus. IDs müssen eindeutig bleiben; vorhandene IDs sind auch Sprungziele.

Vier Module: story (großes Foto mit Einleitung), spotlight (Produkt mit Foto), collection (verlinkte Themen), invitation (Abschluss). Mehrfach einsetzbar mit eigenen IDs. Texte, Links und Fotos hier bearbeiten; neue Zeilen in Überschriften mit \n.

Fotos liegen unter public/images/editorial. Beim Austausch src, alt, Abmessungen, position, mobilePosition, Fotograf und Quellenlink aktualisieren. Credits erscheinen automatisch. Fotos wechseln nicht zufällig bei Seitenaufrufen.

## Fotografie

Es gelten die [Bildrichtlinien](../IMAGE_POLICY.md): keine KI-Bilder und keine
beliebigen Dekorationsmotive. Fotos zeigen Hardware, Heimnetzwerke, Speicher
oder Softwareentwicklung und werden passend zum jeweiligen Inhalt zugeordnet.

Die vier aktiven Unsplash-Fotografien sind zentral in `homepage.ts` definiert.
`photo-sources.json` dokumentiert Fotograf, Originalseite, Download, Lizenz,
Kameradaten, Prüfdatum und SHA-256-Prüfsumme. Die Credits stehen direkt am Bild;
`/photography` stellt alle Fotografien mit ihrem Kontext vor.

Eigene Fotos sollen später dieselben zentralen Bildplätze übernehmen. Dabei
bleiben Urheberangabe und Nutzungsnachweis erhalten. Hardware-Karten verwenden
neutrale Gerätesymbole, solange kein belegtes Foto des exakten Modells vorliegt.

Highlights: Das Modul `kind: highlights` verwendet `slides` für Reihenfolge, Titel, Text, Foto und optionalen Link. Play startet den Wechsel alle sechs Sekunden. Produktseiten verwenden denselben Slider und eine kompakte Bilderreihe.
