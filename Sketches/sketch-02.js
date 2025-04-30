//Basic Transform & Angles
const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math')
const random = require('canvas-sketch-util/random')

const settings = {
  dimensions: [1080, 1080]
};

//unused examples, replaced with the Utility imported library
const degreeToRadius = (degrees) => {
  return degrees / 180 * Math.PI //To get X degrees as input
}
const randomRange = (min, max) => {
  return Math.random() * (max - min) + min;
}



const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    context.fillStyle = 'black';
    const centerX = width * 0.5;
    const centerY = height * 0.5;
    const w = width * 0.01;
    const h = height * 0.1;
    let x, y;

    const num = 40; //amount of slices
    const radius = width * 0.3;

    for (let i = 0; i < num; i++) {
      const slice = math.degToRad(360 / num);
      const angle = slice * i;

      x = centerX + radius * Math.sin(angle);
      y = centerY + radius * Math.cos(angle);

      context.save();
      context.translate(x, y); //move x,y coordinates to
      context.rotate(-angle); //roate from 0 point
      context.scale(random.range(0.1, 2), random.range(0.2,0.5)) //scaling, 1 as baseline 

      context.beginPath();
      context.rect((-w * 0.5), random.range(0,-h * 0.5), w, h)
      context.fill();
      context.restore()

      context.save()
      context.translate(centerX, centerY)
      context.rotate(-angle)
      context.lineWidth = random.range(5,20);

      context.beginPath();
      context.arc(0, 0, radius * randomRange(0.7,1.3), slice * random.range(1,-9), slice * random.range (0,5));
      context.stroke();


      context.restore()

    }
  };
};

canvasSketch(sketch, settings);
