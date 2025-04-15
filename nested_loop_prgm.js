/// # # # #
// # # # #
//  # # # #
// # # # #

//  w.a.p print the above pattern
// first row no.of times its excueted
for (i = 1; i <= 4; i++) {/* row */
    str = ''/* assigning in empty string */
    for (j = 1; j <= 4; j++) {/* col - detailing*/
        str = str + ' #'/* adding the # */

    }
    console.log(str);
}

// 1 1 1 1
// 2 2 2 2
// 3 3 3 3
// 4 4 4 4
for (i = 1; i <= 4; i++) {
    str = ""
    for (j = 1; j <= 4; j++) {
        str = str + i
    }
    console.log(str);

}

// 1 2 3 4 
// 1 2 3 4 
// 1 2 3 4 
// 1 2 3 4 

for (i = 1; i <= 4; i++) {
    str = ""
    for (j = 1; j <= 4; j++) {
        str = str + j + " "
    }
    console.log(str);
}

// *
// * *
// * * *
// * * * *
for (i = 1; i <= 4; i++) {
    str = ''
    for (j = 1; j <= i; j++) {

        str = str + "*" + " "
    }
    console.log(str);

}
console.log('------------------');
console.log('------------------');

// 1
// 2 2 
// 3 3 3 
// 4 4 4 4
for (i = 1; i <= 4; i++) {
    str = ''
    for (j = 1; j <= i; j++) {
        str = str + i + " "
    }
    console.log(str);

}
console.log('------------------');
console.log('------------------');

// 1
// 1 2
// 1 2 3
// 1 2 3 4

for (i = 1; i <= 4; i++) {
    str = ""
    for (j = 1; j <= i; j++) {
        str = str + j + " ";
    }
    console.log(str);

}

console.log('------------------');

// * * * *
// * * *
// * *
// *

for (i = 1; i <= 4; i++) {
    str = ""
    for (j = 5; j <= 9 - i; j++) {
        str = str + "*"
    }
    console.log(str);

}
console.log('------------------');
console.log('-----decrease-------------');
// or

for (i = 4; i >= 1; i--) {
    str = ''
    for (col = 1; col <= i; col++) {
        str = str + " * "
    }
    console.log(str);
}
console.log('------------------');
console.log('------------------');
console.log('hw');
// hw
// *
// * *
// * * *
// * * * *
// * * * * *
// * * * *
// * * *
// * *
// *

for (i = 1; i <= 9; i++) { /* 1<=9 */
    if (i <= 5) { /* 1<=5=t */
        str = '' /* assign empty in str */
        for (j = 1; j <= i; j++) {/*1<=1 =t */
            str = str + '*' + " " /* 1 star will assign */
        }
        console.log(str);/* 1 star will print */
    }
    else {
        str = ''
        for (j = 1; j <= 10 - i; j++) { /*
            1<(10-6=4) 1<=4 so 4 star will asign
            totaaly 9 row so we are  asigning 10, from 6 th row only 4 star has to come  , so 10 -i (10-6=4), (10-7=3),(10-8=2) (10-9=1) */
            str = str + '*' + " "
        }
        console.log(str);
    }
}
console.log('-------inverted triangle-----------');
//    *
//   * *
//  * * *
// * * * *

for (i = 1; i <= 4; i++) { /* assigning the rows(no.of.lines) */
    str = "" /* so givingt his here to re -intialize every time loop starts */
    /* to implemetn the concatenation = adding+string */
    for (space = 3; space >= i; space--) {  /* 
        first row =3 space 
        second row=2 space
        third row= 1 space
        forth row =no space 
        space decreamenting 
        initially space start from 3 
        so giving space =3
        3>=1 =>true so adding 1 space 
        space--
        2<=1 =>true so adding 2 space 
         space--
        1<=1 =>true so adding 3 space 
         space-- 
        0<=1 =>flase 
         */
        str = str + " " /*  to giving space space */
    }
    for (j = 1; j <= i; j++) {
        str = str + '*' + " "
    }
    console.log(str);

}

