let squares = [];
let scl = window.innerWidth / 40;
let angle = 0;
let lignes = window.innerHeight / scl;
let collones = window.innerWidth / scl;
let SmartphoneCheck = false;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight, WEBGL);
    pointLight(255, 255, 255, -windowWidth / 2, -windowHeight / 2, -300);
    pointLight(255, 255, 255, windowWidth / 2, -windowHeight / 2, -300);
    pointLight(255, 255, 255, -windowWidth / 2, windowHeight / 2, -300);
    pointLight(255, 255, 255, windowWidth / 2, windowHeight / 2, -300);
    pointLight(255, 255, 255, -windowWidth / 2, -windowHeight / 2, -300);
    pointLight(255, 255, 255, windowWidth / 2, -windowHeight / 2, -300);
    pointLight(255, 255, 255, -windowWidth / 2, windowHeight / 2, -300);
    pointLight(255, 255, 255, windowWidth / 2, windowHeight / 2, -300);
    pointLight(255, 255, 255, 0, 0, -300);

}

function draw() {
    if (windowWidth > windowHeight) {
        //ortho();
        translate(-windowWidth / 2, -windowHeight / 2);
        fill(255, 0, 0);
        background(40, 0);
        angleY = angle;
        angleX = 2.35339;
        angle += 0.01;
        create();
    }else {
        scl = window.innerWidth / 16;
        translate(-windowWidth / 2, -windowHeight / 2);
        fill(255, 0, 0);
        background(40, 0);
        angleY = angle;
        angleX = 2.35339;
        angle += 0.02;
        create();
    }
}

function create() {
    for (let i = 0; i < lignes + 1; i++) {
        for (let x = 0; x < collones + 1; x++) {
            specularMaterial(10, 10, 10);
            strokeWeight(2);
            stroke(255);
            noStroke();
            rotateX(angleY);
            rotateY(angleX);
            box(scl + 0.1);
            rotateY(-angleX);
            rotateX(-angleY);
            translate(scl * (Math.sqrt(2)), 0);
        }
        translate(-collones * (scl * (Math.sqrt(2))) - 3 * (scl * (Math.sqrt(2)) / 2), scl);
    }
}


