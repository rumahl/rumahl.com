---
title: "rumahl OS 0.2.0 “First Light”"
slug: "release-0-2-0"
excerpt: "Atomic updates, the read-only root filesystem and health monitoring."
category: "Release"
date: "2026-06-15"
author: "The rumahl team"
coverClass: "cover-green"
tags: ["Release", "minor"]
---

rumahl OS 0.2.0 is called “First Light”. Atomic updates, the read-only root filesystem and health monitoring.

## Highlights

- RAUC A/B updates with rollback
- Read-only SquashFS root
- rumahl-watchdog health monitoring

## Changelog

### Added

- RAUC A/B atomic updates with rollback
- Read-only SquashFS root filesystem
- rumahl-watchdog health monitoring and failover

### Fixed

- Boot no longer fails when the data partition is dirty
