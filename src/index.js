"use strict";

function MyArray(array) {
  this.array = array;
}

MyArray.prototype.myReduceRight = function(callback, ...rest) {
  const arr = this.array;
  let result;
  if (rest.length > 0) {
    result = rest[0];
    for (let i = arr.length - 1; i >= 0; i -= 1) {
      result = callback(result, arr[i], i, arr);
    }
  } else {
    result = arr[arr.length - 1];
    for (let i = arr.length - 1; i > 0; i -= 1) {
      result = callback(result, arr[i - 1], i, arr);
    }
  }
  return result;
}

const newArray = new MyArray([1, 2, 3, 4, 5, 6, 7, 8]);
console.log(newArray.myReduceRight((a, b) => a + b))

const newArray2 = new MyArray(["a", "d", "s", "r"]);
console.log(newArray2.myReduceRight((a, b) => a.concat(b)));

const newArray3 = new MyArray([
  { name: "Ann", books: ["HP", "Pyton"], age: 30 },
  { name: "Jhon", books: ["JS", "Hibernate"], age: 20 },
  { name: "Bill", books: ["Java", "SQL"], age: 35 },
])
console.log(newArray3.myReduceRight((a, b) => [...a, ...b.books], []));
