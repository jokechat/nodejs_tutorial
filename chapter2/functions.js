
var s = 45;
console.log(typeof s);

// 函数的参数数量
var a = function (a, b, c){}
// 参数数量,可以根据此参数提供不同的功能
console.log(a.length);


// 闭包
// 在某个作用域定义的变量只能在该作用域或者内部作用域中才能访问的到
var b = 5;
var d = 10;
function woot()
{
  console.log(d);

  console.log(b);
  
  // 以下注释不注释  结果截然不同  留待疑惑
  // @todo 
  var b  = 7;

}
woot();