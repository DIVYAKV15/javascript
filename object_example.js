//array

a = [1000, 'neel', 'developer', 'kochi', 25000, 3]
// - array we cant find what is 1000 and neel and all dont have clarity
console.log(a[1]);//here index is already determined we cant change
// to access each index
for (items in a) {
    console.log(items);

}
//object 

const employee = {
    empId: 1000,
    empName: 'neel',
    empDesg: 'developer' //here empDesg is a key we can change the key 

}
console.log(employee);
console.log(employee['empName']);
//or
console.log(employee.empName);

// to access each key
for (items in employee) {
    //console.log(items);  //it display the key
    console.log(employee[items]); //to access each value of the key 
    //here items is a variable so we cannot put the variable in the double or single quotes bcoz items is not present in employee , we assigned to access the each key
    //only if there is exact key name we can use the key in the double or single quotes and same for employee.empName

}

