//write a prgm to swap between two given number 

num1=60
num2=40 
// if we want to swap the different data type but memeory space is not an issue then its the better approach
// using temp variable
// num1=num2
// temp=num1
// num2=temp
// console.log(`the op is num1: ${num1} and num2:${num2}`);

// better approach because we are not consuming extra store space
num1=num1 + num2 /* 60+40 = 100 */
num2=num1 - num2/* 100-40 = 60 */
num1=num1 - num2/* 100-60 = 40  */
console.log(`the op is num1: ${num1} and num2:${num2}`);
