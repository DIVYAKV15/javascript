//exp = '**10/2*5'//in that case catch and finally work
exp = '10/2*5'//now expr is correct so everything work properly
try {
    const result = eval(exp)
    console.log(result);
}
catch {
    console.log('there is arror in eval expression');

}
finally {
    console.log('excution ended');

}



n1 = 12
n2 = 20
const sum = n1 + n2
console.log(sum);

//if there is any error the entire application will stop 
//so in that case if we know the error will come just handle with try catch
//then the entire application wil not stop
//try catch like if else - try block add the error may come stmt
//catch is like error if error arrived ift will move to catch


