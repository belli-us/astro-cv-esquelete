---
title: AWS Desktop-as-a-service
url: https://d193u0cxgx67fo.cloudfront.net
tags: ["AWS", "ElastiCache", "EC2", "VPC", "IAM"]
date: 2026
---

I wanted to be scrappy and make a desktop-as-a-service running windows and linux. Since I'm playing with an AWS free tier account I couldn't just use workspaces for an easy win, so I created a VPC with two private subnets and one public one, routed them to each other properly, and ran an EC2 instance. I had to troubleshoot A LOT with AWS Systems Manager because I was much more used to working with SSH but wanted to have a modern cloud security posture.