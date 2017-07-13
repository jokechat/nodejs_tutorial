var a = 'hi';
var b = new String('hi');

console.log(a+b); // 结果是hihi

console.log(typeof a);  // 结果是string
console.log(a instanceof String); //结果是 false
console.log(b instanceof String); //结果是 true