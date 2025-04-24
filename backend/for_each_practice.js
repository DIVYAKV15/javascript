a = [1, 2, 3, 4, 5]
//w.a.p to print all the items from the given array
for (let item of a) {
    console.log(item);

}

console.log('----same like of method----');
a.forEach((item) => console.log(item));
console.log('--------');
//w.a.p to find the square of all the elements in the given array
a.forEach((item) => {
 
    console.log(item ** 2);
}
);

//MAP
console.log('----MAP----');
sq = a.map((item) => (item ** 2));
console.log(sq);

console.log('--------');
//w.a.p to create a new array with number  <=3 the increament by 1 else decrement by 1

//a = [1, 2, 3, 4, 5] // o=[2,3,4,3,4]
newArray = a.map((item) => {
    if (item <= 3) { //in each iteration we get each value from  the array in the item
        return item + 1 //as it is inside if we need to return the value
    } else {
        return item - 1
    }
})
console.log(newArray);

console.log('--above is not good approach ternary is good-----');
newArray = a.map((item) => (item <= 3) ? item + 1 : item - 1)
console.log(newArray);