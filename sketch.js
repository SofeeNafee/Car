var form,player,game;
var database,playercount,gamestate=0;
function setup(){
    createCanvas(500,500);
    database=firebase.database();
    game=new Game();
    game.getstate();
    game.start();
 
}

function draw(){
    background("white");
   
}

