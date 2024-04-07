let correctAnswer;
let userInput = document.querySelector('.user-input');
let checkBtn = document.querySelector('.check');
let resetBtn = document.querySelector('.reset');
let resultArea = document.querySelector('.result');
let chanceArea = document.querySelector('.chance');
let userAnswerList = [];
let chance = 5;
let gameOver = false;

// 정답 만들기
let makeCorrectAnswer = () => {
    correctAnswer = Math.floor(Math.random() * 100) + 1;
    console.log(correctAnswer);
}

// 게임 프로세스
let play = () => {
    userAnswer = userInput.value;
    if (userAnswer < 1 || userAnswer > 100) {
        resultArea.textContent = '1부터 100 사이의 숫자만 입력해 주세요.';
        return;
    } else if (userAnswerList.includes(userAnswer)) {
        resultArea.textContent = '이미 입력한 숫자입니다.';
        return;
    } else {
        if (userAnswer < correctAnswer) {
            resultArea.textContent = 'Up';
        } else if (userAnswer > correctAnswer) {
            resultArea.textContent = 'Down';
        } else {
            resultArea.textContent = 'correct';
        }
        chance--;
        chanceArea.innerHTML = `남은 기회 : ${chance}`;
        userAnswerList.push(userAnswer);
    }

    if (chance < 1) {
        gameOver = true;
    }
}

// 게임 리셋
let reset = () => {
    makeCorrectAnswer();
    chance = 5;
    userInput.value = '';
    chanceArea.innerHTML = `남은 기회 : ${chance}`;
    userAnswerList = [];
}

// 확인 버튼 클릭
checkBtn.addEventListener('click', play);

// 리셋 버튼 클릭
resetBtn.addEventListener('click', reset);

makeCorrectAnswer();