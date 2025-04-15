str = 'luMinar'
//startsWith method
console.log(str.startsWith('lu'));
//endsWith method
console.log(str.endsWith('lu'));
//toUpperCase()
console.log(str.toUpperCase());
//toLowerCase()
console.log(str.toLowerCase());
//substring
str3=str.substring(2,str.length) // or str3=str.substring(2) it will go till last value
console.log(str3); //cut the string inbetween

//slice
str4=str.slice(2,4)
console.log(str4);

str5=str.slice(-5,-3)
console.log(str5);
//trim
text= '          hello'
console.log(text.trim());//leading starting spacing tailing means ending space 

//replace

sentence='I work in Microsoft,but the office of Microsoft is war away'
console.log(sentence.replace('Microsoft','google'));
console.log(sentence.replaceAll('Microsoft','google'));
//array.from()
s=Array.from(str)
console.log(s);
var name1='TECHNOLAB'
name2='LUMINAR TECHNOLAB'
st1=name2.split(' ')// op-[ 'LUMINAR', 'TECHNOLAB' ]
st=name1.split('O')//op-[ 'TECHN', 'LAB' ]
console.log(st1);






