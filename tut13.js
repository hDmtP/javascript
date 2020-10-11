/*
Element Selectors
1. Single element selector
2.Multi-element selector
 */

/*1. Single Element selector*/
let element = document.getElementById('first');
// element = element.className;
// element = element.childNodes;
// element = element.parentNode;
/*
element.style.color = 'violet';
element.innerText = 'https://codewithharry.com/videos/javascript-tutorials-in-hindi-14';
element.innerHTML = '<b>https://codewithharry.com/videos/javascript-tutorials-in-hindi-14</b>';
*/
/*
let sel = document.querySelector('div');
sel = document.querySelector('.child');

sel.style.color = 'green';
console.log(sel);
*/

/*2. Multi Element Selector */

let elems = document.getElementsByClassName('child');
// elems = document.getElementsByClassName('div');

console.log(elems);

for (let index = 0; index < elems.length; index++) {
    const element = elems[index];
    console.log(element);
    element.style.color = 'blue';
}