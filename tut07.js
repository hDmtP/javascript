console.time('your code took');
console.log("Arrays")
const mark = [12, 587, 698, 563];
const fruits = ['orange', 'apple', 'pineapple'];
const mixed = ['str', 8, [32, 5]];

const arr = new Array(23, 123,21, 'orange');
// console.log(arr);
// console.log(arr.length);
console.log(mark);
// console.log(fruits);
// console.log(mixed);
// console.log(Array.isArray(arr));
// arr[2]='hdmtp';
// console.log(arr);

/*let value = mark.indexOf(698);
console.log(value);
*/

//Mutating or Modifying arrays
/*
mark.push(75321);
mark.unshift(1024);
mark.pop();
mark.shift();
mark.splice(1, 2);
mark.reverse()
console.log(mark);
*/
let myobj = {
    'first name': 'dhara',
    channel: 'hDmtP645',
    isActive: true,
    nums: [1,5,3,6]
}
console.log(myobj)
console.log(myobj['channel'])
console.log(myobj['isActive'])
console.log(myobj.channel)
console.log(myobj.nums)
console.timeEnd('your code took');
console.clear()