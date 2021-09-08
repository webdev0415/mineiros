---
title: How to use Multithreading and Multiprocessing - A Beginner's guide to parallel and concurrent programming
description: In this article, we'll discuss the differences, advantages, and disadvantages of concurrent and parallel programming as well as multi-threading and multi-processing.
img: article-cover.png
alt: my first blog post
readingTime: 9
created: 1588684896000

author:
  name: Soren Martius
  img: soerenmartius_blog.jpg
---


**Parallel** and **concurrent programming** allow for tasks to be split into groups of tasks that can be executed
significantly faster concurrently or in parallel. However, to fully take advantage of these advanced programming models,
we need to understand the basics of both paradigms.

In this article, we'll discuss the differences, advantages, and disadvantages of concurrent and parallel programming
as well as multi-threading and multi-processing.

Here is a brief overview of what we will cover:

1. [A brief introduction to concurrent and parallel programming](#a-brief-introduction-to-concurrent-and-parallel-programming)
1. [CPU vs Core](#cpu-vs-core)
1. [About Programs](#about-programs)
1. [Processes vs Threads](#processes-vs-threads)
    1. [Native Threads vs Green Threads](#native-threads-vs-green-threads)
1. [Concurrency](#concurrency)
    1. [Multi-threading](#multi-threading)
1. [Parallelism](#parallelism)
    1. [Multi-processing](#multi-processing)
1. [Conclusion](#conclusion)

# A brief introduction to concurrent and parallel programming

Concurrent and parallel programming are not quite the same and often misunderstood (i.e., concurrent != parallel).
In order to understand the differences between concurrency and parallelism, we need to understand the basics first and
take a look at programs, central processing units (CPUs) as well as processes and threads.

# CPU vs Core

The **central processing unit (CPU)**, manages the fundamental computational work of the computer. CPUs with more than
one core are called multi-core processors. Multiple cores allow the CPU to execute code simultaneously.

With a single-core CPU, there is no speedup for CPU-intensive tasks (e.g. loops, arithmetic). The operating system (OS)
switches back and forth between tasks, executing each one a little bit at a time which we call **context switching**.
This is why for small operations (e.g. downloading a few images), _multitasking can sometimes hurt your
performance_. There is overhead associated with launching and maintaining multiple tasks.

# About Programs

A program can be your email client, your web browser but also something much smaller such as Python script that downloads
some images from a website. Programs are typically stored on disk or in non-volatile memory. They are written
in a **compiled** or **interpreted** language. Compiled programs are written in languages such as C, Go or Rust
(among many more) and compiled into binary form that can be executed by the CPU. Programs written in **interpreted
languages** such as Javascript, PHP, or Python are **interpreted** into executable code at runtime instead of being compiled in
advance in order to run. When starting a program, it will be loaded into the memory in binary form and started as a
process. The computer’s CPU understands only binary instructions, so that’s the form the program needs to be in when
it runs.

# Processes vs Threads

A process is an instance of a program (e.g. [Python interpreter](https://github.com/python/cpython),
[htop](https://hisham.hm/htop/)). Processes can spawn **child-processes** and **threads** to handle subtasks like
reading files, receiving HTTP responses, sending files across the network.

Threads live inside processes and **share the same memory address space (view of memory)**.
In contrast to that, child-processes are independent forks of the main process with a **separate memory address space**,
which means that a process runs independently and is isolated from other processes. It cannot directly access shared
data in other processes. When forking a process, we duplicate the memory and resource requirements which is a lot more
expensive compared to spawning a thread. Also, switching from one process to another requires some time (relatively)
for saving and loading registers, memory maps, and other resources.

<MarkdownImage src="guide-to-multihreading-and-multiprocessing/thread-overview.png" alt="Thread Overview"></MarkdownImage>
<!-- ![multi-threading example](thread-overview.png "multi-threading example") -->

Let's compare some the characteristics of processes vs threads:

| Process                                                                                                                                                                          | Thread                                                                                                                                                                                                                                                                              |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Processes are heavy-weight operations.                                                                                                                                           | Threads are lighter-weight operations.                                                                                                                                                                                                                                              |
| Processes can start new processes using e.g. [fork()](http://man7.org/linux/man-pages/man2/fork.2.html) (system call).                                                           | A process can start several threads using e.g [pthread_create()](http://man7.org/linux/man-pages/man3/pthread_create.3.html) (system call).                                                                                                                                         |
| Each process lives in its own memory (address) space and holds a full copy of the program in memory which consume more memory. Processes don’t share memory with other processes.| Threads share memory with other threads of the same process. Threads within the same process live within the same address space, and can thus easily access each other's data structures. The shared memory heaps and pools allow for reduced overhead of shared components.        |
| Inter-process communication is slow as processes have different memory addresses.                                                                                                | Inter-thread communication can be faster than inter-process communication because threads of the same process share memory with the process they belong to.                                                                                                                         |
| Context switching between processes is more expensive.                                                                                                                           | Context switching between threads of the same process is less expensive.                                                                                                                                                                                                            |

How can we decide whether to use processes or threads?

It depends on the type of problem that you are solving. Here is a rule of thumb to give a hint:

- If the program is **I/O bound**, keep it concurrent and use threads. A task that processes data from disk,
  for example, counting the number of lines in a file is likely to be I/O bound. Processes need to pickle their results
  to combine them which takes time.
- If the program is **CPU bound**, keep it parallel and use processes. A task that performs calculations on a small
  set of numbers, for example multiplying small matrices, is likely to be CPU bound.

It's important to note that Linux doesn’t distinguish threads and processes and both are called tasks.
Each task can have a minimum to a maximum level of sharing when cloned.
When you call [fork()](http://man7.org/linux/man-pages/man2/fork.2.html), a new task is created with no shared file
descriptors, PIDs, and memory space. When you call
[pthread_create()](http://man7.org/linux/man-pages/man3/pthread_create.3.html), a new task is created with all of the
above shared.

Because of that, threads are usually used for small tasks, whereas processes are usually used for more heavy-weight
tasks – basically the execution of applications.

## Native Threads vs Green Threads

Green threads emulate multi-threaded environments without relying on any native OS capabilities, and they are managed in
userspace instead of kernel space, enabling them to work in environments that do not have native thread support.

Green threads significantly outperform Linux native threads on thread activation and synchronization but when a green
thread executes a blocking system call, not only is that thread blocked, but all of the threads within the process are
blocked.

On a multi-core processor, native thread implementations can automatically assign work to multiple cores, whereas green
thread implementations normally cannot. Due to this limitation, a _lot of modern programming languages rely on native
threads instead of green threads_.

# Concurrency

Concurrency is essentially applicable when at least two tasks can start, run and complete in *overlapping* time.
It doesn't necessarily mean, that they'll ever be running at the same instant (eg. multiple threads on a single-core
machine).

Concurrency can be implemented and is used a lot on single-core CPUs, nonetheless, it may benefit from
multi-core CPUs with respect to speed. If the application runs on the single-core CPU, it may not make progress on more
than one task at exactly the same time. In contrast to that, in multi-core environments, each core can execute one task
at exactly the same time.

Since a running task will consume all of a core. The only reason your CPU isn't running at 100% all the time is that the
operating system (OS) knows how to suspend the processor, which basically makes it stop everything and wait until
something happens (such as an I/O event). Running different tasks concurrently means just tasks jumping onto the CPU and
running for short periods of time, then being switched out with other tasks that also need to run. As mentioned above
in the ["CPU vs Core"](#cpu-vs-core) section, this is referred to as **context switching**.

<MarkdownImage src="guide-to-multihreading-and-multiprocessing/concurrent-programming-diagram.png" alt="Concurrent Programming - a single CPU core switches between multiple threads ( context switching )"></MarkdownImage>
<!-- ![concurrent programming diagram](concurrent-programming-diagram.png "Concurrent Programming - a single CPU core switches between multiple threads ( context switching )") -->

_Concurrent programming is often used to **handle tasks in a single application concurrently** while potentially
**maximizing resource utilization**._

## Multi-threading

With multi-threading, you get the ability to run concurrent tasks within the same process. This way of concurrent
programming allows the threads to **share state**, and execute from the **same memory pools**.

In single-core CPUs, running multiple threads means pretty much just _splitting processing time between different
threads_. This way, you can implement e.g. a **non-blocking** user interface without some background function taking
up all the available CPU. One could run the user interface in a higher priority than the rest of the system for
instance. If you are working in a multi-core environment, __every core can handle one thread at a time and multiple
threads will be distributed to all available cores__.

The nature of the shared memory and resources can result in complexity in ensuring **data consistency**. For example,
the use of shared memory and resources can result in data from one thread 'leaking' into another thread. In most
languages that support this style of operation, these errors are protected (as best as they can be) by using **locks and
synchronizers**. These locks will try to prevent other threads from access the resources while a lock is held by a thread.

Concurrent execution is possible on a single-core CPU (multiple threads, managed by scheduler
or thread-pool) and archived by **context switching**.

Multi-threading is what usually refers to **concurrent programming**.

Let's take a look at how we can implement using multi-threading using the [Go](https://golang.org/)
programming language.

#### **`multithreading.go`**

```go
package main

import (
 "fmt"
 "sync"
 "time"
)

func worker(wg *sync.WaitGroup, id int) {
 defer wg.Done()

 fmt.Printf("Worker %v: Started\n", id)
 time.Sleep(time.Second)
       fmt.Printf("Worker %v: Finished\n", id)
}

func main() {
 var wg sync.WaitGroup
 var maxWorkers = 5

 for i := 0; i < maxWorkers; i++ {
  fmt.Println("Adding worker", i)
  wg.Add(1)
  go worker(&wg, i)
 }

 fmt.Printf("Waiting for %d workers to finish\n", maxWorkers)
 wg.Wait()
 fmt.Println("All Workers Completed")
}
```

Threads are being called goroutines in Go. In the example, we create 5 goroutines next to the main goroutine. We are
using a [WaitGroup](https://golang.org/pkg/sync/#WaitGroup) in order to wait for the spawned goroutines to finish.
Otherwise, the main goroutine would just exit without waiting for the others. Go will schedule the goroutines among
all available cores and execute on them in no particular order.

```shell script
$ go run waitgroups.go
Adding worker 0
Adding worker 1
Adding worker 2
Adding worker 3
Adding worker 4
Waiting for 5 workers to finish
Worker 4: Started
Worker 1: Started
Worker 0: Started
Worker 2: Started
Worker 3: Started
Worker 2: Finished
Worker 1: Finished
Worker 3: Finished
Worker 0: Finished
Worker 4: Finished
All 5 Workers Completed
```

# Parallelism

In contrast to concurrency, **parallelism** is when two or more tasks are running at the same time (e.g., multiple threads on a
multicore processor). When we consider parallel programming, programs use parallel hardware to execute
computation more quickly. To mention some examples:

- multi-core processors
- graphics processing unit (GPU)
- field-programmable gate arrays (FPGAs)
- distributed computer clusters

Parallel programming is mostly used to **speed-up** computational time by splitting up a task into multiple, simple,
and independent sub-task which can be performed **simultaneously**.

<MarkdownImage src="guide-to-multihreading-and-multiprocessing/parallel-programming-diagram.png" alt="Parallel Programming Diagram"></MarkdownImage>
<!-- ![parallel programming diagram](parallel-programming-diagram.png "Parallel Programming Diagram") -->

In fact, concurrency and parallelism are conceptually overlapping to some degree but _the key point here is that
**concurrent** threads and/or processes will *not necessarily* be running in parallel_.

## Multi-processing

As mentioned in the previous section, multi-processing is one way to achieve **parallel programming**.

How about if my CPU has multiple cores or if you want to deal with a cluster of machines? A CPU that has multiple cores
is called a multi-core processor. While a single-core CPU has to divide CPU time among different tasks, multi-core CPUs
or distributed clusters can use different cores to do multiple things at once.

#### **`multi_processing.py`**

```python
import multiprocessing


def spawn_process(number):
    print(f'Runs in separate process {number}')


if __name__ == '__main__':
    max_processes = 5

    print(f'Start {max_processes} processes')

    all_processes = [multiprocessing.Process(target=spawn_process, args=(i,)) for i in range(max_processes)]
    for p in all_processes:
        p.start()

    for p in all_processes:
        p.join()

    print('Finished running all Processes')
```

In this example, we start 5 child-processes that print messages. The
[multi-processing library](https://docs.python.org/3/library/multiprocessing.html) spawns each process with
its own Python interpreter and its own [GIL](https://wiki.python.org/moin/GlobalInterpreterLock). The argument
passed to each process gets copied to each processe's memory space and thus the processes don't share any memory.

```shell script
$ python multi_processing.py

Start 5 processes
Runs in separate process 0
Runs in separate process 1
Runs in separate process 2
Runs in separate process 3
Runs in separate process 4
Finished running all Processes
```

# Conclusion

> A question you might ask is whether processes or threads can run at the same time.

The answer is: it depends.

On a system with more than one processor or CPU cores (as is common with modern processors), multiple processes or
threads can be executed in parallel. On a single core, though it is not possible to have processes or threads truly
executing at the same time. In this case, the CPU is shared among running processes or threads using a process
scheduling algorithm that divides the CPU’s time and yields the illusion of parallel execution.
The time given to each task is called a “time slice.” The switching back and forth between tasks happens so fast it is
usually not perceptible and is called context switching.

The terms **parallelism (genuine simultaneous execution)** and **concurrency (interleaving of processes in time to give
the appearance of simultaneous execution)** distinguish the two types of real or approximate simultaneous
operation.

Parallel programming is to specifically refer to the simultaneous execution of concurrent tasks on different processors
or cores.
_Thus, all parallel programming is concurrent, but not all concurrent programming is parallel._

Also, every language comes with its own characteristics and functionality. Whether we talk about
[Goroutines in Go](https://tour.golang.org/concurrency/1),
[Processes in Erlang](https://erlang.org/doc/reference_manual/processes.html), or
[Threads in Rust](https://doc.rust-lang.org/book/ch16-00-concurrency.html).
