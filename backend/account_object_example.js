

accounts = [ //array
    { //obj
        acno: 1000, ac_type: 'savings', balance: 45000, transaction: [ //again array
            {
                to: 1001, amount: 5000, msg: 'ebill', mode: 'gpay' //again obj
            },
            {
                to: 1002, amount: 2000, msg: 'emi', mode: 'neft'
            },
            {
                to: 1003, amount: 1000, msg: 'recharge', mode: 'phonePay'
            },
        ]
    },
    {
        acno: 1001, ac_type: 'current', balance: 30000, transaction: [
            {
                to: 1000, amount: 1000, msg: 'grossary', mode: 'gpay'
            },
            {
                to: 1002, amount: 7000, msg: 'gift', mode: 'phonePay'
            },
            {
                to: 1003, amount: 10000, msg: 'emi', mode: 'neft'
            },
        ]
    },
    {
        acno: 1002, ac_type: 'fixed', balance: 100000, transaction: [
            {
                to: 1000, amount: 5000, msg: 'ebill', mode: 'gpay'
            },
            {
                to: 1001, amount: 2000, msg: 'emi', mode: 'neft'
            },
            {
                to: 1003, amount: 1000, msg: 'recharge', mode: 'phonePay'
            },
        ]
    },
    {
        acno: 1003, ac_type: 'savings', balance: 30000, transaction: [
            {
                to: 1001, amount: 5000, msg: 'ebill', mode: 'gpay'
            },
            {
                to: 1002, amount: 2000, msg: 'emi', mode: 'neft'
            },
            {
                to: 1000, amount: 1000, msg: 'recharge', mode: 'phonePay'
            },
        ]
    }
]

//1. total number of accounts
console.log('-1. total number of accounts-');

console.log(accounts.length);


//2. print account number whose ac_type is savings
console.log('-2. print account number whose ac_type is savings-');

accounts.filter((saving) => saving.ac_type == 'savings').forEach((i) => console.log(i.acno));


//3.print the balance of account number 1000
console.log('-3.print the balance of accnount number 1000-');
accounts.filter((bal) => bal.acno == 1000).forEach((items) => console.log(items.balance));

//best approach is find method
console.log('-best approach is find method-');

console.log(accounts.find((items) => items.acno == 1000).balance
);




//4. print all gpay transactions
console.log('-4. print all gpay transactions-');
accounts.forEach((trans) => {
    new_trans = trans.transaction.filter((type) => type.mode == 'gpay')
    console.log(new_trans);

})

//using map method
console.log('-using map method-');
// map return the new array which contains the transaction
// now going to convert the array into single dimension so using flat 
console.log('--');
accounts.map((item) => item.transaction).flat().filter((item) => item.mode == 'gpay').forEach((i) => console.log(i));
console.log('--');
//op using map method:
// -using map method-
// [
//   [
//     { to: 1001, amount: 5000, msg: 'ebill', mode: 'gpay' },
//     { to: 1002, amount: 2000, msg: 'emi', mode: 'neft' },
//     { to: 1003, amount: 1000, msg: 'recharge', mode: 'phonePay' }
//   ],
//   [
//     { to: 1000, amount: 1000, msg: 'grossary', mode: 'gpay' },
//     { to: 1002, amount: 7000, msg: 'gift', mode: 'phonePay' },
//     { to: 1003, amount: 10000, msg: 'emi', mode: 'neft' }
//   ],
//   [
//     { to: 1000, amount: 5000, msg: 'ebill', mode: 'gpay' },
//     { to: 1001, amount: 2000, msg: 'emi', mode: 'neft' },
//     { to: 1003, amount: 1000, msg: 'recharge', mode: 'phonePay' }
//   ],
//   [
//     { to: 1001, amount: 5000, msg: 'ebill', mode: 'gpay' },
//     { to: 1002, amount: 2000, msg: 'emi', mode: 'neft' },
//     { to: 1000, amount: 1000, msg: 'recharge', mode: 'phonePay' }
//   ]
// ]
// op using flat method converting the above in single array
// [ 
// { to: 1001, amount: 5000, msg: 'ebill', mode: 'gpay' }
// { to: 1002, amount: 2000, msg: 'emi', mode: 'gpay' }
// { to: 1003, amount: 1000, msg: 'recharge', mode: 'gpay' }
// { to: 1000, amount: 1000, msg: 'grossary', mode: 'gpay' }
// { to: 1002, amount: 7000, msg: 'gift', mode: 'gpay' }
// { to: 1003, amount: 10000, msg: 'emi', mode: 'gpay' }
// { to: 1000, amount: 5000, msg: 'ebill', mode: 'gpay' }
// { to: 1001, amount: 2000, msg: 'emi', mode: 'gpay' }
// { to: 1003, amount: 1000, msg: 'recharge', mode: 'gpay' }
// { to: 1001, amount: 5000, msg: 'ebill', mode: 'gpay' }
// { to: 1002, amount: 2000, msg: 'emi', mode: 'gpay' }
// { to: 1000, amount: 1000, msg: 'recharge', mode: 'gpay' } 
// ]

//5. print all transaction whose amount > 5000
console.log('-5. print all transaction whose amount > 5000-');

accounts.map((item) => item.transaction).flat().filter((amt) => amt.amount > 5000).forEach((trans) => console.log(trans));
console.log('-another method-');
accounts.forEach((act) => {
    new_arr = act.transaction.filter((amt) => amt.amount > 5000).forEach((i) => console.log(i));
})

//6. print credit transaction of account 1002
console.log('-6. print credit transaction of account 1002-');

accounts.forEach((item) => {
    item.transaction.filter((credit) => credit.to == 1002).forEach((i) => console.log(i));

})
console.log('--');
console.log('-another method-');
credited = accounts.map((item) => item.transaction).flat().filter((amt) => amt.to == 1002)
console.log(credited);
//7. print debit transaction of account 1002
console.log('-7. print debit transaction of account 1002-');

// accounts.forEach((item) => {
//     if (item.acno == 1002) {
//         console.log(item.transaction);

//     }
// });
new_debit = accounts.find((debit) => debit.acno == 1002).transaction
console.log(new_debit);


//8. print transaction history of 1002

console.log('-8. print transaction history of 1002-');
// object
trans_history = {
    credit: credited,
    debit: new_debit
}
console.log(trans_history);

// array 
// spread- merging of two different array using ...(3 dots)

history = [...credited, ...new_debit] //but here we dont know which is credit and debit so object is best
console.log(history);

//9. print highest balance account details
console.log('-9. print highest balance account details-');

highest = accounts.reduce((bal1, bal2) => bal1.balance > bal2.balance ? bal1 : bal2);
console.log(highest);

