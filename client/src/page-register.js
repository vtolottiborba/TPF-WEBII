import {register} from './chat-api'
import Balls from './Sprite/Balls.js'
let spriteList = []
const BALL_COUNT = 5


window.addEventListener("load", () => {
    document.querySelector("form").onsubmit = function () {
        return register(this)
    }
    let bodyNode = document.querySelector("body")
    let inputsNode = document.querySelectorAll("form input")
    let coleurs = ["blue", "black", "white"]
    let coleursIndex = 0

    inputsNode.forEach(input => {
        input.onfocus = event => {
            let prochaineCouleur = coleurs[coleursIndex]
            bodyNode.style.backgroundColor = prochaineCouleur
            coleursIndex = (coleursIndex + 1) % coleurs.length
            
            for (let i = 0; i < BALL_COUNT; i++) {
                spriteList.push(new Balls(Math.random() * window.innerWidth, Math.random() * window.innerHeight))
            }
        
        }
    })
    tick()
})

const tick = () => {

    for (let i = 0; i < spriteList.length; i++) {
        const node = spriteList[i]
        node.tick()
    }

    window.requestAnimationFrame(tick) 
}
