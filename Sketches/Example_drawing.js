function getRandomNumber() {
    //random number between 1 and 100
    let number = Math.floor(Math.random() * 100) + 1;
    return number
}


//Draw 1 static and 1 random item on Canvas/Container 1
//1.5 Select the HTML element in JS:
const canvas_1 = document.getElementById("canvas_1"); //JS value is linked, so the correct gets updated
const context = canvas_1.getContext("2d");              //Default command, so it knows to interpret as 2D drawing.

const speedMultiplier = 1;

//2, Create the re-useable Constructors in JS:
class Circle {
    constructor(x, y, radius, color) {
        this.x = x;              //this.x is the input X value
        this.y = y;              //this.y is the input Y value
        this.radius = radius;    //this.radius is the input radius value
        this.color = color; //this.color is the input color value
        // Velocity (random x and y speed between -3 and 3)
        this.vx = (Math.random() - 0.5) * speedMultiplier;
        this.vy = (Math.random() - 0.5) * speedMultiplier;
    }

    //Needed for animation
    update(canvasWidth, canvasHeight) {
        //to check current coordinates and add the velocity to it as next frame
        this.x += this.vx;
        this.y += this.vy;

        // Bounce horizontal walls
        if (this.x - this.radius <= 0 || this.x + this.radius >= canvasWidth) {
            this.vx *= -1;
        }

        // Bounce vertical walls
        if (this.y - this.radius <= 0 || this.y + this.radius >= canvasHeight) {
            this.vy *= -1;
        }
    }


    //3, Add the Drawing part (within the class, so it's also drawn without needing 2nd function.    
    draw(context) {
        context.save();

        context.beginPath();                                          //Start a new shape
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);     //Say it'll be a circle
        context.fillStyle = this.color;                               //Set a fill color, default is black
        context.shadowColor = 'rgba(0, 255, 13, 0.9)';              //Add a "glow" color around the item
        context.shadowBlur = 20                                       //Set the blurring size/radius
        context.fill();                                               //Do the action based on the above details.
        //context.stroke();                                           //Use instead of FILL to have lines instead.

        context.restore();
    }

};

//4, Create an item and actually call the above function to fill it:
//Parameters, randomised here for variety
const x = Math.random() * canvas_1.width;   //We define x0 based on the container width.
const y = Math.random() * canvas_1.height;  //We define y0 based on the container height.

//New HTML element created, calling the Circle function with x=100,y=50,radius=30 as input.
const drawn_Circle_1 = new Circle(x, y, 30)
const drawn_Circle_2 = new Circle(50, 100, 20)
//The element is created, now to drawn on it with the previously added details:
drawn_Circle_1.draw(context);
drawn_Circle_2.draw(context);



//Draw X random items on Canvas/Container 2
//Repeat X times to draw the items
const canvas_2 = document.getElementById("canvas_2"); //JS value is linked, so the correct gets updated
const context_2 = canvas_2.getContext("2d");              //Default command, so it knows to interpret as 2D drawing.
const amountOfItems = 20;

for (let i = 0; i < amountOfItems; i++) {

    //Parameters, randomised here for variety
    const x = Math.random() * canvas_2.width;   //We define x0 based on the container width.
    const y = Math.random() * canvas_2.height;  //We define y0 based on the container height.

    const currentItem = new Circle(x, y, 30);
    currentItem.draw(context_2);

}


//Animate items in Canvas/Container 3
const canvas_3 = document.getElementById("canvas_3"); //JS value is linked, so the correct gets updated
const context_3 = canvas_3.getContext("2d");              //Default command, so it knows to interpret as 2D drawing.

const currentItemList = [];
const amountOfItems_3 = 10;

function drawForContainer3() {

    for (let i = 0; i < amountOfItems_3; i++) {

        //Parameters, randomised here for variety
        const x = Math.random() * canvas_3.width;   //We define x0 based on the container width.
        const y = Math.random() * canvas_3.height;  //We define y0 based on the container height.

        const radius = 20;
        const colors = ['red', /*'blue', 'green', 'orange', 'purple'*/]; //Add whatever colors wanted
        const color = colors[Math.floor(Math.random() * colors.length)];

        currentItemList.push(new Circle(x, y, radius, color));
    }
}

//Call the function once
drawForContainer3()

//Animation loop
function animate() {
    //Clear the canvas, failsafe to ensure it doesnt stack
    context_3.clearRect(0, 0, canvas_3.width, canvas_3.height);

    //Draw lines between nearby circles
    for (let i = 0; i < currentItemList.length; i++) {
        for (let j = i + 1; j < currentItemList.length; j++) {
            const a = currentItemList[i];
            const b = currentItemList[j];

            const dx = a.x - b.x;
            const dy = a.y - b.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            const maxDist = 200;
            const minLineWidth = 2;
            const maxLineWidth = 20;

            if (dist < maxDist) {

                // Invert scale: closer = thicker
                const lineWidth = Math.max(
                    minLineWidth,
                    maxLineWidth * ((100 - dist) / 100)
                );

                // 1. Glow effect with a wide blurred transparent stroke
                context_3.save();

                context_3.beginPath();
                context_3.moveTo(a.x, a.y);
                context_3.lineTo(b.x, b.y);
                context_3.lineWidth = lineWidth + 6; // Slightly wider than main line
                context_3.strokeStyle = 'rgba(0, 183, 255, 0.4)';
                context_3.shadowColor = 'rgba(0, 0, 255, 0.8)';
                context_3.shadowBlur = 12;
                context_3.stroke();

                context_3.restore();

                // 2. Real line
                context_3.save();

                context_3.beginPath();
                context_3.moveTo(a.x, a.y);
                context_3.lineTo(b.x, b.y);
                context_3.lineWidth = lineWidth;
                context_3.strokeStyle = 'rgba(0, 0, 0, 0.5)';
                context_3.stroke();

                context_3.restore();
            }
        }
    }

    //Update and draw all circles
    for (let circle of currentItemList) {
        circle.update(canvas_3.width, canvas_3.height);
        circle.draw(context_3);
    }

    requestAnimationFrame(animate);
}

// 5. Start animation
animate();