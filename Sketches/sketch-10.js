const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random');

const settings = {
  dimensions: [1440, 1080],
  //animate: true
};

function getRandomNumber(){
  //random number between 1 and 100
  let number = Math.floor(Math.random() * 100) + 1;
  return number
}

const start_X = 100;
const start_Y = 100;
let velo_X = 0;
let velo_Y = 0;
let radius = 10;

//class Constructors
class Circle {
  constructor (start_X,start_Y,radius) {
    this.x = start_X      //start x coordinate
    this.y = start_Y      //start y coordinate
    this.radius = radius  //radius in 0 - 360
  }

  draw(context) {
    context.fillStyle = "black";
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2); //Circle: starting x/y, radius, 0, Math.pi*2
    context.fill();

  }
}

class Square {
  constructor (start_X,start_Y,radius) {
    this.x = start_X      //start x coordinate
    this.y = start_Y      //start y coordinate
    this.width = 100;     //used for both width and height
  }

  draw(context) {
    context.fillStyle = "black";
    context.beginPath();
    context.fillRect(this.x, this.y, this.width, this.width);
    context.fill();

  }
}
//setting the classes into what we can call
const item_Circle = new Circle (start_X, start_Y, radius) 
const item_Square = new Square (start_X, start_Y)


const amountOfItems = 10;

const sketch = ({ context, width, height }) => {

  const listOfSquares = [];

  for (let i = 0; i < amountOfItems; i++) {
    const x = getRandomNumber();
    const y = getRandomNumber();
    listOfSquares.push(new Square (x,y))
    
  }


  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    const centerX = width * 0.5;
    const centerY = height * 0.5;

    //calling the constructors/classes
    //context is ???
    item_Circle.draw(context);

    listOfSquares.forEach ((element) => {
      element.draw(context);
    })


  };
};

canvasSketch(sketch, settings);


