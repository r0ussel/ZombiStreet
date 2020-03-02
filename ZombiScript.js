//variables defenies pour la boucle
let rafID = null;//met la request en pause??
let f = 0; //initialise le compteur de boucl, prend l index de la frame courante
//nombre de frame de l animation
const nf = 60; // augmenter pour rallonger la duré de lanimation
let nbtotalboucle = 0;
let score = 0;
var dead = 0;
let vie = 3;

let contact = false;
//--------------------bouine-------------------

var walk1 = new Image ();
    walk1.src = 'Images/Walk(1).png';
var walk2 = new Image ();
    walk2.src = 'Images/walk(2).png';
var walk3 = new Image ();
    walk3.src = 'Images/Walk(3).png';
var walk4 = new Image ();
    walk4.src = 'Images/Walk(4).png';
var walk5 = new Image ();
    walk5.src = 'Images/Walk(5).png';
var walk6 = new Image ();
    walk6.src = 'Images/Walk(6).png';
		var walk7 = new Image ();
		    walk7.src = 'Images/Walk(7).png';
		var walk8 = new Image ();
		    walk8.src = 'Images/Walk(8).png';
		var walk9 = new Image ();
		    walk9.src = 'Images/Walk(9).png';
		var walk10 = new Image ();
		    walk10.src = 'Images/Walk(10).png';
//----------------------images ennemis---------------------
var hurt1 = new Image ();
		hurt1.src = 'Images/Zombie3/Idle (1).png';
var hurt2 = new Image ();
		hurt2.src = 'Images/Zombie3/Idle (2).png';
var hurt3 = new Image ();
		hurt3.src = 'Images/Zombie3/Idle (3).png';
var hurt4 = new Image ();
		hurt4.src = 'Images/Zombie3/Idle (4).png';
var hurt5 = new Image ();
		hurt5.src = 'Images/Zombie3/Idle (5).png';
var hurt6 = new Image ();
		hurt6.src = 'Images/Zombie3/Idle (6).png';
var hurt7 = new Image ();
		hurt7.src = 'Images/Zombie3/Idle (7).png';
var hurt8 = new Image ();
		hurt8.src = 'Images/Zombie3/Idle (8).png';
var hurt9 = new Image ();
		hurt9.src = 'Images/Zombie3/Idle (9).png';
var hurt10 = new Image ();
		hurt10.src = 'Images/Zombie3/Idle (10).png';
//--------------------------images background------------------

var sky = new Image();
		sky.src = 'Images/City3/sky.png';
var houses3= new Image();

		houses3.src = 'Images/City3/houses3.png';
var road = new Image();
		road.src = 'Images/City3/road.png';
var crosswalk = new Image();
		crosswalk.src = 'Images/City3/crosswalk.png';
var wall1 = new Image();
		wall1.src = 'Images/City3/wall1.png';

//----------------------------image vie---------------------

var tetezombi = new Image();
		tetezombi.src = 'Images/tetezombi.png';

var CanvasXSize = 600;
var CanvasYSize = 300;
var speed = 30; // lower is faster
var y = -4.5; // vertical offset

// Main program

var dx = -1.75;
var dx1 = -0.75;
var dx2 = -2;
var dx3 = -2;
var dx4 = -2;
var dx5 = -2;

var imgW = 600;
var imgH = 300;
var x = 0;
var x1 =0;
var x2 =0;
var x3=0;
var x4=0;
var x5=0;
var clearX= 600;
var clearY=300;



var ctx = document.getElementById('ecranConsole').getContext('2d');;

let imgx = 600;//bouine pour deplacement x du draw ennemi
//apparition au bout de l ecran
//---------------------fin bouine---------------------



