let squares = [];
let scl = 30;
let angle = 0;
let lignes = window.innerHeight / scl;
let collones = window.innerWidth / scl;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    pointLight(255,255,255,-windowWidth/2,-windowHeight/2,-300);
    pointLight(255,255,255,windowWidth/2,-windowHeight/2,-300);
    pointLight(255,255,255,-windowWidth/2,windowHeight/2,-300);
    pointLight(255,255,255,windowWidth/2,windowHeight/2,-300);
    pointLight(255,255,255,-windowWidth/2,-windowHeight/2,-300);
    pointLight(255,255,255,windowWidth/2,-windowHeight/2,-300);
    pointLight(255,255,255,-windowWidth/2,windowHeight/2,-300);
    pointLight(255,255,255,windowWidth/2,windowHeight/2,-300);
    pointLight(255,255,255,0,0,-300);





}

function draw() {
    //ortho();
    translate(-windowWidth / 2, -windowHeight / 2);
   fill(255,0,0);
    background(40,0);
    angleY =angle;
    angleX = 2.35339;
    angle+=0.02;
    create();
}

function create() {
    for (let i = 0; i < lignes+1 ; i++) {
        for (let x = 0; x < collones+1 ; x++) {
            specularMaterial(10,10,10);
            strokeWeight(2);
            stroke(255);
            noStroke();
            rotateX(angleY);
            rotateY(angleX);
            box(scl+0.1);
            rotateY(-angleX);
            rotateX(-angleY);
            translate(scl*(Math.sqrt(2)), 0);
        }
        translate(-collones*(scl*(Math.sqrt(2)))-3*(scl*(Math.sqrt(2))/2),scl);
    }
}



