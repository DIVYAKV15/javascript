//[1000,'Neel','developer,'kochi',25000,3]
class Employee {
    // properties - create a variable
    empId
    empName
    empDesg
    // constructor - initialize the value
    constructor(name, id, designation) {
        this.empId = id // within the class anaengil this ketword use cheyyanam
        this.empName = name
        this.empDesg = designation
    }
    // methods
    display() {
        console.log(`name of the employee is ${this.empName}`); //accessing inside the class other than created place so need to use this keyword

    }
}
//
const emp = new Employee('dhi', 1, 'it')//instance of a class
//object store cheyytula real memory location nae reference nu paraya
emp.display();
console.log(emp.empDesg); //outside the class if we want to access the properties no need to give this keyword