console.log('------------------');
console.log('------------------');
console.log('-------HOMEWORK-----------');


//     *     - 2 space + 2 space
//    * *
//   * * *
//  * * * *
// * * * * *
//  * * * *
//   * * *
//    * *
//     *

// totally 9 rows

for (i = 1; i <= 9; i++) {
    str = ''
    for (j = 1; j <= 5; j++) {

    }

}

//       *      3 space and 3 space star-(1,4)
//     *    *     star position(2,3) & (2,5)
//   *        *   
//  * * * * * * * 4 rows 7 cols

// (row , col)
// (1,4) - add=5     (1,4) - sub=3
// (2,3) - add=5     (2,5)  sub=3
// (3,2) - add=5     (3,6) sub=3
// (4,1) - add=5     (4,7) sub=3




for (i = 1; i <= 4; i++) { // row -3
    str = ""
    for (j = 1; j <= 7; j++) { /* col=7 */
        if (i + j == 5 || j - i == 3 || i == 4) {
            str = str + "*"
        }
        else {
            str = str + " "
        }
    }
    console.log(str);
}
console.log('!!!!!!!!Hollow Square!!!!!!!!!!!!!!');
//  1 2 3 4 5
//1 * * * * * first row full star
//2 *       * 
//3 *       *  
//4 *       *
//5 * * * * * fifth row full star
for (i = 1; i <= 5; i++) {
    str = ""
    for (j = 1; j <= 5; j++) {
        if (i == 1 || i == 5 || j == 5 || j == 1) {/* first wow , last row , first column ,last column */

            str = str + "*"
        }
        else {
            str = str + " "
        }
    }
    console.log(str);

}


// hollow hour glas
//  1 2 3 4 5  left diagnoal      rigth diagonal
//1 * * * * *  (1,1)          to   (1,5)
//2   *   *    (2,2)               (2,4)
//3     *      (3,3)               (3,3)
//4   *   *    (4,4)               (4,2)
//5 * * * * *  (5,5) to            (5,1)
console.log('hollow hour glas');

for (i = 1; i <= 5; i++) {
    str = ""
    for (j = 1; j <= 5; j++) {
        if (i == 1 || i == 5 || j == i || i + j == 6) {
            str = str + "*"
        }
        else {
            str = str + " "
        }
    }
    console.log(str);

}
// hw      row     col
// 1        (1,1) e1+1=2 eaven means 1 or odd means 0               
// 0 1      (2,1) (2,2,)
// 1 0 1    (3,1) (3,2) (3,3)
// 0 1  0 1  (4,1) (4,2) (4,3) (4,4)
for (i = 1; i <= 4; i++) {
    str = ""
    for (var j = 1; j <= i; j++) {
        if ((i + j) % 2 == 0) {
            str = str + '1' + " "
        }
        else {
            str = str + 0 + " "
        }
    }
    console.log(str);

}


//             11  
//          12 13 14 
//       15 16 17 18 19  
//    20 21 22 23 24 25 26 
// 27 28 29 30 31 32 33 34 35

// one method
temp = 0
x = 11
for (i = 1; i <= 5; i++) {
    str = ""
    for (space = 8; space > i; space--) {
        str = str + "   "
    }
    for (j = 1; j <= i + temp; j++) {
        str = str + x + " ";
        x++
    }

    temp++
    console.log(str);

}

console.log('----- another method-----');
//             11               1 col
//          12 13 14            3 col
//       15 16 17 18 19         5 col
//    20 21 22 23 24 25 26      7 col
// 27 28 29 30 31 32 33 34 35   9 col

variable = 11
for (i = 1; i <= 5; i++) {
    str = ""
    for (spa = 1; spa <= 5 - i; spa++) { /* spa=4;spa>i can also do like that too*/
        str = str + "   "
    }
    for (j = 1; j <= (2 * i) - 1; j++) {
        str = str + variable + " "
        variable++
    }
    console.log(str);

}