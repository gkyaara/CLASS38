var database;
var gameState=0;
var form,game,player;
var playerCount;
var allPlayers;
var car1,car2,car3,car4;
var Cars;
function setup(){
    database= firebase.database();
    createCanvas(displayWidth-30,displayHeight-30);
    game= new Game();
    game.getState();
    game.start();
    
}

function draw(){
    background("white");
    if(playerCount===4){
        game.update(1);
    
    }   
    if(gameState===1){
        clear();
        game.play();
    }
  
    
}



/*
OBJECT ORIENTED PROGRAMMING - OOP

1. Form - input, button
2. Player -name, rank, distance
3. Game - gamestates
*/