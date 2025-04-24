//[id,name,price,stock]
products = [
    [1, 'hide and seek', 50, 20],
    [2, 'lays', 20, 80],
    [3, 'oreo', 40, 100],
    [4, 'parleG', 25, 10],
    [5, 'tiger', 20, 30],
    [6, 'unibic', 60, 0],
    [7, 'good day', 70, 60]
]
//1. display all product name
console.log('----display all product name------');

products.forEach((items) => console.log(items[1]));
console.log('--------------');

//2. display product whose price < Rs.50
console.log('-----display product whose price < Rs.50----');

products.filter((price) => price[2] < 50).forEach((items) => console.log(items));
console.log('--------------');

//3. print price of oreo
console.log('----print price of oreo-------');

details = products.find((item) => item[1] == 'oreo')
console.log(details[2]);
console.log('--------------');
//or
console.log('another way to use');

console.log(products.find((item) => item[1] == 'oreo')[2]);

console.log('--------------');

//4. print costly product name
//we need only one return so use reduce
console.log('-----print costly product name----');

console.log(products.reduce((prod1, prod2) => prod1[2] > prod2[2] ? prod1[1] : prod2[1]));
console.log('--------------');
//5. display out of stock product
console.log('---display out of stock product--');
products.filter((items) => items[3] == 0).forEach((items) => console.log(items[1]));


//6. sort products based on stock in decsending order
console.log('----sort products based on stock in decsending order-----');

products.sort((a, b) => b[3] - a[3]).forEach((items) => console.log(items[1]));
console.log('--------------');

//7. print product having maximum available stock
console.log('---print product having maximum available stock--');

max = products.reduce((pro1, pro2) => pro1[3] > pro2[3] ? pro1 : pro2)
console.log(max);
console.log('--------------');
//8. is there any product can be purchased by Rs. 10
console.log('--is there any product can be purchased by Rs. 10--');

console.log(products.some((item) => item[2] <= 10) ? "yes,you can" : "No,you cant");

console.log('--------------');
//9. Is there any product in the range of 10 to 30
console.log('--Is there any product in the range of 10 to 30--');

console.log(products.some((items) => items[2] >= 10 || items[2] <= 30) ? 'yes, you can' : 'No,you cant');

console.log('--------------');
//10. print all products in the range of 10 to 30
console.log('---print all products in the range of 10 to 30---');

console.log(products.filter((pro1) => pro1[2] >= 10 && pro1[2] <= 30));
console.log('--------------');