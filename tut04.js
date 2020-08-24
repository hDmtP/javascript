console.time();

                 /*Primitive Datatypes */
//String
var name="Dhara";
console.log("my string is "+ name);
console.log("my Datatype is "+ (typeof name));

//Numbers
let marks=11.01;
console.log("my Datatype is "+ (typeof marks));

//Boolean
let canDrive=true;
console.log("my Datatype is "+ (typeof canDrive));

//Null
let nulldType=null;
console.log("my Datatype is "+ (typeof nulldType)); //-->object

//Undefined
let undef=undefined;
console.log("my Datatype is "+ (typeof undef));


                 /*Reference Datatypes */
//Arrays
let myArr=[12,23,45,56,67, true, "string"];
console.log("my Datatype is "+ (typeof myArr));

// Object Literals
let stMarks = {
    harry: 89,
    Shubham: 36,
    Rohan: 34
}
console.log("my Datatype is "+ (typeof stMarks));



function myFuture(){
    
}
console.log("my Datatype is "+ (typeof myFuture));

let date=new Date();
console.log("my Datatype is "+ (typeof date));



console.clear();

console.timeEnd();