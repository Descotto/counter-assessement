const number = document.querySelector('#number1');
const number2 = document.querySelector('#output');
const btnPlus = document.querySelector('#plus');
const btnMinus = document.querySelector('#minus');
let num2 = 0;







//====================LOGIC=================//

function plus() {
    let num = number.value;
    num2 = num2 += Number(num);
    number2.textContent = num2;
    if (num2 < 0){
        number2.style.color = 'red';
    }else if (num2 > 0) {
        number2.style.color = 'black';
    };
    
};

function minus() {
    let num = number.value;
    num2 = num2 -= Number(num);
    number2.textContent = num2;
    if (num2 < 0){
        number2.style.color = 'red';
    }else if (num2 > 0) {
        number2.style.color = 'black';
    };
}

//=========================Event Listeners =========///

btnPlus.addEventListener("click", function() {
    plus();
});

btnMinus.addEventListener("click", function() {
    minus();
});