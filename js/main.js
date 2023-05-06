 import { Timer } from './timer.js'
 import { Controls } from "./controls.js"
 import { Events } from "./events.js"
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
 import { Sounds } from "./sounds.js"
 
 const controls = Controls({
  buttonPause,
  buttonPlay
 })
  const timer = Timer({
    resetButtonsControls: controls.resetButtonsControls,
    minutesDisplay, 
    secondsDisplay,
  })

  const sounds = Sounds()
  Events({timer, sounds})
  