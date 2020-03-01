function FullscreenButton(){

    this.x = windowWidth/2 + 120;
    this.y = windowHeight - 60;
    //place fullscreen button off center right
    this.width = 40;
    this.height = 40;

    this.draw = function(){
        image(fullscreenBtn, this.x, this.y, 40, 40);
    };

    //checks for clicks on the button, calls the fullscreen function
    this.hitCheck = function(){
        if(mouseX > this.x && mouseX < this.x + this.width &&
            mouseY > this.y && mouseY < this.y + this.height){

            var fs = fullscreen();
            fullscreen(!fs);

        }
    };

}