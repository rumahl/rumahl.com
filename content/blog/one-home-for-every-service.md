---
title: "One home for every service"
slug: "one-home-for-every-service"
excerpt: "rumahl is becoming an open integration platform: keep your NAS, cloud and smart home, and bring them together without dependencies or limitations."
category: "Announcement"
date: "2026-10-20"
author: "The rumahl team"
coverClass: "cover-green"
tags: ["Announcement", "Integrations"]
featured: true
---

rumahl OS is not trying to become the next TrueNAS, Nextcloud or Home Assistant. It is becoming the place where those systems come together.

That is a meaningful change in direction. Instead of replacing the software you already trust, rumahl adds a shared home around it: one place to reach your services, one consistent experience for everyday tasks, and one open contract for new integrations.

## No dependencies. No limitations.

Our new motto is simple: **your home needs no dependencies, and no limitations.**

That means an integrated service must keep working when rumahl is offline. It keeps its own data, its own interface and its own lifecycle. rumahl connects it; it does not own it.

## Three ways to integrate

- **Connected** — link an existing service over its API or URL. Nothing is installed on the other system.
- **Enhanced** — add the open rumahl Connector to an existing installation for deeper capabilities such as snapshots, health and updates.
- **Native** — let rumahl install and manage a supported system, with maintained builds and automatic updates.

The level describes who manages installation and updates. It does not describe permissions. Capabilities such as `storage.snapshots.create` or `system.health.read` decide what an integration can actually do.

## External and native, both first-class

You will not have to replace an existing TrueNAS, OpenMediaVault, Nextcloud or Home Assistant installation to benefit from rumahl. Connect it where it runs, or choose a native installation when you want rumahl to manage the lifecycle.

An external installation with a connector can expose the same capabilities as a native one. Only the installation, update and lifecycle responsibilities differ.

## Two surfaces, the same services

The original apps stay complete. TrueNAS keeps managing ZFS, Home Assistant keeps its full automation engine and Nextcloud keeps its own settings.

At the same time, native rumahl apps bring their strengths together: rumahl Home for lights, sensors and rooms; rumahl Files for local storage, NAS volumes and private clouds; rumahl System for health and updates across services.

These apps use provider interfaces, so no rumahl app depends on a single project. Home Assistant is one smart-home provider, not the definition of rumahl Home.

## Open by default

The connector specification will be public. That lets the community add systems rumahl does not officially support yet, without waiting for a fork.

Where we maintain modified builds, those changes will be visible on GitHub, tracked against upstream and updated together with security fixes. A fork is a last resort, not the default integration strategy.

## What comes next

The documentation now covers the integration model, capabilities, connectors, providers and the path from an existing installation to a native one. The first focus is storage, private clouds and smart home — the places where a shared home is most useful.

The core idea stays the same: your hardware, your data, your rules. It just got a wider scope.
