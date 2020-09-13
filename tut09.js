console.log("for, do, while loop in JS");

// for (let i = 0; i < 100; i++) {
//    console.log(i);
// }

// let j = 0;
// while (j<144) {
//     console.log(j);
//     j++;
// }

// k=60
// do {
//     console.log(k);
//     k++;
// } while (k<145);

let arR = [2,5,6,4,2,3];
arR.forEach(function(element, index, array, ck) {
    console.log(element, index, array, ck);
})

// for (let i = 0; i < arR.length; i++) {
//     const element = arR[i];
//     console.log(element);
// }

let obj = {
    name: "hDmtP466",
    age: 17,
    type: "undefined",
    os: "Windows 10"
}

for(let key in obj){
    console.log(`${key}=${obj[key]}`);
}
console.clear()