//w.a.p to find the pairs whose sum is 6
a = [2, 3, 4, 5]
for (i = 0; i < a.length; i++) { //0<4
    for (j = i + 1; j < a.length; j++) {//1 //
        sum = a[i] + a[j] //2+3=5 
        console.log(sum);
        temp = [a[i], a[j]] //(2,3)
        console.log(temp);
        // console.log(sum);
        if (sum == 6) { //6==6

            console.log(temp);

        }
    }
}  

///another method

sum=7
found=false
for (i = 0; i < a.length; i++) { //0<4
    for (j = i + 1; j < a.length; j++) {//1 //
        if(a[i]+a[j]==sum){
            console.log(`${a[i]},${a[j]}`);
            found=true
        }
    }
} 
!found && console.log('no pairs');
