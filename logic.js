console.log(`beep`)


let canvas = document.getElementById('canvas1')
/*getContext gets access to the drawing board of the canvas element.
2D is the rendering context type (like 3D type is called 'webgl')
*/
let context = canvas.getContext('2d')


/* S Q U A R E */

/*Start a new element to draw */
context.beginPath();
/*Add the size and start position */
/*The container is 600x600. We add in above that:
1, Starts at 100x distance from 0
2, Starts at 100y distance fromn 0
3, Make it 400 wide
4, Make it 400 tall
*/
context.rect(100, 100, 400, 400);
/*Outline thickness*/
context.lineWidth = 4;

/*Add Outline*/
/*.stroke or .fill are to be LAST step
 everything between .beginPath and these are what is contained here */
context.stroke();



/* C I R C L E */

context.beginPath();
/*Define we want a circle*/
/*
1, X of the center of circle
2, Y of the center of circle
3, Radius of circle
4, Starting angle
5, Ending angle (full 360 with the "Math.PI*2")
*/
context.arc(300, 300, 100, 0, Math.PI * 2);
context.stroke();


let canvas2 = document.getElementById('canvas2')
let context2 = canvas2.getContext('2d')
let width = 60;
let height = 60;
let gap = 20;

for (let i = 0; i < 5; i++) {

    for (let j = 0; j < 5; j++) {
        let startX = 100 + (width + gap) * i;
        let startY = 100 + (height + gap) * j;
        context2.lineWidth = 4;


        context2.beginPath();
        context2.rect(startX, startY, width, height);
        context2.stroke();

        //setInterval(SmallSquare, 1000)

        function SmallSquare() {
            if (Math.random() > 0.5) {
                /*Smaller cubes inside */
                context2.beginPath();
                context2.rect(startX + 8, startY + 8, width - 16, height - 16);
                context2.stroke();
            }
        }

    }

}

