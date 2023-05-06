import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSum,
  buttonSubtraction,
  resetMinutes,
  cardForest,
  cardRain,
  cardCoffe,
  cardFire,
  buttons,
 } from './elements.js'

export function Events({timer, sounds}) {

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
  cardForest.addEventListener('click', () =>{
    sounds.forest.play();
    sounds.rain.pause()
    sounds.coffe.pause()
    sounds.fire.pause()
    cardForest.classList.toggle('clicked')
  })
  cardRain.addEventListener('click', () => {
    sounds.rain.play();
    sounds.forest.pause()
    sounds.coffe.pause()
    sounds.fire.pause()
    cardRain.classList.toggle('clicked')
  })
  cardCoffe.addEventListener('click', () =>{
    sounds.coffe.play()
    sounds.forest.pause()
    sounds.rain.pause()
    sounds.fire.pause()
    cardCoffe.classList.toggle('clicked')
  })
  cardFire.addEventListener('click', ()=>{
    sounds.fire.play()
    sounds.forest.pause()
    sounds.rain.pause()
    sounds.coffe.pause()
    cardFire.classList.toggle('clicked')
  })
 
  
}