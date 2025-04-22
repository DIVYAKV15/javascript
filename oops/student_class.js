//5 student details print cheyanam 
class Student {
    stdName;
    stdId;
    dept;
    year;
    constructor(name, id, dept, year) {
        this.stdName = name;
        this.stdId = id;
        this.dept = dept;
        this.year = year;

    }
    display() {
        console.log(`student name is ${this.stdName},student id is ${this.stdId},dept is ${this.dept} and studying in ${this.year}`);

    }
}
const std = new Student('A', 1, 'BE', 1);
std.display();
const std1 = new Student('A', 1, 'BE', 1);
std1.display();
const std2 = new Student('A', 1, 'BE', 1);
std2.display();
const std3 = new Student('A', 1, 'BE', 1);
std3.display();
const std4 = new Student('A', 1, 'BE', 1);
std4.display();

//another method- here when we create the object the constructor is invoked and inside the constructor function is there so function called automatically 

console.log('--//another method---');

class Student2 {

    constructor(name, id, dept, year) {
        this.stdName = name;
        this.stdId = id;
        this.dept = dept;
        this.year = year;
        this.display();
    }
    display() {
        console.log(`student name is ${this.stdName},student id is ${this.stdId},dept is ${this.dept} and studying in ${this.year}`);

    }
}
const sd = new Student2('A', 1, 'BE', 1);

const sd1 = new Student2('A', 1, 'BE', 1);

const sd2 = new Student2('A', 1, 'BE', 1);

const sd3 = new Student2('A', 1, 'BE', 1);

const sd4 = new Student2('A', 1, 'BE', 1);

