---
title: "Security by design"
slug: "security-by-design"
excerpt: "Defense in depth, permissions as a trust boundary and a clear way to report vulnerabilities — how rumahl approaches security."
category: "Security"
date: "2026-07-30"
author: "The rumahl team"
readTime: 6
coverClass: "cover-green"
tags: ["Security", "Privacy", "Engineering"]
---
# Every layer has one job

rumahl implements a defense-in-depth model: a compromise at one level should not reach the next.

## The five layers

| Layer | Mechanisms |
| --- | --- |
| Authentication & authorization | JWT, API keys, PIN, RBAC |
| Network security | Domain whitelist, IP access control, sandbox |
| Data protection | AES-256-GCM, hash-chained audit logs |
| Threat detection | Intrusion detection, auto-lockdown, alerts |
| Platform security | AppArmor, Docker isolation, read-only filesystem |

## Permissions are the trust boundary

Every API call is checked against an explicit permission **at the gateway**, before your code runs. Apps request permissions at registration and at runtime.

> [!IMPORTANT]
> A denied permission can never be bypassed from inside the app.

## Updates you can trust

- Buildroot LTS Linux with a read-only SquashFS root
- RAUC A/B updates with automatic rollback
- AppArmor mandatory access control

## Reporting a vulnerability

We take reports seriously. Please report privately — never in a public issue.

- Email **security@rumahl.com**
- Or open a private security advisory on GitHub

See the [Security page](/security) for scope, severity scoring, disclosure and why we do not offer bounties.
