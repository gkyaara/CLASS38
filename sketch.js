var ball;
var database,readme;
var Position;

function setup(){
    database= firebase.database();
    readme=database.ref("ball/position");
    readme.on("value",readingpos,showerror);
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    
}

function draw(){
    background("white");
    if(Position!== undefined){
        if(keyDown(LEFT_ARROW)){
            changePosition(-1,0);
        }
        else if(keyDown(RIGHT_ARROW)){
            changePosition(1,0);
        }
        else if(keyDown(UP_ARROW)){
            changePosition(0,-1);
        }
        else if(keyDown(DOWN_ARROW)){
            changePosition(0,+1);
        }
        drawSprites();
    }
}

function changePosition(x,y){
   //  ball.x = ball.x + x;
   //  ball.y = ball.y + y;
   database.ref("ball/position").set({
       x: Position.x + x,
       y: Position.y + y
   })

}

function readingpos(xyz){
 Position= xyz.val();
 ball.x= Position.x;
 ball.y= Position.y;
}

function showerror(){
    console.log("error");
}
