a=[11,10,12,3,2,4]
// ascending - sort
newArray=a.sort((x,y)=>x-y) //can pass any argument but if we want ascending  we should give first argument then second argument
//a.sort()
//console.log(a);

console.log(newArray);
// descending order
descendingArray=a.sort((p,q)=>q-p)//can pass any argument but if we want descending  we should give second argument then first argument
console.log(descendingArray);


