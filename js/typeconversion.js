//type conversion and coercion
console.log("type conversion and coercion");

let myvar;
myvar = String(34);


let booleanVar = String(true);
console.log(booleanVar, (typeof booleanVar));

let stri=Number("3434");
stri =Number("343d4");
stri=Number(false);
stri= Number([1,2,3,4,5,6,8,9]);
//console.log(stri,  (typeof stri));


let number= parseFloat('34.098');
console.log(number.toFixed(2), (typeof number));

//type coercion

let mystr= Number("698");
let mynum=34;
console.log(mystr+mynum);