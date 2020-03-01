function VolumeControls() {

    this.x = (windowWidth/2)-220;
    this.y = windowHeight - 20;
    this.width = 100;
    this.height = 40;
    this.vcSize = 20;
    this.vcx = this.x - this.vcSize + 10;

    this.draw = function() {
        //base triangle
        noFill();
        stroke(255);
        strokeWeight(5);
        triangle(
            this.x, this.y,
            this.x + this.width, this.y,
            this.x + this.width, this.y - this.height
        );

        //filled triangle relative to volume
        mappedVol = map(vol, 0, 1, 0, 255);
        fill(0 + mappedVol, 255-mappedVol, 0);
        noStroke();
        //trig to work out the hight of the filled in triangle
        h = -tan(21.8)*2;
        opp = (this.width*vol)*h;

        triangle(
            this.x, this.y,
            this.x + (this.width*vol), this.y,
            this.x + (this.width*vol), this.y - opp
        );

        //plus and minus buttons
        image(plus, this.vcx, this.y-(this.vcSize*2), this.vcSize, this.vcSize);
        image(minus, this.vcx, this.y-this.vcSize, this.vcSize, this.vcSize);
    };

    this.hitCheck = function(){
        if((mouseX > this.vcx && mouseX < this.vcx + this.vcSize) &&
            (mouseY > this.y-(this.vcSize*2) && mouseY < this.y-this.vcSize)){
            vol = min(1, vol+0.05);
            sound.setVolume(vol);
        }
        else if((mouseX > this.vcx && mouseX < this.vcx + this.vcSize) &&
            (mouseY > this.y-(this.vcSize) && mouseY < this.y)){
            vol = max(0, vol-0.05);
            sound.setVolume(vol);
        }
    };

}