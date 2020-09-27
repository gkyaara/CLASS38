class Form {
    constructor(){
          this.input= createInput("name");
          //form.input
          this.greeting= createElement("h3");
          this.button= createButton("play");
    }

    hide(){
        this.input.hide();
        this.greeting.hide();
        this.button.hide();
    }

    display(){
        var title = createElement("h2");
        title.html("car racing game");
        title.position(displayWidth/2 -50,0);
        
        
        this.input.position(displayWidth/2 -50,displayHeight/2-80);
        
       this.button.position(displayWidth/2 + 30,displayHeight/2);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name =this.input.value();
            playerCount= playerCount+1;
            player.index= playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("hello "+ player.name);
            this.greeting.position(displayWidth/2 - 70,displayHeight/4);
        });

    }
}

/*
HTML - web pages

1. Head - sources/libraries
2. Body - Main content

BODY
1. Headings (h1, h2, h3);
2. Input : from user
3. Button

Document Object Model (DOM)
-p5 Dom library


Title : "Car Racing Game"
-Create an element - h2
-html content
-position


ARROW FUNCTION
- binds the function to the original object which calls it
(parameter)=>{}
*/