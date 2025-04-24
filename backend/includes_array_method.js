a=['divi','dhan','ponnu','adhu']
b=a.includes('divi') //based on item
console.log(b?'yes':'no');

//or in some
d=a.some((item)=>item=='divi') //based on condition
console.log(d?'yes':'no');