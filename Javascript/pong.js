let largeur=$("#balle").width();
let gauche=parseInt($("#balle").css("left"));
let haut=parseInt($("#balle").css("top"));




class Terrain{
    constructor($element){
        this.$element=$element;
        this.largeur=$element.width();
        this.hauteur=$element.height();
        
    }
}
class Balle{
    constructor($html){
        this.$html=$html;
        this.haut=parseInt($("#balle").css("left"));
        this.gauche=parseInt($("#balle").css("top"));
        this.vitesseX=2;
        this.vitesseY=0.5;
    }
    majHTML(){
        this.$html.css("left",balle.gauche);
        this.$html.css("top",balle.haut);
    }
}

let terrain=new Terrain($("#terrain"));
let balle=new Balle($("#balle"));

setInterval(function(){
    balle.gauche=balle.gauche+vitesseX; //Donne un mouvement à la balle vers la droite
    balle.haut=balle.haut+vitesseY; //Donne un mouvement à la balle vers le bas
    
    if(balle.gauche>terrain.largeur){
        balle.gauche=terrain.largeur;
        balle.vitesseX=balle.vitesseX*-1;
    }
    if(balle.gauche>terrain.largeur){
        balle.gauche=terrain.largeur;
        balle.vitesseX=balle.vitesseX*-1;
    }
    if(balle.haut>terrain.hauteur){
        balle.haut=terrain.hauteur;
        balle.vitesseY=balle.vitesseY*-1;
    }
    if(balle.haut>terrain.hauteur){
        balle.haut=terrain.hauteur;
        balle.vitesseY=balle.vitesseY*-1;
    }
    balle.majHTML();

}, 10);
