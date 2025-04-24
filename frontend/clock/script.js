function getTime() {
    //then line by line exceution
    const time = new Date()
    //console.log(time);//op:Thu Apr 24 2025 11:18:33 GMT+0400 (Gulf Standard Time)
    //we dont need full data just time
    const hr = time.getHours()
    //console.log(hr);//op:24 -just to check we receiving data or not
    const min = time.getMinutes()
    //console.log(min);//op:19
    const sec = time.getSeconds()
    //console.log(sec);//op:6
    timing.innerHTML = `${hr} : ${min} : ${sec}  ${hr >= 12 ? 'AM' : 'PM'}`
    //then every sec it calls the getTime to call the function again so the time change evey second
    setTimeout(() => {
        getTime()
    }, 1000)

}
//once the website the time has to start so no event just call the function in the script
//first it will work
getTime()

//recursive calling our won function againa nd agin thats what happpening here