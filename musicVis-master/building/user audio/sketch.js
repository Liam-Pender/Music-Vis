//Currently unable to run this code because of chrome security restrictions not allowing access to MIC without HTTPS. am currently looking into how to fix this.


//var userMic;
//var vol;
//
//function setup(){
//	createCanvas(windowWidth, windowHeight);
//    background(0);
//    userMic = new p5.AudioIn();
//    userMic.start();
//}
//
//function draw(){
//	background(0);
//	vol = userMic.getLevel();
//    // volume is a very small number.
//    vol = vol*1000;
//    fill(255, 0, 0);
//    ellipse(200, 200, vol, vol);
//    
//    
//}
//
//function mouseClicked(){
//	console.log(vol);
//}


let mic;
function setup(){
  mic = new p5.AudioIn()
  mic.start();
}
function draw(){
  background(0);
  micLevel = mic.getLevel();
  ellipse(width/2, constrain(height-micLevel*height*5, 0, height), 10, 10);
}
