const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const userInfo = document.querySelector('.user-info');
const h1 = document.querySelector('.user-info h1');
const hiddenClassName = 'hidden';
const savedUserName = localStorage.getItem('username');
const logoutInput = document.querySelector('.user-info .logout')

if(savedUserName !== null) {
  loginForm.classList.add(hiddenClassName);
  h1.innerText = `hi ${savedUserName}`;
  userInfo.classList.remove(hiddenClassName);
}

function loginSubmit(event) {
  event.preventDefault();
  const userName = loginInput.value;
  localStorage.setItem('username', userName);
  loginForm.classList.add(hiddenClassName);
  h1.innerText = `hi ${userName}`;
  userInfo.classList.remove(hiddenClassName);
}

function logoutSubmit() {
  localStorage.removeItem('username');
  loginForm.classList.remove(hiddenClassName);
  userInfo.classList.add(hiddenClassName);
}

loginForm.addEventListener('submit', loginSubmit);
logoutInput.addEventListener('click', logoutSubmit);


const clock = document.querySelector('#clock');

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  clock.innerText = `${hours} : ${minutes} : ${seconds}`;
}

getClock();
setInterval(getClock, 1000);


const quotes = [
  {
   quote: 'quote1' ,
   author: 'autho1'
  },
  {
    quote: 'quote2' ,
    author: 'autho2'
   },
   {
    quote: 'quote3' ,
    author: 'autho3'
   },
   {
    quote: 'quote4' ,
    author: 'autho4'
   },
   {
    quote: 'quote5' ,
    author: 'autho5'
   }
]
const guote = document.querySelector('.guote span:first-child');
const author = document.querySelector('.guote span:nth-child(2)');
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
guote.innerText = randomQuote.quote;
author.innerText = randomQuote.author;

const todoForm = document.querySelector('#todo-form');
const todoList = document.querySelector('#todo-list');



