car = {
    name: 'baleno',
    model: 'Hatch back',
    manufacturer: 'Maruti',
    price: '10Lakhs'

}
//display car name and manufacturer name 

console.log(`display car name :${car.name}  and manufacturer name:${car.manufacturer}`);

//check whether 'model key is present or not , if present display the value

'modelKey' in car ? console.log(car.modelKey) : console.log('model key is not  present')

//add 'varient' key to the car object with value as 'manual'
car['varient'] = ['manual']  // add multiple value in a same key make it as array
console.log(car);

//update with another a new value "automatic" to the car varient

car['varient'].push('automatic')
console.log(car);

// create a new key 'color ' with valuea as  'red','blue' and 'green'
car['color'] = ['red', 'blue', 'green']
console.log(car);
