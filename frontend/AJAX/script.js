//create an instance for the class 
//in aAJX there is one predefined class XMLHttpRequest() to consume api in frontend so 
// Create an instance of the XMLHttpRequest class
const obj = new XMLHttpRequest()
//call the open method to open the connection with the url

// Open a connection using the HTTP GET method to the specified URL
obj.open('get', 'https://jsonplaceholder.typicode.com/todos')
//request send
obj.send()
//request send cheythutu response kitan oru time dalay edukum ah time delay calculate cheyyan anu readystate use cheyynnu ..ah readystate 4(max value) avumbo aanu respone kita 

//as it is asynchronous time conusiming one 
// so for giving after how long will it take to receive the response using readyState initially it will be 1 but it  should reach 4 then only we get the response so to change the readystate value to 4 we need to use onreadystatechange()
console.log(obj.readyState);//its a property  The readyState property of an XMLHttpRequest object indicates the current state of the request. It helps track the progress of the request from start to finish
obj.onreadystatechange = () => {
    console.log(obj.readyState);
    // usually wait until readyState === 4 to access the full response, because before that, the response is incomplete or not yet available.
    if (obj.readyState == 4) {
        if (obj.status >= 200 && obj.status < 300) {
            //just to check whther we receiing data
            // console.log(obj.responseText);//  returns an data - to receive the data we need to use responeText

            //converting the json into object using parse
            let allToDo = JSON.parse(obj.responseText)
            console.log(allToDo);

            // accessing each from array so for each 
            allToDo.forEach((item) => { //accessing it in item
                 //if result.innerHTML += is not given means only the last data will be shown so we have tp add with previous value
                result.innerHTML += ` 
                    <tr>
                        <td>${item.userId}</td>
                        <td>${item.id}</td>
                        <td>${item.title}</td>
                        <td>${item.completed}</td>
                    </tr>`
            })

        }
        console.log('response received');

    } else {
        console.log('no response');

    }
}

//XMLHttpRequest readyState Diagram
// | readyState = 0    | readyState = 1    | readyState = 2    | readyState = 3    | readyState = 4    |
// | UNSENT            | OPENED            | HEADERS_RECEIVED  | LOADING           | DONE              |
// +-------------------+-------------------
//   Client created     open() called      send() called     Receiving data     Request complete


// Explanation of Each readyState:
// readyState = 0 (UNSENT): The XMLHttpRequest object has been created, but the open() method has not been called yet.​
// Mozilla Developer Network

// readyState = 1 (OPENED): The open() method has been called, but the request has not yet been sent.​

// readyState = 2 (HEADERS_RECEIVED): The send() method has been called, and the response headers have been received.​
// MDN Web Docs
// +1
// Mozilla Developer Network
// +1

// readyState = 3 (LOADING): The response body is being received (in the process). If the responseType is "text" or an empty string, responseText will hold partial data as it loads.​
// Mozilla Developer Network
// +1
// MDN Web Docs
// +1

// readyState = 4 (DONE): The operation is complete, meaning the request has finished, and the response is fully received.​

// This progression ensures that each stage of the request is completed before moving to the next, allowing for proper handling of the response data.