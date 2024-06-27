// let user={
// we want to pass into key value pairs
// name:"Nielit",// age:22,}
// console.log(user.name);
// let user1=["nielit",22];
// console.log(user1[1]);
// const user={// name:"Nielit",// age:22,// location:"chennai",// email:"nielit@edu.in",
// workingdays:["Monday","Tuesday","Wednesday","Thursday","Friday"],}
// user.email="nielitChennai@edu.in"
// console.log(user.email);
// console.log(user.workingdays[4]);
// Object.freeze(user);
// user.name="NielitChennai";
// console.log(user,22);
// user.userGreeting=function(){
// console.log("Hello");}
// console.log(user.userGreeting());

const user = new Object()
user.id = "1234",
user.name = "Nielit",
user.logIn = true
console.log(user);
let user2 ={ }
console.log(user2);
const admin={
email:"nielit@gmail.com",
fullName:{ username:{firstName:"nielit",lastName:"Chennai"}}}
console.log(admin.fullName.username.lastName);

const obj1 = {
    1:"1",
    2:"2",
    3:"3",
}
const obj2 = {
    4:"4",
    5:"5",
    6:"6",
}
const obj3 = {
    ...obj1,obj2
 }
const obj3 =Object.assign(obj1, obj2)
console.log(obj3);
