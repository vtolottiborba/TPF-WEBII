import {registerCallbacks, sendMessage, signout, chatMessageLoop} from './chat-api';
import PenaltyKick from './Sprite/PenaltyKick.js';
let spriteList = []

window.addEventListener("load", () => {
    let nom = localStorage.getItem("username")
    document.querySelector("#usager").innerText = nom

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

    tick()
})

// Lorsqu'un nouveau message doit être affiché à l'écran, cette fonction est appelée
const newMessage = (fromUser, message, isPrivate) => {
    let chatBox = document.getElementById("chat-box")
    console.log(fromUser, message, isPrivate);
    chatBox.innerHTML += "<p><strong>" + fromUser+ ":</strong>" +" "+ message + "</p>"
    chatBox.scrollTop = chatBox.scrollHeight
}

// À chaque 2-3 secondes, cette fonction est appelée. Il faudra donc mettre à jour la liste des membres
// connectés dans votre interface.
const memberListUpdate = members => {
    let memberBox = document.getElementById("members-box")
    console.log(members);
    memberBox.innerHTML = "<h4>Members List:</h4>"
    members.forEach(member => {
        memberBox.innerHTML += "<p>" + member + "</p>"
    });
}


const tick = () => {

    for (let i = 0; i < spriteList.length; i++) {
        const node = spriteList[i]
        node.tick()
    }

    window.requestAnimationFrame(tick)

}
