import {registerCallbacks, sendMessage, signout, chatMessageLoop} from './chat-api';
import PenaltyKick from './Sprite/PenaltyKick.js';
let spriteList = []

window.addEventListener("load", () => {
    document.querySelector("textarea").onkeyup = function (evt) {
        if (evt.key == "Enter") {
            let command = this.value
            spriteList.push(new PenaltyKick(command))
        }
        sendMessage(evt, this)
    };
    
    document.querySelector("#sign-out-btn").onclick = signout;
    registerCallbacks(newMessage, memberListUpdate);
    chatMessageLoop();

    //spriteList.push(new PenaltyKick())

    tick()
})

// Lorsqu'un nouveau message doit être affiché à l'écran, cette fonction est appelée
const newMessage = (fromUser, message, isPrivate) => {
    console.log(fromUser, message, isPrivate);
}

// À chaque 2-3 secondes, cette fonction est appelée. Il faudra donc mettre à jour la liste des membres
// connectés dans votre interface.
const memberListUpdate = members => {
    console.log(members);
}


const tick = () => {

    for (let i = 0; i < spriteList.length; i++) {
        const node = spriteList[i]
        node.tick()
    }

    window.requestAnimationFrame(tick)

}
