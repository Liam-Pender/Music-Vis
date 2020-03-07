function BuzzWire() {
    this.name = "buzzWire";
    //the inital starting poing will always be the same
    this.startPointX = 100;
    this.startPointY = 100;
    // the initial ending point will always be the same distance from the edge of the screen
    this.endPointX = windowWidth - 100;
    this.endPointY = windowHeight - 100;
    //the number of points is a variable in order to allow for it to be used in the randomness of the point position
    this.points = 4;
    //background colour
    this.bg = 0;
    //an array of x and y coords, filled in randLinds()
    this.pointArrayX = [];
    this.pointArrayY = [];
    this.pointsMade = false;
    //if the mouse is close enough
    this.buzzer

    this.randLines = function () {
        //to stop this being run 30 times per second
        if (!this.pointsMade) {
            //starts with the inital starting points being pushed to the array
            this.pointArrayX.push(this.startPointX);
            this.pointArrayY.push(this.startPointY);
            for (i = 0; i < this.points; i++) {
                //each point in the x array
                this.pointArrayX.push(random(windowWidth * (0.25 * (i)), windowWidth * (0.25 * (i + 1))));
                this.pointArrayY.push(random(0, windowHeight));
            }
            //end with the end points being pushed
            this.pointArrayX.push(this.endPointX);
            this.pointArrayY.push(this.endPointY);
            this.pointsMade = true;
        }
    }

    this.draw = function () {
        this.randLines();
        background(this.bg);
        push();
        strokeWeight(4);
        stroke(255, 0, 0);

        for (i = 0; i < this.pointArrayX.length - 1; i++) {
            line(this.pointArrayX[i], this.pointArrayY[i], this.pointArrayX[i + 1], this.pointArrayY[i + 1]);
            c = dist(this.pointArrayX[i], this.pointArrayY[i], this.pointArrayX[i + 1], this.pointArrayY[i + 1]);
            d1 = dist(this.pointArrayX[i], this.pointArrayY[i], mouseX, mouseY);
            d2 = dist(mouseX, mouseY, this.pointArrayX[i + 1], this.pointArrayY[i + 1]);
            if ((d1 + d2) < (c + 10)) {
                this.buzzer = 0;
            }
        }

        if (this.buzzer == 1) {
            this.bg = 125;
            sound.setVolume(0);
        } else {
            sound.setVolume(vol);
            this.bg = 0;
        }

        // c = dist(this.startPointX, this.startPointY, this.endPointX, this.endPointY);
        // d1 = dist(this.startPointX, this.startPointY, mouseX, mouseY);
        // d2 = dist(this.endPointX, this.endPointY, mouseX, mouseY);
        //
        // if ((d1 + d2) > (c + 10)) {
        //     this.bg = 125;
        //     sound.setVolume(0);
        // } else {
        //     sound.setVolume(vol);
        //     this.bg = 0;
        //
        // }
        console.log(this.buzzer);
        this.buzzer = 1;

        pop();
    }

}