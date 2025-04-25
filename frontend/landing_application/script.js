class Landing {
    //properties 
    //database type is a object or json object
    database = {
        'appu': { username: "appu", password: "appu123" }, //appu is akey that identifies the user
        'ponnu': { username: "ponnu", password: "ponnu123" },
        'raj': { username: "raj", password: "raj123" },
    }
    //method- to store the data in our local storage in browser storage
    saveData() {
        if (this.database) {//if there is database ->true anaenkil
            // localStorage only accepts string values, so we need to convert the object(database) to a string using JSON.stringify.
            // If this.database exists (i.e., it's not null or undefined), we store it in localStorage. Since this.database is an object (or JSON), and localStorage only accepts string values, we convert it into a string using JSON.stringify.
            //here databse is just a key and values will be from this.database
            localStorage.setItem('db', JSON.stringify(this.database)) //this.database is object/json type that we cant set it in our local storage  as it is accept only string so we want to convert into string using json.stringfy
        }
    }
    //register
    register() {
        console.log(reg_username.value) //just to check whether we can able to access the input data
        console.log(reg_password.value)//just to check whether we can able to access the input data
    }
}

const obj = new Landing()
obj.saveData()