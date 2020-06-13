class MessageBoard extends HTMLElement{

    
    private static _instance : MessageBoard
    public x : number = 0;
    public y : number = 0;
    
    public static instance() : MessageBoard {
        if(!MessageBoard._instance) MessageBoard._instance = new MessageBoard();
        return MessageBoard._instance;
    }
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