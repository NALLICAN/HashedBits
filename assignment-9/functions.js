// 1. Variable Scope: var, let, const
function variableScopeDemo() {
  var x = 1;      // function scoped
  let y = 2;      // block scoped
  const z = 3;    // block scoped and cannot be reassigned

  console.log("var x:", x);
  console.log("let y:", y);
  console.log("const z:", z);
}

// 2. Return Second Fruit in Array
const fruits = ["Apple", "Banana", "Cherry", "Mango", "Orange"];

function getSecondFruit() {
  return fruits[1]; // "Banana"
}

// 3. Add and Remove Element from Array
function modifyArray(arr) {
  arr.push("newElement");
  arr.pop();
  return arr;
}

// 4. Square Numbers Using map()
const numbers = [1, 2, 3, 4, 5];

function squareNumbers(arr) {
  return arr.map(num => num * num);
}

// 5. Filter Out Even Numbers Using filter()
function getOddNumbers(arr) {
  return arr.filter(num => num % 2 !== 0);
}

// 6. Greeting from person Object
const person = {
  name: "Yeshwanth",
  age: 22,
  occupation: "Developer"
};

function greetPerson(obj) {
  console.log(`Hello, my name is ${obj.name}, I am ${obj.age} years old and I work as a ${obj.occupation}.`);
}

// 7. Calculate Area of Rectangle
function getRectangleArea(dimensions) {
  return dimensions.width * dimensions.height;
}

// 8. Get Object Keys Using Object.keys()
function getObjectKeys(obj) {
  return Object.keys(obj);
}

// 9. Merge Two Objects Using Object.assign()
function mergeObjects(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}

// 10. Sum of Array Using reduce()
function sumArray(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

// ===== Example Calls for Testing (Uncomment to test) =====
// variableScopeDemo();
// console.log("Second fruit:", getSecondFruit());
// console.log("Modified array:", modifyArray([1, 2, 3]));
// console.log("Squared numbers:", squareNumbers(numbers));
// console.log("Odd numbers:", getOddNumbers(numbers));
// greetPerson(person);
// console.log("Area of rectangle:", getRectangleArea({width: 10, height: 5}));
// console.log("Object keys:", getObjectKeys(person));
// console.log("Merged object:", mergeObjects({a: 1}, {b: 2}));
// console.log("Sum of array:", sumArray(numbers));