//instead of createing class we can do with procedural also just create function and give everrything

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
    // First, we need to check, so we have to get all the data (// Retrieve and log data from localStorage)
    getData() {
        const data = JSON.parse(localStorage.getItem("db"))// We receive the data as a string because we set it as a string.
        // We need it back as an object, so we use JSON.parse.( // Data is stored as a string in localStorage; parsing converts it back to an object)
        console.log(data);

    }

    //register
    register() {
        this.getData()//before registering we should keep all the data 
        console.log(reg_username.value) //just to check whether we can able to access the input data
        console.log(reg_password.value)//just to check whether we can able to access the input data
        if (reg_username.value == "" || reg_password.value == "") {
            alert('Please fill the form completely')
        }
        else {
            if (reg_username.value in this.database) {
                alert('Account already exist')
            }
            else {
                this.database[reg_username.value] = {
                    username: reg_username.value,
                    password: reg_password.value
                }
                console.log(this.database);
                obj.saveData() //so the registered data will be saved
                alert('Register successfull')
                window.location = 'login_page.html' //once the registeration succesful then we have to move to login page
            }
        }
    }
    //login
    login() {
        this.getData()
        if (log_user.value == "" || log_pwd.value == "") {
            alert('please fill the details completely')
        } else {
            if (log_user.value in this.database) {
                if (this.database[log_user.value].password == log_pwd.value) {
                    alert('login successful')
                    window.location='home_page.html'
                }else{
                    alert('incorrect password ')
                }


            } else {
                alert('Account doestnt exist,please register')
            }
        }
    }
}

const obj = new Landing()
obj.saveData()
obj.getData() // This function is called from the class. It fetches the data stored in local storage.
// If the data passed from the class is displayed properly in the console,
// it means the data is being stored and retrieved correctly.