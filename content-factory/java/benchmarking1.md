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
 
### Let us Microbenchmark
Let us try to microbenchmark a piece of code. I am going to write a program to calculate nth Narcissistic number or  a plus perfect number. If you have never heard about these numbers then you can refer to [Wikipedia](https://en.wikipedia.org/wiki/Narcissistic_number). These are the numbers where number is equal to the sum of its own digits each raised to the power of the number of digit.

First step is to define `isNarNumber()` that would check if provided number is a Narcissistic number.

```java
public class NarcissisticNumber {
    public static boolean isNarNumber(int number) {
        int length = String.valueOf(number).length();
        int sum = 0;

        for (int i = number; i > 0; i = i / 10) {
            sum += pow(i % 10, length);
        }

        return sum == number;
    }
}
```

Next step is to define the method `findNarcissisticNumber()` to get the results

```java
public class NarcissisticNumber {
    //...
    
    public static void findNarcissisticNumber() {
        int n = 10;
        int pointer = 0;

        for (int i = 1; i < Integer.MAX_VALUE && pointer < n; i++) {
            if (isNarNumber(i)) {
                pointer = pointer + 1;
            }
        }
    }
}
```