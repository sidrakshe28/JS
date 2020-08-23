
//concat
console.log('we are at tutorial 6');
const name='siddhika';
const greeting='good morning ';
//console.log(greeting +" " + name);

let html;
html="<h1> this is heading </h1>"+
     "<p> this is my para </p>";

html=html.concat('this');
//console.log(html);
 
//length
//console.log(html.length);
//lowercase
//console.log(html.toLowerCase());
//uppercase
//console.log(html.toUpperCase());

//indexing
//console.log(html[1]);

//indexof function
//console.log(html.indexOf ('this'));
// console.log(html.lastIndexOf('<'));
// console.log(html.includes('is'));
// console.log(html.substring(1,5));
//console.log(html.slice(4));
//console.log(html.replace('this','it'));


let fruit1="orange";
let fruit2="apple";
let myhtml=`hello ${name}
            <h1> this is heading </h1>
            <p>you like ${fruit1} and ${fruit2}`;
            
document.body.innerHTML= myhtml;