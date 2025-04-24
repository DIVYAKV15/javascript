//  w.a.p to check whether a person is eligible to vote
age = 18
if (age >= 18) {
    console.log('your eligible to vote');

} else {
    console.log('you are not eligible to vote');


}

// w.a.prgm to check a given number is positive or negative
posi= 0

if (posi > 0) {
    console.log('the value is positive');

} else if (posi== 0) {
    console.log('Zero is neither positive nor negative.');

}
else {
    console.log('the value is neagtive');

}

// w.a.p to print the largest between among two given number

num1 = 100
num2 = 500
if (num1 > num2) {
    console.log('num1 is largest number');

}

else if(num1<num2){
    console.log('num2 is largest number');
}
else {
    console.log('both numbers are equal');
    
}

//  w.a.p to print the second largest between among three given number and arrange them in descending order

p = 1100
q = 500
r = 2000
// 800>500 and 800>900

if (p > q && p > r ) {
    if (q > r) {
        console.log('q is second largest');
    }
    else {
        console.log('r is the second largest');
    }
    console.log(`the value is ${r},${q},${p}`);
}
// 500>900 and 500>800
else if (q > r && q > p) {
    if (p > r) {
        console.log('p is second largest');
    }
    else {
        console.log('q is second largest');
    }
    console.log(`the value is ${p},${r},${q}`);
    
} else if(r>p && r>q){
    if(p>q){
        console.log('p is second largest');
    }
    else{
        console.log('q is second largest');
    }
    console.log(`the value is ${q},${p},${r}`);

}


//w.a.p to check a given number is even or old 
value =7;
if(value%2==0){
    console.log('the given number is even ');
    
}else{
    console.log('the given number is odd');
}

//w.a.p to print 'FIZZ' when the given number is divisible by 3 and 'BUZZ' when the number is divisible by 5 and the number is divisible by 15
a=40
if(a%15==0){
 console.log('the given number is FIZZBUZZ'); 
 
}
else if(a%5==0){
    console.log('the given number is BUZZ')
}else if(a%3==0){
    console.log('the given number is FIZZ')
}else{
    console.log('neither divide by 3,5,15');
}
