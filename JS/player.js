class Player{
    constructor(){
        this.index=null;
        this.distance=0;
        this.name=null;
    }

    // using to read the playerCount from database
    getCount(){
        var pcref = database.ref("playerCount");
        pcref.on("value",(data)=>{
            playerCount=data.val();
 
        })
    }

    // writing into the database the new player count we have
    updateCount(count){
        database.ref("/").update({playerCount:count});
    }
    
    //updating/ writing the name in the database
    update(){
        var playerIndex= "players/player"+ this.index; //string concatenation
        database.ref(playerIndex).set({name:this.name, distance: this.distance});
    }


    static getPlayerInfo(){
        var playerIf= database.ref("players");
        playerIf.on("value",function(data){
            allPlayers=data.val(); //player1, player2.. --- array
        })
    }
  
}

/*
Static function - not attached to any object
Are attached to the class
Common functions
Called by the class (not by the object)

DATABASE
gameState  
playerCount
players
    player1: name
            : distance
    player2: name
            :distance

            players/player1
            "players/player" + this.index
*/
//   