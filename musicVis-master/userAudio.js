// I am currently testing this seperatly in /building/user audio
function UserAudio(){
    this.name = "userAudio";
    this.userMic = new p5.AudioIn();
    this.fft = new p5.FFT();

    this.draw = function () {
        this.fft.setInput(this.userMic);
        this.userMic.start();
        push();
        noFill();
        stroke(255, 0, 0);
        strokeWeight(2);

        beginShape();
        //calculate the waveform from the fft.
        var wave = this.fft.waveform();
        for (var i = 0; i < wave.length; i++) {
            //for each element of the waveform map it to screen
            //coordinates and make a new vertex at the point.
            var x = map(i, 0, wave.length, 0, width);
            var y = map(wave[i], -1, 1, 0, height);

            vertex(x, y);
        }

        endShape();
        pop();
    }

}

function mousePressed() {
    this.userMic.start();
}