---
title: "A home for your files"
slug: "a-home-for-your-files"
excerpt: "Files are the oldest interface we have — and the one we most often hand over to someone else. Here is how rumahl thinks about them."
category: "Product"
date: "2026-08-08"
author: "The rumahl team"
readTime: 4
cover: "/images/editorial/storage-unsplash.jpg"
tags: ["Files", "Product", "Design"]
---
# Everything in its place

A file system is a quiet promise: the things you keep will still be there, findable and yours. rumahl treats that promise as a product feature, not an implementation detail.

## What we are building

- **One space** for documents, photos, projects and downloads.
- **Drag and drop** that works like you expect.
- **Shares** that are internal by default and external only when you decide.
- **Trash** with restore, because mistakes happen.

## Files and apps together

Files do not live in isolation. Apps can request access through the permission system, so a photo app sees photos — not your tax documents.

```json
{
  "name": "my-photo-app",
  "permissions": ["FilesRead", "AppStorageWrite"]
}
```

> [!NOTE]
> Permissions are enforced at the API gateway, before app code runs.

## Storage that grows with you

Start with an SSD in your mini PC. Add a NAS. Add an external drive for backups. The system should follow you, not the other way around.

## Backups are not optional

Automatic, encrypted backups to USB, NAS or a remote target are part of the plan — because local-first only works if you can recover.
