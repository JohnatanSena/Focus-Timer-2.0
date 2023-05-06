 
  const buttonPlay = document.querySelector('.btnPlay');
  const buttonPause = document.querySelector('.btnPause');
  const buttonStop = document.querySelector('.btnStop')
  let minutesDisplay = document.querySelector('.minutes');
  let secondsDisplay = document.querySelector('.seconds');
  let buttonSum = document.querySelector('.btnSum');
  let buttonSubtraction = document.querySelector('.btnSubtraction');
  let cardForest = document.querySelector('#forest');
  let cardRain = document.querySelector('#rain');
  let cardCoffe = document.querySelector('#coffe');
  let cardFire = document.querySelector('#fire');
  let buttons = document.querySelectorAll('.card button')
  console.log(buttons)
  let resetMinutes = minutesDisplay.textContent
  export {
    buttonPlay,
    buttonPause,
    buttonStop,
    minutesDisplay,
    secondsDisplay,
    buttonSum,
    buttonSubtraction,
    resetMinutes,
    cardForest,
    cardRain,
    cardCoffe,
    cardFire,
    buttons,
  }