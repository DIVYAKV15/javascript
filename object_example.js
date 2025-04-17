//array

a = [1000, 'neel', 'developer', 'kochi', 25000, 3]
// - array we cant find what is 1000 and neel and all dont have clarity
console.log(a[1]);//here index(is also a key but we canot change the key in array) is already determined we cant change

// to access each index 
for (items in a) {
    console.log(items);

}
console.log('---------object --------');
//object 

const employee = {
    empId: 1000,
    empName: 'neel',
    empDesg: 'developer' //here empDesg is a key we can change the key 

}
console.log('---------to access all the  data --------');
console.log(employee);
//to access one key
console.log('---------to access the value of  one particular key --------');
console.log(employee['empName']);
//or
console.log(employee.empName);

// to access all the key use loop
console.log('to access all the key use loop');

for (items in employee) {
    //console.log(items);  //it display the key
    console.log(employee[items]); //to access each value of the key 
    //here items is a variable so we cannot put the variable in the double or single quotes bcoz items is not present in employee , we assigned to access the each key
    //only if there is exact key name we can use the key in the double or single quotes and same for employee.empName

}

console.log('---------to add data  --------');
employee['location'] = 'kochi'
console.log(employee);
console.log('--------- another way is using assign method--------');
Object.assign(employee, { empSal: 25000 }) //target :employee source means which data we want to data 
console.log(employee);

//check whether employee experience is present in  the given object ot not if present print 'key is available ' else add a new key value pair as empExp:3
// if(employee.empExp){
//     console.log('key is available');

// }else{
//     Object.assign(employee,{empExp:3})  
//     console.log(employee);

// }
isPresent = false;
for (item in employee) { // accessing each key 
    if (item == 'empExp') {
        isPresent = true

    }

}
isPresent ? console.log('key is available') : Object.assign(employee, { empExp: 3 })
console.log(employee);

//or 
console.log('empId' in employee); // it returns true / false do in method can use in log or conditional method also

'empExp' in employee ? console.log('key is available') : Object.assign(employee, { empExp: 3 })
console.log(employee);
//updating
console.log('update the new data in existing data');

employee['empExp'] = 5 // employee['empExp']+=2
console.log(employee);

//delete 
delete employee.empExp
console.log(employee);