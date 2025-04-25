//for loop

for (let i = 1; i <= 5; i++) {
    console.log(i);

}
//display a text in 20 times
let text = 'hi'
for (let i = 1; i <= 20; i++) {
    console.log(text + " " + i);

}
//display sum of n natural numbers 1 to 100
var sum = 0
for (i = 1; i <= 100; i++) {
    sum += i
}
console.log(sum);

//the for in loop is uesd to iterate over the students and print all its properties
//the object key is asiigned to the variable key
//student[key] is used to access the value of key
const student = {
    sname: 'Monica',
    class: 7,
    age: 12
}
for (let i in student) { //can assign the key of student
    console.log(i);///this will print the key
    console.log(student[i]);


}

const salaries = {
    jack: 24000,
    paul: 34000,
    monica: 55000
}
for (let i in salaries) {
    console.log(`${i} : $${salaries[i]}`);

}

//the for of loop itereate over an array
//for example
//array
const studnt=['john','sara','jack']
for(let i of studnt){
    console.log(i); 
    
}
//array 
//if we use for in in array we get index whereas in object we get the key

//so for of can be used in string and array
//the for of loop itereate over an string
const str='string'
for(let i of str){
    console.log(i);
    
}