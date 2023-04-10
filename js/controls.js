export function Controls({
  buttonPause,
  buttonPlay
}) {
  function resetButtonsControls(){
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
  }
  return {
    resetButtonsControls
  }
}