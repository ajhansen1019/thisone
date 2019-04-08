var c;
 
function setup() {
 	createCanvas(windowWidth, windowHeight);
 	c = color(255,255,255);
	cursor('https://files.cargocollective.com/c310271/Pencil2.png');
}
 
function mouseDragged() 
{ 
	strokeWeight(4);
	stroke(c);
	line(mouseX, mouseY, pmouseX, pmouseY);
}
 
function keyPressed()
{
	if(key == 'r' || key == 'R')
	{
		c = color(205,92,92);
	}
	
	if(key == 'g' || key == 'G')
	{
		c = color(144,238,144);
	}
	
	if(key == 'b' || key == 'B')
	{
		c = color(100,149,237);
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
	
		if(key == 't' || key == 'T')
	{
		c = color(0,128,128);
	}
	
		if(key == 'm' || key == 'M')
	{
		c = color(147,112,219);
	}
}
