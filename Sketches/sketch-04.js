const canvasSketch = require('canvas-sketch');
//Noise module
const random = require('canvas-sketch-util/random');
const math = require('canvas-sketch-util/math');

const settings = {
  dimensions: [1080, 1080],
  animate: true
};

const sketch = () => {
  return ({ context, width, height, frame }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    const cols = 10;
    const rows = 10;
    const numOfCells = cols * rows;
    //grid and cell sizes
    const gridw = width * 0.8;
    const gridh = height * 0.8;
    const cellw = gridw / cols;
    const cellh = gridh / rows;


    //margins
    const margx = (width - gridw) * 0.5;
    const margy = (height - gridh) * 0.5;

    for (let i = 0; i < numOfCells; i++) {
      //"%" means "remainder" in JS, meaning what remains after being divided.
      //So "1 % 4" returns 1, as it cannot be divided by 4 and remains 1.
      // "4 % 4" returns 0, as it is divisible by 4 and nothing remains.
      // "9 % 4" returns 1, as it's divided twice by 4, and remains 1.
      const col = i % cols;
      //Here we condense the above to only return 1, then 2, then 3, etc.
      //We can use this to check which row we are on currently, as it has no in-betweens.
      const row = Math.floor(i / cols);

      const x = col * cellw;
      const y = row * cellh;
      const w = cellw * 0.8;
      const h = cellh * 0.8;


      //This is pulled from the Canvas Sketch noise module. To create my own.
      //3rd input is frquency of the changes.
      const n = random.noise2D(x + frame * 10, y, 0.001, 0.2);
      //This gets between -180 and 180 for the lines direction
      const angle = n * Math.PI;
      //Scale is now random between 1 and 30
      //const scale = (n + 1) / 2 * 30;
      const scale = math.mapRange(n, -1, 1, 1, 30);


      //Drawing
      context.save();
      //start at topleft 0 point
      context.translate(x, y);
      //adding margin value
      context.translate(margx, margy);
      //move linestart to the center of the cell
      context.translate(cellw * 0.5, cellh * 0.5);
      context.rotate(angle);

      context.lineWidth = scale;

      context.beginPath();
      context.moveTo(w * -0.5, 0);
      context.lineTo(w * 0.5, 0);
      context.stroke();


      context.restore();

    }

  };
};

canvasSketch(sketch, settings);
