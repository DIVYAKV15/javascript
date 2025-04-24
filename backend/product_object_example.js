//arrray of objects
products = [
    { pid: 100, pName: 'apple', band: '5g', price: 120000, display: 'led' },
    { pid: 101, pName: 'samsaung', band: '5g', price: 45000, display: 'led' },
    { pid: 102, pName: 'blackberry', band: '4g', price: 50000, display: 'led' },
    { pid: 103, pName: 'nokia', band: '3g', price: 1200, display: 'lcd' },
    { pid: 104, pName: 'motorola', band: '4g', price: 10000, display: 'lcd' }
]

//1. print product name only
console.log('1. print product name only');

for (let name of products) {
    console.log(name.pName);

}
console.log('-----------------');

//2. print all mobile details whose display is lcd
console.log('2. print all mobile details whose display is lcd');

products.filter((display_name) => display_name.display == 'lcd').forEach((items) => console.log(items))
//console.log(products.filter((display_name)=>display_name.display=='lcd'))

console.log('-----------------');
//3. print 5g mobile phone name
products.filter((name) => name.band == '5g').forEach((mob) => console.log(mob.pName));


console.log('-----------------');

//4. sort mobile based on price //if not specified then ascending order
console.log('4. sort mobile based on price');

products.sort((a, b) => a.price - b.price).forEach((items) => console.log(items.pName)); //items.pname if we want only the pname otherwise remove the pname

console.log('-----------------');

//5. print costly mobile
console.log('5. print costly mobile');

value = products.reduce((firstPro, secondPro) => firstPro.price > secondPro.price ? firstPro : secondPro)
console.log(value.pName);
console.log('-----------------');
//6. print low cost mobile
console.log('6.print low cost mobile');
lowcost = products.reduce((pro1, pro2) => pro1.price < pro2.price ? pro1 : pro2)
console.log(lowcost.pName);
console.log('-----------------');