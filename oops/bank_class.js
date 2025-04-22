class Bank {
    //property
    accountDetails = {
        1000: { acc_no: 1000, userName: 'userone', password: 'userone', balance: 5000 },
        1001: { acc_no: 1001, userName: 'usertwo', password: 'usertwo', balance: 10000 },
        1002: { acc_no: 1002, userName: 'userthree', password: 'userthree', balance: 6000 },
        1003: { acc_no: 1003, userName: 'userfour', password: 'userfour', balance: 2000 },
    }

    //w.a. method to validate an account

    validate(ac_no) {
        return ac_no in this.accountDetails ? true : false;

    }
    //w.a.method to authenticate an account

    authenticate(acno, pwd) {//acno and password is unique so validate with that
        //first chack whether is the accno is there or else return incorrect accno
        if (this.validate(acno)) {
            //if accno is correct then check the pwd
            if (this.accountDetails[acno].password == pwd) {
                console.log('Aunthentication successful');

            } else {
                console.log('Incorrect UserName or password');

            }
        }
        else {
            console.log('Incorrect account number');

        }
    }

    // w.a.method to check the balance of an account

    balance(acno, pwd) {
        //here we cant call the authenticate method as we are not returning the op we jsut consoling it if we change to return then we can avoid the below steps
        if (this.validate(acno)) {
            //if accno is correct then check the pwd
            if (this.accountDetails[acno].password == pwd) {
                console.log(`balance is ${this.accountDetails[acno].balance}`);

            } else {
                console.log('Incorrect UserName or password');

            }
        }
        else {
            console.log('Incorrect account number');

        }
    }
    //w.a method to transfer an amount from one account to another

    transfer(fromAccNo, pwd, amt, toAccNo) {
        //both the account number should be correct
        if (this.validate(fromAccNo) && this.validate(toAccNo)) {
            //then pwd should be correct
            if (this.accountDetails[fromAccNo].password == pwd) {
                //then check the balance or else insufficient balance
                if (this.accountDetails[fromAccNo].balance >= amt) {

                    console.log(`balance of your account is ${this.accountDetails[fromAccNo].balance}`);
                    //add the amount to the toaccount
                    this.accountDetails[toAccNo].balance += amt;
                    //subtract the amount from account
                    this.accountDetails[fromAccNo].balance -= amt;

                    //finally show the current balance 
                    console.log(`the current balance of the ${fromAccNo} is  ${this.accountDetails[fromAccNo].balance} and ${toAccNo} is ${this.accountDetails[toAccNo].balance} `);

                } else {
                    console.log('insufficient balance');

                }

            } else {
                console.log('incorrect username or password');
            }

        }
        else {
            console.log('invalid account number');

        }
    }
}

const bank_det = new Bank();
//as we return in the validate to see the op we are logging it in
console.log(bank_det.validate(1000) ? 'account exist' : 'no such account number in account details');
//as we already logging the op in authentic`te so we just calling the method
bank_det.authenticate(1009, 'userone');
bank_det.balance(1002, 'userthree');
bank_det.transfer(1000, 'userone', 1000, 1002)
