export default class PenaltyKick {
    static scoreUsager = 0
    static scoreVisitor = 0
    constructor(command) {
        this.nodeBall = document.getElementById("custom-ball")
        this.nodeScoreUsager = document.getElementById("usager-score")
        this.nodeScoreVisitor = document.getElementById("visitor-score")
        this.nodeGK = document.querySelector(".gk_0")
        this.inputNode = document.querySelector("textarea")
        this.imageNode = document.getElementById("background-image")
        this.goalSound = document.getElementById("goalSound")
        this.lostSound = document.getElementById("lostSound")
        this.suarezNode = document.getElementById("suarez")
        this.suarezX = 20
        this.suarezMove = 5

        this.GK = Math.floor(Math.random() * 5)
        //this.GK = 4

        this.x = this.nodeBall.offsetLeft
        this.y = this.nodeBall.offsetTop

        this.kickJoueur = 0
        this.game = false
        this.speed = 4

        this.command = command.trim().toLowerCase()  


        if (!this.game) {
            this.game = true

            this.suarezNode.style.left = (this.suarezX + this.suarezMove) + "vw"

            setTimeout(() => {
                this.suarezNode.style.left = this.suarezX + "vw"
            }, 200)

            if (this.command == "kick1") {
                this.kickJoueur = 1
            } else if (this.command == "kick2") {
                this.kickJoueur = 2
            } else if (this.command == "kick3") {
                this.kickJoueur = 3
            }else if (this.command == "kick4") {
                this.kickJoueur = 4
            } else {
                this.kickJoueur = 0
            }

            if (this.GK != 0) {
                this.nodeGK.classList.remove("gk_0")
                this.nodeGK.classList.add("gk_" + this.GK)
            } 

            if (this.kickJoueur != this.GK) {
                PenaltyKick.scoreUsager++
                this.nodeScoreUsager.innerHTML = PenaltyKick.scoreUsager
                this.randomImageGoal = Math.floor(Math.random() * 3)
                setTimeout(() => {
                    this.imageNode.style.zIndex = 2
                    this.imageNode.style.backgroundImage = "url('./img/goal_" + this.randomImageGoal + ".jpg')"
                    this.goalSound.play()
                    setTimeout(() => {
                        this.resetGame()
                    }, 4000)
                }, 2000)
            } else { 
                PenaltyKick.scoreVisitor++
                this.nodeScoreVisitor.innerHTML = PenaltyKick.scoreVisitor
                setTimeout(() => {
                    this.imageNode.style.zIndex = 2
                    this.imageNode.style.backgroundImage = "url('./img/lost.jpg')"
                    this.lostSound.play()
                    setTimeout(() => {
                        this.resetGame()
                    }, 4000)
                }, 2000)
    
            } 
        }
    }

    resetGame() {
        this.imageNode.style.zIndex = 0
        this.imageNode.style.backgroundImage = "none"
        this.y = 60
        this.x = 48
        this.nodeBall.style.top = this.y + "vh" 
        this.nodeBall.style.left = this.x + "vw"
        this.nodeGK.classList.remove("gk_" + this.GK)
        this.nodeGK.classList.add("gk_0")
        this.game = false
        this.tick()
    }

         
    tick() {

        if (this.game) {
            if (this.kickJoueur == 0) {
                if (this.y > window.innerHeight*0.4) {
                    this.y -= this.speed
                    this.nodeBall.style.top = (this.y/window.innerHeight) * 100 + "vh"
                }
            } else if (this.kickJoueur == 1) {
                if (this.y > window.innerHeight*0.5) {
                    this.y -= this.speed
                    this.x -= this.speed*2
                    this.nodeBall.style.top = (this.y/window.innerHeight) * 100 + "vh"
                    this.nodeBall.style.left = (this.x/window.innerWidth) * 100 + "vw"
                }
            } else if (this.kickJoueur == 2) {
                if (this.y > window.innerHeight*0.4) {
                    this.y -= this.speed
                    this.x -= this.speed
                    this.nodeBall.style.top = (this.y/window.innerHeight) * 100 + "vh"
                    this.nodeBall.style.left = (this.x/window.innerWidth) * 100 + "vw"
                }
            } else if (this.kickJoueur == 3) {
                if (this.y > window.innerHeight*0.4) {
                    this.y -= this.speed
                    this.x += this.speed
                    this.nodeBall.style.top = (this.y/window.innerHeight) * 100 + "vh"
                    this.nodeBall.style.left = (this.x/window.innerWidth) * 100 + "vw"
                }
            } else if (this.kickJoueur == 4) {
                if (this.y > window.innerHeight*0.5) {
                    this.y -= this.speed
                    this.x += this.speed*2
                    this.nodeBall.style.top = (this.y/window.innerHeight) * 100 + "vh"
                    this.nodeBall.style.left = (this.x/window.innerWidth) * 100 + "vw"
                }
            }

        }

    }
}