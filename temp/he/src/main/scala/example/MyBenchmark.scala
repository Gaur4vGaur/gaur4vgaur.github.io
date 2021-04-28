package example

import org.openjdk.jmh.annotations.Benchmark
import org.openjdk.jmh.infra.Blackhole

class MyBenchmark {

  @Benchmark
  def testMethod(blackHole: Blackhole): Double = {
    val list: List[Int] = List.range(1, Integer.MAX_VALUE/100)
    val sum: Double = list.sum
    blackHole.consume(sum)
    sum
  }
}
