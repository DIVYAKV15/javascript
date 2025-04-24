expense = [12000, 5000, 28000, 10000, 6000]
// 1) find the least expense - 5000

lesser = expense[0]
for (i = 0; i < expense.length; i++) {
    if (expense[i] < lesser) { // 12000<36000 5000<12000
        // console.log(greater);
        lesser = expense[i]
        // console.log(expense[i]);

    }
}
console.log(lesser);
console.log('-----better approach-------');

// better performance
// as we adirectly accesing the array so of method is best
//  normal loop if we want to start from mid and stop from mid means useful
for (exp of expense) {
    if (exp < lesser) { // 
        // console.log(greater);
        lesser = expense[i]
        // console.log(expense[i]);

    }
}
console.log(lesser);


// 2)find the highest expense - 28000

let greater = expense[0]
for (i = 0; i < expense.length; i++) {


    if (expense[i] > greater) {
        greater = expense[i]
    }
}
console.log(greater);
// 3)find the total expense -
sum = 0
for (i = 0; i < expense.length; i++) {

    sum = sum + expense[i]

}
console.log(sum);
console.log('-----better approach-------');
sum = 0
for (let exp of expense) {
    sum += exp
}
console.log(sum);
// 
console.log('how to use in in');

lowest=expense[0]
for(exp in expense){
    if(lowest>expense[exp]){ /* in will give the index of array so we have to access each element so giving expense[exp] */
        lowest=expense[exp]
    }
}
console.log(lowest);



