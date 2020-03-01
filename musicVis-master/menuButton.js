function MenuButton() {
    // menu button at top left
    this.x = 40;
    this.y = 40;
    this.size = 60;

    this.draw = function(){
        image(menubtn, this.x, this.y, this.size, this.size);
    };

    this.hitCheck = function(){
        if((mouseX > this.x && mouseX < this.x + this.size) &&
            (mouseY > this.y && mouseY < this.y + this.size)){
            return true;
        }
    };
}