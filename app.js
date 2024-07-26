// 70
function concatStrings(obj) {
  let result = ''
  let arr = [{ value: obj }]
  for (let i = 0; i < arr.length; i++) {
    let { value } = arr[i]
    for (let key in value) {
      if (typeof value[key] == "object") {
        arr.push({ value: value[key] })
      } else {
        result += value[key]
      }
    }
  }
  return result
}
const obj = {
  a: "Hello",
  b: {
    c: " ",
    d: {
      e: "World",
      f: {
        g: "!"
      }
    }
  }
};
// console.log(concatStrings(obj)); // Output: "Hello World!"



// 71
function sortByLength(str = '') {
  let arr = str.split(" ").sort((a, b) => a.length - b.length)
  return arr.join(" ")
}
// console.log(sortByLength("short longest medium")); // Output: "short medium longest"
// console.log(sortByLength("a quick brown fox")); // Output: "a fox quick brown"


// 72
function findNumbers(obj) {
  let result = []
  let arr = [{ value: obj }]
  for (let i = 0; i < arr.length; i++) {
    let { value } = arr[i]
    for (let key in value) {
      if (typeof value[key] === "object") {
        arr.push({ value: value[key] })
      } else {
        result.push(value[key])
      }
    }
  }
  return result
}

// Test case
const obj2 = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: {
        g: 4
      }
    }
  }
};
// console.log(findNumbers(obj2)); // Output: [1, 2, 3, 4]


// 73
function longestWord(str = []) {
  let arr = str.split(" ").sort((a, b) => b.length - a.length)
  return arr[0]
}

// Test case
// console.log(longestWord("Find the longest word in this sentence")); // Output: "sentence"
// console.log(longestWord("JavaScript is awesome")); // Output: "JavaScript"



// 74
function reverseUpperCase(str = '') {
  let arr = str.toUpperCase().split("").reverse()
  return arr.join("")
}

// Test case
// console.log(reverseUpperCase("Hello World")); // Output: "DLROW OLLEH"
// console.log(reverseUpperCase("JavaScript")); // Output: "TPIRCASAVAJ"


// 75
function extractNumbers(s = '') {
  let arr = s.split("")
  let result = []
  arr.forEach(item => {
    if (!isNaN(item) && item !== ' ') {
      result.push(+item)
    }
  })
  return result
}

// Test case
// console.log(extractNumbers("There are 3 apples and 4 oranges")); // Output: [3, 4]
// console.log(extractNumbers("123 Main St.")); // Output: [123]



// 76 
function valueTypes(obj) {
  let result = []
  let arr = [{ value: obj }]
  for (let i = 0; i < arr.length; i++) {
    let { value } = arr[i]
    for (let key in value) {
      if (typeof value[key] === "object" && !Array.isArray(value[key]) && value[key] != null) {
        arr.push({ value: value[key] })
      } else {
        result.push(typeof value[key])
      }
    }
  }
  return result
}

// Test case
const obj3 = {
  a: 1,
  b: "string",
  c: true,
  d: {
    e: 3.14,
    f: null,
    g: {
      h: undefined,
      i: [1, 2, 3]
    }
  }
};
// console.log(valueTypes(obj3));
// Output: ["number", "string", "boolean", "number", "object", "undefined", "object"]

function invertObject(obj) {
  let result = {}
  let arr = [{ value: obj }]
  for (let i = 0; i < arr.length; i++) {
    let { value } = arr[i]
    for (let key in value) {
      if (typeof value[key] === "object") {
        arr.push({ value: value[key] })
      } else {
        result[value[key]] = key
      }
    }
  }
  return result
}
const obj4 = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: {
        g: 4
      }
    }
  }
};
// console.log(invertObject(obj4)); // Output: { 1: 'a', 2: 'c', 3: 'e', 4: 'g' }


// 78
function isPalindrome(s = '') {
  let arr = s.toLowerCase().split("").filter(item => item != " " && item != ',')
  return arr.join("") == arr.reverse().join("") ? true : false
}

// Test case
// console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
// console.log(isPalindrome("Hello, World!")); // Output: false


// 79
function sumNumbers(obj) {
  let sum = 0
  let arr = [{ value: obj }]
  for (let i = 0; i < arr.length; i++) {
    let { value } = arr[i]
    for (let key in value) {
      if (typeof value[key] === "object") {
        arr.push({ value: value[key] })
      } else {
        sum += value[key]
      }
    }
  }
  return sum
}

// Test case
const obj5 = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: {
        g: 4
      }
    }
  }
};
// console.log(sumNumbers(obj5)); // Output: 10


// 80
function capitalizeWords(s = '') {
  let result = []
  let arr = s.split(" ")
  for (let item of arr) {
    result.push(item[0].toUpperCase() + item.slice(1).toLowerCase())
  }
  return result.join(" ")
}

// Test case
// console.log(capitalizeWords("hello world from javascript")); // Output: "Hello World From Javascript"
// console.log(capitalizeWords("this is a test")); // Output: "This Is A Test"
