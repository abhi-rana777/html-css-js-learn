var createStudent = function(name,age) {
  var Student = {
    name: name,
    age: age,
    birthday: function() {
      this.age++;
    }
  }
  return Student;
}

var student1 = createStudent("David", 20);
var student2 = createStudent("Marcus", 30);

console.log(student1.name, student1.age);
console.log(student2.name, student2.age);

// updating age on birthday
student1.birthday();
console.log(student1.name, student1.age);;
