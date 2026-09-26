import { db } from "@db/index";
import { challenges } from "@db/index";
import type { NewChallenge } from '@shared/types/challenge';

const data: NewChallenge[] = [
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
    testCases: [
      { input: "hello", expected: "olleh" },
      { input: "Canonical", expected: "lacinonaC" },
      { input: "a", expected: "a" },
      { input: "", expected: "" },
      { input: "abba", expected: "abba" },
      { input: "12345", expected: "54321" },
    ],
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
    testCases: [
      { input: "hello world", expected: 3 },
      { input: "Canonical", expected: 5 },
      { input: "AEIOU", expected: 5 },
      { input: "rhythm", expected: 0 },
      { input: "", expected: 0 },
      { input: "a", expected: 1 },
    ],
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
    testCases: [
      { input: "The quick brown fox", expected: "quick" },
      { input: "I love JavaScript", expected: "JavaScript" },
      { input: "a bb ccc", expected: "ccc" },
      { input: "tie bet", expected: "tie" },
      { input: "one", expected: "one" },
      { input: "Hello World", expected: "Hello" },
    ],
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
    testCases: [
      { input: [1, 2, 2, 3, 4, 4, 5], expected: [1, 2, 3, 4, 5] },
      { input: ["a", "b", "a", "c"], expected: ["a", "b", "c"] },
      { input: [1, 1, 1, 1], expected: [1] },
      { input: [], expected: [] },
      { input: [1, 2, 3], expected: [1, 2, 3] },
      { input: [true, false, true], expected: [true, false] },
    ],
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
    testCases: [
      { input: [1, 2, 3, 4, 5], expected: 15 },
      { input: [10, -3, 7], expected: 14 },
      { input: [], expected: 0 },
      { input: [0, 0, 0], expected: 0 },
      { input: [-1, -2, -3], expected: -6 },
      { input: [100], expected: 100 },
    ],
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
    testCases: [
      { input: "racecar", expected: true },
      { input: "A man a plan a canal Panama", expected: true },
      { input: "hello", expected: false },
      { input: "a", expected: true },
      { input: "Was it a car or a cat I saw", expected: true },
      { input: "No lemon no melon", expected: true },
    ],
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
    testCases: [
      { input: "hello from canonical", expected: "Hello From Canonical" },
      { input: "the quick brown fox", expected: "The Quick Brown Fox" },
      { input: "a", expected: "A" },
      { input: "already Title Case", expected: "Already Title Case" },
      { input: "one two three", expected: "One Two Three" },
      { input: "i love javascript", expected: "I Love Javascript" },
    ],
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
    testCases: [
      { input: [3, 1, 7, 2, 9, 4], expected: 9 },
      { input: [-5, -1, -8], expected: -1 },
      { input: [0], expected: 0 },
      { input: [1, 1, 1], expected: 1 },
      { input: [100, 50, 200, 75], expected: 200 },
      { input: [-10, -20, -5], expected: -5 },
    ],
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
    testCases: [
      { input: [1, 2, 3, 4, 5, 6], expected: [2, 4, 6] },
      { input: [11, 22, 33, 44], expected: [22, 44] },
      { input: [1, 3, 5], expected: [] },
      { input: [2, 4, 6], expected: [2, 4, 6] },
      { input: [], expected: [] },
      { input: [0, 1, 2], expected: [0, 2] },
    ],
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
    testCases: [
      { input: [1, [2, 3], [4, [5, 6]]], expected: [1, 2, 3, 4, [5, 6]] },
      { input: [[1], [2], [3]], expected: [1, 2, 3] },
      { input: [1, 2, 3], expected: [1, 2, 3] },
      { input: [], expected: [] },
      { input: [[1, 2], [3, 4]], expected: [1, 2, 3, 4] },
      { input: [[1, [2, [3]]]], expected: [1, [2, [3]]] },
    ],
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
    testCases: [
      { input: 15, expected: [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"] },
      { input: 1, expected: [1] },
      { input: 3, expected: [1, 2, "Fizz"] },
      { input: 5, expected: [1, 2, "Fizz", 4, "Buzz"] },
      { input: 6, expected: [1, 2, "Fizz", 4, "Buzz", "Fizz"] },
      { input: 0, expected: [] },
    ],
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
    testCases: [
      { input: 5, expected: 120 },
      { input: 0, expected: 1 },
      { input: 1, expected: 1 },
      { input: 3, expected: 6 },
      { input: 7, expected: 5040 },
      { input: 10, expected: 3628800 },
    ],
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
    testCases: [
      { input: 7, expected: true },
      { input: 9, expected: false },
      { input: 1, expected: false },
      { input: 2, expected: true },
      { input: 0, expected: false },
      { input: 13, expected: true },
      { input: 25, expected: false },
    ],
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
    testCases: [
      { input: 7, expected: [0, 1, 1, 2, 3, 5, 8] },
      { input: 1, expected: [0] },
      { input: 2, expected: [0, 1] },
      { input: 5, expected: [0, 1, 1, 2, 3] },
      { input: 10, expected: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] },
      { input: 0, expected: [] },
    ],
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
    testCases: [
      { input: "hello", expected: { h: 1, e: 1, l: 2, o: 1 } },
      { input: "aabbcc", expected: { a: 2, b: 2, c: 2 } },
      { input: "a", expected: { a: 1 } },
      { input: "aaa", expected: { a: 3 } },
      { input: "abc", expected: { a: 1, b: 1, c: 1 } },
      { input: "  ", expected: { " ": 2 } },
    ],
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
    testCases: [
      {
        input: [{ name: "Charlie", age: 30 }, { name: "Alice", age: 25 }, { name: "Bob", age: 35 }],
        expected: [{ name: "Alice", age: 25 }, { name: "Charlie", age: 30 }, { name: "Bob", age: 35 }],
        key: "age",
      },
      {
        input: [{ name: "Charlie" }, { name: "Alice" }, { name: "Bob" }],
        expected: [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }],
        key: "name",
      },
      {
        input: [{ score: 100 }, { score: 50 }, { score: 75 }],
        expected: [{ score: 50 }, { score: 75 }, { score: 100 }],
        key: "score",
      },
    ],
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
    testCases: [
      { input: [1, 2, 3, 4, 5], target: 6, expected: [[1, 5], [2, 4]] },
      { input: [1, 2, 3], target: 10, expected: [] },
      { input: [2, 2, 3, 3], target: 6, expected: [[3, 3]] },
      { input: [0, 5, -1, 6], target: 5, expected: [[0, 5], [-1, 6]] },
      { input: [], target: 5, expected: [] },
    ],
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
    testCases: [
      { input: "calls fn after delay when not called again", expected: true },
      { input: "does not call fn if called again before delay", expected: true },
      { input: "resets the timer on each call", expected: true },
      { input: "returns a function", expected: true },
    ],
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
    testCases: [
      { input: [[1, 2, 3], "(x) => x * 2"], expected: [2, 4, 6] },
      { input: [[1, 2, 3], "(x) => x + 1"], expected: [2, 3, 4] },
      { input: [[], "(x) => x"], expected: [] },
      { input: [["a", "b", "c"], "(x) => x.toUpperCase()"], expected: ["A", "B", "C"] },
      { input: [[true, false], "(x) => !x"], expected: [false, true] },
    ],
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
    testCases: [
      { input: [[1, 2, 3, 4, 5], "(x) => x > 3"], expected: [4, 5] },
      { input: [[1, 2, 3, 4, 5], "(x) => x % 2 === 0"], expected: [2, 4] },
      { input: [[], "(x) => x"], expected: [] },
      { input: [[1, 2, 3], "(x) => x > 10"], expected: [] },
      { input: [["a", "bb", "ccc"], "(x) => x.length > 1"], expected: ["bb", "ccc"] },
    ],
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
    testCases: [
      { input: [[1, 2, 3, 4], "(acc, val) => acc + val", 0], expected: 10 },
      { input: [[1, 2, 3, 4], "(acc, val) => acc * val", 1], expected: 24 },
      { input: [[], "(acc, val) => acc + val", 0], expected: 0 },
      { input: [[5], "(acc, val) => acc + val", 0], expected: 5 },
      { input: [["a", "b", "c"], "(acc, val) => acc + val", ""], expected: "abc" },
    ],
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
    testCases: [
      { input: { a: 1, b: { c: 2 } }, expected: { a: 1, b: { c: 2 } } },
      { input: { a: [1, 2, 3] }, expected: { a: [1, 2, 3] } },
      { input: { a: { b: { c: { d: 4 } } } }, expected: { a: { b: { c: { d: 4 } } } } },
      { input: {}, expected: {} },
      { input: { x: 1, y: [2, { z: 3 }] }, expected: { x: 1, y: [2, { z: 3 }] } },
    ],
  },
  {
    title: "Group Array Items by Property",
    description: `Write a function called \`groupBy\` that takes an array of objects and a key, and returns an object where each key is a unique value of that property, and its value is an array of all items that have that property value.

**Example**
- \`groupBy([{ type: "fruit", name: "apple" }, { type: "veggie", name: "carrot" }, { type: "fruit", name: "mango" }], "type")\` → \`{ fruit: [...], veggie: [...] }\``,
    difficulty: "medium",
    category: "objects",
    startCode: `const groupBy = (arr, key) => {
  // your code here
};`,
    testCases: [
      {
        input: [{ type: "fruit", name: "apple" }, { type: "veggie", name: "carrot" }, { type: "fruit", name: "mango" }],
        key: "type",
        expected: { fruit: [{ type: "fruit", name: "apple" }, { type: "fruit", name: "mango" }], veggie: [{ type: "veggie", name: "carrot" }] },
      },
      {
        input: [{ role: "admin", name: "Alice" }, { role: "user", name: "Bob" }, { role: "admin", name: "Carol" }],
        key: "role",
        expected: { admin: [{ role: "admin", name: "Alice" }, { role: "admin", name: "Carol" }], user: [{ role: "user", name: "Bob" }] },
      },
      {
        input: [],
        key: "type",
        expected: {},
      },
    ],
  },
  {
    title: "Event Emitter",
    description: `An event emitter is a pattern where you can listen to named events and react when they are triggered. It is the backbone of how Node.js works internally.

Write a class called \`EventEmitter\` with three methods:
- \`on(event, listener)\` registers a listener for an event
- \`emit(event, ...args)\` triggers all listeners for an event
- \`off(event, listener)\` removes a specific listener from an event`,
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
    testCases: [
      { input: "on() registers a listener and emit() calls it", expected: true },
      { input: "emit() passes arguments to the listener", expected: true },
      { input: "off() removes the listener so it no longer fires", expected: true },
      { input: "multiple listeners can be registered for the same event", expected: true },
      { input: "off() only removes the specified listener, not all listeners", expected: true },
    ],
  },
  {
    title: "Currying",
    description: `Currying is the process of transforming a function that takes multiple arguments into a sequence of functions that each take one argument.

Write a function called \`curry\` that takes a function and returns its curried version. It should also allow passing several arguments at once.

**Example**
- \`const add = (a, b, c) => a + b + c\`
- \`curriedAdd(1)(2)(3)\` → \`6\`
- \`curriedAdd(1, 2)(3)\` → \`6\``,
    difficulty: "hard",
    category: "functions",
    startCode: `const curry = (fn) => {
  // your code here
};`,
    testCases: [
      { input: "curry(add)(1)(2)(3) where add = (a,b,c) => a+b+c", expected: 6 },
      { input: "curry(add)(1,2)(3)", expected: 6 },
      { input: "curry(add)(1)(2,3)", expected: 6 },
      { input: "curry(add)(1,2,3)", expected: 6 },
      { input: "curry((a, b) => a * b)(3)(4)", expected: 12 },
    ],
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
    testCases: [
      { input: [1, [2, [3, [4, [5]]]]], expected: [1, 2, 3, 4, 5] },
      { input: [1, 2, 3], expected: [1, 2, 3] },
      { input: [], expected: [] },
      { input: [[[[1]]]], expected: [1] },
      { input: [1, [2, 3], [4, [5, 6]]], expected: [1, 2, 3, 4, 5, 6] },
      { input: [1, [2, [3, [4]]]], expected: [1, 2, 3, 4] },
    ],
  },
  {
    title: "Simple Promise from Scratch",
    description: `Write a class called \`MyPromise\` that mimics the basic behavior of a native JavaScript Promise. It should support:
- A constructor that takes an executor function with \`resolve\` and \`reject\`
- A \`.then(onFulfilled)\` method
- A \`.catch(onRejected)\` method`,
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
    testCases: [
      { input: "resolve(42) triggers .then() with 42", expected: true },
      { input: "reject('error') triggers .catch() with 'error'", expected: true },
      { input: ".then() is not called when rejected", expected: true },
      { input: ".catch() is not called when resolved", expected: true },
      { input: "executor runs synchronously", expected: true },
    ],
  },
  {
    title: "Throttle",
    description: `A throttle function ensures that a function can only be called once within a given time window, no matter how many times it is triggered.

Write a function called \`throttle\` that takes a function \`fn\` and a time limit in milliseconds, and returns a throttled version of it.`,
    difficulty: "hard",
    category: "closures",
    startCode: `const throttle = (fn, limit) => {
  // your code here
};`,
    testCases: [
      { input: "first call fires immediately", expected: true },
      { input: "subsequent calls within limit are ignored", expected: true },
      { input: "call after limit period fires again", expected: true },
      { input: "returns a function", expected: true },
    ],
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
    testCases: [
      { input: "aabbcde", expected: "c" },
      { input: "aabb", expected: null },
      { input: "abcabc", expected: null },
      { input: "a", expected: "a" },
      { input: "aab", expected: "b" },
      { input: "abba", expected: null },
      { input: "abcdef", expected: "a" },
    ],
  },
  {
    title: "Binary Search",
    description: `Binary search works on sorted arrays and finds a value by repeatedly cutting the search range in half.

Write a function called \`binarySearch\` that takes a sorted array of numbers and a target value, and returns the index of the target. If it is not found, return \`-1\`.

**Examples**
- \`binarySearch([1, 3, 5, 7, 9, 11], 7)\` → \`3\`
- \`binarySearch([1, 3, 5, 7, 9, 11], 6)\` → \`-1\``,
    difficulty: "medium",
    category: "arrays",
    startCode: `const binarySearch = (sortedArr, target) => {
  // your code here
};`,
    testCases: [
      { input: [[1, 3, 5, 7, 9, 11], 7], expected: 3 },
      { input: [[1, 3, 5, 7, 9, 11], 6], expected: -1 },
      { input: [[1], 1], expected: 0 },
      { input: [[], 5], expected: -1 },
      { input: [[1, 2, 3, 4, 5], 1], expected: 0 },
      { input: [[1, 2, 3, 4, 5], 5], expected: 4 },
      { input: [[10, 20, 30, 40, 50], 30], expected: 2 },
    ],
  },

  // ───────────── LEVEL 4 — Advanced ─────────────
  {
    title: "Pub/Sub System",
    description: `A pub/sub (publish/subscribe) system is a messaging pattern where publishers send messages to a channel without knowing who is listening.

Build a \`PubSub\` class with:
- \`subscribe(channel, callback)\` listens to a channel and returns an unsubscribe function
- \`publish(channel, data)\` sends data to all subscribers of that channel`,
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
    testCases: [
      { input: "subscribe() registers a callback for a channel", expected: true },
      { input: "publish() triggers the callback with data", expected: true },
      { input: "unsubscribe function returned by subscribe() stops the callback firing", expected: true },
      { input: "multiple subscribers on same channel all receive the publish", expected: true },
      { input: "publishing to a channel with no subscribers does not throw", expected: true },
    ],
  },
  {
    title: "Memoization",
    description: `Memoization is an optimization technique where you cache the result of a function call so that if you call it again with the same arguments, you return the cached result.

Write a function called \`memoize\` that takes a function and returns a memoized version of it.`,
    difficulty: "hard",
    category: "closures",
    startCode: `const memoize = (fn) => {
  // your code here
};`,
    testCases: [
      { input: "memoize((n) => n * n)(5) returns 25", expected: 25 },
      { input: "second call with same arg returns cached result without calling fn again", expected: true },
      { input: "different args are cached independently", expected: true },
      { input: "memoize((a, b) => a + b)(2, 3) returns 5", expected: 5 },
      { input: "returns a function", expected: true },
    ],
  },
  {
    title: "Middleware Pipeline",
    description: `Build a function called \`createPipeline\` that takes an array of middleware functions and returns a single function that runs them in order. Each middleware receives a \`context\` object and a \`next\` function to call the next middleware.

**Example**
- \`ctx.value\` starts at 5, pipeline does +1, *2, +10 → \`22\``,
    difficulty: "hard",
    category: "functions",
    startCode: `const createPipeline = (middlewares) => {
  // your code here
};`,
    testCases: [
      {
        input: "ctx.value = 5, middlewares: +1, *2, +10",
        expected: 22,
      },
      {
        input: "empty middlewares array, ctx is returned unchanged",
        expected: true,
      },
      {
        input: "single middleware runs correctly",
        expected: true,
      },
      {
        input: "middlewares run in order, not reversed",
        expected: true,
      },
    ],
  },
  {
    title: "Linked List",
    description: `A linked list is a data structure where each element holds a value and a reference to the next node.

Build a \`LinkedList\` class with:
- \`insert(value)\` adds a node at the end
- \`delete(value)\` removes the first node with that value
- \`search(value)\` returns \`true\` if the value exists, \`false\` otherwise
- \`toArray()\` returns all values as a plain array`,
    difficulty: "hard",
    category: "objects",
    startCode: `class LinkedList {
  insert(value) {}
  delete(value) {}
  search(value) {}
  toArray() {}
}`,
    testCases: [
      { input: "insert(1), insert(2), insert(3) → toArray() = [1,2,3]", expected: [1, 2, 3] },
      { input: "insert(1), insert(2), delete(2) → toArray() = [1]", expected: [1] },
      { input: "insert(1), search(1) = true", expected: true },
      { input: "insert(1), search(99) = false", expected: false },
      { input: "delete from empty list does not throw", expected: true },
      { input: "toArray() on empty list = []", expected: [] },
    ],
  },
  {
    title: "Deep Merge Objects",
    description: `Write a function called \`deepMerge\` that takes two objects and merges them together deeply. If both objects have the same key and both values are objects, merge them recursively. Otherwise, the second object's value overwrites the first.

**Example**
- \`deepMerge({ a: 1, b: { x: 1, y: 2 } }, { b: { y: 99, z: 3 }, c: 4 })\` → \`{ a: 1, b: { x: 1, y: 99, z: 3 }, c: 4 }\``,
    difficulty: "hard",
    category: "objects",
    startCode: `const deepMerge = (target, source) => {
  // your code here
};`,
    testCases: [
      { input: [{ a: 1, b: { x: 1, y: 2 } }, { b: { y: 99, z: 3 }, c: 4 }], expected: { a: 1, b: { x: 1, y: 99, z: 3 }, c: 4 } },
      { input: [{ a: 1 }, { b: 2 }], expected: { a: 1, b: 2 } },
      { input: [{}, { a: 1 }], expected: { a: 1 } },
      { input: [{ a: 1 }, { a: 2 }], expected: { a: 2 } },
      { input: [{ a: { b: { c: 1 } } }, { a: { b: { d: 2 } } }], expected: { a: { b: { c: 1, d: 2 } } } },
    ],
  },
  {
    title: "Stack and Queue",
    description: `Build two classes using only plain arrays:
- \`Stack\` with \`push(value)\`, \`pop()\`, and \`peek()\`
- \`Queue\` with \`enqueue(value)\`, \`dequeue()\`, and \`peek()\``,
    difficulty: "medium",
    category: "objects",
    startCode: `class Stack {
  push(value) {}
  pop() {}
  peek() {}
}

class Queue {
  enqueue(value) {}
  dequeue() {}
  peek() {}
}`,
    testCases: [
      { input: "Stack: push(1), push(2), pop() = 2", expected: 2 },
      { input: "Stack: push(1), push(2), peek() = 2 without removing", expected: 2 },
      { input: "Stack: pop() on empty returns undefined", expected: undefined },
      { input: "Queue: enqueue(1), enqueue(2), dequeue() = 1", expected: 1 },
      { input: "Queue: enqueue(1), enqueue(2), peek() = 1 without removing", expected: 1 },
      { input: "Queue: dequeue() on empty returns undefined", expected: undefined },
    ],
  },
  {
    title: "Async Queue",
    description: `Write a class called \`AsyncQueue\` that processes async tasks one at a time in the order they were added, even if multiple tasks are added at the same time.`,
    difficulty: "hard",
    category: "async",
    startCode: `class AsyncQueue {
  add(task) {
    // your code here
  }
}`,
    testCases: [
      { input: "tasks run in the order they were added", expected: true },
      { input: "next task starts only after previous one resolves", expected: true },
      { input: "a fast task added after a slow one does not jump ahead", expected: true },
      { input: "add() returns a promise that resolves when the task completes", expected: true },
    ],
  },
  {
    title: "Your Own Promise.all",
    description: `Write a function called \`myPromiseAll\` that works exactly like the native \`Promise.all\`. It resolves with all results when every promise resolves, or rejects as soon as one rejects.

**Examples**
- \`myPromiseAll([Promise.resolve(1), Promise.resolve(2)])\` → \`[1, 2]\`
- \`myPromiseAll([Promise.resolve(1), Promise.reject("error")])\` → rejects with \`"error"\``,
    difficulty: "hard",
    category: "async",
    startCode: `const myPromiseAll = (promises) => {
  // your code here
};`,
    testCases: [
      { input: "[Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]", expected: [1, 2, 3] },
      { input: "[Promise.resolve(1), Promise.reject('error')]", expected: "rejects with 'error'" },
      { input: "[]", expected: [] },
      { input: "[Promise.resolve('a')]", expected: ["a"] },
      { input: "preserves order of results regardless of resolution order", expected: true },
    ],
  },
  {
    title: "Rate Limiter",
    description: `Write a function called \`rateLimiter\` that takes a function \`fn\` and a maximum number of calls \`limit\` allowed per second. Extra calls within that second should be silently ignored.`,
    difficulty: "hard",
    category: "closures",
    startCode: `const rateLimiter = (fn, limit) => {
  // your code here
};`,
    testCases: [
      { input: "first N calls within 1 second fire", expected: true },
      { input: "calls beyond limit within 1 second are ignored", expected: true },
      { input: "after 1 second, limit resets and calls fire again", expected: true },
      { input: "returns a function", expected: true },
    ],
  },
  {
    title: "Dependency Injection Container",
    description: `Build a \`Container\` class with:
- \`register(name, factory)\` registers a service by name
- \`resolve(name)\` creates and returns the service, injecting any dependencies it needs

**Example**
- \`container.resolve("server").port\` → \`3000\``,
    difficulty: "legendary",
    category: "objects",
    startCode: `class Container {
  register(name, factory) {}
  resolve(name) {}
}`,
    testCases: [
      { input: "resolve() returns the result of the factory", expected: true },
      { input: "factory receives a resolve function to inject dependencies", expected: true },
      { input: "resolve('config').port = 3000 after registering config", expected: 3000 },
      { input: "resolve('server').port = 3000 when server depends on config", expected: 3000 },
      { input: "resolving an unregistered name throws an error", expected: true },
    ],
  },

  // ───────────── LEVEL 5 — Canonical Level ─────────────
  {
    title: "HTTP Router from Scratch",
    description: `Build a \`Router\` class that matches incoming HTTP-style requests to registered handlers, including path parameters like \`/users/:id\`.

- \`router.add(method, path, handler)\`
- \`router.match(method, path)\` returns the matching handler or \`null\``,
    difficulty: "legendary",
    category: "objects",
    startCode: `class Router {
  add(method, path, handler) {}
  match(method, path) {}
}`,
    testCases: [
      { input: "match('GET', '/users/42') returns handler registered for GET /users/:id", expected: true },
      { input: "handler receives { id: '42' } as params", expected: true },
      { input: "match('POST', '/users/42') does not match a GET route", expected: null },
      { input: "match('GET', '/unknown') returns null", expected: null },
      { input: "static route /about matches exactly", expected: true },
      { input: "multiple params like /users/:id/posts/:postId are extracted correctly", expected: true },
    ],
  },
  {
    title: "Validation Engine",
    description: `Build a function called \`validate\` that takes an object and a rules definition, and returns \`{ valid: boolean, errors: string[] }\`.

**Example**
- \`validate({ name: "A", age: 15 }, rules)\` → \`{ valid: false, errors: [...] }\``,
    difficulty: "legendary",
    category: "objects",
    startCode: `const validate = (data, rules) => {
  // your code here
};`,
    testCases: [
      { input: [{ name: "Alice", age: 25 }, { name: { required: true, type: "string", minLength: 2 }, age: { required: true, type: "number", min: 18 } }], expected: { valid: true, errors: [] } },
      { input: [{ name: "A", age: 15 }, { name: { required: true, type: "string", minLength: 2 }, age: { required: true, type: "number", min: 18 } }], expected: { valid: false, errors: ["name must be at least 2 characters", "age must be at least 18"] } },
      { input: [{}, { name: { required: true } }], expected: { valid: false, errors: ["name is required"] } },
      { input: [{ name: "Alice" }, { name: { type: "number" } }], expected: { valid: false, errors: ["name must be of type number"] } },
    ],
  },
  {
    title: "In-Memory Key-Value Store with TTL",
    description: `Build a class called \`KVStore\` where values expire after a set TTL (time to live).

- \`set(key, value, ttlMs)\`
- \`get(key)\` → value or \`null\` if expired
- \`delete(key)\``,
    difficulty: "legendary",
    category: "objects",
    startCode: `class KVStore {
  set(key, value, ttlMs) {}
  get(key) {}
  delete(key) {}
}`,
    testCases: [
      { input: "get() returns value before TTL expires", expected: true },
      { input: "get() returns null after TTL expires", expected: null },
      { input: "delete() removes the key immediately", expected: null },
      { input: "get() on nonexistent key returns null", expected: null },
      { input: "set() overwrites a previous value for the same key", expected: true },
    ],
  },
  {
    title: "Plugin System with Lifecycle Hooks",
    description: `Build a \`PluginSystem\` class where plugins hook into named lifecycle events.

- \`register(plugin)\` adds a plugin
- \`trigger(hookName, context)\` runs all registered functions for that hook`,
    difficulty: "legendary",
    category: "objects",
    startCode: `class PluginSystem {
  register(plugin) {}
  trigger(hookName, context) {}
}`,
    testCases: [
      { input: "trigger('onRequest', {}) runs all onRequest hooks", expected: true },
      { input: "context is passed through each plugin hook", expected: true },
      { input: "multiple plugins on same hook all run", expected: true },
      { input: "trigger on hook with no plugins returns context unchanged", expected: true },
      { input: "plugins with different hooks don't interfere", expected: true },
    ],
  },
  {
    title: "Template Engine",
    description: `Build a function called \`render\` that replaces \`{{ variableName }}\` placeholders with values from a data object. Unknown placeholders are left untouched.

**Example**
- \`render("Hello {{ name }}, you are {{ age }} years old.", { name: "Alice", age: 30 })\` → \`"Hello Alice, you are 30 years old."\``,
    difficulty: "hard",
    category: "strings",
    startCode: `const render = (template, data) => {
  // your code here
};`,
    testCases: [
      { input: ["Hello {{ name }}, you are {{ age }} years old.", { name: "Alice", age: 30 }], expected: "Hello Alice, you are 30 years old." },
      { input: ["No placeholders here.", {}], expected: "No placeholders here." },
      { input: ["{{ greeting }} world", { greeting: "Hello" }], expected: "Hello world" },
      { input: ["{{ unknown }} stays", {}], expected: "{{ unknown }} stays" },
      { input: ["{{ a }} and {{ b }}", { a: "foo", b: "bar" }], expected: "foo and bar" },
      { input: ["{{ x }}{{ x }}{{ x }}", { x: "ha" }], expected: "hahaha" },
    ],
  },
  {
    title: "Retry with Exponential Backoff",
    description: `Write a function called \`retry\` that calls an async function \`fn\` and retries on failure, waiting twice as long each time. Rejects with the last error if all retries fail.`,
    difficulty: "legendary",
    category: "async",
    startCode: `const retry = async (fn, maxRetries, initialDelay) => {
  // your code here
};`,
    testCases: [
      { input: "fn succeeds on first try, returns result immediately", expected: true },
      { input: "fn fails twice then succeeds, returns success result", expected: "success" },
      { input: "fn fails maxRetries times, rejects with last error", expected: true },
      { input: "delay doubles between each retry", expected: true },
      { input: "maxRetries = 0 means no retries, rejects on first failure", expected: true },
    ],
  },
  {
    title: "Task Scheduler",
    description: `Build a \`Scheduler\` class that runs functions at defined intervals and allows stopping them individually or all at once.

- \`schedule(name, fn, intervalMs)\`
- \`stop(name)\`
- \`stopAll()\``,
    difficulty: "legendary",
    category: "async",
    startCode: `class Scheduler {
  schedule(name, fn, intervalMs) {}
  stop(name) {}
  stopAll() {}
}`,
    testCases: [
      { input: "fn is called repeatedly at the given interval", expected: true },
      { input: "stop(name) halts only that task", expected: true },
      { input: "stopAll() halts every running task", expected: true },
      { input: "scheduling a task that already exists replaces it", expected: true },
      { input: "stop() on a non-existent task does not throw", expected: true },
    ],
  },
  {
    title: "Token Bucket Rate Limiter",
    description: `A token bucket holds tokens up to a capacity. Tokens refill at a constant rate. Each request consumes one token. Returns \`false\` when empty.

Build a \`TokenBucket\` class with a constructor taking \`capacity\` and \`refillRate\` (tokens/second), and a \`consume()\` method.`,
    difficulty: "legendary",
    category: "objects",
    startCode: `class TokenBucket {
  constructor(capacity, refillRate) {}
  consume() {}
}`,
    testCases: [
      { input: "consume() returns true when tokens are available", expected: true },
      { input: "consume() returns false when bucket is empty", expected: false },
      { input: "bucket starts full at capacity", expected: true },
      { input: "tokens refill over time at refillRate per second", expected: true },
      { input: "tokens do not exceed capacity after refill", expected: true },
    ],
  },
  {
    title: "State Machine",
    description: `Build a \`StateMachine\` class with defined transition rules.

- \`transition(action)\` moves to the next state or throws if not allowed
- \`getState()\` returns the current state

**Example transitions:** idle → start → running → pause → paused → resume → running`,
    difficulty: "hard",
    category: "objects",
    startCode: `class StateMachine {
  constructor(initialState, transitions) {}
  transition(action) {}
  getState() {}
}`,
    testCases: [
      { input: "getState() returns initial state", expected: "idle" },
      { input: "transition('start') from idle moves to running", expected: "running" },
      { input: "transition('pause') from running moves to paused", expected: "paused" },
      { input: "transition('start') from paused throws — invalid action", expected: "throws" },
      { input: "transition('stop') from running moves to idle", expected: "idle" },
      { input: "transition('resume') from paused moves to running", expected: "running" },
    ],
  },
  {
    title: "Observable Pattern",
    description: `Build a class called \`Observable\` with:
- \`subscribe(fn)\` registers a listener and returns an unsubscribe function
- \`set(value)\` updates the value and notifies all subscribers
- \`get()\` returns the current value`,
    difficulty: "hard",
    category: "objects",
    startCode: `class Observable {
  constructor(initialValue) {}
  subscribe(fn) {}
  set(value) {}
  get() {}
}`,
    testCases: [
      { input: "get() returns initial value", expected: 0 },
      { input: "set(1) updates value and notifies subscriber with 1", expected: 1 },
      { input: "unsubscribe() stops the subscriber from being notified", expected: true },
      { input: "multiple subscribers all get notified on set()", expected: true },
      { input: "unsubscribing one does not affect other subscribers", expected: true },
      { input: "get() returns latest set value", expected: true },
    ],
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
