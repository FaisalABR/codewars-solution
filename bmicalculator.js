let bmi = 0;
function bmiCalculation(weight, height) {
    bmi = weight / Math.pow(height, 2); //function Math.pow(x, y) is used to exponent power x is base number and y is exponent numbers
    if( bmi <= 18.5 ) {
        return "Underweight"
    } else if ( bmi <= 25.0 ) {
        return "Normal"
    } else if ( bmi <= 30.0 ) {
        return "Overweight"
    } else if ( bmi > 30 ) {
        return "Obese"
    }
}

console.log(bmiCalculation(50,1.65)); //weight in kg and height in meters