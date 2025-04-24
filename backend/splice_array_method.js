a=['divi','dhan','love','ponnu','adhu']
//a.splice(2,1)//remove the 2nd index - love start from 2nd index,remove only 1 

//op-[ 'divi', 'dhan', 'ponnu', 'adhu' ]
//if we want to remove 2 then give 2
//a.splice(2,2)
//op-[[ 'divi', 'dhan', 'adhu' ]]
//a.splice(2,1,'good')//here it will replace the good insted of add
//op-[ 'divi', 'dhan', 'good', 'ponnu', 'adhu' ]
a.splice(2,0,'good')//here it will not remove bcoz we give 0 removal
//op -[ 'divi', 'dhan', 'good', 'love', 'ponnu', 'adhu' ]
console.log(a); 
