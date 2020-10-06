let cars = [{
  name: "Mustang",
  manufacturer: "Ford"},
{
  name: "Corvette",
  manufacturer: "Chevrolet"},
{
  name: "M4",
  manufacturer: "BMW"},
{
  name: "R8",
  manufacturer: "Audi"},
{
  name: "Aventador",
  manufacturer: "Lamborghini"}];

let randomIndex;
let animating = false;
let car = [];
let imageCounter = 0;
let button;

function preload(){

for (let i = 0; i <= 4; i++ ){
  car[i] = loadImage(`assets/car_${i}.jpg`)
}

}

function setup() {
  createCanvas(600, 600);
  background(173, 216, 230);
  textSize(36);
  imageMode(CENTER);
  frameRate(5);
  text("Click To Randomize!", 50, 50);

  button = createButton("Click to Randomize!");
  button.mousePressed(buttonPressed);
}

function draw() {

if (animating == true){
  clear();
  image(car[imageCounter], width/2, height/2);

  if (imageCounter < car.length - 1){
    imageCounter++;
    console.log(imageCounter);
  } else {
    imageCounter = 0;
  }

}

}

function randomizer(){
  animating = false;
  if (cars[0]){
  //background(random(200, 255));
  randomIndex = int(random(cars.length));
  image(random(car), width/2, height/2);
  text(`${cars[randomIndex].name}`, width/2, height - 530);
  cars.splice(randomIndex, 1);
} else{
  background(random(200, 255));
  text("nothing left!", 50, 50);
}
}

function buttonPressed(){
  animating = true;
  setTimeout(randomizer, 2000);
}
