let userInput = document.querySelector(".userInput");
let numberCheck = document.querySelector(".numberCheck");
let result = document.querySelector(".result");

numberCheck.addEventListener('click', () => {
    let userNumber = userInput.value;

    if (userNumber > 0) {
        result.innerText = "양수 입니다.";
    } else if (userNumber < 0) {
        result.innerText = "음수 입니다.";
    } else {
        result.innerText = "'0' 입니다.";
    }

    userInput.value = '';
});