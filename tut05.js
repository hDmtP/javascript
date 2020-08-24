console.time();

console.log('Welcome to tut05');
let myVar=String(11);
// console.log(myVar, typeof(myVar));
let dAte= String(new Date());
console.log(dAte, typeof(dAte));

let i = 2;
console.log(i.toString());

let nUmber=parseFloat('45.0123');
console.log(nUmber.toFixed(7), typeof(nUmber)); //--> print upto decimal '7'


// type coertion

let myStr="789";
let myNum=456;
console.log(myNum+myStr);
console.timeEnd();
console.clear();