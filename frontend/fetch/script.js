// fetch works based on Promise so respone we get in promise (//fetch() is an asynchronous function that returns a Promise, which eventually resolves to a Response object representing the result of the HTTP request.)
//fetch directly opena nd send connection we dont have to speciy that( When you use fetch(url), it automatically initiates a GET request. You don't have to manually open or establish a connection like in AJAX APIs (e.g., XMLHttpRequest).)
//in then we get positive response( This sends a GET request to the given URL. The server is expected to return a list of products in JSON format.)
fetch('https://fakestoreapi.com/products').then((response) => {
    //  console.log(response) will show metadata about the response, like status, headers, etc., but not the actual body/data yet.
    console.log(response);
    //if we log the respone we get below this we just want the data 
    // body: (...)  // the actual content (not yet read)
    // bodyUsed : false
    // headers :  Headers {} //HTTP headers
    // ok : true 
    // redirected : false
    // status : 200
    // statusText : ""
    // type : "cors"
    // url :  "https://fakestoreapi.com/products"
    // [[Prototype]]: Response
    // so to get only data from body (array of objects and it returns only promise so to access it again we use then)
    //we have to parse the body in json then only we can access
    //we taking the json response  agin the response is promise type so to access that we have to use then
    response.json().then((products) => { //response.json() is a method that reads the body and parses it into a JavaScript object (or array).
        //It's also asynchronous, so it returns Promise, which is why you need to call .then() again to actually access the data.


        console.log(products);
        products.forEach((pro) => {
            res.innerHTML +=
                `<div class="col mb-5">
                    <div class="card h-100 p-5">
                        <!-- Product image-->
                        <img class="card-img-top" src=${pro.image} alt="..." style="width:'100px';height:'300px'"/>
                        <!-- Product details-->
                        <div class="card-body p-4">
                            <div class="text-center">
                                <!-- Product name-->
                                <h5 class="fw-bolder">${pro.title}</h5>
                                <!-- Product price-->
                                $${pro.price}
                            </div>
                        </div>
                        <!-- Product actions-->
                        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a>
                            </div>
                        </div>
                    </div>
                </div>`

        })
    })
})


// fetch() sends an HTTP request and returns a Promise with a Response.

// The Response contains metadata and the body, which you must parse (e.g., .json()).

// Both steps return Promises, so you need to use .then() twice — once for the raw response, and again for the parsed data.