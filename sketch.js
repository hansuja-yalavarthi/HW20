var bg;
var tomImg1, tomImg2, tomImg3;
var jerryImg1, jerryImg2, jerryImg3;
var cat, mouse;

//Fun fact - Tom is a cat, Jerry is a mouse

function preload() {
        bg = loadImage("garden.png");
        tomImg1= loadAnimation("cat1.png", "cat2.png","cat3.png");
        tomImg3= loadAnimation("cat4.png");
        jerryImg1=loadAnimation("mouse1.png");
        jerryImg2= loadAnimation("mouse2.png","mouse3.png");
        jerryImg3=loadAnimation("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    cat = createSprite(800, 700, 20, 20);
    cat.addAnimation("tomCatImg", tomImg1);
    cat.scale = 0.1;
    mouse = createSprite(200, 700, 20, 20);
    mouse.addAnimation("jerryMouseImg", jerryImg1);
    mouse.scale = 0.1;
}

function draw() {

    background(bg);
    
    keyPressed();
    if (isTouching(cat, mouse)) {
	cat.x = 800;
	cat.changeAnimation(tomImg3);
    }

    drawSprites();
}

function keyPressed(){

    if(keyCode === LEFT_ARROW){
        cat.x = cat.x - 5;
    }

}

function isTouching(object1, object2) {
    if (object1.x - object2.x < object1.width/2 + object2.width/2
        && object2.x - object1.x < object1.width/2 + object2.width/2
        && object1.y - object2.y < object1.height/2 + object2.height/2
        && object2.y - object1.y < object1.height/2 + object2.height/2) {
            result = true;
        } else {
            result = false;
        }
  }
