'use strict';

const userWeight = parseInt(document.getElementById('weight').value);
const userHeight = parseInt(document.getElementById('height').value);

const btnSubmit = document.getElementById('btn-submit');

const resultField = document.getElementById('result-window');

resultField.innerText = 'Twoje BMI wynosi: '



btnSubmit.addEventListener('click', () => {
    
    // resultField.innerText = '';

    // const bmiWeight = userWeight;
    // const bmiHeight = userHeight;
    const bmiResult = userWeight / (Math.pow(userHeight), 2 / 100);


    let finalResult = bmiResult * 100;

    let floatResult = parseFloat(finalResult);

    console.log(floatResult);

    
    // if(floatResult < 16){
    //     resultField.textContent += floatResult + '. ' + 'Jesteś wygłodzony!'

    // } else if(floatResult > 16 && floatResult < 17) {
    //     resultField.textContent += floatResult + '. ' + 'Jesteś wychudzony!'

    // } else if(floatResult > 17 && floatResult < 18.50) {
    //     resultField.textContent += floatResult + '. ' + 'Cierpisz na niedowagę!'

    // } else if(floatResult > 18.50 && floatResult < 25) {
    //     resultField.textContent += floatResult + '. ' + 'Jesteś w dobrym miejscu, tak trzymać! To prawidłowa wartość BMI!'

    // } else if (floatResult > 25 && floatResult < 29.99) {
    //     resultField.textContent += floatResult + '. ' + 'Cierpisz na nadwagę!'

    // } else {
    //     resultField.textContent += floatResult + '. ' + 'Cierpisz na otyłość!'
    // }


})