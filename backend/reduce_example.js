a = [1, 2, 3, 4, 5]
//highest 
// arrow function single line so it returns automatically
console.log('--lowest---');
var value=a.reduce((num1,num2)=>num1<num2?num1:num2)
console.log(value);
//num1 is previous return value  /if not first value of array
//num2  is current value // first value of array then it change to current value on each iteration
//(1,1) => 1<1 return num2 (1) result of first iteration
//(1,2) => 1<2  return num1 (1)
//(1,3) => 1<3  return num1 (1)
//(1,4) => 1<4  return num1 (1)
//(1,5)=>  1<5  return num1 (1)
//lowest
console.log('--highest---');

var highest=a.reduce((pre_value,current_value)=>pre_value>current_value?pre_value:current_value)
console.log(highest);

//sum
console.log('--sum---');
var sum=a.reduce((pre_value,current_value)=>pre_value+current_value)
console.log(sum);