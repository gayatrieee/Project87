
// Create canvas variable
var canvas = new fabric.Canvas('myCanvas')
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	// to upload images
	 function new_image(get_image)
		{
			fabric.Image.fromURL(get_image, function(Img){
				block_image_object = Img;


       block_image_object.scaleToWidth(block_image_width);
	   block_image_object.scaleToHeight(block_image_height);
       player_object.set({
           top:block_y
           left:block_x,
           });
           canvas.add (block_image_object) 
        });



window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '?') // add appropriate keycode
	{
		new_image('rr1.png')
	}
	if(keyPressed == '71')
	{
		block_x = 200;
		new_image('gr.png')
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		new_image('yr.png')
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		new_image('pr.png')
	}
	if(keyPressed == '66')
	{
		block_x = 700;
		new_image('br.png')
	}
	
}
