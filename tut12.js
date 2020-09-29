console.log("Helo there!");
let a = document;
/*
a = document.all;
a = document.body;
a = document.forms;
*/
/*
Array.from(a).forEach(function(element) {
    console.log(element);
})
*/
a = document.links[0].href;
a = document.scripts;
a = document.images;
console.log(a);