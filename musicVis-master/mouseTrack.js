function MouseTrack() {
    this.name = "mouseTrack";

    this.draw = function () {
        push();
        var mouseTrack = fourier.analyze();
        var numOfLines = 256;
        var increment = (2 * PI) / numOfLines;

        for (i = 0; i < numOfLines; i++) {

            strokeWeight(2);
            stroke(0 + mouseTrack[i * 3], 255 - mouseTrack[i * 3], 0);
            var angle = increment * i;
            var h = mouseTrack[i * 3];
            var x = h * sin(angle);
            var y = Math.sqrt((h * h) - (x * x));

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