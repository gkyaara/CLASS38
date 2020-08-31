var database;
var gameState=0;
var form,game,player;
var playerCount;

function setup(){
    database= firebase.database();
    createCanvas(500,500);
    game= new Game();
    game.getState();
    game.start();
    
}

function draw(){
    background("white");
  
    
}



/*
OBJECT ORIENTED PROGRAMMING - OOP

1. Form - input, button
2. Player -name, rank, distance
3. Game - gamestates
*/