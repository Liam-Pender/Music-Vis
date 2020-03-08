//Constructor function to handle the onscreen menu, keyboard and mouse
//controls
function ControlsAndInput() {

    this.menuDisplayed = false;

    //playback button displayed in the top left of the screen
    this.playbackButton = new PlaybackButton();
    this.skipforwardButton = new SkipForwardsButton();
    this.skipbackwardButton = new SkipBackwardsButton();
    this.volumeControl = new VolumeControls();
    this.fullscreenButton = new FullscreenButton();
    this.menuButton = new MenuButton();

    //only one if statement needed because there is a button for full screen so no need for mouse click checks
    this.mousePressed = function () {
        this.playbackButton.hitCheck();
        this.skipbackwardButton.hitCheck();
        this.skipforwardButton.hitCheck();
        this.volumeControl.hitCheck();
        this.fullscreenButton.hitCheck();
        if (this.menuButton.hitCheck()) {
            this.menuDisplayed = !this.menuDisplayed;
        }

    };

    //responds to keyboard presses
    //@param keycode the ascii code of the keypressed
    this.keyPressed = function (keycode) {
        if (keycode == 32) {
            this.menuDisplayed = !this.menuDisplayed;
        }

        if (keycode > 48 && keycode < 58) {
            var visNumber = keycode - 49;
            vis.selectVisual(vis.visuals[visNumber].name);
            //when moves off the buzzwire the volume is reset so it's not set to 0
            sound.setVolume(vol);
        }
        if (keycode == 82) {
            mic.start();
            sound = mic;
        }
        //volume up and down
        if (keycode == 38) {
            vol = min(1, vol + 0.05);
            sound.setVolume(vol);
        }
        if (keycode == 40) {
            vol = max(0, vol - 0.05);
            sound.setVolume(vol);
        }
    };

    //draws the playback button and potentially the menu
    this.draw = function () {
        push();
        fill("white");
        stroke("black");
        strokeWeight(2);
        textSize(34);

        //control buttons
        this.playbackButton.draw();
        this.skipforwardButton.draw();
        this.skipbackwardButton.draw();
        this.volumeControl.draw();
        this.fullscreenButton.draw();
        this.menuButton.draw();
        //only draw the menu if menu displayed is set to true.
        if (this.menuDisplayed) {
            fill(255);
            text("Select a visualisation:", 100, 30);
            this.menu();
        }
        pop();

    };

    this.menu = function () {
        //draw out menu items for each visualisation
        for (var i = 0; i < vis.visuals.length; i++) {
            fill(255);
            var yLoc = 70 + i * 40;
            text((i + 1) + ":  " + vis.visuals[i].name, 100, yLoc);
        }
    };
}