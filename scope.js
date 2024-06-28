//in js we have 2 scope:
//global scope
//local scope
 var a = 10
 let b = 20
const c = 30
{
     a = 20
    console.log(a);
    console.log(b);
   console.log(c);
 }
//hosting
let x
console.log(x);
a = 10;
let y
console.log(y);
x = 10
console.log(x);

let nieilt = function(){
 return"Welcome";
}
 function js() {
    console.log("hello");
 }
js()
