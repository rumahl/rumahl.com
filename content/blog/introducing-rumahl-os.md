---
title: "Introducing rumahl OS"
slug: "introducing-rumahl-os"
excerpt: "An open platform for your own hardware, apps and home services — still early in development."
category: "Announcement"
date: "2026-09-01"
author: "The rumahl team"
readTime: 6
cover: "/images/editorial/hardware-unsplash.jpg"
featured: true
tags: ["rumahl OS", "Announcement", "Local-first"]
---
# A home for your digital life

For most of us, the most personal parts of our digital life live somewhere else: photos in one cloud, documents in another, smart-home devices spread across three apps. **rumahl OS is our answer to that.**

rumahl OS is a local-first operating system for your own hardware. It runs on a Raspberry Pi, a mini PC or an old desktop, and brings your files, apps and automations together — at home, on hardware you control.

## What is in the box

- **Files** — one personal space for documents, photos and projects.
- **Apps** — first-party and third-party apps from the public rumahl/apps repository.
- **Automations** — smart-home control that works without the internet.
- **Open platform foundations** — local accounts, explicit permissions and contracts for apps and integrations.
- **Updates** — atomic A/B updates with rollback, so a bad update never bricks your home.

## The platform principle

rumahl is built around a clear boundary:

```text
rumahl Apps          ← installable, permissioned, replaceable
─────────────────────────────────────────────
Window Manager / Desktop  (shell UX, session)
Files / Notifications / Jobs / Users          ← OS services & SDK
Permissions                                    ← trust boundary
rumahl Runtime (plugin sandbox, app lifecycle)
System Services (control, network, backup…)   ← microservices
Kernel / Linux
```

Everything above the permission boundary is app territory. Everything below belongs to the core and stays stable, tested and documented.

## What local-first means here

Local-first is not a marketing word for us — it is an architecture decision:

| Question | Answer |
| --- | --- |
| Where does my data live? | On your hardware |
| Do I need an account? | No — rumahl has no accounts |
| Does it work offline? | The core does, by design |
| Can I reach it remotely? | With a VPN you control |

> [!NOTE]
> rumahl OS is in development. This post describes the direction of the project, not a finished product.

## Where we are

The foundations are taking shape: the platform services, permission system, image lifecycle and SDK surface. Next up are the desktop experience, app packaging and reliable integration contracts.

If you want to follow along, star the project on [GitHub](https://github.com/rumahl) and read the [documentation](/docs).
