function VolumeControls() {

    this.x = (windowWidth/2)-220;
    this.y = windowHeight - 20;
    this.width = 100;
    this.height = 40;

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
    };

    // this.hitCheck = function(){
    //     if(mouseX > this.x && mouseX < this.x + (this.width) &&
    //         mouseY > this.y && mouseY < this.y + this.height){
    //
    //         return true;
    //     }
    //     return false;
    // };

}