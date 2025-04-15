// w.a.p to print javascript  5 times
i =1;
while(i<=5){
    console.log('javascript');
    i++;
}

// w.a.p to print numbers from 1 to 5 

num=1
while(num<=5){
    console.log(num);
    num++
}
console.log('----------------')
// w.a.p to print number from 10 to 1

value =10

while(value>=1){
    console.log(value);
    value--
}
console.log('----------------')

// w.a.p to print all even number between 1 - 50 

even=1
while(even<=50){
 if(even%2==0){
    console.log(even);
 }
   even++
}

// /or
console.log('----------------')

while (even<=50){
    console.log(even)
    even++;
}

// /or 
while (even<=50){
    (even%2==0) && console.log(even) /* truthy operator */
    even++;
}
console.log('----------------')
// odd

odd=1
while (odd<=50){
    if(odd%2 !=0)
{
    console.log(odd);
    
}
    odd++;
}

// w.a.p to find sum of all numbers between 1 - 10

number = 1
sum=0
while(number<=10){
 // 0+1
sum=sum+number
// 1
console.log(`the value is ${sum}`);
number++ 
// 2
}
console.log(`the total sum sum of all numbers between is ${sum}`);


// w.a.p to print the given o/p corresponding a given i/p
//  i/p = 2   3    4      
// o/p  = 24  369  4936
// pattern to get the op
// 2*12 3*123 4*1234 5*12345 
// 2+22 3+33+333 4+44+444+4444

input=4
i=1
str = ''
while(i<=input){
    str = str+i/* "" + 1 ="1" string concatenation */
    i++
}
console.log(str*input)
// another method

input=4
i=1
str = 0
while(i<=input){
    str = str*10+i/* 0+10(1)= 1 */
    i++
}
console.log(str*input)

// another pattern
input=4
i=1
product=0
sum=0
while(i<=input){
    product=product*10+input
    sum=sum+product
    i++
}
console.log(sum)

// w.a.p to display reverse of a given number

number = 236
rev=0
rem=0
while(number>0)
   {
    rem=number%10/* 236%10 = 6 */
    rev=rev*10 + rem/* 0 + 6 */
    number=Math.floor(number/10 )/* 236/10 =23.  */
 
   }
   console.log(rev);
   
// w.a.p to check a given number is palindrome or not   

pali=123321
temp=pali/* assigning the value before the pali changes so we can check */
rev=0
isPalindrome=false;
while(pali>0){
    rem=pali%10/*  1*/
    rev=rev*10 + rem/* 0 + 1 = 1 */
    pali=Math.floor(pali/10 )
}
if(temp==rev){
    isPalindrome=true
}
console.log(isPalindrome);

// write a progrma to find factorial of a given number

no=5
i=1;
fact=1
while(i<=no){
    fact=fact*i/* 1*1 =1 1*2 =2 2*3=6 6*4=24 24*5= 120 */
    i++
}
console.log(fact);
// w.a.p to find the given 3 digit number is armstrong or not
// sum of power of each number is equal to the given number 

num=153
rem=0
sum=0
temp=153

while(num>0){
rem=num%10
sum=sum(rem*rem*rem)
num=Math.floor(num/10)

}
console.log(sum==temp?'Armstrong':'not armstrong');

// w.a.p to display a numbers in whose exponential in the range of 8 to 36, where the user can input the power
// 9 , 16 
//  power =2 
//  1 4 9 16 25 36 49 64 81 100
// power =3
//  1 8 27 64 125 216 343 512 729 1000

power=6
i=1
while(i<=36){
   value=i ** power; /* 1*3 = 1 2*3=8*/
   if(value>=8 && value <=36){
    console.log(value);
   }
   i++;
} 

