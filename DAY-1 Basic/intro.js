let a = 10;
// const b = 20;
a = 30;
b = 30;

let array = [1, 2, 3, 4, 5];

array.map(function (value, index) {
  console.log(value);
});

// destructing
let n1 = array[0];
let n2 = array[1];
let n3 = array.slice(2); // [3,4]

let [l1, l2, l3, ...l4] = array;
console.log(l3, l4);

let s1 = [10, 20, 30, 40, 50];
let s2 = [100, 200, 300, 400];
let s3 = [...s1, ...s2];

console.log(s3);

// let add = function(a,b){
//     return a + b
// }

// arrow function
// let add = (a, b) => a + b;

let add = (a, b) => {
  return a + b;
};

let result = add(10, 30);
