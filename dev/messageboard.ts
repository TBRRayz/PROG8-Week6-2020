class MessageBoard extends HTMLElement{

    

    public x : number = 0;
    public y : number = 0;

    
    constructor() {
        super()

        let game = document.getElementsByTagName("game")[0]
        game.appendChild(this)
    }
    public update() {
        this.style.transform = "translate("+this.x+"px, "+this.y+"px)"
        
    }

    public draw() {

    }

}

window.customElements.define("messageboard-component", MessageBoard as any)