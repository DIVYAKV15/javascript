class A{
    method1(){
        console.log('inisde class A');
        
    }
    method1(num){
console.log(`inside class A with argument ${num}`);

    }
    method1(num1,num2){
        console.log(`inside class A with argument ${num1} and ${num2}`);
    }
}
const obj =new A();
    obj.method1() //op:inside class A with argument undefined and undefined
// As method overloading is not supported in JavaScript, 
// if we define two functions with the same name like samenumber(1) and samenumber(1, 2), 
// only the last defined function will be used. 
// To handle multiple arguments, we use the rest operator (...args), 
// which allows us to pass any number of arguments to a single function.

//rest operator
class Sum{
    sumOfNumber(...arg){
        console.log(arg);//whatever the value we passing,rest operator make it as array then we can work on that array
        let total=arg.reduce((n1,n2)=>n1+n2)
        console.log('the sum is ' +total);
        
        
    }
}
const value=new Sum();
value.sumOfNumber(1,2,3,4,5);

