function ageCheck() {
    console.log(age.value);
    // if(age.value>=18){
    //     alert('eligible to vote')
    // }else{
    //     alert('not eligible')
    // }
    //mam method
    // if (age.value) {
    //     if (age.value >= 18) {
    //         eligible.innerHTML = 'Eligible to vote';

    //         eligible.style.color = 'green'
    //     }
    //     else if (age.value < 18) {
    //         eligible.innerHTML = 'Not Eligible to vote';
    //         eligible.style.color = 'red'
    //     }
    //     else {
    //         eligible.innerHTML = 'please enter a valid number';

    //         eligible.style.color = 'orange'
    //     }
    // }
    // else {
    //     eligible.innerHTML = 'please enter a value';

    //     eligible.style.color = 'blue'
    // }
    if (age.value >= 18) {

        eligible.innerHTML = 'Eligible to vote';

        eligible.style.color = 'green'
    } else if (age.value == "") {
        eligible.innerHTML = 'please enter a value';

        eligible.style.color = 'blue'
    }
    else if (isNaN(age.value)) {
        eligible.innerHTML = 'please enter a valid number';

        eligible.style.color = 'orange'
    }
    else {
        eligible.innerHTML = 'Not Eligible to vote';
        eligible.style.color = 'red'
    }

}