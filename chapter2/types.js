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


console.log(c[0]);  // 结果为hi
console.log(d[0]);  // 结果为hi

/**
  c和d包含了对值的相同引用.因此,当通过c修改数组的第一个元素是,a响应的值也更改了,也就是说 c[0] === d[0]
 */