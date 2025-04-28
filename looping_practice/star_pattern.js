// *
// * *
// * * *
// * * * *
// * * * * *

for (i = 1; i <= 5; i++) {
    str = ""
    for (j = 1; j <= i; j++) {
        str += "*"
    }
    console.log(str);

}
// *     
// * *    
// *   *  
// *     *
// * * * * *

for (i = 1; i <= 5; i++) { //1
    str = "" 
    //second 'for loop' to print star and space between them
    for (let j = 1; j <= i; j++) {   //1<=1 
        //condition to make it hollow   
        if (j==1 || j==i || i==5) {   // 
            str += "* ";
        }
        else{
            str += "  ";
        }
    }
    console.log(str);

}