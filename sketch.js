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

function setup() {
  createCanvas(400, 400);
  background(220);

}

function draw() {

}

function mousePressed(){
  background(random(200, 255));
  randomIndex = int(random(cars.length));
  text(cars[randomIndex].name, 50, 50);
  cars.splice(randomIndex, 1);
}
