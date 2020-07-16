function Student(name,age){
  this.name = name;
  this.age = age;
  this.birthday = function(){
    this.age++;
  }
}

var student1 = new Student("Dave", 50);
var student2 = new Student("Skipper", 20);

console.log(student1.name, student1.age);
console.log(student2.name, student2.age);

student1.birthday();
console.log(student1.name, student1.age);
