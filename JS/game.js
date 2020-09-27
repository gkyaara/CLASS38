class Game {
    constructor (){}
    
    // read the gamestate from database
    getState(){
        var gsref = database.ref("gameState");
        gsref.on("value",function (data){ //local function - created & used simultaneously
            gameState= data.val();
        });
    }

    // write the gamestate to the database 
    update(state){
        database.ref("/").update({gameState:state});
    }

    
    async start(){
        if(gameState===0){
            player=new Player();
            var pcRef= await database.ref("playerCount").once("value");
            if(pcRef.exists()){
                playerCount=pcRef.val();
                player.getCount();
            }
            
            form= new Form();
            form.display();
             
            car1 =createSprite(100,200);
            car2 =createSprite(300,200);
            car3 = createSprite(500, 200);
            car4 = createSprite(700, 200);
            Cars=[car1,car2,car3,car4];
        }
    }


    play(){
        form.hide();
        textSize(30);
        text("Game Start", 120, 100);

        Player.getPlayerInfo();

        if(allPlayers!== undefined){
            var position =130;
            var Index=0; //initialization for Cars[]
            var x=0,y;
        
            for(var i in allPlayers){ //4 times

                
                /*
                //currently active player
                if(i==="player" + player.index){
                    fill("red");
                }
                else {
                    fill("black");
                }

               position=position+20;
               textSize(15); 
               text(allPlayers[i].name +  ": " + allPlayers[i].distance, 120, position)
                */


                Index=Index+1;  //incrementation for Cars[]
                x=x+200;
                y=displayHeight-allPlayers[i].distance;
                Cars[Index-1].x=x;
                Cars[Index-1].y=y;
                if(Index===player.index) {
                    Cars[Index-1].shapeColor="red";
                    camera.position.x=displayWidth/2;
                    camera.position.y=Cars[Index-1].y;
                }            
            }
        }

        if(keyIsDown (UP_ARROW)&& player.index!== null){
            player.distance= player.distance+50;
            player.update();


        }

        drawSprites();
       
    }
}

/*
.update() 
-"/" - refer to the main database inside which gameState is created

Coding using abstraction - working with things which aren't yet created

for(var i = 0; i<length; i = i+1){

}

for/In statement loop
for(var index in array/object){

}

.on("value", read, error);

function name(parameter){

}

*/