export function Timer({minutesDisplay, secondsDisplay, resetButtonsControls})
{
  let timerTimeOut
  function updateDisplay(minutes, seconds){
    minutesDisplay.textContent = String(minutes).padStart(2, 0)
    secondsDisplay.textContent = String(seconds).padStart(2, 0)
  }
  function countDown(){
    timerTimeOut = setTimeout(function(){
      let minutes = minutesDisplay.textContent;
      let seconds = secondsDisplay.textContent;
      
     
      if(minutes <= 0 && seconds <= 0){ 
        resetButtonsControls()
        return 
      }

      if(seconds <= 0 ){
      seconds = 3;
      --minutes
      }
      updateDisplay(minutes, seconds -1)
      countDown()
    }, 1000)
 
  }
  function sumFive(){
    minutesDisplay.textContent = String(Number(minutesDisplay.textContent) + 5).padStart(2, '0')
  }
  function fiveSubtraction(){
    let minutes = Number(minutesDisplay.textContent)
    if(minutes === 0 || minutes === 4 || minutes === 3 || minutes === 2 || minutes === 1){
      alert(`Cronomêtro não funciona negativo`)
      return
    }
    minutesDisplay.textContent = String(Number(minutesDisplay.textContent) - 5).padStart(2, '0')
  }
  function hold(){
    clearInterval(timerTimeOut)
  }
  return {
    countDown,
    sumFive,
    fiveSubtraction,
    updateDisplay,
    hold,
  }
}