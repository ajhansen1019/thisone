var c;
 
function setup() {
 	createCanvas(windowWidth, windowHeight);
 	c = color(255,255,255);
	cursor('https://files.cargocollective.com/c310271/Glue-Gun.png');
}
 
function mouseDragged() 
{ 
	strokeWeight(8);
	stroke(c);
	line(mouseX, mouseY, pmouseX, pmouseY);
}
 
function keyPressed()
{
	if(key == 'r' || key == 'R')
	{
		c = color(255, 0, 0);
	}
	
	if(key == 'g' || key == 'G')
	{
		c = color(0, 255, 0);
	}
	
	if(key == 'b' || key == 'B')
	{
		c = color(0, 0, 255);
	}
	if(key == 'w' || key == 'W')
	{
		c = color(255, 255, 255);
	}
	if(key == 'p' || key == 'P')
	{
		c = color(255, 190, 200);
	}
		if(key == 'y' || key == 'Y')
	{
		c = color(255, 250, 205);
	}
}
