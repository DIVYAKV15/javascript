class A{
    method1(){
        console.log('first written method');
        
    }
    method1(){
console.log('second written method');

    }
    method1(num1,num2){
        console.log('third written method');
    }
}
const obj1=new A()
obj1.method1()//op-third written method

//What if you want to access the first  methods?
//so use the rest operator and control logic manually

class A {
    method1(...args) {
        if (args.length === 0) {
            console.log('first method logic');
        } else if (args.length === 1) {
            console.log('second method logic');
        } else {
            console.log('third method logic');
        }
    }
}
const obj = new A();
obj.method1();        // first method logic
obj.method1(10);      // second method logic
obj.method1(10, 20);  // third method logic

//method overloading we use in inheritance

class Animal {
    speak() {
        console.log('Animal makes a sound');
    }
}

class Dog extends Animal {
    speak() {
        console.log('Dog barks');
    }
}

const myDog = new Dog();
myDog.speak(); // Output: Dog barks
