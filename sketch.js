var cross
var Knots
var MainMusic

var line1, line2, line3, line4
var square1, square2, square3, square4, square5, square6, square7, square8, square9

var X1, X2, X3, X4, X5, X6, X7, X8, X9

var ButtonImg

function preload(){
    MainMusic = loadSound("./Assets/MainMusic.mp3")
    


    X1 = loadImage("./Assets/x.png")
    ButtonImg = loadImage("./Assets/download.png")
}

function setup(){
    createCanvas(1000,700)
    MainMusic.play()
    MainMusic.looped = true

    line1 = createSprite(360, 350, 10, 500)
    line2 = createSprite(650, 350, 10, 500)
    line3 = createSprite(500, 450, 650, 10)
    line4 = createSprite(500, 250, 650, 10)


    square1 = createSprite(270, 180)

    //square1 = createImage(ButtonImg)
    //square1.position(270, 180)
    

    square2 = createSprite(500, 180)

    square3 = createSprite(750, 180)

    square4 = createSprite(270, 350)

    square5 = createSprite(500, 350)

    square6 = createSprite(750, 350)

    square7 = createSprite(270, 520)

    square8 = createSprite(500, 520)

    square9 = createSprite(750, 520)


    //square1.mouseClicked(setX(square1))


}


function draw(){

    background("#FFE5B4")
    drawSprites()
}



function setX(sprite){
    sprite.addImage("XImage", X1)
}