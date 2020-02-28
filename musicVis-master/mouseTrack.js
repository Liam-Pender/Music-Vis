function MouseTrack(){
    this.name = "mouseTrack";
    
    this.draw = function(){
        push();
        var mouseTrack = fourier.analyze();
/*
the start of the draw function will be essentially the same as the orignial 
spectrum.

it will start to differ because instead of there being 255 rectangles from 
the left hand side of the screen there will be 255 lines of maybe small 
triangles all originating at point mouseX mouseY and moving out it 1.5 
degrees away from the previous trig will need to be used
*/

            var d = map(mouseTrack[20], 0, 255, 0, 100);
            //temp only using 1 value in array to work thourgh it
            fill(mouseTrack[20], 255-mouseTrack[20], 0);
            ellipse(mouseX, mouseY, d, d);
//            line(mouseX, mouseY, )

        pop();
            
        };
}