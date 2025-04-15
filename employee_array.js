//nested array

//[id, name, designation, location, salary, experience]

employee = [
    [1000, 'Neel', 'developer', 'kochi', 25000, 3], //employee[0][0],[0][1]
    [1001, 'Max', 'tester', 'TVM', 20000, 2],
    [1002, 'MAxwell', 'QA', 'kochi', 35000, 4],
    [1003, 'Vyom', 'QA', 'kochi', 45000, 5],
    [1004, 'Laisha', 'tester', 'TVM', 55000, 7],
    [1005, 'Aahan', 'developer', 'TVM', 15000, 1],
    [1006, 'Aahil', 'QA', 'kochi', 20000, 2],
    [1007, 'Shayan', 'developer', 'kochi', 30000, 3],
    [1008, 'Nihaan', 'developer', 'TVM', 25000, 3]
]

// print all employee name 
console.log('---------------');

console.log(' print all employee name ');

for (let item of employee) { //  [1000,'Neel','developer','kochi',25000,3], //  [1001, 'Max', 'tester', 'TVM', 20000, 2],
    let name = item[1] // 
    console.log(name);

}

//print total numbers of employee
console.log('---------------');
total_number = employee.length
console.log(total_number);


//print developer employee details
console.log('---------------');
console.log('developer employee details');

employee_name = 'developer'
for (item of employee) {

    if (item[2] == employee_name) {
        console.log(item);
    }
}

//print employee name whose salary > 30000
console.log('---------------');
console.log('employee name whose salary > 30000');

salary = 30000

for (let item of employee) {

    employee_salary = item[4]
    if (employee_salary >= salary) {

        console.log(item[1]);

    }
}



// print details of employee Laisha
console.log('---------------');
console.log('print details of employee Laisha');

// console.log(employee[5]);
for (let item of employee) {
    if (item[1] == 'Laisha') {
        console.log(item);
    }
}

//arrange employee based on their salary in descending order
console.log('---------------');
console.log('arrange employee based on their salary in descending order');

descending = employee.sort((emp1, emp2) => emp2[4] - emp1[4])
// emp2 and emp1 is array so to compare the value we must give the index
console.log(descending);

//or else van log the emplyee that alson work




//arrange employee based on their experience in ascending order
console.log('---------------');
console.log('arrange employee based on their salary in ascending order');
ascending = employee.sort((emp1, emp2) => emp1[5] - emp2[5])
console.log(ascending);


// print the employ name whose have the higest salary
console.log('---------------');
highest_salary = 0
emp_name=""
for (item of employee) {
    if (item[4] > highest_salary) {
        highest_salary = item[4]
         emp_name = item[1]


    }
}
console.log(emp_name);

//or
console.log('---------------');
console.log('another method sort and print');

ascending = employee.sort((emp1, emp2) => emp2[5] - emp1[5])
console.log(ascending[0][1]);




