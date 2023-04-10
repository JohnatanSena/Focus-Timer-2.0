import {
  buttonPlay,
    buttonPause,
    buttonStop,
    minutesDisplay,
    secondsDisplay,
    buttonSum,
    buttonSubtraction,
    resetMinutes,
 } from './elements.js'

export function Events({timer,}) {

  buttonPlay.addEventListener('click', () => {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    timer.countDown()
  })
  buttonPause.addEventListener('click', () => {
    resetButtonsControls()
    timer.hold()
  })
  buttonSum.addEventListener('click', () =>{
   timer.sumFive()
  })
  buttonSubtraction.addEventListener('click', () => {
    timer.fiveSubtraction()
  })
  buttonStop.addEventListener('click', () =>{
    timer.updateDisplay(resetMinutes, 0)
    timer.hold()
    resetButtonsControls()
  })

}