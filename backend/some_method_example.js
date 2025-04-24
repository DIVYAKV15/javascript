a = [12, 41, 6, 5, 22,1]
//w.a.p to print is there any even numbers from the given array

even=a.some((item)=>item%2==0)
console.log(even?'yes even present':'No even not present');
//w.a.p to print is there any  odd numbers from the given array
odd=a.some((item)=>item%2!=0) //item%2==1
console.log(odd?'yes odd present':'No odd not present');