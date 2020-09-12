console.time('your code took');
let name = "pritam";
// let html;
// html = "<h3> dhara </h3>"+"<p> hdmtp </p>";
// html = html.concat(' this', ' is');

// console.log(html);
// console.log(html.length);
// console.log(html.toUpperCase());
// console.log(html[24]);
// console.log(html.indexOf('dhara'), html.indexOf('vjbdvibv'));
// console.log(html.lastIndexOf(">"), html.charAt(17));
// console.log(html.endsWith('is'), html.includes('h3>'));
// console.log(html.substring(4,9), html.slice(4,9), "|---|", html.slice(-18));
// console.log(html.substring(-5));

// console.log(html.split(" "), html.split(">"));
// console.log(html.replace('this', 'these'));

let fruit = ['orange', 'apple', 'banana'];
let myHtml = `Hello ${name} 
<h1> This is a Heading </h1>
<p> You like ${fruit[0]} and ${fruit[1]}</p>
`;

document.body.innerHTML = myHtml;
console.timeEnd('your code took');
console.clear()