// 基本类型
var a = 5;
var b = 6;
b = 6;
console.log(a); // 结果为5
console.log(b); // 结果为6


// 复杂类型
var c = ['hello','jokechat'];
var d = c;
d[0]  = 'hi';


console.log(c[0]);
console.log(d[0]);