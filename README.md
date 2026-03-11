1...What is the difference between var, let, and const?
Answer : If we declare a variable with let, its value can be changed later, and if we declare a variable with constant,
        it cannot be changed.
ex-- let 
let x = 10;
x = 20; 
console.log(x); // 20

ex--const
const x = 10;
x = 20;
console.log(x); //error dibee.

2..What is the spread operator (...)?
Answer : The spread operator is used to expand an array.
ex--spread operator---
const arr1 = [1, 2, 3, 4, 5]
const arr2 = [...arr1, 6, 7, 8, 9, 10]
console.log(arr2); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

3.. What is the difference between map(), filter(), and forEach()?
Answer : Map-The map executes a callback on each element of the array and returns a new array.
      forEach-forEach, it runs the callback on all the elements of the array and does not return a new array.
      filter-Filters elements from an array and returns a new array.
ex-- map
let numbers = [1, 2, 3, 4, 5]
let doubled = numbers.map(function(num){
      return num*2;
});
console.log(doubled);//[2, 4, 6, 8, 10]
ex-forEach
let numbers = [1, 2, 3, 4]
numbers.forEach(function(num){
      console.log(num*2);
}):
o/p: 2, 4, 6, 8
ex-filter
let numbers = [10, 15, 30, 5, 40]
let bigNumber = numbers.filter(num => num>20);
console.log(bigNumber)://[30, 40]

4..What is an arrow function?
Answer : How to write code short and simple.
ex--Arrow Function:
//simple function
function sum(a,b){
    const total = a+b;
    return total;
};
//arrow function
const sum = (a,b) => a+b;

5..
Answer : Template Literals are a feature of JavaScript (ES6) that allows you to easily write strings,
         insert variables, and create multi-line strings.
ex--Templete String :
const text = `
Hello
How are you
I am Siam
`;
console.log(text);
//o/p
Hello
How are you
I am Siam

ex--
const name = "Siam";
const card = `
<div>
  <h3>${name}</h3>
</div>
`;

