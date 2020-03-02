function MouseTrack(){
    this.name = "mouseTrack";
    
    this.draw = function(){
        push();
        var mouseTrack = fourier.analyze();
        var numOfLines = 256;
        var increment = (2*PI)/numOfLines;
/*
the start of the draw function will be essentially the same as the orignial 
spectrum.

it will start to differ because instead of there being 255 rectangles from 
the left hand side of the screen there will be 255 lines of maybe small 
triangles all originating at point mouseX mouseY and moving out it 1.5 
degrees away from the previous trig will need to be used
*/
        for(i = 0; i < numOfLines; i++){

            strokeWeight(2);
            stroke(0+mouseTrack[i*4], 255-mouseTrack[i*4],0);
            var angle = increment*i;
            var h = mouseTrack[i*4];
            var x = h*sin(angle);
            var y = Math.sqrt((h * h) - (x * x));

            if(i <= (numOfLines/4)) {
                line(mouseX, mouseY, mouseX + x, mouseY - y);
            }
            else if(i > (numOfLines/4) && i <= (numOfLines/2)){
                line(mouseX, mouseY, mouseX + x, mouseY + y);
            }
            else if(i > (numOfLines/2) && i <= ((numOfLines/4)*3)){
                line(mouseX, mouseY, mouseX+x, mouseY+y);
            }
            else{
                line(mouseX, mouseY, mouseX + x, mouseY + y);
            }
        }

        pop();
            
        };

    this.hitCheck = function () {
        console.log(sin(1))

    }
}