function sum(firstNumber, secondNumber){
    if(typeof(firstNumber) !== 'number' || typeof(secondNumber) !== 'number' || isNaN(firstNumber) || isNaN(secondNumber)){
        return 'Invalid input(s)';
    }

    return firstNumber + secondNumber;
}

module.exports = sum;