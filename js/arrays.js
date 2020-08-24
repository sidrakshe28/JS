console.log(" arrays and objects");

const marks=[14,23,234,93];
const fruits=['orange','apple','pineapple'];
const mixed=['str','89',[3,5]];

const arr= new Array(23,123,21,'orange');
console.log(arr);
//console.log(mixed);
//console.log(fruits[1]);

//console.log(arr.length);
//console.log(Array.isArray(arr));//will return true if its a array
arr[0]= 'harry';
let arrele=arr[0];
//console.log('element:',arrele);
//console.log(arr);

let value=marks.indexOf(34);
console.log(value);

//mutating or modifying arrays
//marks.push(34);//push is adding into the array into the last
//marks.unshift(0089);// unshift adds element at the start in the array
//marks.pop( );//removes element from the last
//marks.shift();//removes element of the start from the array
//marks.splice(1,2);//removes two elements starting from one to two.
marks.reverse();//reverse the array
console.log(marks);

let myobj={
    name:"sid",
    channel:"code",
}
console.log(myobj);
console.log(myobj.channel);

