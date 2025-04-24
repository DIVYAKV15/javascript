//w.a.p to check a given number is mobile number or not

mob = '7654891243' // array mutable string unmutable

console.log(mob.length == 10 ? 'its an mobile number' : 'no');
//or
if (mob.length >= 10) {
    console.log('mobile number');

} else {
    console.log('not mobile number')
}


//w.a.p to check a given mail is email or not
mail_id = 'dhivya@gmail.com'
val = mail_id.endsWith('@gmail.com')
console.log(val ? 'gmail' : 'not an gmail');


//w.a.p to check a given string starts with letter q

str = 'mueen'
str2 = str.toLowerCase().startsWith('q')
console.log(str2 ? 'starts with q' : 'no');


//w.a.p to print all the vowels from the given string

sentence = 'good morning all'
vowels = ['a', 'e', 'i', 'o', 'u']
sent2 = sentence.toLowerCase()
str = Array.from(sent2)
console.log(str);
var new1 = str.filter((items) => vowels.includes(items));//the element prsent or not include do the work
console.log(new1);
//or 
//op=[]
for (let char of str) {
    if (vowels.includes(char)) {
        //op.push(char)//then print op
        console.log(char);

    }
}


// notes: why array mutable string not mutable
// str='luminar'
// console.log(str[2]);
// str[2]='q'//reassign not possible its unmutable can tchange
// console.log(str); 

// arr=['l','u','m']
// console.log(arr[1]);
// arr[1]='l'//possible bcoz its mutable
// console.log(arr);

// arr[1]=1 //can change the value in array
// str[1]=1 //it will not change the value


//w.a.p to check whether a given string is palindrom or not

var title = 'malayalam'
pal = ''//m //ma
for (i = title.length - 1; i >= 0; i++) {
    pal += title[i] //pal=m // pal =ma
}
console.log(pal == title ? 'palindrome' : 'not a palindrome');



