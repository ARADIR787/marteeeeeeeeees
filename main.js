canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

nasa_mars_images_array =[" nasa_image_1.jpg" , "nasa_image_2.jpg" , "nasa_image_3.jpg" , "nasa_image_4,jpg"];

random_number = Math.floor(Math.random() * 4);
console.log(random_number);
rover_width = 100;
rover_height = 90;
background_image = "mars.jpg";

rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

//Crea la función "add()"
function add() {
    background_imgTag = new Image ();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag .src = rover_image;
} 

//Crea una función "uploadBackground()".
  function uploadBackground() {
    ctx.drawimage(background_imgTag, 0, 0, canvas.width, canvas.height)
  }                            
 //Dibuja la imagen de fondo
 function uploadrover() {
    ctx.drawimage(rover_imgTag, rover_x, rover_y, rover.width, rover.height)
  }
//Crea una función "uploadrover()".

 //Dibuja la imagen del explorador


window.addEventListener("keydown" , my_keydown);
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
    //Escribe el codigo si keypressed es up (arriba). El valor ASCIII para "arriba" es 38.
		if(keyPressed == '38')
        {
            up();
            console.log("up");
        }


     //Escribe el codigo si keypressed es down (abajo). El valor ASCIII para "abajo" es 40.
     if(keyPressed == '40')
        {
            down();
            console.log("down")
        }


        if(keyPressed == '37')
            {
                left();
                console.log("left")
            }
            
            
            if(keyPressed == '39')
                {
                    right();
                    console.log("right")
                }


    //Actividad adicional
    //Escribe el código para cuando las teclas derecha e izquierda sean presionadas. 
}

function up()
{
    if(rover_y >=0)
        {
            rover_y = rover_y-10
            console.log("cuando se presione la flecha arriba, x ="  + rover_x + "  | y = " + rover_y);
             uploadBackground();
             uploadrover();
        }  

}
function down(){
    if(rover_y <=500)
        {
            rover_y = rover_y-10
            console.log("cuando se presione la flecha abajo, x ="  + rover_x + "  | y = " + rover_y);
             uploadBackground();
             uploadrover();
        }  
	
}
function right(){

    if(rover_y <=700)
        {
            rover_x = rover_x+10
            console.log("cuando se presione la flecha derecha, x ="  + rover_x + "  | y = " + rover_y);
             uploadBackground();
             uploadrover();
        }   
}
function left()
{
    if(rover_x >=0)
        {
            rover_x = rover_x-10
            console.log("cuando se presione la flecha izquierda, x ="  + rover_x + "  | y = " + rover_y);
             uploadBackground();
             uploadrover();
        }  
	
}
































































































































































































































































































































































































































































































































































































