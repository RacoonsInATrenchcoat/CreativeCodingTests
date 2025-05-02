function getRandomNumber(){
    //random number between 1 and 100
    let number = Math.floor(Math.random() * 100) + 1;
    return number
}



//1.5 Select the HTML element in JS:
const canvas_1 = document.getElementById("canvas_1"); //JS value is linked, so the correct gets updated
const context = canvas_1.getContext("2d");              //Default command, so it knows to interpret as 2D drawing.

//2, Create the re-useable Constructors in JS:

class Circle {
    constructor(x, y, radius) {
        this.x = x;           //this.x is the input X value
        this.y = y;           //this.y is the input Y value
        this.radius = radius; //this.radius is the input radius value
        //3, Add the Drawing part (within the class, so it's also drawn without needing 2nd function.    
    };
    draw(context) {
        context.beginPath();                                          //Start a new shape
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);     //Say it'll be a circle
        context.fillStyle = 'red';                                    //Set a fill color
        context.fill();                                               //Do the action based on the above details.
    };
};

//4, Create an item and actually call the above function to fill it:

const x = Math.random() * canvas_1.width;   //We define x0 based on the container width.
const y = Math.random() * canvas_1.height;  //We define y0 based on the container height.

//New HTML element created, calling the Circle function with x=100,y=50,radius=30 as input.
const drawn_Circle_1 = new Circle(x, y, 30)
const drawn_Circle_2 = new Circle(50, 100, 20)
//The element is created, now to drawn on it with the previously added details:
drawn_Circle_1.draw(context);
drawn_Circle_2.draw(context);