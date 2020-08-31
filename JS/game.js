class Game {
    constructor (){}
    
    // read the gamestate from database
    getState(){
        var gsref = database.ref("gameState");
        gsref.on("value",function(data){
            gameState= data.val();
        });
    }

    // write the gamestate to the database 
    update(state){
        database.ref("/").update({gameState:state});
    }

    
    start(){
        if(gameState===0){
            player=new Player();
            player.getCount();
            form= new Form();
            form.display();
            
        }
    }
}

/*
.update() 
-"/" - refer to the main database inside which gameState is created

Coding using abstraction - working with things which aren't yet created
*/