// What is array?//
// In array we can store multiple values in single variables
const arr=[1,2,3,4,5,6,7,8,9,10,"Nielit",true];
const newArr = new Array(1,2,3,4,5)
console.log(newArr);
// array methods//

let course = ["HTML","CSS","JS"]
console.log(course.length);
console.log(course);

// push and pop //
course.push("React-js")//adds new element in array at end// 
course.pop()// removes the last element from array//

// join// 
const fruits = ["apple","orange","banana"]
const newfr = fruits.join("*")/
console.log(newfr);
console.log(fruits)

// shift & unshift// 
let num=[1,2,3,4,5,6,7]
num.shift()//remove element from start// 
num.unshift(0)// add element in start//
 console.log(num);

// at//
let fruit=fruits.at(2)// 
console.log(fruit);//
const topic1 = ["html","css","js"] 
const topic2 = ["react","node"]
const finalTopic = topic1.concat(topic2)
console.log(finalTopic);
let number = [[1,2],[3,4],[5,6]]
let num2 = number.flat();
console.log(num2);

//slice and  splice//
let arr = [1,2,3,4,5,6,7,8,9,10];
console.log("1",arr);
//slice
const num1 = arr.slice(1,3)
console.log(num1);
console.log("2",arr);
//splice
const num2 = arr.splice(1,3)
console.log("3",arr);
console.log(num2);
