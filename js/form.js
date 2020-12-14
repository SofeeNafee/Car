class Form{
    constructor(){}
    display(){
        var title=createElement('h2');
        var input=createInput('name');
        var button=createButton('play');
        var greating=createElement('h3');
        title.html("car racing game");
        title.position(130,0);
        input.position(130,160);
        button.position(250,200);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name=input.value();
            playercount+=1;
            player.update(name);
            player.updateCount(playercount);
            greating.html("hello "+name);
            greating.position(130,160)
        })

       }

}