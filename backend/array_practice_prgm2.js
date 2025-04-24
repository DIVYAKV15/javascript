console.log('-----1st program---');
arr = [10, 1, 12, 3, 4, 2]
// w.a.p to find whether number 2 is present or not, if yees print number or not present
number = 2
flag = false
for (item of arr) {

    if (item == number) {
        flag = true
        break // why we using is if tipresent once also then break it didnt ask how many times it present
    }

}
console.log(flag == true ? 'present' : 'not present');
console.log('------------');
console.log('-----2nd program---');

//a=[4,5,6] sum of total=15
//o.p =[11,10,9] 15-4 15-5 15-6
a = [4, 5, 6]
sum = 0
op = []
for (i of a) {
    sum += i

}
console.log(sum);
for (i of a) {
    op.push(sum - i)
    // op = sum - i


}
console.log(op);

// another method
variable = 7
for (item of a) {
    op.push(item + variable) //4+7 =11 5+5=10
    variable -= 2 // then variable become 7-2 = 5
}
console.log(op);
console.log('------------');
console.log('-----3rd program---');
// w.a.p to find the duplicates element form the given array
//duplicates = [10, 20, 30, 20, 30, 40, 50, 60, 10]
duplicates = [10, 20, 30, 20, 30, 40, 50, 60, 10, 10] //if ame number then it should not print
//duplicates = [40, 50, 60, 10] // to check no duplcates
final = []

for (i = 0; i < duplicates.length; i++) { //0<9
    for (j = i + 1; j < duplicates.length; j++) { //1<9
        if (duplicates[i] == duplicates[j]) { //10 ==20 // 10==30 //10==20
            // console.log(duplicates[i]);
            isDuplicate = false
            for (k = 0; k < final.length; k++) { // to check the duplcates value is already present in final if not add or else it should not add
                if (final[k] == duplicates[i]) { //0 !=10  
                    isDuplicate = true
                }

            }
            if (!isDuplicate) {
                final.push(duplicates[i]) //10 
            }



            //if we want to print the nduplicates number in array

        }
    }

}
// console.log(flag==true?final:'no duplicates');  or
console.log(final.length != 0 ? final : 'no duplicates elements');

// console.log(final);

