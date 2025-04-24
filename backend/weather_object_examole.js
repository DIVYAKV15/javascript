weatherData = [
    { district: 'Thrissur', weather: 32 },
    { district: 'Kottayam', weather: 29 },
    { district: 'Palakkad', weather: 34 },
    { district: 'Ernakulam', weather: 33 },
    { district: 'Thrissur', weather: 29 },
    { district: 'Kottayam', weather: 30 },
    { district: 'Palakkad', weather: 32 },
    { district: 'Ernakulam', weather: 31 }
]
//print district with its highest temperature
//compare both the district and print only highest
//output: {Thrissur:32, Kottayam:30,Palakkad:34,Ernakulam:33}
op = {} //- our op is in object so create empty object
for (let data of weatherData) {
    //console.log(data); //accessing all data from weatherData
    dist = data.district //to access each key district // thrissur
    curTemp = data.weather //to acces the weather
    if (dist in op) //op obj il dist present aano nu nokkanam  true aanekil
    {
        oldTemp = op[dist] // keep the already present temp in oldTemp to compare
        if (oldTemp > curTemp) { //check the old weather is greater than new weather
            op[dist] = oldTemp //yes means old weathher
        } else {
            op[dist] = curTemp// no means new weather
        }
    } else {
        op[dist] = curTemp //{Thrissur:32,Kottayam: 29,Palakkad: 34,Ernakulam:33}
    }
}
console.log(op);


