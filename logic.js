console.log(`beep`)

let canvas = document.querySelector('canvas')
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

/*Add Outline, must be after thickness value*/
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
context.arc(300,300,100,0, Math.PI*2);
context.stroke();
