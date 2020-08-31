class Player{
    constructor(){}

    // using to read the playerCount from database
    getCount(){
        var pcref = database.ref("playerCount");
        pcref.on("value",function(data){
            playerCount=data.val();

        })
    }

    // writing into the database the new player count we have
    updateCount(count){
        database.ref("/").update({playerCount:count});
    }
    
    //updating/ writing the name in the database
    update(name){
        var playerIndex= "player"+ playerCount;
        database.ref(playerIndex).set({name:name});
    }
  
}