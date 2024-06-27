//datatypes
//In js 2 type of datatypes:-
//1)Primitive datatypes
//1.number => 1,2,3... //2.string => 'helo',"helo",`hello` //3.boolean => true,false
//4.undefined => 
   // let a
//console.log(a);//
//5.null => standalone value
//let b= null
//console.log(b);//
//6.symbol => unique value//7.bigint => very large number

//2)Non-Primitive datatypes(reference data type)
//1.object //2.array //3.function
//let user={ 
    //name:"NIELIT",
    //age:24,
   // isAdmin:true,
   // fullName: { }}//
//let arr=["html",22,]
//console.log(typeof user);
//console.log(typeof arr);
//***************************************** */
//let age="24";
//let logIn=true;
//console.log(typeof logIn);
//console.log(typeof(age));
// to convert string into number
//let num=String(age)
//console.log(typeof num);//

//Operators
//console.log(2>1);
//console.log(2<1);//
//console.log(2==1);//
// >,<,,>=,<=,===,!=,!==
//===will check both value and datatype
//console.log("2"=== 2);//

//Datatypes have 2 types of memory:-
//stack and heap
//stack => stores primitive datatype
let user="nieilt"
let anotherUser=user;
anotherUser="Admin"
console.log(user);
console.log(anotherUser);
//heap => stores non-primitive datatype
let user1={
    name:"nielit",
    age:20
}
let user2=user1;
user2.name="nielitchennai"
console.log(user1.name);
console.log(user2.name);
