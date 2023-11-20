export default class Balls {
    constructor(x, y) {
        this.node = document.createElement('div')
        this.node.classList.add("ball")
        this.x = x
        this.y = y
        this.node.style.left = this.x + "px"
        this.node.style.top = this.y + "px"
        this.random = Math.floor(Math.random() * 4) + 1

        document.body.append(this.node)

        this.node.onclick = () => {
            if (this.random == 1) {
                this.speedX += -10
                this.speedY += -10
            } else if (this.random == 2) {
                this.speedX += 10
                this.speedY += 10
            } else if (this.random == 3) {
                this.speedX += 10
                this.speedY += -10
            } else {
                this.speedX += -10
                this.speedY += 10
            }

        }
        
        this.speedX = Math.random() * 2.5
        this.speedY = Math.random() * 2.5

    }

    tick() {

        this.x += this.speedX
        this.y += this.speedY

        
        if (this.x < 0 || this.x > window.innerWidth) {
            this.speedX *= -1
        }

        if (this.y < 0 || this.y > window.innerHeight) {
            this.speedY *= -1
        }
        
        this.node.style.left = this.x + "px"
        this.node.style.top = this.y + "px"


    }
}