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


