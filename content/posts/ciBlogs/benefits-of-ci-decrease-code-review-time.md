---
title: Benefits of CI - Decrease code review time
subtitle: A thought on how well thought through CI pipeline can help in code reviews
description: Article to share thoughts on benefits for continuous integration. CI pipeline can help developers to review the code more effectively.
tags: ["CI", "releases", "2017"]
date: 2017-01-17
---

Sometimes, we work in teams where code churn is high, multiple developers working on features in the same code base and there is a pressure of delivery . In these high pressure situations reviewing code becomes critical, however, the pressure of delivery pushes the team to merge the code as soon as possible.

A well thought through CI pipeline can make a developer's life easier. Teams can easily hook the CI pipeline updates to slack channels. These updates can include:
* A merge request was raised
* Any failed test scenarios on merge request
* CI to run code coverage tools and report it back to the team
* CI to run static analysis job to provide immediate feedback to developers

Thus, by the time peer has started reviewing the code, it has already passed a few quality gates.


