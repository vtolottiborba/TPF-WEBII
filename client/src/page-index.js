import {signin} from './chat-api';
import Lettre from './Sprite/Lettre.js';
let bodyBackground = true
let spriteList = []
const LETTRE_COUNT = 11

window.addEventListener("load", () => {
    document.querySelector("form").onsubmit = function () {
        return signin(this);
    }
    let bodyNode = document.querySelector("body")
    
    document.onkeyup = event => {
        if (event.key == " " || event.key == "Tab") {
            if (bodyBackground) {
                bodyNode.style.backgroundImage = "url('./img/background_index_1.jpg')"
                bodyBackground = false
            } else {
                bodyNode.style.backgroundImage = "url('./img/background_index.jpg')"
                bodyBackground = true
            }
        }
    }
 
    bodyNode.onmousemove = event => {
        let mouseX = (event.clientX / window.innerWidth) * 2
        let mouseY = (event.clientY / window.innerHeight) * 2
        bodyNode.style.backgroundPosition = mouseX * 50 + '% ' + mouseY * 50 + '%'
    }

    for (let i = 1; i <= LETTRE_COUNT; i++) {
        spriteList.push(new Lettre("l-"+i))
    }

    tick()

})

const tick = () => {

    for (let i = 0; i < spriteList.length; i++) {
        const node = spriteList[i]
        node.tick()
    }

    window.requestAnimationFrame(tick)

}
