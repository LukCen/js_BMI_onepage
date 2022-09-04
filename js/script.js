'use strict';

let userWeight = document.querySelector('.weight').value;
let userHeight = document.querySelector('.height').value;

let btnSubmit = document.querySelector('.btn-submit');

let resultField = document.querySelector('.result-window');




btnSubmit.addEventListener('click', () => {

    let bmiWeight = parseFloat(userWeight);
    let bmiHeight = parseFloat(userHeight);
    let bmiResult = bmiWeight / (Math.pow(bmiHeight, 2) / 100);


    let finalResult = bmiResult * 100;

    let floatResult = parseFloat(finalResult)
        // resultField.textContent = finalResult.toFixed(1);
    if(floatResult < 16){
        resultField.textContent = 'Twoje BMI wynosi: ' + floatResult.toFixed(2) + '. ' + 'Jesteś wygłodzony!'

    } else if(floatResult === 16 || floatResult < 17){
        resultField.textContent = 'Twoje BMI wynosi: ' + floatResult.toFixed(2) + '. ' + 'Jesteś wychudzony!'

    } else if(floatResult === 17 || floatResult < 18.50) {
        resultField.textContent = 'Twoje BMI wynosi: ' + floatResult.toFixed(2) + '. ' + 'Cierpisz na niedowagę!'

    } else if(floatResult === 18.50 || floatResult < 25) {
        resultField.textContent = 'Twoje BMI wynosi: ' + floatResult.toFixed(2) + '. ' + 'Jesteś w dobrym miejscu, tak trzymać! To prawidłowa wartość BMI!'
    } else if (floatResult === 25 || floatResult < 29.99) {
        resultField.textContent = 'Twoje BMI wynosi: ' + floatResult.toFixed(2) + '. ' + 'Cierpisz na nadwagę!'
    } else {
        resultField.textContent = 'Twoje BMI wynosi: ' + floatResult.toFixed(2) + '. ' + 'Cierpisz na otyłość!'
    }

})