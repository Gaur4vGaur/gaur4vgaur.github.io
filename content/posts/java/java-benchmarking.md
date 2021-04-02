---
title: Microbenchmarking with jvm
subtitle: A tour on Java Microbenchmark Harness and when to use it.
description: A quick hands-on lesson to learn about JMH (Java Microbenchmark Harness) and when to use it.
tags: ["Java", "jvm", "Java Microbenchmark Harness", "Microbenchark", "2021"]
date: 2021-04-02
---

### Introduction
Optimisation of code is an endless struggle. It is often even hard to produce meaningful metrics using jvm as it is an adaptive virtual machine. The article is
- a brief introduction to microbenchmarking,
- when to consider it,
- pitfalls to avoid, and finally,
- JMH framework to make benchmarking simple.

### What is a microbenchmark
A microbenchmark is an attempt to measure the performance of a small unit of code. The tests are usually in the sub-millisecond range. The test can help determine how the code is going to behave when put into production. It can act as a guide to a better implementation.

### Why microbenchmark
Profiling the whole app in a production or production-like environment is difficult. Profiling cannot pinpoint a specific piece of code. Moreover, it also counts external factors such as logging. Yet, profiling does produce realistic results.
Micro-benchmarking focuses on a specific piece of code, removing everything else. But, you need to be careful of the results produced by benchmarking, as these are somewhat artificial.

Why should I benchmark then?
Usually, it should be the job of JVM to optimize the code. As a good practice, a developer should only focus on principles of clean coding. But it is always a good idea to review the code. You should consider asking can I break this loop early, or can I reduce the complexity of an algorithm?

### When to consider microbenchmark
A developer should test an application in a way it is supposed to be used, with a similar kind of inputs. But, it might not be possible every time. For example, if you are trying to write an underlying support infrastructure for a variety of applications, or if you are producing a library. Thus, it is not possible to predict the range of inputs or to monitor and optimize the code for specific scenarios. In these scenarios, you can consider benchmarking.
Micro benchmarking may still not provide definitive answers to problems you may face, but, it can point towards a better design. 


