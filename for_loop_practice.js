// w.a.p to print numbers from 1-5
for (i = 1; i <= 5; i++) {
    console.log(i);

}

// w.a.p to find the factorial of a given number by using for loop
fact = 5
value = 1
for (i = 1; i <= fact; i++) {
    value = value * i
}
console.log(value);

// w.a.p that have ability to iterate up to 10 but print only upto 5

for (i = 1; i <= 10; i++) {
    if (i <= 5) {
        console.log(i);
    }
}
console.log(i);

// w.a.p to print a given number is prime or not 
n = 11
isPrime = true

if (n == 1) {
    console.log('neither nor prime nor composite');

}
else if (n < 0) {
    console.log('not prime');
}
else {
    for (i = 2; i < n; i++) {
        if (n % i == 0) { /* 2/2==0 */
            isPrime = false
            break;
        }

    }
    console.log(isPrime ? 'prime' : 'not prime');
}



// w.a.p to find GCD/HCF of 2 given number
// 12 - 1 2 3 4 6 12 the number divided which get 0
//28 - 1 2  4 7 14 28 the number divided which get 0
// and the common number which divided the numbersare 
//  1 2 4
// and the highest value is 4

n1 = 12
n2 = 28
gcd = 0
for (i = 1; i <= n1 && i <= n2; i++) { /* 1<=12  && 1<=28 2<=12  && 2<=28  3<=12  && 3<=28  */
    if (n1 % i == 0 && n2 % i == 0) {/* 12%1==0 && 28%1==0  12%2==0 && 28%2==0 12%3==0 && 28%3==0   */
        gcd = i;/* 1 2 3*/
    }
}
console.log(gcd);

/* iteration goes upto 12 only  */

// w.a.p to display all prime number between 2 and 50
console.log('---------------------');
console.log('---------------------');
console.log('hw');

for (i = 2; i <= 50; i++) {/* this loop for setting the range */
    isPrime = true;
    for (j = 2; j < i; j++)/* for checking prime or not */ {
        if (i % j == 0) {
            isPrime = false;
        }
    }
    isPrime && console.log(i);/* truthy property only works in the true case */

}

// w.a.p to display all armstrong number between 8 to 500
// rev = 0
// for (i = 8; i <= 500; i++) {
//     for (j = 8; j < i; j++) {
//         if (i < 10) {
//             rev = i % 10
//         }

//     }


// }
console.log('armstrong');


for (i = 8; i <= 500; i++) {
    temp = i  /* to check the i variable with the sum of cube of each number */
    sum = 0
    power = (i + "").length /* if its one digit the power should be one ,if its 2 digit 10 = 1 pow 2 + 0 pow 2 ,so to find the pow we are converting the number into string
so to do that jsut adding the empty string in the end  so can easily calculate the length of the string if its 1 digit = 1 po ,if its 2 digit =2 power */
    while (temp > 0) {
        lastDigit = temp % 10/* 8 % 10 =8 */
        sum = sum + lastDigit ** power
        temp = Math.floor(temp / 10)

    }
    sum==i && console.log(i);

}