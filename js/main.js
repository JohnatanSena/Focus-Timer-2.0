  const buttonPlay = document.querySelector('.btnPlay');
  const buttonPause = document.querySelector('.btnPause');
  let minutesDisplay = document.querySelector('.minutes');
  let secondsDisplay = document.querySelector('.seconds');
  let buttonSum = document.querySelector('.btnSum')
  let buttonSubtraction = document.querySelector('.btnSubtraction')
  
  
 
  
  function resetButtonsControls(){
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
  }
  function updateDisplay(minutes, seconds){
    minutesDisplay.textContent = String(minutes).padStart(2, 0)
    secondsDisplay.textContent = String(seconds).padStart(2, 0)
  }
  function countDown(){
    setTimeout(function(){
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
    if(minutes === 0){
      alert(`Cronomêtro já está 00:00`)
      return
    }
    minutesDisplay.textContent = String(Number(minutesDisplay.textContent) - 5).padStart(2, '0')
    
  }
  buttonPlay.addEventListener('click', () => {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    countDown()
  })
  buttonPause.addEventListener('click', () => {
    resetButtonsControls()
  })
  buttonSum.addEventListener('click', () =>{
   sumFive()
  })
  buttonSubtraction.addEventListener('click', () => {
    fiveSubtraction()
  })
  