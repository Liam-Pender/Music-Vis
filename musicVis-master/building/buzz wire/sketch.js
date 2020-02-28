var points;
var c;

function setup(){
	createCanvas(windowWidth, windowHeight);
    background(0);
    c = 0;
    
    //an array of points in the box to judge dist from
    points = [65, 75, 85, 95, 105, 115, 125, 135, 145, 155];
}

function draw(){
	background(c);
	fill(255, 0, 0);
    rect(60, 60, 100, 15);
    for(i = 0; i < points.length; i++){
        if(dist(points[i], 65, mouseX, mouseY)> 45)
            {
                c = 255;
            }
        else{
            c = 0;
            return;
        }
    }
    // currently this turns the background white if its too far outside of the square but in the final it will pause the track and buzz
    
}

function mouseClicked(){
	console.log(vol);
}
