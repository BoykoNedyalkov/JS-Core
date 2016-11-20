function subtract() {
    let num1 = Number($('#firstNumber').val());
    let num2 = Number($('#secondNumber').val());
    let resultDiv = $('#result')
    let result = num1 - num2;
    resultDiv[0].textContent = result;
}