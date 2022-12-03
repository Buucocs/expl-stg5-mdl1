// Variables, Variáveis
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
const inputNumber = document.querySelector('#inputNumber')
let errorMessage = screen1.querySelector('#errorMessage')
let randomNumber = generateRandomNumber()
let xAttempts = 0


// Events, Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keypress', keyPressReset)
inputNumber.focus()


// Functions, Funções
function handleTryClick(event){
  event.preventDefault()
  
  xAttempts++

  if((Number(inputNumber.value) == randomNumber) && xAttempts == 1){
    screenToggle()

    screen2.querySelector('h2').innerText = `Você acertou em uma única tentativa! ⁠(⁠>⁠o⁠<⁠)⁠`

  } else if(Number(inputNumber.value) == randomNumber){
    screenToggle()

    screen2.querySelector('h2').innerText = `O número sorteado foi ${randomNumber}.
    Você acertou em ${xAttempts} tentativas!`
  } else {
    printAlert()
  }
  
  errorMessage.classList.remove('hide')
  errorMessage.innerText = `Você errou! Seu número foi: ${Number(inputNumber.value)}`
  resetAnimation()
  
  inputNumber.value=''
}

function handleResetClick(){
  randomNumber = generateRandomNumber()
  hideErrorMessage()
  screenToggle()
  xAttempts = 0
  inputNumber.focus()
}

function screenToggle(){
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function generateRandomNumber(){
  return Math.round(Math.random()*10)
}

function keyPressReset(event){
  if(event.key=='Enter' && screen1.classList.contains('hide')){
    handleResetClick()
  }
}

function printAlert(){
  if(Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10){
    alert('Insira um número entre 0 e 10')
  }
}

function hideErrorMessage(){
  errorMessage.classList.add('hide')
}

function resetAnimation(){
  errorMessage.style.animation = 'none'
  setTimeout(function() {
    errorMessage.style.animation = ''
  }, 10)
}