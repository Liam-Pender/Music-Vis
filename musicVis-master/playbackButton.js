//displays and handles clicks on the playback button.
function PlaybackButton(){
	
	this.x = windowWidth/2;
	this.y = windowHeight - 60;
    //centered the play button
	this.width = 20;
	this.height = 40;

	//flag to determine whether to play or pause after button click and
	//to determine which icon to draw
	this.playing = false;

	this.draw = function(){
		if(this.playing){
			image(pauseButton, (windowWidth/2) - 20, windowHeight - 60, 40, 40);
		}
		else{	
			image(playButton, (windowWidth/2) - 20, windowHeight - 60, 40,40);

		}
	};

	//checks for clicks on the button, starts or pauses playabck.
	//@returns true if clicked false otherwise.
	this.hitCheck = function(){
		if(mouseX > this.x && mouseX < this.x + this.width && 
           mouseY > this.y && mouseY < this.y + this.height){
			if (sound.isPlaying()) {
    			sound.pause();
  			} else {
    			sound.loop();
  			}
  			this.playing = !this.playing;
  			return true;
		}
			return false;
	};

}