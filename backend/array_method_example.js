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

console.log('print all employee name ');
console.log('---------------');


employee.forEach((em_name) => console.log(em_name[1]))
//print total numbers of employee
console.log('---------------');
total_number = employee.length
console.log(total_number);


//print developer employee details
console.log('---------------');
console.log('developer employee details');

employee_name = 'developer'

// newArray = employee.filter((e_name) => e_name[2] == employee_name)
// console.log(newArray);
//if we diont have in the new array can use like below
employee.filter((e_name) => e_name[2] == employee_name).forEach((item)=>console.log(item))


//print employee name whose salary > 30000
console.log('---------------');
console.log('employee name whose salary > 30000');

employee.filter((sal) => sal[4] > 30000).forEach((item)=>console.log(item[1]))






// print details of employee Laisha
console.log('---------------');
console.log('---------------');
console.log('print details of employee Laisha');
//as here we have only one find or lese usually more people will be in hte same name so we use filter only
details=employee.find((item)=>item[1]=='Laisha')
console.log(details);

console.log('---------------');




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
emp_name = ""
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

ascending = employee.reduce((emp1, emp2) => emp1[5] - emp2[5])
console.log(ascending);

//print the employ details with  lowest salary
lowest=employee.reduce((emp1,emp2)=>emp1[4]<emp2[4]?emp1:emp2)
console.log(lowest);

//find the total salary expense of the company
total=employee.map((emp)=>emp[4]).reduce((sal1,sal2)=>sal1+sal2)
console.log(total);

// value=employee.reduce((emp1,emp2)=>emp1[4]+emp2[4]) In the first iteration:

// emp1 is the first employee: [1000, 'Neel', ..., 25000, 3]

// emp2 is the second employee: [1001, 'Max', ..., 20000, 2]

// emp1[4] + emp2[4] → 25000 + 20000 = 45000

// In the next iteration:

// emp1 becomes 45000 (a number, not an array anymore!)

// emp2 is the third employee array: [1002, 'Maxwell', ..., 35000, 4]

// Then it tries to do: emp1[4] + emp2[4], but emp1 is a number now — so emp1[4] is undefined


// console.log(value);



//op -NaN
// const x = "hello" * 2;  // NaN → because "hello" can't be multiplied
// const y = undefined + 10;  // NaN → undefined is not a number
// const z = parseInt("abc"); // NaN → can't convert "abc" to number