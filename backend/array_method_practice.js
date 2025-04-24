//Print all student names from the below array:
const students = ["Divya", "Arun", "Kavya", "Ravi"];
students.forEach((items) => console.log(items));
//Given an array of numbers, print only the even numbers:
const numbers = [2, 7, 4, 9, 12, 5];
console.log(numbers.filter((items) => items % 2 == 0));
//Add "Mr./Ms." prefix to all names in a list and print them:
const people = ["Ajay", "Sneha", "Rani"];
people.forEach((items) => console.log('Mr./Ms ' + items));
// print the first person who is above 18 years old
const persons = [
    { name: "Ravi", age: 15 },
    { name: "Kumar", age: 21 },
    { name: "Meena", age: 17 }
];

console.log(persons.find((items) => items.age >= 18));
//Find the product with id = 102:
const products = [
    { id: 101, name: "TV" },
    { id: 102, name: "Laptop" },
    { id: 103, name: "Mobile" }
];
output = products.find((items) => items.id == '102')
console.log(output);
//Check if there is at least one failed student (mark < 35):const marks = [78, 90, 23, 56, 89];
const marks = [78, 90, 23, 56, 89];
console.log(marks.some((items) => items <= 35));
// Check if any product is out of stock:
const items = [
    { name: "Milk", inStock: true },
    { name: "Bread", inStock: false },
    { name: "Butter", inStock: true }
];
console.log(items.some((pro) => pro.inStock == false) ? 'yes, out of stock' : 'no all stocks are up');

//Count how many times each fruit appears:
const fruits = ["apple", "orange", "apple", "banana", "orange", "apple"];

const appleCount = fruits.filter(item => item === "apple").length;
const orangeCount = fruits.filter(item => item === "orange").length;
const bananaCount = fruits.filter(item => item === "banana").length;

console.log("apple:", appleCount);   // ➤ 3
console.log("orange:", orangeCount); // ➤ 2
console.log("banana:", bananaCount); // ➤ 1

