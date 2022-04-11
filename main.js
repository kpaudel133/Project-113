function preload(){
}

function setup(){
    canvas = createCanvas(400,400);
    canvas.position(200,300);

    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw(){
    image(video,0,0,400,400);
    noFill();
    stroke("lightblue");
    circle(200,200,100);
    stroke("skyblue");
    rect(100,100,200,200);
    stroke("blue");
    circle(200,200,400);
}

function take_snapshot(){
    save("taken_image.jpg")
}