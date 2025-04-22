//single level //inheritance
console.log('--single level or inheritance ----');

class A {
    methoda() {
        console.log('inside method of A class');

    }
}
class B extends A {
    methodb() {
        console.log('inside method of B class');

    }
}
const obj = new B()
obj.methodb()
obj.methoda()

console.log('-----------');

//mulitlevel inheritance
console.log('--mulitlevel inheritance---');

class A1 {
    methoda1() {
        console.log('inside method of A1 class');

    }
}
class B1 extends A1 {
    methodb1() {
        console.log('inside method of B1 class');

    }
}
class C1 extends B1 {
    methodc1() {
        console.log('inside method of C1 class');

    }
}
const obj1 = new C1
obj1.methodc1()
obj1.methodb1()
obj1.methoda1()
console.log('-----------');

//hierarchial inheritance
//one single parent and 2 child
console.log('--hierarchial inheritance---');
class A2 {
    methoda2() {
        console.log('inside method of A2 class');

    }
}
class B2 extends A2 {
    methodb2() {
        console.log('inside method of B2 class');

    }
}
class C2 extends A2 {
    methodc2() {
        console.log('inside method of C2 class');

    }
}
//this 2 child are accessing the parent but child is not accessing the b method
const obj2 = new C2
obj2.methodc2()
// obj2.methodb2() will not work because here we are not inherit the b class if we want to access the we should create instance for B2 class
obj2.methoda2()
console.log('-----------');

