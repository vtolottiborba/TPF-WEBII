export default class Lettre {
    constructor(id) {
        this.id = id
        this.node = document.querySelector("#"+this.id)
        this.y = this.node.offsetTop
        this.node.style.opacity = 0
        this.speed = 0.009
        this.originalColor = "blue"

        
        this.node.onmouseover = () => {
            this.speed = -0.009         
            this.y -=40
            this.node.style.top = this.y + "px"
        }

        this.node.onmouseout = () => {
            this.speed = 0.009
            this.y +=40
            this.node.style.top = this.y + "px"
        }

        setInterval(() => {
            if (this.node.style.color == this.originalColor) {
                this.node.style.color = "white"
            } else {
                this.node.style.color = this.originalColor
            }
        }, 1000)
        
    }

    tick() {
        if (this.node.style.opacity > 1)
            this.node.style.opacity = 1
        else if (this.node.style.opacity < 0)
            this.node.style.opacity = 0
            
        this.node.style.opacity = parseFloat(this.node.style.opacity) + this.speed

    }
}