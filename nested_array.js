a = [[1, 4], [3, 5], [7, 9]]
//w.a.p to print all number from the given array

for (item of a) { //[2,4]

    //console.log(item); //all the items display [2,4] [3,5] [7,9]
    //console.log(typeof(item)); 
    //item is an array so we can access each value in that item array
    //to get each value we have to acces the item
    for (let num of item) { // [2,4]
        console.log(num);//2 4


    }

}


console.log('--------------');
//w.a.p to find the highest number
// highest = a[2][1] - 9
highest = a[0][0] // initializing the first value a[0][0] is 2
for (let i of a) { // to access all the items 

    for (var j of i) {// [2 ,4] in that to access each number

        if (j > highest) { //comparing 2 > 2 no // 4>2 yes

            highest = j //4
        }

    }

}
console.log(highest);






//w.a.p to find the lowest number

lowest = a[0][0] //  a[0][0] - 2

for (let i of a) {
    for (num of a) {
        if (lowest > num) {
            lowest = num
        }
    }
}
console.log(lowest);

//w.a.p to find the sum of all number

sum = 0
for (item of a) { //[2,4]
    for (let num of item) { // [2,4]
        console.log(num);//2 4
        sum += num
    }

}
console.log(sum);











// note

// of method -if you are going to access the item - best performance
// in method - to acces the index
// for loop- start from differnt index and end in different index in that its good to use