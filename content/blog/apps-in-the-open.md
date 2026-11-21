---
title: "Apps, in the open"
slug: "apps-in-the-open"
excerpt: "Apps for rumahl OS live in a public GitHub repository and are submitted by pull request — no store, no account."
category: "Ecosystem"
date: "2026-07-18"
author: "The rumahl team"
readTime: 4
cover: "/images/editorial/development-unsplash.jpg"
tags: ["Apps", "Developers", "Ecosystem"]
---
# Apps extend the home

No platform can anticipate everything a home needs. So your system can grow — with apps built for it, published in the open and installed with clear permissions.

## A repository, not a store

Apps live in the public repository **github.com/rumahl/apps**. There is no store service, no review queue behind a login, and no account. You browse the repository, read an app's README and install what you need.

## For users

- Browse apps and plugins in one place — the repository.
- Review permissions before installing.
- Revoke access at any time.
- Update whenever you want; nothing is pushed to your device behind your back.

## For developers

- Fork the repository and add your app.
- Include a manifest and a README describing what it does.
- Open a pull request — review happens in the open.

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "permissions": ["AppStorageRead", "AppStorageWrite"]
}
```

## Review that means something

Every contribution is reviewed in the open, for safety, privacy, content and quality. Feedback is public and reasoned, and any app can be fixed or updated with a further pull request.

> [!TIP]
> Start with the [app development docs](/developers/app-packages) and the repository at [github.com/rumahl/apps](https://github.com/rumahl/apps).

## Open by design

Because apps are just files in a repository, the history, the diffs and the licences stay transparent. The core system stays local — and there is no account anywhere.
