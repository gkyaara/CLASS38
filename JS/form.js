class Form {
    constructor(){}

    display(){
        var title = createElement("h2");
        title.html("car racing game");
        title.position(130,0);
        
        var input= createInput("name");
        input.position(130,160);
        
        var greeting= createElement("h3");


        var button= createButton("play");
        button.position(250,200);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name =input.value();
            playerCount= playerCount+1;
            player.update(name);
            player.updateCount(playerCount);
            greeting.html("hello "+ name);
            greeting.position(130,160);
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
*/