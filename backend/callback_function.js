function greet(name ,callback,){/* this is parent function because we are giving the fucntiin parameter */
    console.log(`hi ${name}`);
    callback()
    
}
function fsec(){
    console.log('I am second function');
    
}
greet('divya',fsec)// Passing 'divya' as the name and fsec as the callback
 /* passing function as an argument  */

//  greet is a parent function that takes two parameters:

// name (a string)

// callback (a function)

// It first logs "hi {name}" to the console.

// Then, it calls callback()—which means it will execute whatever function is passed as an argument.