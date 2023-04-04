import {
    buttonPause,
    buttonPlay,
    buttonStop,
    buttonSet,
    buttonMore,
    buttonLess,
    forest,
    rainy,
    coffee,
    fireplace,
} from './elements.js'
export default function({ controls,timer,sound }) {

buttonPlay.addEventListener('click', function() {
    controls.play()
    timer.countdown()
})

buttonPause.addEventListener('click',function() {
    controls.pause()
    timer.hold()
})

buttonStop.addEventListener('click', function() { 
    controls.reset() 
    timer.reset() 
    sound.stopMusic()
})

buttonSet.addEventListener('click', function() { 
    let newMinutes = controls.getMinutes()
    if (!newMinutes) { 
        timer.reset()
        return
    }
    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
})

buttonMore.addEventListener('click', function(){
    timer.addMinutes()
})

buttonLess.addEventListener('click', function(){
    timer.subTime()
})

forest.addEventListener('click', function(){
    forest.classList.toggle('active')
    rainy.classList.remove('active')
    coffee.classList.remove('active')
    fireplace.classList.remove('active')
    sound.musicFlorest()
})

rainy.addEventListener('click', function(){
    forest.classList.remove('active')
    rainy.classList.toggle('active')
    coffee.classList.remove('active')
    fireplace.classList.remove('active')
    sound.musicRainy()
})

coffee.addEventListener('click', function(){
    forest.classList.remove('active')
    rainy.classList.remove('active')
    coffee.classList.toggle('active')
    fireplace.classList.remove('active')
    sound.musicCoffeeShop()
})

fireplace.addEventListener('click', function(){
    forest.classList.remove('active')
    rainy.classList.remove('active')
    coffee.classList.remove('active')
    fireplace.classList.toggle('active')
    sound.musicFireplace()
})
}
