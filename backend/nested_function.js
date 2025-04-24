function a() {
    let parent_variable = 'parent'
    console.log('Inside function of a');
    console.log(`my parent is ${parent_variable}`);
    // console.log(`my child is ${child_variable}`); cannt access the child property in the parent fucntion -> closure property

    function b() {
        let child_variable = 'child'
        console.log('inside function of b');
        console.log(`my parent is ${parent_variable}`);// can access the parent property in the child function
        console.log(`my child is ${child_variable}`);
    }
    b() /* the call should also be inside the parent function */

}
a()