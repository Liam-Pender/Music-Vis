function MouseTrack() {
    this.name = "mouseTrack";

    this.draw = function () {
        push();
        var mouseTrack = fourier.analyze();
        //1024 lines and trig is way too many for many proccesors expecially on latptops so this shows 256 values
        var numOfLines = 256;
        //2pi radians = a full circle
        var increment = (2 * PI) / numOfLines;

        for (i = 0; i < numOfLines; i++) {
            //makes a line instead of 2d shapes
            strokeWeight(2);
            stroke(0 + mouseTrack[i * 3], 255 - mouseTrack[i * 3], 0);

            // working out the trig of where the x and y coords are from the center
            var angle = increment * i;
            // note* the last 256 is rarely big enough to be shown leaving the top left quarter empty,
            // so I won't show them to look better.
            var h = mouseTrack[i * 3];
            var x = h * sin(angle);
            var y = Math.sqrt((h * h) - (x * x));

            //location of each quarter
            if (i <= (numOfLines / 4)) {
                line(mouseX, mouseY, mouseX + x, mouseY - y);
            } else if (i > (numOfLines / 4) && i <= (numOfLines / 2)) {
                line(mouseX, mouseY, mouseX + x, mouseY + y);
            } else if (i > (numOfLines / 2) && i <= ((numOfLines / 4) * 3)) {
                line(mouseX, mouseY, mouseX + x, mouseY + y);
            } else {
                line(mouseX, mouseY, mouseX + x, mouseY - y);
            }
        }

        pop();

    };
}