import { db } from "@db/index";
import { challenges } from "@db/index";

const data = [
  // ───────────── LEVEL 1 — Warm Up ─────────────
  {
    title: "Reverse a String",
    description: `Write a function called \`reverseString\` that takes a string and returns it reversed. You are not allowed to use the built-in \`.reverse()\` method.

**Examples**
- \`reverseString("hello")\` → \`"olleh"\`
- \`reverseString("Canonical")\` → \`"lacinonaC"\``,
    difficulty: "easy",
    category: "strings",
    startCode: `const reverseString = (str) => {
  // your code here
};`,
  },
  {
    title: "Count the Vowels",
    description: `Write a function called \`countVowels\` that takes a string and returns the number of vowels in it. Vowels are a, e, i, o, u (both uppercase and lowercase count).

**Examples**
- \`countVowels("hello world")\` → \`3\`
- \`countVowels("Canonical")\` → \`5\``,
    difficulty: "easy",
    category: "strings",
    startCode: `const countVowels = (str) => {
  // your code here
};`,
  },
  {
    title: "Longest Word",
    description: `Write a function called \`longestWord\` that takes a sentence as a string and returns the longest word in it. If there is a tie, return the first one.

**Examples**
- \`longestWord("The quick brown fox")\` → \`"quick"\`
- \`longestWord("I love JavaScript")\` → \`"JavaScript"\``,
    difficulty: "easy",
    category: "strings",
    startCode: `const longestWord = (sentence) => {
  // your code here
};`,
  },
  {
    title: "Remove Duplicates",
    description: `Write a function called \`removeDuplicates\` that takes an array and returns a new array with all duplicate values removed. The order of the remaining elements should stay the same.

**Examples**
- \`removeDuplicates([1, 2, 2, 3, 4, 4, 5])\` → \`[1, 2, 3, 4, 5]\`
- \`removeDuplicates(["a", "b", "a", "c"])\` → \`["a", "b", "c"]\``,
    difficulty: "easy",
    category: "arrays",
    startCode: `const removeDuplicates = (arr) => {
  // your code here
};`,
  },
  {
    title: "Sum an Array",
    description: `Write a function called \`sumArray\` that takes an array of numbers and returns the total sum of all the numbers in it.

**Examples**
- \`sumArray([1, 2, 3, 4, 5])\` → \`15\`
- \`sumArray([10, -3, 7])\` → \`14\``,
    difficulty: "easy",
    category: "arrays",
    startCode: `const sumArray = (numbers) => {
  // your code here
};`,
  },
  {
    title: "Palindrome Check",
    description: `Write a function called \`isPalindrome\` that takes a string and returns \`true\` if it reads the same forwards and backwards, and \`false\` if it does not. Ignore spaces and casing.

**Examples**
- \`isPalindrome("racecar")\` → \`true\`
- \`isPalindrome("A man a plan a canal Panama")\` → \`true\`
- \`isPalindrome("hello")\` → \`false\``,
    difficulty: "easy",
    category: "strings",
    startCode: `const isPalindrome = (str) => {
  // your code here
};`,
  },
  {
    title: "Title Case",
    description: `Write a function called \`titleCase\` that takes a sentence and returns it with the first letter of every word capitalized.

**Examples**
- \`titleCase("hello from canonical")\` → \`"Hello From Canonical"\`
- \`titleCase("the quick brown fox")\` → \`"The Quick Brown Fox"\``,
    difficulty: "easy",
    category: "strings",
    startCode: `const titleCase = (sentence) => {
  // your code here
};`,
  },
  {
    title: "Find the Largest Number",
    description: `Write a function called \`findLargest\` that takes an array of numbers and returns the largest one. You are not allowed to use \`Math.max\`.

**Examples**
- \`findLargest([3, 1, 7, 2, 9, 4])\` → \`9\`
- \`findLargest([-5, -1, -8])\` → \`-1\``,
    difficulty: "easy",
    category: "arrays",
    startCode: `const findLargest = (numbers) => {
  // your code here
};`,
  },
  {
    title: "Filter Even Numbers",
    description: `Write a function called \`getEvens\` that takes an array of numbers and returns a new array containing only the even numbers.

**Examples**
- \`getEvens([1, 2, 3, 4, 5, 6])\` → \`[2, 4, 6]\`
- \`getEvens([11, 22, 33, 44])\` → \`[22, 44]\``,
    difficulty: "easy",
    category: "arrays",
    startCode: `const getEvens = (numbers) => {
  // your code here
};`,
  },
  {
    title: "Flatten One Level",
    description: `Write a function called \`flattenOne\` that takes a nested array and flattens it by one level only. Do not use \`.flat()\`.

**Example**
- \`flattenOne([1, [2, 3], [4, [5, 6]]])\` → \`[1, 2, 3, 4, [5, 6]]\``,
    difficulty: "easy",
    category: "arrays",
    startCode: `const flattenOne = (arr) => {
  // your code here
};`,
  },

  // ───────────── LEVEL 2 — Getting Warmer ─────────────
  {
    title: "FizzBuzz as an Array",
    description: `Write a function called \`fizzBuzz\` that takes a number \`n\` and returns an array from 1 to \`n\` where:
- Numbers divisible by 3 are replaced with \`"Fizz"\`
- Numbers divisible by 5 are replaced with \`"Buzz"\`
- Numbers divisible by both 3 and 5 are replaced with \`"FizzBuzz"\`
- Everything else stays as the number

**Example**
- \`fizzBuzz(15)\` → \`[1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]\``,
    difficulty: "medium",
    category: "misc",
    startCode: `const fizzBuzz = (n) => {
  // your code here
};`,
  },
  {
    title: "Factorial",
    description: `Write a function called \`factorial\` that takes a number and returns its factorial using recursion. The factorial of a number is that number multiplied by every number below it down to 1. The factorial of 0 is 1.

**Examples**
- \`factorial(5)\` → \`120\` (5 × 4 × 3 × 2 × 1)
- \`factorial(0)\` → \`1\``,
    difficulty: "medium",
    category: "functions",
    startCode: `const factorial = (n) => {
  // your code here
};`,
  },
  {
    title: "Prime Number Check",
    description: `Write a function called \`isPrime\` that takes a number and returns \`true\` if it is a prime number, and \`false\` if it is not. A prime number is a number greater than 1 that has no divisors other than 1 and itself.

**Examples**
- \`isPrime(7)\` → \`true\`
- \`isPrime(9)\` → \`false\` (9 = 3 × 3)
- \`isPrime(1)\` → \`false\``,
    difficulty: "medium",
    category: "misc",
    startCode: `const isPrime = (n) => {
  // your code here
};`,
  },
  {
    title: "Fibonacci Sequence",
    description: `Write a function called \`fibonacci\` that takes a number \`n\` and returns an array of the first \`n\` numbers in the Fibonacci sequence. Each number is the sum of the two numbers before it, starting with 0 and 1.

**Examples**
- \`fibonacci(7)\` → \`[0, 1, 1, 2, 3, 5, 8]\`
- \`fibonacci(1)\` → \`[0]\``,
    difficulty: "medium",
    category: "misc",
    startCode: `const fibonacci = (n) => {
  // your code here
};`,
  },
  {
    title: "Character Frequency",
    description: `Write a function called \`charFrequency\` that takes a string and returns an object where each key is a character and its value is how many times that character appears in the string.

**Examples**
- \`charFrequency("hello")\` → \`{ h: 1, e: 1, l: 2, o: 1 }\`
- \`charFrequency("aabbcc")\` → \`{ a: 2, b: 2, c: 2 }\``,
    difficulty: "medium",
    category: "objects",
    startCode: `const charFrequency = (str) => {
  // your code here
};`,
  },
  {
    title: "Sort Objects by Key",
    description: `Write a function called \`sortByKey\` that takes an array of objects and a key name, and returns the array sorted by that key in ascending order.

**Example**
- \`sortByKey([{ name: "Charlie", age: 30 }, { name: "Alice", age: 25 }, { name: "Bob", age: 35 }], "age")\` → \`[{ name: "Alice", age: 25 }, { name: "Charlie", age: 30 }, { name: "Bob", age: 35 }]\``,
    difficulty: "medium",
    category: "arrays",
    startCode: `const sortByKey = (arr, key) => {
  // your code here
};`,
  },
  {
    title: "Pairs That Sum to a Target",
    description: `Write a function called \`findPairs\` that takes an array of numbers and a target number, and returns all pairs of numbers from the array that add up to the target. Each pair should be returned as an array.

**Example**
- \`findPairs([1, 2, 3, 4, 5], 6)\` → \`[[1, 5], [2, 4]]\``,
    difficulty: "medium",
    category: "arrays",
    startCode: `const findPairs = (numbers, target) => {
  // your code here
};`,
  },
  {
    title: "Debounce",
    description: `A debounce function delays the execution of another function until a certain amount of time has passed since the last time it was called. It is commonly used for search inputs so you do not fire a request on every keystroke.

Write a function called \`debounce\` that takes a function \`fn\` and a delay in milliseconds, and returns a new function that only calls \`fn\` after it has stopped being called for that many milliseconds.

**Example**
- \`const log = debounce(() => console.log("called"), 300)\`
- \`log()\` → not called
- \`log()\` → not called
- \`log()\` → logs \`"called"\` after 300ms of silence`,
    difficulty: "medium",
    category: "closures",
    startCode: `const debounce = (fn, delay) => {
  // your code here
};`,
  },
  {
    title: "Your Own .map()",
    description: `Write a function called \`myMap\` that works exactly like the built-in \`.map()\` method. It should take an array and a callback function, and return a new array with the callback applied to each element. You cannot use the built-in \`.map()\` inside it.

**Example**
- \`myMap([1, 2, 3], (x) => x * 2)\` → \`[2, 4, 6]\``,
    difficulty: "medium",
    category: "arrays",
    startCode: `const myMap = (arr, callback) => {
  // your code here
};`,
  },
  {
    title: "Your Own .filter()",
    description: `Write a function called \`myFilter\` that works exactly like the built-in \`.filter()\` method. It should take an array and a callback function, and return a new array with only the elements for which the callback returns true. You cannot use the built-in \`.filter()\` inside it.

**Example**
- \`myFilter([1, 2, 3, 4, 5], (x) => x > 3)\` → \`[4, 5]\``,
    difficulty: "medium",
    category: "arrays",
    startCode: `const myFilter = (arr, callback) => {
  // your code here
};`,
  },

  // ───────────── LEVEL 3 — Intermediate ─────────────
  {
    title: "Your Own .reduce()",
    description: `Write a function called \`myReduce\` that works exactly like the built-in \`.reduce()\` method. It takes an array, a callback, and an optional initial value. It should apply the callback to each element, accumulating a single result. You cannot use the built-in \`.reduce()\` inside it.

**Example**
- \`myReduce([1, 2, 3, 4], (acc, val) => acc + val, 0)\` → \`10\``,
    difficulty: "medium",
    category: "arrays",
    startCode: `const myReduce = (arr, callback, initialValue) => {
  // your code here
};`,
  },
  {
    title: "Deep Clone an Object",
    description: `Write a function called \`deepClone\` that takes an object and returns a completely independent copy of it, including all nested objects and arrays. You are not allowed to use \`JSON.parse\` or \`JSON.stringify\`.

**Example**
- \`const original = { a: 1, b: { c: 2 } }\`
- \`const clone = deepClone(original)\`
- \`clone.b.c = 99\`
- \`original.b.c\` → still \`2\``,
    difficulty: "hard",
    category: "objects",
    startCode: `const deepClone = (obj) => {
  // your code here
};`,
  },
  {
    title: "Group Array Items by Property",
    description: `Write a function called \`groupBy\` that takes an array of objects and a key, and returns an object where each key is a unique value of that property, and its value is an array of all items that have that property value.

**Example**
- \`groupBy([{ type: "fruit", name: "apple" }, { type: "veggie", name: "carrot" }, { type: "fruit", name: "mango" }], "type")\` → \`{ fruit: [{ type: "fruit", name: "apple" }, { type: "fruit", name: "mango" }], veggie: [{ type: "veggie", name: "carrot" }] }\``,
    difficulty: "medium",
    category: "objects",
    startCode: `const groupBy = (arr, key) => {
  // your code here
};`,
  },
  {
    title: "Event Emitter",
    description: `An event emitter is a pattern where you can listen to named events and react when they are triggered. It is the backbone of how Node.js works internally.

Write a class called \`EventEmitter\` with three methods:
- \`on(event, listener)\` registers a listener for an event
- \`emit(event, ...args)\` triggers all listeners for an event
- \`off(event, listener)\` removes a specific listener from an event

**Example**
- \`const emitter = new EventEmitter()\`
- \`const greet = (name) => console.log("Hello " + name)\`
- \`emitter.on("greet", greet)\`
- \`emitter.emit("greet", "Alice")\` → logs \`"Hello Alice"\`
- \`emitter.off("greet", greet)\`
- \`emitter.emit("greet", "Alice")\` → nothing happens`,
    difficulty: "hard",
    category: "objects",
    startCode: `class EventEmitter {
  on(event, listener) {
    // your code here
  }

  emit(event, ...args) {
    // your code here
  }

  off(event, listener) {
    // your code here
  }
}`,
  },
  {
    title: "Currying",
    description: `Currying is the process of transforming a function that takes multiple arguments into a sequence of functions that each take one argument.

Write a function called \`curry\` that takes a function and returns its curried version. It should also allow passing several arguments at once.

**Example**
- \`const add = (a, b, c) => a + b + c\`
- \`const curriedAdd = curry(add)\`
- \`curriedAdd(1)(2)(3)\` → \`6\`
- \`curriedAdd(1, 2)(3)\` → \`6\`
- \`curriedAdd(1)(2, 3)\` → \`6\``,
    difficulty: "hard",
    category: "functions",
    startCode: `const curry = (fn) => {
  // your code here
};`,
  },
  {
    title: "Deep Flatten",
    description: `Write a function called \`deepFlatten\` that takes a deeply nested array and returns a completely flat array. You cannot use \`.flat(Infinity)\`.

**Example**
- \`deepFlatten([1, [2, [3, [4, [5]]]]])\` → \`[1, 2, 3, 4, 5]\``,
    difficulty: "medium",
    category: "arrays",
    startCode: `const deepFlatten = (arr) => {
  // your code here
};`,
  },
  {
    title: "Simple Promise from Scratch",
    description: `Write a class called \`MyPromise\` that mimics the basic behavior of a native JavaScript Promise. It should support:
- A constructor that takes an executor function with \`resolve\` and \`reject\`
- A \`.then(onFulfilled)\` method
- A \`.catch(onRejected)\` method

**Examples**
- \`new MyPromise((resolve) => resolve(42)).then((val) => console.log(val))\` → logs \`42\`
- \`new MyPromise((_, reject) => reject("error")).catch((err) => console.log(err))\` → logs \`"error"\``,
    difficulty: "hard",
    category: "async",
    startCode: `class MyPromise {
  constructor(executor) {
    // your code here
  }

  then(onFulfilled) {
    // your code here
  }

  catch(onRejected) {
    // your code here
  }
}`,
  },
  {
    title: "Throttle",
    description: `A throttle function ensures that a function can only be called once within a given time window, no matter how many times it is triggered. Unlike debounce, which waits for silence, throttle fires immediately and then blocks further calls for the time period.

Write a function called \`throttle\` that takes a function \`fn\` and a time limit in milliseconds, and returns a throttled version of it.

**Example**
- \`const log = throttle(() => console.log("called"), 1000)\`
- \`log()\` → called immediately
- \`log()\` → ignored
- \`log()\` → ignored (still within the 1 second window)
- after 1 second, \`log()\` → called again`,
    difficulty: "hard",
    category: "closures",
    startCode: `const throttle = (fn, limit) => {
  // your code here
};`,
  },
  {
    title: "First Non-Repeating Character",
    description: `Write a function called \`firstUnique\` that takes a string and returns the first character that does not repeat anywhere in the string. If all characters repeat, return \`null\`.

**Examples**
- \`firstUnique("aabbcde")\` → \`"c"\`
- \`firstUnique("aabb")\` → \`null\``,
    difficulty: "medium",
    category: "strings",
    startCode: `const firstUnique = (str) => {
  // your code here
};`,
  },
  {
    title: "Binary Search",
    description: `Binary search works on sorted arrays and finds a value by repeatedly cutting the search range in half, making it much faster than checking every element.

Write a function called \`binarySearch\` that takes a sorted array of numbers and a target value, and returns the index of the target. If it is not found, return \`-1\`.

**Examples**
- \`binarySearch([1, 3, 5, 7, 9, 11], 7)\` → \`3\`
- \`binarySearch([1, 3, 5, 7, 9, 11], 6)\` → \`-1\``,
    difficulty: "medium",
    category: "arrays",
    startCode: `const binarySearch = (sortedArr, target) => {
  // your code here
};`,
  },

  // ───────────── LEVEL 4 — Advanced ─────────────
  {
    title: "Pub/Sub System",
    description: `A pub/sub (publish/subscribe) system is a messaging pattern where publishers send messages to a channel without knowing who is listening, and subscribers listen to channels without knowing who is sending.

Build a \`PubSub\` class with:
- \`subscribe(channel, callback)\` listens to a channel and returns an unsubscribe function
- \`publish(channel, data)\` sends data to all subscribers of that channel

**Example**
- \`const ps = new PubSub()\`
- \`const unsub = ps.subscribe("news", (data) => console.log(data))\`
- \`ps.publish("news", "Breaking: Canonical is hiring")\` → logs the message
- \`unsub()\`
- \`ps.publish("news", "Another update")\` → nothing happens`,
    difficulty: "hard",
    category: "objects",
    startCode: `class PubSub {
  subscribe(channel, callback) {
    // your code here
  }

  publish(channel, data) {
    // your code here
  }
}`,
  },
  {
    title: "Memoization",
    description: `Memoization is an optimization technique where you cache the result of a function call so that if you call it again with the same arguments, you return the cached result instead of recalculating it.

Write a function called \`memoize\` that takes a function and returns a memoized version of it.

**Example**
- \`const slowSquare = (n) => n * n\`
- \`const fastSquare = memoize(slowSquare)\`
- \`fastSquare(5)\` → calculates and caches \`25\`
- \`fastSquare(5)\` → returns \`25\` from cache
- \`fastSquare(6)\` → calculates and caches \`36\``,
    difficulty: "hard",
    category: "closures",
    startCode: `const memoize = (fn) => {
  // your code here
};`,
  },
  {
    title: "Middleware Pipeline",
    description: `This is how frameworks like Express.js work internally. A middleware pipeline is a series of functions where each one can do something and then pass control to the next one.

Build a function called \`createPipeline\` that takes an array of middleware functions and returns a single function that runs them in order. Each middleware receives a \`context\` object and a \`next\` function to call the next middleware.

**Example**
- \`const pipeline = createPipeline([(ctx, next) => { ctx.value += 1; next() }, (ctx, next) => { ctx.value *= 2; next() }, (ctx, next) => { ctx.value += 10; next() }])\`
- \`const ctx = { value: 5 }\`
- \`pipeline(ctx)\`
- \`ctx.value\` → \`22\` (((5 + 1) * 2) + 10)`,
    difficulty: "hard",
    category: "functions",
    startCode: `const createPipeline = (middlewares) => {
  // your code here
};`,
  },
  {
    title: "Linked List",
    description: `A linked list is a data structure where each element (called a node) holds a value and a reference to the next node. Unlike arrays, there is no index: you traverse from one node to the next.

Build a \`LinkedList\` class with:
- \`insert(value)\` adds a node at the end
- \`delete(value)\` removes the first node with that value
- \`search(value)\` returns \`true\` if the value exists, \`false\` otherwise
- \`toArray()\` returns all values as a plain array

**Example**
- \`const list = new LinkedList()\`
- \`list.insert(1); list.insert(2); list.insert(3)\`
- \`list.toArray()\` → \`[1, 2, 3]\`
- \`list.delete(2)\`
- \`list.search(2)\` → \`false\``,
    difficulty: "hard",
    category: "objects",
    startCode: `class LinkedList {
  insert(value) {
    // your code here
  }

  delete(value) {
    // your code here
  }

  search(value) {
    // your code here
  }

  toArray() {
    // your code here
  }
}`,
  },
  {
    title: "Deep Merge Objects",
    description: `Write a function called \`deepMerge\` that takes two objects and merges them together deeply. If both objects have the same key and both values are objects, merge them recursively. Otherwise, the second object's value should overwrite the first.

**Example**
- \`deepMerge({ a: 1, b: { x: 1, y: 2 } }, { b: { y: 99, z: 3 }, c: 4 })\` → \`{ a: 1, b: { x: 1, y: 99, z: 3 }, c: 4 }\``,
    difficulty: "hard",
    category: "objects",
    startCode: `const deepMerge = (target, source) => {
  // your code here
};`,
  },
  {
    title: "Stack and Queue",
    description: `A stack is a data structure where the last item added is the first one out (like a stack of plates). A queue is where the first item added is the first one out (like a line of people).

Build two classes using only plain arrays:
- \`Stack\` with \`push(value)\`, \`pop()\`, and \`peek()\` (returns the top without removing it)
- \`Queue\` with \`enqueue(value)\`, \`dequeue()\`, and \`peek()\` (returns the front without removing it)

Neither class should expose its internal array directly.`,
    difficulty: "medium",
    category: "objects",
    startCode: `class Stack {
  push(value) {
    // your code here
  }

  pop() {
    // your code here
  }

  peek() {
    // your code here
  }
}

class Queue {
  enqueue(value) {
    // your code here
  }

  dequeue() {
    // your code here
  }

  peek() {
    // your code here
  }
}`,
  },
  {
    title: "Async Queue",
    description: `Write a class called \`AsyncQueue\` that processes async tasks one at a time in the order they were added, even if multiple tasks are added at the same time. Each task is a function that returns a Promise.

**Example**
- \`const queue = new AsyncQueue()\`
- \`queue.add(async () => { await delay(100); console.log("Task 1") })\`
- \`queue.add(async () => { await delay(50); console.log("Task 2") })\`
- \`queue.add(async () => { await delay(10); console.log("Task 3") })\`
- Output in order: \`"Task 1"\`, \`"Task 2"\`, \`"Task 3"\``,
    difficulty: "hard",
    category: "async",
    startCode: `class AsyncQueue {
  add(task) {
    // your code here
  }
}`,
  },
  {
    title: "Your Own Promise.all",
    description: `Write a function called \`myPromiseAll\` that works exactly like the native \`Promise.all\`. It takes an array of promises and returns a single promise that resolves with an array of all results when every promise resolves, or rejects as soon as one of them rejects.

**Examples**
- \`myPromiseAll([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)])\` → resolves with \`[1, 2, 3]\`
- \`myPromiseAll([Promise.resolve(1), Promise.reject("error")])\` → rejects with \`"error"\``,
    difficulty: "hard",
    category: "async",
    startCode: `const myPromiseAll = (promises) => {
  // your code here
};`,
  },
  {
    title: "Rate Limiter",
    description: `Write a function called \`rateLimiter\` that takes a function \`fn\` and a maximum number of calls \`limit\` allowed per second. It should return a wrapped version of that function. If the function is called more than \`limit\` times in one second, the extra calls should be silently ignored.

**Example**
- \`const limited = rateLimiter(console.log, 2)\`
- \`limited("a")\` → logs \`"a"\`
- \`limited("b")\` → logs \`"b"\`
- \`limited("c")\` → ignored (limit reached for this second)`,
    difficulty: "hard",
    category: "closures",
    startCode: `const rateLimiter = (fn, limit) => {
  // your code here
};`,
  },
  {
    title: "Dependency Injection Container",
    description: `A dependency injection container is a pattern used in large applications to manage how objects and services get created and connected to each other. Instead of creating dependencies manually, you register them and the container resolves them automatically.

Build a \`Container\` class with:
- \`register(name, factory)\` registers a service by name using a factory function
- \`resolve(name)\` creates and returns the service, injecting any dependencies it needs

**Example**
- \`const container = new Container()\`
- \`container.register("config", () => ({ port: 3000 }))\`
- \`container.register("server", (resolve) => ({ port: resolve("config").port }))\`
- \`container.resolve("server").port\` → \`3000\``,
    difficulty: "legendary",
    category: "objects",
    startCode: `class Container {
  register(name, factory) {
    // your code here
  }

  resolve(name) {
    // your code here
  }
}`,
  },

  // ───────────── LEVEL 5 — Canonical Level ─────────────
  {
    title: "HTTP Router from Scratch",
    description: `Build a \`Router\` class that matches incoming HTTP-style requests to registered handlers. This is the core of how Express.js and similar frameworks work.

It should support:
- \`router.add(method, path, handler)\` registers a route
- \`router.match(method, path)\` returns the matching handler or \`null\` if none is found
- Path parameters like \`/users/:id\`

**Example**
- \`const router = new Router()\`
- \`router.add("GET", "/users/:id", (params) => \\\`User: \${params.id}\\\`)\`
- \`const handler = router.match("GET", "/users/42")\`
- \`handler({ id: "42" })\` → \`"User: 42"\``,
    difficulty: "legendary",
    category: "objects",
    startCode: `class Router {
  add(method, path, handler) {
    // your code here
  }

  match(method, path) {
    // your code here
  }
}`,
  },
  {
    title: "Validation Engine",
    description: `Build a function called \`validate\` that takes an object and a rules definition, and returns an object with a \`valid\` boolean and an \`errors\` array. Each rule can define whether a field is required, its expected type, and a minimum/maximum length or value.

**Example**
- \`const rules = { name: { required: true, type: "string", minLength: 2 }, age: { required: true, type: "number", min: 18 } }\`
- \`validate({ name: "A", age: 15 }, rules)\` → \`{ valid: false, errors: ["name must be at least 2 characters", "age must be at least 18"] }\`
- \`validate({ name: "Alice", age: 25 }, rules)\` → \`{ valid: true, errors: [] }\``,
    difficulty: "legendary",
    category: "objects",
    startCode: `const validate = (data, rules) => {
  // your code here
};`,
  },
  {
    title: "In-Memory Key-Value Store with TTL",
    description: `TTL stands for Time To Live. Build a class called \`KVStore\` that works like a simple database where each value automatically expires after a set time.

It should support:
- \`set(key, value, ttlMs)\` stores a value that expires after \`ttlMs\` milliseconds
- \`get(key)\` returns the value if it exists and has not expired, otherwise \`null\`
- \`delete(key)\` removes a key manually

**Example**
- \`const store = new KVStore()\`
- \`store.set("token", "abc123", 500)\`
- \`store.get("token")\` → \`"abc123"\`
- after 500ms, \`store.get("token")\` → \`null\``,
    difficulty: "legendary",
    category: "objects",
    startCode: `class KVStore {
  set(key, value, ttlMs) {
    // your code here
  }

  get(key) {
    // your code here
  }

  delete(key) {
    // your code here
  }
}`,
  },
  {
    title: "Plugin System with Lifecycle Hooks",
    description: `Build a system where plugins can hook into named lifecycle events of an application. This is how tools like Webpack, Vite, and many backend frameworks are extended.

Build a \`PluginSystem\` class with:
- \`register(plugin)\` adds a plugin (an object with hook names as keys and functions as values)
- \`trigger(hookName, context)\` runs all registered functions for that hook, passing the context through each one

**Example**
- \`const system = new PluginSystem()\`
- \`system.register({ onRequest: (ctx) => { ctx.user = "Alice"; return ctx } })\`
- \`system.register({ onRequest: (ctx) => { ctx.role = "admin"; return ctx } })\`
- \`system.trigger("onRequest", {})\` → \`{ user: "Alice", role: "admin" }\``,
    difficulty: "legendary",
    category: "objects",
    startCode: `class PluginSystem {
  register(plugin) {
    // your code here
  }

  trigger(hookName, context) {
    // your code here
  }
}`,
  },
  {
    title: "Template Engine",
    description: `Build a function called \`render\` that takes a template string with placeholders in the format \`{{ variableName }}\` and a data object, and returns the string with all placeholders replaced by their values from the data object.

If a variable is not found in the data object, leave the placeholder untouched.

**Example**
- \`render("Hello {{ name }}, you are {{ age }} years old.", { name: "Alice", age: 30 })\` → \`"Hello Alice, you are 30 years old."\``,
    difficulty: "hard",
    category: "strings",
    startCode: `const render = (template, data) => {
  // your code here
};`,
  },
  {
    title: "Retry with Exponential Backoff",
    description: `Write a function called \`retry\` that takes an async function \`fn\`, a maximum number of retries, and an initial delay in milliseconds. It should call \`fn\` and, if it throws or rejects, wait and try again. Each retry should wait twice as long as the previous one (exponential backoff). If all retries are exhausted, it should reject with the last error.

**Example**
- \`let attempts = 0\`
- \`const unreliable = async () => { attempts++; if (attempts < 3) throw new Error("Not yet"); return "success" }\`
- \`retry(unreliable, 5, 100).then(console.log)\` → \`"success"\` after 2 retries`,
    difficulty: "legendary",
    category: "async",
    startCode: `const retry = async (fn, maxRetries, initialDelay) => {
  // your code here
};`,
  },
  {
    title: "Task Scheduler",
    description: `Build a \`Scheduler\` class that can run functions at defined intervals. It should support multiple tasks running independently and allow stopping them individually.

- \`schedule(name, fn, intervalMs)\` starts running \`fn\` every \`intervalMs\` milliseconds
- \`stop(name)\` stops a specific task
- \`stopAll()\` stops all running tasks

**Example**
- \`const scheduler = new Scheduler()\`
- \`scheduler.schedule("heartbeat", () => console.log("ping"), 1000)\`
- \`scheduler.schedule("cleanup", () => console.log("cleaning"), 5000)\`
- after 3 seconds, \`scheduler.stop("heartbeat")\` stops heartbeat while cleanup keeps running
- \`scheduler.stopAll()\` stops everything`,
    difficulty: "legendary",
    category: "async",
    startCode: `class Scheduler {
  schedule(name, fn, intervalMs) {
    // your code here
  }

  stop(name) {
    // your code here
  }

  stopAll() {
    // your code here
  }
}`,
  },
  {
    title: "Token Bucket Rate Limiter",
    description: `A token bucket is a more sophisticated rate limiting algorithm used in real APIs. The bucket holds a maximum number of tokens. Tokens refill at a constant rate over time. Each request consumes one token. If the bucket is empty, the request is rejected.

Build a \`TokenBucket\` class with:
- A constructor that takes \`capacity\` (max tokens) and \`refillRate\` (tokens added per second)
- \`consume()\` returns \`true\` if a token was available and consumed, \`false\` if the bucket is empty

**Example**
- \`const bucket = new TokenBucket(3, 1)\`
- \`bucket.consume()\` → \`true\`
- \`bucket.consume()\` → \`true\`
- \`bucket.consume()\` → \`true\`
- \`bucket.consume()\` → \`false\` (bucket empty)
- after 1 second, \`bucket.consume()\` → \`true\` (one token refilled)`,
    difficulty: "legendary",
    category: "objects",
    startCode: `class TokenBucket {
  constructor(capacity, refillRate) {
    // your code here
  }

  consume() {
    // your code here
  }
}`,
  },
  {
    title: "State Machine",
    description: `A state machine models a system that can be in exactly one state at a time, with defined rules for how it can move from one state to another (called transitions). They are used in everything from UI flows to network protocols.

Build a \`StateMachine\` class with:
- A constructor that takes an initial state and a transitions map
- \`transition(action)\` moves to the next state based on the action, and throws if the transition is not allowed
- \`getState()\` returns the current state

**Example**
- \`const machine = new StateMachine("idle", { idle: { start: "running" }, running: { pause: "paused", stop: "idle" }, paused: { resume: "running", stop: "idle" } })\`
- \`machine.transition("start")\` → state is now \`"running"\`
- \`machine.transition("pause")\` → state is now \`"paused"\`
- \`machine.transition("start")\` → throws, \`"start"\` is not valid from \`"paused"\``,
    difficulty: "hard",
    category: "objects",
    startCode: `class StateMachine {
  constructor(initialState, transitions) {
    // your code here
  }

  transition(action) {
    // your code here
  }

  getState() {
    // your code here
  }
}`,
  },
  {
    title: "Observable Pattern",
    description: `An observable is an object that lets other parts of your code subscribe to changes in its value. When the value changes, all subscribers are automatically notified. This is the foundation of reactive programming and libraries like RxJS.

Build a class called \`Observable\` with:
- \`subscribe(fn)\` registers a listener and returns an unsubscribe function
- \`set(value)\` updates the value and notifies all subscribers
- \`get()\` returns the current value

**Example**
- \`const count = new Observable(0)\`
- \`const unsub = count.subscribe((val) => console.log("count is now:", val))\`
- \`count.set(1)\` → logs \`"count is now: 1"\`
- \`count.set(2)\` → logs \`"count is now: 2"\`
- \`unsub()\`
- \`count.set(3)\` → nothing logged`,
    difficulty: "hard",
    category: "objects",
    startCode: `class Observable {
  constructor(initialValue) {
    // your code here
  }

  subscribe(fn) {
    // your code here
  }

  set(value) {
    // your code here
  }

  get() {
    // your code here
  }
}`,
  },
];

const seed = async () => {
  console.log("🌱 Seeding challenges...");

  await db.insert(challenges).values(data).onConflictDoNothing();

  console.log(`✅ Seeded ${data.length} challenges`);
  process.exit(0);
};

seed().catch((err) => {
  console.error("❌ Seed failed:", err);
  process.exit(1);
});
