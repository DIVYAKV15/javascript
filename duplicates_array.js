//if the op is array:
const arrayWithDupes = [1, 2, 3, 1, 2, 4];
let obj = []
for (let item of arrayWithDupes) {
    if (!obj.includes(item)) {
  
        obj.push(item)


    }
}
console.log(obj);

//in object

const arrayWithDues = [1, 2, 3, 1, 2, 4];
let obj1 = {}
for (let item of arrayWithDues) {
    if (!(item in obj1) ){
  obj[item]=[]
        obj.push(item)


    }
}
console.log(obj);