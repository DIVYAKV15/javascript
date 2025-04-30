function display(num) {
    res.value += num;
}
function clearAll() {
    res.value = ""
}
function backButton() {

    res.value = res.value.slice(0, -1);
}
//if we give any wrong evalutaion instead of showing undefined we have to show error eg:****10/6-
function equalTo() {
    try {
        res.value = eval(res.value) //it will evaluatet the value from the result box
    } catch (error) {
        res.value = 'error'
        setTimeout(() => {
            res.value = ''
        }, 1000) //  after showing error than in 1 second it should clear the result 
    }

}
//If you want the value to be displayed  when a button is clicked,  in an input box, you should use result.value. In case result is not an input tag but a div, then you can use result.innerHTML, as a div can contain content. On the other hand, an input tag is a void element, so we can’t give content directly to it using innerHTML.

//Always remember, when you take data from an input box, it will always be a string

//Whenever you get a value from an HTML input field (like using JavaScript with document.getElementById("inputId").value), the data you receive will always be in the form of text (string) — even if the user enters numbers.


//<input id="age" type="number">
//let value = document.getElementById("age").value;
//console.log(typeof value); // It will show "string"
//Even though the input type is number, the value you get in JavaScript will still be a string. If you want to do math with it, you must convert it to a number using parseInt() or Number().
