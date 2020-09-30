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

function setup() {
  createCanvas(700, 700);
  background(220);
  textSize(32);
  text("Click To Randomize!", 50, 50);
}

function draw() {

if (animating == true){
  ellipse(random(width), random(height), random(50, 200));

}

}

function randomizer(){
  animating = false;
  if (cars[0]){
  background(random(200, 255));
  randomIndex = int(random(cars.length));
  text(`${cars[randomIndex].name} 's manufacturer is ${cars[randomIndex].manufacturer}`, 50, 50);
  cars.splice(randomIndex, 1);
} else{
  background(random(200, 255));
  text("nothing left!", 50, 50);
}
}

function mousePressed(){
  animating = true;
  setTimeout(randomizer, 1000);
}