//fonction frame executée au sein de requestanimationframe
const frame = now => {//now = callback du requestanimationframe, un timestamp en milliseconde
	f ++ ; //incremente le compteur de boucle=l index de la frame courante

	const progress = f/nf;//variable, variant de 0 à 1, indique à chaque frame
//la position de la progression.//0 = situation initiale.//1 = situation finale.
	//console.log(now);//affiche le timestamp
	console.log(progress);//affiche la progesion entre 0 et 1

//----------------bouine--------------------------------

	ctx.clearRect(0, 0, 600, 300);//on nettoie le canvas
//test background

	// reset, start from beginning
		if (x < (-imgW)) {
				x = -CanvasXSize + imgW;
		}
		if (x1 < (-imgW)) {
				x1 = -CanvasXSize + imgW;
		}
		if (x2 < (-imgW)) {
				x2 = -CanvasXSize + imgW;
		}
	 if (x3 < (-imgW)) {
				x3 = -CanvasXSize + imgW;
		}
		if (x4 < (-imgW)) {
				 x4 = -CanvasXSize + imgW;
		 }
		// draw aditional image
		if (x < (CanvasXSize)) {
				ctx.drawImage(sky, x+imgW-1, y, imgW, imgH);
		}
		if (x1 < (CanvasXSize)) {
				ctx.drawImage(houses3, (x1+imgW-1), y, imgW*2, imgH);
		}
		if (x2 < (CanvasXSize)) {
				ctx.drawImage(road, (x2+imgW-1), y, imgW*2, imgH);
		}
		if (x3 < (CanvasXSize)) {
				ctx.drawImage(crosswalk, (x3+imgW-1), y, imgW*2, imgH);
		}
		if (x4 < (CanvasXSize)) {
				ctx.drawImage(wall1, (x4+imgW-1), y, imgW*2, imgH);
		}
// draw image
ctx.drawImage(sky, x, y, imgW, imgH);
ctx.drawImage(houses3, x1, y, imgW*2, imgH);
ctx.drawImage(wall1, x4, y, imgW*2, imgH);
ctx.drawImage(road, x2, y, imgW*2, imgH);
ctx.drawImage(crosswalk, x3, y, imgW*2, imgH);


//test animation perso marchant
	if ( progress >= 0 && progress <0.1){//état au début
		ctx.drawImage( walk1, 80, 80, walk1.width/4, walk1.height/4);
	}
	if (progress>= 0.1 && progress <0.2){
		ctx.drawImage( walk2, 80, 80, walk2.width/4, walk2.height/4 );
	}
	if (progress>= 0.2 && progress <0.3){
		ctx.drawImage( walk3, 80, 80, walk3.width/4, walk3.height/4);
	}
	if (progress>= 0.3 && progress <0.4){
		ctx.drawImage( walk4, 80, 80, walk4.width/4, walk4.height/4 );
	}
	if (progress>= 0.4 && progress <0.5){
		ctx.drawImage( walk5, 80, 80, walk5.width/4, walk5.height/4 );
	}
	if (progress>= 0.5 && progress <0.6){
		ctx.drawImage( walk6, 80, 80, walk6.width/4, walk6.height/4 );
	}
	if (progress>= 0.6 && progress <0.7){
		ctx.drawImage( walk7, 80, 80, walk7.width/4, walk8.height/4 );
	}
	if (progress>= 0.7 && progress <0.8){
		ctx.drawImage( walk8, 80, 80, walk8.width/4, walk8.height/4 );
	}
	if (progress>= 0.8 && progress <0.9){
		ctx.drawImage( walk9, 80, 80, walk9.width/4, walk9.height/4 );
	}
	if (progress>= 0.9 && progress <1){
		ctx.drawImage( walk10, 80, 80, walk10.width/4, walk10.height/4 );
	}
	else if (progress == 1){
		ctx.drawImage( walk10, 80, 80, walk10.width/4, walk10.height/4 );
		dead = 0;
	}
	//----------------------------ennemis??-------------------------------------------
	if (contact === false){
		if (dead === 0){

			if (nbtotalboucle >2 && nbtotalboucle <500){//delai jusqu a la collision
				//alert('ennemi apparait');
				if ( progress >= 0 && progress <0.1){//état au début
					ctx.drawImage( hurt1, imgx, 70, hurt1.width/4, hurt1.height/4 );
				}
				if (progress>= 0.1 && progress <0.2){
					ctx.drawImage( hurt2, imgx, 70, hurt2.width/4, hurt2.height/4 );
				}
				if (progress>= 0.2 && progress <0.3){
					ctx.drawImage( hurt3, imgx, 70, hurt3.width/4, hurt3.height/4 );
				}
				if (progress>= 0.3 && progress <0.4){
					ctx.drawImage( hurt4, imgx, 70, hurt4.width/4, hurt4.height/4 );
				}
				if (progress>= 0.4 && progress <0.5){
					ctx.drawImage( hurt5, imgx, 70, hurt5.width/4, hurt5.height/4);
				}
				if (progress>= 0.5 && progress <0.6){
					ctx.drawImage( hurt6, imgx, 70, hurt6.width/4, hurt6.height/4 );
				}
				if (progress>= 0.6 && progress <0.7){
					ctx.drawImage( hurt7, imgx, 70, hurt7.width/4, hurt7.height/4 );
				}
				if (progress>= 0.7 && progress <0.8){
					ctx.drawImage( hurt8, imgx, 70, hurt8.width/4, hurt8.height/4 );
				}
				if (progress>= 0.8 && progress <0.9){
					ctx.drawImage( hurt9, imgx, 70, hurt9.width/4, hurt9.height/4 );
				}
				if (progress>= 0.9 && progress <1){
					ctx.drawImage( hurt10, imgx, 70, hurt10.width/4, hurt10.height/4 );
				}

				else if (progress == 1){
					ctx.drawImage( hurt10, imgx, 70, hurt10.width/4, hurt10.height/4 );
				}
				imgx -= 2;//vitesse defilement
				if (imgx < walk1.width/4){
					//contact = true;
					imgx = 600;
					nbtotalboucle = 0;
					dead++;
					score++;
				}
			}
		}

	}
		else if (dead === 1){
			nbtotalboucle = 0;
	//
		}

		if ( (dead >0)){
		//	alert (dead

			ctx.font = "60px Arial";
			ctx.fillText("+ 1", 180, 90);
			ctx.fillStyle = "white";



		//dead = 0;
		};
		ctx.font = "30px Arial";
		ctx.fillText("Score :", 20, 30);
		ctx.fillStyle = "white";


		ctx.drawImage(tetezombi, 20, 35, tetezombi.width*0.65, tetezombi.height*0.65);

		ctx.font = "30px Arial";
		ctx.fillText(score, 120, 30);
		ctx.fillStyle = "white";

		ctx.font = "30px Arial";
		ctx.fillText("x", 68, 67);
		ctx.fillStyle = "white";

		ctx.font = "30px Arial";
		ctx.fillText(vie, 87, 68);
		ctx.fillStyle = "white";

		x += dx;
    x1 += dx1;
    x2 += dx2;
    x3 += dx3;
    x4 += dx4;
    x5 += dx5;
//----------fin bouine----------------



//on lance le test de sortie de boucle
	if (f>=nf){ //la boucle doit faire 10 tours
		cancelAnimationFrame(rafID);//on rend null l'animation frame?
		f = 0;//on reinitialise le compteur de boucle//
		rafID = null; //on remet cette valeur a nulle ?
		console.log(f);
		console.log(nf);
		console.log('la boucle a fait 10 tours');
		f=0;//redefinit f à zero sinon >10
		return;//on sort du programme?
	}
	rafID = requestAnimationFrame(frame);//on definit rafID
};
//--------------------------------bouine--------------------------------------------

