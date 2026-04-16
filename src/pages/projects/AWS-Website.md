---
title: AWS Website CI/CD
url: https://lazu.click
tags: ["AWS", "Cloudfront", "S3 Static Hosting", "SSR", "Route 53"]
date: 2026
---

I started with a static S3 site generated with Hugo, integrated it with Route 53 and Cloudfront, and created a CI/CD pipeline via Github Actions so the website update is completely automatic. I then upgraded from tokens to OIDC to minimize security risks.
