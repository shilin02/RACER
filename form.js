class Form{
    constructor(){
        this.input = createInput("name")
        this.button  = createButton("PLAY")
        this.greeting = createElement("h2")
        this.title = createElement("h1")
    }
    hide(){
        this.greeting.hide();
        this.input.hide();
        this.button.hide();
        this.title.hide();
    }
    display(){
      
        this.title.html("CAR RACING MULTIPLAYER GAME")
        this.title.position(displayWidth/2-50,50)
        this.input.position(displayWidth/2-50,displayHeight/2-80)
        
       this.button.position(displayWidth/2-35,displayHeight/2)
        
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
             player.name = this.input.value();
            playerCount = playerCount+1
            player.index = playerCount
            player.update(name)
            player.updateCount(playerCount)
            this.greeting.html("hello "+player.name)
            this.greeting.position(displayWidth/2-50,displayHeight/2)
        })
    }
}
