a = 10
b = 6
c = 4
sum = a + b - c
console.log(sum);
console.log('-------------');

// The number is said to be magical if it is greater than 10.

// If n is greater than 10 print "magical"

//note "happy coding" will be default printed . Do not remove this line.
n = 5
console.log('happy coding');

if (n > 10) {
    console.log('magical');

} else {
    console.log('not magical');
}

// Write a program to assume a value of marks and print whether a person has failed or passed using ternary Operator.



// If Marks> =40 --> pass

// ELSE ---> fail



// Input:-

// Marks =52

// Ouput:-

// pass
marks = 2
console.log((marks >= 40) ? 'pass ' : 'fail');

// Write a program to print the maximum of two numbers using Ternary operator.



// Example:-

// Input:-

a = 13, b = 5

// Output:-

// 5

console.log((a > b) ? `${a}` : `${b}`);

//
// Given the Day number, print the Day name in lower case corresponding to it by using the help of switch statement.

// Note: Day 1 - is monday.

// If the day is not valid example 1> day >7 then print invalid



// Input :-

Day = 1

// Output :-

// wednesday

switch (Day) {
    case 1:
        console.log('monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('wednesday');
        break;
    case 4:
        console.log('thursday');
        break;
    case 5:
        console.log('friay');
        break;
    case 6:
        console.log('saturday');
        break;

}