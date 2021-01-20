class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

   async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef=await database.ref("playerCount").once("value")
      if(playerCountRef.exists()){
        playerCount=playerCountRef.val()
        player.getCount();
      }
      
      form = new Form()
      form.display();
    }
  }
  play (){
    form.hide()
    text("gamestart",100,100)
    Player.playerinfo()
    if (allplayer!==undefined){
      var poseation=140;
      for(var plr in allplayer){
        if(plr==="player"+ player.index)
        fill("red")
        else
        fill("black")
        poseation+=20
        text(allplayer[plr].name+":"+allplayer[plr].distance,120,poseation)
      }
    }
    if (keyIsDown(UP_ARROW)&&player.index!==null){
      player.distance+=30
      player.update()    
  }
  }
}
