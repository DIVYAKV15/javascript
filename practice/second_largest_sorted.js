let n1 = 48;
let n2 = 12;
let n3 = 30;
let arr = [];
arr[0] = n1


if (n1 > n2 && n1 > n3) {
    //48>12 12>30
    arr[0] = n1
    console.log('n1 is bigger');

    if (n2 > n3) {
        console.log('n2 is second largest');
        arr[1] = n2
        arr[2] = n3

    } else {
        arr[1] = n3
        arr[2] = n2
        console.log('n3 is second largest');


    }


} else if (n2 > n1 && n2 > n3) {

    console.log('n2 is greater');

} else {
    console.log('n3 is greater');

}
console.log(arr);
//
number = 4
str = ""
i = 1
while (i <= 4) {
    str += number
    console.log(str);
    i++
}

for (let row = 1; row <= 4; row++) {
    str = ''
    for (let col = 1; col <= row; col++) {
        str += '#'

    }
    console.log(str);

}

reverse = 639
reminder = 0
str = ''
while (reverse > 0) {
    reminder = reverse % 10 //9
    reverse = Math.floor(reverse / 10)//639/10 =63
    str += reminder
}
console.log(str);
//armstrong

value = 15
 temp = 15
str = 0
while (value > 0) {
    lastdigit = value % 10//3 //
    console.log(lastdigit);

    res = lastdigit ** 3//3*3//15
    str += res//9+15
    value = Math.floor(value / 10)//15
}
if(str==temp){
    console.log('armstrong');
    
}
else{
    console.log('no');
    
}
console.log(str);

