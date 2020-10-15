// BEFORE HAVING A LOOK AT THE CODE PLEASE SEE THE OUTPUT AT THE CONSOLE FOR MORE ACCURACY IN UNDERSTANDING



let element = document.createElement('li');
let text = document.createTextNode('I am a text node');
element.appendChild(text);
console.log(element,text);


// Add a class name to the li element
element.className = 'childul';
element.id = 'createdLi';
element.setAttribute('title', 'mytitle');

// element.innerText = '<b>jnvfjvf jofnvij bonbionb jg</b>';
// element.innerHTML = '<b>jnvfjvf jofnvij bonbionb jg</b>';

let ul = document.querySelector('ul.this');
ul.appendChild(element);
console.log(ul);


let elem2 = document.createElement('h3');
elem2.id = "elem2";
elem2.className = "elem2";
let tnode = document.createTextNode('This is a text node');
elem2.appendChild(tnode);
console.log(elem2);


element.replaceWith(elem2);
console.log(element);

// let myul = document.getElementById('myul');
// myul.replaceChild(element, document.getElementById('fui'));
// myul.removeChild(document.getElementById('lui'));
// console.log(myul);


let pr = elem2.hasAttribute('href');
elem2.removeAttribute('id');
elem2.setAttribute('title', 'myelem2title');
console.log(elem2,pr);


// quiz
let quiz = document.createElement('p');
quiz.innerHTML = '<h4>Go To CodeWIthHarry</h4>'
// let text2 = document.createTextNode('Go To CodeWithHarry');
quiz.setAttribute('href','//codewithharry.com');
quiz.setAttribute('target','_blank');
// quiz.appendChild(text2);
console.log(quiz);




