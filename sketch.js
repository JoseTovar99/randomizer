let dogs = [{
  name: "Lovable",
  },
{
  name: "Playful",
  },
{
  name: "Funny",
  },
{
  name: "Cute",
  },
{
  name: "Adorable",
  }];

let randomIndex;
let animating = false;
let dog = [];
let imageCounter = 0;
let button;

function preload(){

for (let i = 0; i <= 4; i++ ){
  dog[i] = loadImage(`assets/dog_${i}.jpg`)
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
  image(dog[imageCounter], width/2, height/2);

  if (imageCounter < dog.length - 1){
    imageCounter++;
    console.log(imageCounter);
  } else {
    imageCounter = 0;
  }

}

}

function randomizer(){
  animating = false;
  if (dogs[0]){
  //background(random(200, 255));
  randomIndex = int(random(dogs.length));
  image(random(dog), width/2, height/2);
  text(`${dogs[randomIndex].name}`, width/2, height - 550);
  dogs.splice(randomIndex, 1);
} else{
  background(random(200, 255));
  text("Hope you enjoyed!", 50, 50);
}
}

function buttonPressed(){
  animating = true;
  setTimeout(randomizer, 2000);
}
