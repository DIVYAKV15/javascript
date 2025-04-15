function bmiCalculator(weight, height){
    var bmi=weight/height**2
    return Math.floor(bmi)
}
var bmi = bmiCalculator(77, 1.8);
console.log(bmi);
