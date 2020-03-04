// I am currently testing this seperatly in /building/buzz wire
function BuzzWire(){
    this.name = "buzzWire";
    this.startPointX = 100;
    this.startPointY = 100;
    this.endPointX = windowWidth-100;
    this.endPointY = windowHeight-100;
    this.points = 4;
    this.bg = 0;

    this.draw = function () {
        background(this.bg);
        push();
        strokeWeight(4);
        stroke(255, 0, 0);
        line(this.startPointX, this.startPointY, this.endPointX, this.endPointY);
        c = dist(this.startPointX, this.startPointY, this.endPointX, this.endPointY);
        d1 = dist(this.startPointX, this.startPointY, mouseX, mouseY);
        d2 = dist(this.endPointX, this.endPointY, mouseX, mouseY);
        if((d1+d2)>(c+10)){
            this.bg = 125;
            sound.setVolume(0);
        }
        else{
            sound.setVolume(vol);
            this.bg = 0;

        }
        pop();
    }

}