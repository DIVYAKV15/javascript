// displaying an array
weekday = ['mon', 'tue', 'wed', 'thurs', 'frid']
console.log(weekday);
console.log(typeof(weekday));
console.log(weekday);
// if we want to access each index one by one so we use array

for(i=0;i<=weekday.length-1;i++){
    console.log(weekday[i]);
    
}
// no condition ,incremets needed directly return the indexs of the array
for(let i in weekday){
    console.log(i);//index value
    console.log(weekday[i]);
    
}

for(let i of weekday)
{
    console.log(i);//return the item directly
}
console.log('--------');
console.log(weekday);
weekday.push('fri') /* to add an element at the end of an array */
console.log(weekday);
// weekday[0]=('sun')

weekday.unshift('sun') /* to add an element in the first position */
console.log(weekday);
weekday.pop() /* to remove the last element in a array */
console.log(weekday);
weekday.shit() /* to remove the first element in a array */
console.log(weekday);

