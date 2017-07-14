var a = 'hi';
var b = new String('hi');

console.log(a+b); // 结果是hihi

console.log(typeof a);  // 结果是string
console.log(a instanceof String); //结果是 false
console.log(b instanceof String); //结果是 true

console.log(a.substr == b.substr); // 结果是 true

// 使用 == 操作符判断时两者相等,使用 === 操作符判断时并不相同
console.log(a == b)// 结果是 true 
console.log(a === b)// 结果是 false


// 在条件表达式中,一些特定的值会被判定为 false
console.log('特定的值会被判断为false');

console.log(0 == false);  // 结果是 true
console.log(0 === false); // 结果是 false

// 特别注意  typeof 把 null 识别为 object
console.log(typeof null); // 结果是 object

