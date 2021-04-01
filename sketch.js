var bg, canvas;
var tom, tomImg1, tomImg2, tomImg3;
var jerry, jerryImg1, jerryImg2, jerryImg3;

//Fun fact - Tom is a cat, Jerry is a mouse

function preload() {
    bg = loadImage("garden.png");
    tomImg1 = loadAnimation("cat1.png");
    tomImg2 = loadAnimation("cat2.png", "cat3.png");
    tomImg3 = loadAnimation("cat4.png");
    jerryImg1 = loadAnimation("mouse1.png");
    jerryImg2 = loadAnimation("mouse2.png", "mouse3.png");
    jerryImg3 = loadAnimation("mouse4.png");
}

function setup() {
    canvas = createCanvas(1000, 800);

    tom = createSprite(800, 700);
    jerry = createSprite(200, 700);

    tom.addAnimation("tomOriginal", tomImg1);
    jerry.addAnimation("jerryOriginal", jerryImg1);

    tom.scale = 0.1;
    jerry.scale = 0.1;
}

function draw() {

    background(bg);

    if (tom.x - jerry.x < (tom.width - jerry.width) / 2) {
        tom.velocityX = 0;
        tom.addAnimation("tom3Img", tomImg3);
        tom.x = 300;
        tom.scale = 0.1;
        tom.changeAnimation("tom3Img");
        jerry.addAnimation("jerry3Img", jerryImg3);
        jerry.scale = 0.1;
        jerry.changeAnimation("jerry3Img");
    }

    drawSprites();
}


function keyPressed() {

    if (keyCode === LEFT_ARROW) {
        tom.velocityX = -5;
        tom.addAnimation("tomRunning", tomImg2);
        tom.changeAnimation("tomRunning");

        jerry.addAnimation("jerryTeasing", jerryImg2);
        jerry.frameDelay = 25;
        jerry.changeAnimation("jerryTeasing");
    }
}
