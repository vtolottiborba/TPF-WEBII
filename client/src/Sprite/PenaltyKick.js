export default class PenaltyKick {
    constructor(command) {
        this.nodeBall = document.getElementById("custom-ball")
        //this.nodeField = document.getElementById("vue-container")
        this.nodeScore = document.getElementById("scoreboard")
        this.nodeGK = document.querySelector(".gk_0")
        //this.inputNode = document.getElementById("bottom-bar")
        this.imageNode = document.getElementById("background-image")


        this.GK = Math.floor(Math.random() * 5)
        //this.nodeGK.classList.add("gk_" + this.GK)
        
        this.x = this.nodeBall.offsetLeft
        this.y = this.nodeBall.offsetTop

        this.score = 0
        this.kickJoueur = 0
        this.game = false

        this.speed = 4
        


        this.command = command.trim().toLowerCase()

        if (!this.game) {
            this.game = true

            if (this.command == "test1") {
                this.kickJoueur = 1
            } else if (this.command == "test2") {
                this.kickJoueur = 2
            } else if (this.command == "test3") {
                this.kickJoueur = 3
            }else if (this.command == "test4") {
                this.kickJoueur = 4
            } else {
                this.kickJoueur = 0
            }

            if (this.GK != 0) {
                this.nodeGK.classList.remove("gk_0")
                this.nodeGK.classList.add("gk_" + this.GK)
            } 

            if (this.kickJoueur != this.GK) {
                this.score++
                this.nodeScore.innerHTML = this.score
                this.randomImageGoal = Math.floor(Math.random() * 3)
                setTimeout(() => {
                    this.imageNode.style.zIndex = 2;
                    this.imageNode.style.backgroundImage = "url('./img/goal_" + this.randomImageGoal + ".jpg')"
                    setTimeout(() => {
                        this.imageNode.style.backgroundImage = "none"
                        this.y = 475
                        this.x = 735
                        this.nodeBall.style.top = this.y + "px" 
                        this.nodeBall.style.left = this.x + "px"
                        this.nodeGK.classList.remove("gk_" + this.GK)
                        this.nodeGK.classList.add("gk_0")
                        this.game = false;
                        this.tick()
                    }, 4000)
                }, 2000)
            } else { 
                setTimeout(() => {
                    this.imageNode.style.zIndex = 2;
                    this.imageNode.style.backgroundImage = "url('./img/lost.jpg')"
                    setTimeout(() => {
                        this.imageNode.style.backgroundImage = "none"
                        this.y = 475
                        this.x = 735
                        this.nodeBall.style.top = this.y + "px" 
                        this.nodeBall.style.left = this.x + "px"
                        this.nodeGK.classList.remove("gk_" + this.GK)
                        this.nodeGK.classList.add("gk_0")
                        this.game = false;
                        this.tick()
                    }, 4000)
                }, 2000)
    
            } 
        }
    }
         


    tick() {

        if (this.game) {
            if (this.kickJoueur == 0) {
                if (this.y > 300) {
                    this.y -= this.speed
                    this.nodeBall.style.top = this.y + "px"
                }
            } else if (this.kickJoueur == 1) {
                if (this.y > 400) {
                    this.y -= this.speed
                    this.x -= this.speed*2
                    this.nodeBall.style.top = this.y + "px"
                    this.nodeBall.style.left = this.x + "px"
                }
            } else if (this.kickJoueur == 2) {
                if (this.y > 300) {
                    this.y -= this.speed
                    this.x -= this.speed
                    this.nodeBall.style.top = this.y + "px"
                    this.nodeBall.style.left = this.x + "px"
                }
            } else if (this.kickJoueur == 3) {
                if (this.y > 300) {
                    this.y -= this.speed
                    this.x += this.speed
                    this.nodeBall.style.top = this.y + "px"
                    this.nodeBall.style.left = this.x + "px"
                }
            } else if (this.kickJoueur == 4) {
                if (this.y > 400) {
                    this.y -= this.speed
                    this.x += this.speed*2
                    this.nodeBall.style.top = this.y + "px"
                    this.nodeBall.style.left = this.x + "px"
                }
            }

    }

    }
}
