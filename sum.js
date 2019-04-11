function sum(firstNumber, secondNumber){
    if(typeof(firstNumber) !== 'number' || typeof(secondNumber) !== 'number'){
        return 'Invalid input(s)';
    }
    if(isNaN(firstNumber) || isNaN(secondNumber)){
        return 'Not a Number';
    }
    return firstNumber + secondNumber;
}

module.exports = sum;