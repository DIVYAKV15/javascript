text = 'hai hello all hello world all'
//w.a.p to get the word count from the given text
//op:{hai:1,hello:2,all:2,world:1}
newObject = {}
new_text = text.split(' ')
console.log(new_text);
for (i of new_text) { //'hai
    if (i in newObject) { //check 'hai in newObject 
        newObject[i] += 1// exisitng value plus one
    } else {
        newObject[i] = 1 //if not presesent its start with 1  newObject[hai]=1
    }
}
console.log(newObject);
console.log('--another method in single line--');
text.split(' ').forEach((items) => items in newObject ? newObject[items] += 1 : newObject[items] = 1)
console.log(newObject);

//hw
newArray = [10, 20, 30, 20, 40, 50, 50, 60, 10]
//w.a.p to find the number count 
//op:{10:2,20:}
newObj = {}
newArray.forEach((items) => items in newObj ? newObj[items] += 1 : newObj[items] = 1)
console.log(newObj);


pattern = 'ABCBCAA'
//find the first recursive letter 
//op-B
str = Array.from(pattern)
//console.log(str);
obj = {}
//temp = 0
for (i of str) {
    if (i in obj) {
        console.log('the first recursive letter is ' + i); //concatenation
        // temp = i
        break;
    } else {
        obj[i] = 1
    }

}
//usimg variable
//console.log(temp);

//another method
// op_array = []
// for (let items of str) {
//     if (!op_array.includes(items)) { //if the item not present
//         op_array.push(items) // add the item
//     } else {
//         console.log(items); // if item already present  print break the flow
//         break 

//     }
// }




