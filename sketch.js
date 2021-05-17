const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;
var time;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
getBackgroundImg();
}

function draw(){

    // add condition to check if any background image is there to add
if(backgroundImg)
    background(backgroundImg);

    Engine.update(engine);

    // write code to display time in correct format here
    noStroke();
    textSize(15);
    fill("white");
    text("time:   "+time, width-300, 50);
    

}

async function getBackgroundImg(){

    // write code to fetch time from API
var response = await fetch("https://worldtimeapi.org/api/timezone/America/Rainy_River")
    //change the data in JSON format
var responseJSON=await response.json();
var dateTime=responseJSON.datetime;
    // write code slice the datetime
    var hour=dateTime.slice(11,13);


    // add conditions to change the background images from sunrise to sunset
if(hour>=04 && hour<=06){
    bg="sunrise1.png";
    time="dawn";
}
else if(hour>=06 && hour<=08){
    bg="sunrise2.png";
    time="morning"
}
else if(hour>=23 && hour==0){
    bg="sunset11.png";
    time="evening"
}
else{
    bg="sunset12.png";
    time="night";
}
    //load the image in backgroundImg variable here
    backgroundImg=loadImage(bg);

}
