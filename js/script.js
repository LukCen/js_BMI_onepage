'use strict';

    
 
const btnSubmit = document.querySelector('#btn-submit');
const resultField = document.querySelector('#result-window');

btnSubmit.addEventListener('click', () => {

    let userHeight = 0;
    let userWeight = 0;

    userWeight = document.querySelector('#weight').value;
    userHeight = document.querySelector('#height').value;

    const bmiResult = userWeight / (userHeight*userHeight / 100);

    const finalResult = ` ${parseFloat(bmiResult * 100).toFixed(2)}`;

   

    resultField.innerText = 'Twoje BMI wynosi: ' 

    if(finalResult < 16){
        resultField.innerText += `${finalResult}. Jesteś wygłodzony!`

    } else if(finalResult > 16 && finalResult < 17) {
        resultField.innerText += `${finalResult}. Jesteś wychudzony!`

    } else if(finalResult > 17 && finalResult < 18.50) {
        resultField.innerText += `${finalResult}. Cierpisz na niedowagę!`

    } else if(finalResult > 18.50 && finalResult < 25) {
        resultField.innerText += `${finalResult}. Jesteś w dobrym miejscu, tak trzymać! To prawidłowa wartość BMI!'`

    } else if (finalResult > 25 && finalResult < 29.99) {
        resultField.innerText += `${finalResult}. Cierpisz na nadwagę!`

    } else {
        resultField.innerText += `${finalResult}. Cierpisz na otyłość!`
    }

 

})

