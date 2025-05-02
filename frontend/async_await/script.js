//async await 
const searchCountry = async () => {
    console.log(country_name.value);
    //- we can store the data directly into the variable
    const response = await fetch(`https://restcountries.com/v3.1/name/${country_name.value}?fullText=true`)
    //asynchronous yae synchronous aitu work cheyyan async awit use cheyyanu
    // console.log(response);
    // to convert the data into json we have to parse 
    response.json().then((data) => {
        console.log(data);//complete data 
        let countryName = data[0].name.common
        console.log(countryName);
        let officialName = data[0].name.official;
        console.log(officialName);
        let capitalName = data[0].capital;
        console.log(capitalName);
        //borders
        let borders = data[0].borders
        console.log(borders);
        //population
        let population = data[0].population
        console.log(population);

        //area
        let area = data[0].area
        console.log(area);
        //google mapes
        let googleMaps = data[0].maps.googleMaps
        console.log(googleMaps);
        //timezones
        let timeZones = data[0].timezones
        console.log(timeZones);
        //continents
        continent = data[0].continents
        console.log(continent);
        //flags-png
        let flag = data[0].flags.png
        console.log(flag);
        //currency -my method
        // let currencies = data[0].currencies
        // for (var i in currencies) {
        //     console.log(currencies[i]);
        //     var currency = `${currencies[i].name}(${i})-${currencies[i].symbol}`
        //     console.log(currency);

        // }
        //currency -another method
        let curre = []
        for (i in data[0].currencies) {
            curre.push(`${data[0].currencies[i].name}(${i})-${data[0].currencies[i].symbol}`)
        }
        //language
        //let language = data[0].languages
        // let lang = '';
        // for (let i in language) {
        //     console.log(language[i]);
        //     lang += language[i] + ","


        // }
        let lang = [] //to store the value
        for (let i in data[0].languages) {
            lang.push(data[0].languages[i]) //languages[i] this will give the value of that keys and pushing in that new array
        }



        result.innerHTML = `< div class= "card mb-3 mt-5 p-3" style = "width: 100%;" >
            <div class="row g-0">
                <div class="col-md-4">
                    <img src=${flag}
                        class="img-fluid rounded-start" alt="flag" style="width: 100%;">

                        <h5 class="card-title mt-4 text-center">Official Name:${officialName}</h5>
                        <ul class="list-group list-group-flush border mt-4">
                            <li class="list-group-item">Country Name:${countryName}</li>
                            <li class="list-group-item">Capital Name:${capitalName}</li>

                        </ul>
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <ul class="list-group list-group-flush border">
                            <li class="list-group-item">currencies:${curre}</li>
                            <li class="list-group-item">languages: ${lang}</li>
                            <li class="list-group-item">Borders: ${borders}</li>
                            <li class="list-group-item">Area: ${area}</li>
                            <li class="list-group-item">Population: ${population}</li>
                            <li class="list-group-item">TimeZone: ${timeZones}</li>
                            <li class="list-group-item">continents: ${continent}</li>

                            <li class="list-group-item">Google Maps: <a href=${googleMaps} target="_blank">${googleMaps}</a></li>
                        </ul>

                    </div>
                </div>
            </div>
                    </ > `

    })

}
// name,official,currencies,capital,languages,borders,area,maps(google maps),population,timezones,continents,flags.png
//h-w :language,currencies