//$(document).keyup(function(){//ajout de l'evenemt key press execute la funciont
//keyup marche qu une fois la touche laché, bien pour attaque ou sauts éventuellement
function checkKey(e) {
    switch (e.keyCode) {

    case 38:
        //alert('up');
				requestAnimationFrame(draw);
				requestAnimationFrame(frame);//execute la fonction, ici frame, avant le raffraichissement du navigateur


        break;

    case 39:
        //alert('right');
				if (rafID) return;//ca permet d eviter le cumul des requetes
    		rafID = requestAnimationFrame(frame);
			//	requestAnimationFrame(frame);//execute la fonction, ici frame, avant le raffraichissement du navigateur


        break;
    default:
        alert('???');

    }nbtotalboucle ++ ;

		//alert (imgx);
		//alert (walk1.width);

if ( score === 2){
	//alert(' 10 zombies tués ');
	score = 0;
}
}



$(document).on("keypress", function() {
    //cancelAnimationFrame(rafID);
		rafID = null;

});
$(document).on("keyup", function() {
    cancelAnimationFrame(rafID);
		rafID = null;

});
$(document).keydown(checkKey);


//---------------------------------fin bouine--------------------------------------------------
//requestAnimationFrame(frame);//execute la fonction, ici frame, avant le raffraichissement du navigateur
