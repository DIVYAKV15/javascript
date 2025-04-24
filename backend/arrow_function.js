const display = (num) => num % 2 == 0 ? 'even' : 'odd'
console.log(display(8));

//w.a.p to find given number is positive or negative using arrow function

const pos_neg = (val) => val > 0 ? 'positive' : val == 0 ? 'neither negative nor positive ' : 'negative'
console.log(pos_neg(0));
