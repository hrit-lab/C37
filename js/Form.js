class Form{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton('Play');
        this.greeting = createElement('H3');
    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }
    display(){
        var title = createElement('H1');
        title.html("Car Racing Game");
        title.position(500,0);
        this.input.position(500,250);
        this.button.position(560,300);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount+= 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello" + player.name);
           this.greeting.position(560,300);
             });
    }
}