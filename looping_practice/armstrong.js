// Write a program to print whether a given number is an Armstrong number or not..

// (Armstrong number is a number in which all the sum of cubes of digits is equal to the number

//     Example:-

//     Input

//     n=153

//     Output

//     true
//Logic - 153 is an Armstrong number because 1^3 + 5^3 + 3^3 = 1 +125 + 27 = 153 which is equal to the original number )



n = 153
sum = 0
temp = 153
flag = false
while (n > 0) {
    rem = n % 10/* 153 = 3  */
    cube = rem ** 3 /* 3 ** 3= 27  */
    console.log(cube);
    sum = sum + cube /* 0+27 =27 27+125 =  */
    console.log(cube);
    n=Math.floor(n/10)
}
if (temp == n) {
    flag = true

}
console.log(flag);



