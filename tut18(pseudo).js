console.log("tis id tut 18(pseudo)");
// let btn = document.getElementById("btn");
// console.log(btn);
// // btn.addEventListener("click", func1);
// btn.addEventListener("dblclick", func2);
// function func1(e) {
//     console.log("Thanks", e);
//     e.preventDefault();
// }
// function func2(e) {
//     console.log("Thanks------", e);
//     e.preventDefault();
// }

document.querySelector(".no").addEventListener('mouseenter', () => console.log("tututdudu"));

document.querySelector(".no").addEventListener('mouseleave', () => console.log("you leaved the cursor"));

document.querySelector(".container").addEventListener('mousemove', (e) => document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, ${e.offsetX+e.offsetY})`);

document.querySelector(".container").addEventListener('mousemove', (e) => console.log(e.offsetX, e.offsetY) + console.log("You triggered mousemove event"));