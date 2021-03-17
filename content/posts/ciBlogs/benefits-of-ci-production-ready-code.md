---
title: Benefits of CI - Production Ready Code
subtitle: My personal experience with CI of how it helps me to schedule my releases
description: Article to share thoughts on benefits for continuous integration. A use case on how continuous integration can help release a production ready code
tags: ["CI", "releases", "2017"]
date: 2017-02-26
---

I work alongside many agile teams. All these teams work toward building a Digital Platform that caters to millions of users. The digital platform hosts these services not only from our dev centre, but from various other geographically distributed teams. The guideline is to release a feature, if possible every day, or at least once in every sprint and in no more than 2 sprints.

The aim of every team is to reduce the risk of damaging the platform. Every team must ensure that code correctly integrates with all other services on the platform. Just an assurance of code builds correctly at all times and passing the test case is not enough. Every team should be able to provide a working version of application at a specific environment to a specific stakeholder.

If I consider my team, before I can release, a working version:
- should be deployed in a development environment for the team,
- QA environment for other teams and QAs,
- staging environment, pre-production environment for Product Owners and Business stakeholders, and
- then finally on Digital Platform or in a production environment.

Thus, I make sure that my team has enough confidence in the code that I am releasing at any stage of release process. Everyone gets visibility of progress and features.

A CI server helps to automate this release process and deploys the code in the required environment (even production). Few teams follow a manual trigger of build to the next environment. On the other hand, few teams schedule the pipelines with appropriate delays, providing enough time for stakeholders at each stage. And, no one is stopping the teams to manually trigger a few build stages while scheduling the rest of build stages.


