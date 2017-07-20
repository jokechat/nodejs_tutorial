function Dog(){
}

Dog.prototype.eat = function (){
  console.log("eat function");
  
};

var  dog = new Dog();
dog.eat();
