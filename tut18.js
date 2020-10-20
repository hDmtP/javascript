console.log("tis id tut 18");
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

// document.querySelector(".no").addEventListener('mouseenter', function () {
//     console.log("tutudud");
// })
// document.querySelector(".no").addEventListener('mouseleave', function () {
//     console.log("you leaved the cursor");
// })
document.querySelector(".container").addEventListener('mousemove', function (e) {
    console.log("you triggered mouse move event");
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, ${e.offsetX+e.offsetY})`;
    console.log(e.offsetX,e.offsetY);
})