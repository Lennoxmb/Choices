

let askQuestion = document.querySelector('#submitQuestion');
let resultDiv = document.querySelector('#result');


function shakeImage() {
    let image = document.getElementById("myImage");
    let input = document.getElementById("myInput");

    input.value = "";
    image.classList.add("shake");

    setTimeout(function () {
        image.classList.remove("shake");
    }, 1000);
}


askQuestion.addEventListener('click', function(){
    const resultParent = document.getElementById("result");
    resultParent.style.visibility = "hidden";
    resultParent.classList.remove("show");

    const randomNumber = Math.floor(Math.random() * 10) + 1;
    let result = "";
    if (randomNumber === 1 || randomNumber === 2) {
        result = "Nah";
    } else if (randomNumber === 10 || randomNumber === 9) {
        result = "Bet";
    } else if (randomNumber === 3) {
        result = "Outlook's Not Gud";
    } else if (randomNumber === 4) {
        result = "That's a Secret";
    } else if (randomNumber === 5) {
        result = "Shake me again and I'll tell you";
    } else if (randomNumber === 6) {
        result = "There's a chance~";
    } else if (randomNumber === 7) {
        result = "Outlook's Not Gud";
    } else if (randomNumber === 8) {
        result = "Good Chance";
    } else {
        result = 'I broke';
    }
    let previousResultElement = resultDiv.querySelector('p');
    if (previousResultElement) {
        resultDiv.removeChild(previousResultElement);
    }
    let resultElement = document.createElement('p');
    resultElement.textContent = result;
    resultDiv.appendChild(resultElement);
    shakeImage();
    setTimeout(function (){
        resultParent.style.visibility = "";
        resultParent.classList.add("show");
    }, 800)
});