//write a prgm to check 2 numbers and return true is one of the number is 100 or if the sum of the 2 numbers is 100
a = 50
b = 10
sum = a + b
if (sum == 100 || a == 100 || b == 100) {
    console.log(true);


} else {
    console.log(false);

}
//or
const isEqualTo = (a, b) => a === 100 || b === 100 || (a + b) === 100;
console.log(isEqualTo(50, 50));

//write a prgrm to get the extension of a filename

const getFileNameExtension = (str) => str.slice(str.lastIndexOf('.'));
console.log(getFileNameExtension('index.html'));

const getAllExtension = (str) => {
    const parts = str.split('.');
    console.log(parts.length);

    return parts.length > 1 ? '.' + parts.slice(1).join('.') : ''

}
console.log(getAllExtension('readme.config.html'));


//write a js prgm to replace every character in a given string with the character following it in the alphabet

//this method shift everything including symbols
const replaceChara = (str) => str.split('').map((char) => String.fromCharCode(char.charCodeAt(0) + 1)).join('');
console.log(replaceChara('abcZz!9'));
//op:['a','b','c','d'] when  We use map() to loop through each character and apply some logic to transform it. with new next alphabet ['b','c','d','e' ].and join it as a string bcde
//char.charCodeAt(0) → Gets the Unicode number of the letter 0th index a=98+1 so it become b

//only the alphabets means

const replaceAlphabets = (str) => {
    return str.split('').map((char) => {
        if (char >= 'a' && char <= 'z') {
            return char == 'z' ? 'a' : String.fromCharCode(char.charCodeAt(0) + 1)
        } else if (char >= 'A' && char <= 'Z') {
            return char == 'Z' ? 'A' : String.fromCharCode(char.charCodeAt(0) + 1)
        } else {
            return char
        }
    }).join('');
};
console.log(replaceAlphabets('ABCD'));

//write a js to get the current date 
const newDate = new Date()
console.log(`${newDate.getMonth()}-${newDate.getDate()}-${newDate.getFullYear()}`);

//write a prgmn to create a string adding 'new! in from of a given string. if the given string begins with new! already then return the orginal string

const newString=(str)=>{
    console.log(str.startsWith('New'));
    
}
newString('New day')

