function display() {
    console.log('inside display function');

}
display()

function addition(num1, num2) { /* paramenter and the value is arguments */
    console.log('inside display function');
    return sum = num1 + num2
    console.log('task end');/* after return it will not excute anything  */



}
console.log(addition(4, 6)); /* the values are arguments */

// w.a.p to find the cube of a given number using function

function show(num) {
    return cube = num ** 3 /* return num ** 3 */
}
console.log(show(5));

// w.a.p to find the  a given number odd or even using function
console.log('w.a.p to find the  a given number odd or even using function----');
console.log('-----------------------------');


function odd_even(num) {

    // if(num%2==0){
    //    return 'even'

    // }
    // else{

    //     return 'odd'
    // }

    return num % 2 == 0 ? 'even' : 'odd'
}

console.log(odd_even(2));

