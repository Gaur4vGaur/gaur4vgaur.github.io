---
title: Microbenchmarking with jvm
subtitle: A tour on Java Microbenchmark Harness and when to use it.
description: A quick hands-on lesson to learn about JMH (Java Microbenchmark Harness) and when to use it.
tags: ["Java", "jvm", "Java Microbenchmark Harness", "Microbenchark", "2021"]
date: 2021-04-05
---

### Introduction
In my previous entry we established that microbenchmarking is hard with `jvm`. It is not enough to surround the code in a loop with `System.out.println()` and gather the time measurements. While benchmarking, a developer should consider warm-up cycles, JIT compilations, jvm optimizations, avoiding usual pitfalls and even more.

Thankfully, OpenJDK has a great tool Java Microbenchmark Harness (JMH) that can help us generated benchmarking stats. The tool provides an annotation to calculate the stats, `Blackhole` class to avoid code elimination, and handles multithreading state. 

### Getting Started with JMH
A great way to start with JMH is to use maven archetype. 


mvn archetype:generate -DarchetypeGroupId=org.openjdk.jmh -DarchetypeArtifactId=jmh-java-benchmark-archetype -DinteractiveMode=false -DgroupId=com.gaurav -DartifactId=coll-test -Dversion=1.0

