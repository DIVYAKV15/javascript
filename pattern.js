//wap to print the pattern using while loop
//ip:2
//op:2
//   22
//ip: 3
// 3
//33
//333
var ip = 5;
var str = "";
var i = 1;
while (i <= ip) { //1<=4
    str += ip
    console.log(str);
    i++
}
// 12345
// 1234
// 123
// 12
// 1


for (let row = 5; row >= 1; row--) { // 5>0
    str = ""
    for (let col = 1; col <= row; col++) { // 1<=5

        str += col + " " //1 2 3 4 5



    }
    console.log(str);
}

// 1
//2 3
//4 5 6
//7 8 9 10 

var n = 1
for (row = 1; row <= 4; row++) {
    str = ""
    for (col = 1; col <= row; col++) {

        str += n + " " //1 2 3 

        n++

    }
    console.log(str);
}

//    1     4 spaces, 1 number
//   123    3 spaces, 3 numbers
//  12345   2 spaces, 5 numbers
// 1234567  1 space, 7 numbers
//123456789 0 spaces, 9 numbers

for (let i = 1; i <= 5; i++) {
    let pattern = ""
    for (sp = 1; sp <= 5 - i; sp++) {
        pattern += "."
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
        pattern += j + "";

    }
    console.log(pattern);

}

//     1    4 psaces 1 number
//    121   3 spaces 
//   12321
//  1234321
// 123454321

for (let i = 1; i <= 5; i++) {
    pat = ""

    // Spaces before the numbers
    for (sp = 1; sp <= 5 - i; sp++) {
        pat += " "
    }

    for (let j = 1; j <= i; j++) {
        pat += j

    }
    //to get the decreasing number
    for (let j = i - 1; j >= 1; j--) {
        pat += j
    }
    console.log(pat);



}
// A
// A B
// A B C
// A B C D
// A B C D E

for (i = 1; i <= 5; i++) {
    str = ""
    for (j = 1; j <= i; j++) {
        str += String.fromCharCode(j + 64)
    }
    console.log(str);
}
// A
// B B
// C C C
// D D D D
// E E E E E

for (i = 1; i <= 5; i++) {
    str = ""
    for (j = 1; j <= i; j++) {
        str += String.fromCharCode(i + 64)
    }
    console.log(str);
}

// A
// B C
// D E F
// G H I J
// K L M N O
let count = 1 //2
for (i = 1; i <= 5; i++) { //1
    str = ""
    for (j = 1; j <= i; j++) { //1<=1
        str += String.fromCharCode(count + 64) //
        count++

    }
    console.log(str);
}

//     A
//    ABA
//   ABCBA
//  ABCDCBA
// ABCDEDCBA

for (let i = 1; i <= 5; i++) { //i=1  2
    pattern = ''
    // Add spaces
    for (spa = 1; spa <= 5 - i; spa++) { // 1<=4 1<=3
        pattern += " "// 4 spaces 3spaces
    }
    // Increasing characters: A, AB, ABC...
    for (j = 1; j <= i; j++) { //
        pattern += String.fromCharCode(j + 64) //A AB
    }
    //Decreasing characters: BA, CBA...
    for (j = i - 1; j >= 1; j--) { // 0 condition failed 1>=1
        pattern += String.fromCharCode(j + 64) //A

    }
    console.log(pattern);//A ABA 
}
// ✅ i = 1:
// Spaces: 5 - 1 = 4 → ' '

// Increasing: j=1 → String.fromCharCode(65) = 'A'

// Decreasing: (i-1)=0 → No loop

// Result: " A"

// ✅ i = 2:
// Spaces: 5 - 2 = 3 → ' '

// Increasing: j=1 → 'A', j=2 → 'B' → 'AB'

// Decreasing: j=1 → 'A'

// Result: " ABA"

// ✅ i = 3:
// Spaces: 5 - 3 = 2 → ' '

// Increasing: A B C → 'ABC'

// Decreasing: B A → 'BA'

// Result: " ABCBA"

// ✅ i = 4:
// Spaces: 5 - 4 = 1 → ' '

// Increasing: A B C D → 'ABCD'

// Decreasing: C B A → 'CBA'

// Result: " ABCDCBA"

// ✅ i = 5:
// Spaces: 5 - 5 = 0 → '' (no spaces)

// Increasing: A B C D E → 'ABCDE'

// Decreasing: D C B A → 'DCBA'

// Result: "ABCDEDCBA"

// ABCDEDCBA
//  ABCDCBA
//   ABCBA
//    ABA
//     A
console.log('---reverse---');

for (let i = 5; i >= 1; i--) { //5>=1
    pattern = ''
    for (let sp = 1; sp <= 5 - i; sp++) { //5-5 1<=0
        pattern += " "
    }
    for (let j = 1; j <= i; j++) { //1<=5
        pattern += String.fromCharCode(j + 64) //ABCDE
    }
    for (let j = i - 1; j >= 1; j--) { //5-1 = 4 4>=1 
        pattern += String.fromCharCode(j + 64) //D
    }
    console.log(pattern);

}

//     *     1
//    ***    3
//   *****   5
//  *******  7
// ********* 9

for (let i = 1; i <= 5; i++) { //1
    pattern = ""
    for (space = 1; space <= 5 - i; space++) { // 1 1<=4 
        pattern += " "  //4
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
        pattern += '*'
    }
    console.log(pattern);

}

//  *    1
// ***   3
//*****  5
// ***   2
//  *    1

for (let i = 1; i <= 5; i++) {
    pattern = ""
    for (sp = 1; sp <= 3 - i; sp++) {
        pattern += ""
    }
    for (j = 1; j <= 2 * i - 1; j++) {

        pattern += '*'


    }
    console.log(pattern);
}