function SkipBackwardsButton(){

    this.x = windowWidth/2 - 100;
    this.y = windowHeight - 60;
    //place skip backwards button off center left
    this.width = 40;
    this.height = 40;

    this.draw = function(){
        image(skipBackward, this.x, this.y, 40, 40);
    };

    //checks for clicks on the button, skips back 1 track in the list unless track is 0 then sets it to the final track
    //@returns true if clicked false otherwise.
    this.hitCheck = function(){
        if(mouseX > this.x && mouseX < this.x + this.width &&
            mouseY > this.y && mouseY < this.y + this.height){
            if(trackNum == 0){
                trackNum = 2;
                sound.stop();
                sound = playlist[trackNum];
                sound.loop();
            }
            else {
                trackNum--;
                sound.pause();
                sound = playlist[trackNum];
                sound.loop();
            }
            return true;
        }
        return false;
    };

}