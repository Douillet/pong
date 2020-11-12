

class Terrain{
    constructor($element){
        //Appelle les varaibles du fichier CSS
        this.$element=$element;
        this.largeur=$element.width();
        this.hauteur=$element.height();
        
    }
}
class Balle{
    constructor($html){
        /*Permet d'appeler les informations saisies dans le code CSS pour faire correspondre
        les données de colisions et avec les données graphiques*/
        this.$html=$html;
        this.haut=parseInt($("#balle").css("left"));
        this.gauche=parseInt($("#balle").css("top"));
        this.largeur=parseInt($("#balle").css("width"));
        this.hauteur=parseInt($("#balle").css("height"));
        //Configure la vitesse de la balle
        this.vitesseX=5;  //selon la largeur
        this.vitesseY=2;  //selon la hauteur
    }
    //Permet d'utiliser ces termes dans une fonction quanf majHTML(){} est entré
    majHTML(){
        this.$html.css("left",balle.gauche);
        this.$html.css("top",balle.haut);
        this.$html.css("width",balle.largeur);
        this.$html.css("height",balle.hauteur);
    }
}

let terrain=new Terrain($("#terrain"));  //Créé le terrain
let balle=new Balle($("#balle"));        //Créé la balle

setInterval(function(){
    balle.gauche=balle.gauche + balle.vitesseX; //Donne un mouvement à la balle vers la droite
    balle.haut=balle.haut + balle.vitesseY; //Donne un mouvement à la balle vers le bas
    
    //Colisions avec le terrain

    //bord droit
    if(balle.gauche>terrain.largeur-balle.largeur){
        balle.gauche=terrain.largeur-balle.largeur;
        balle.vitesseX=balle.vitesseX*-1;
    }
    //bord gauche
    if(balle.gauche<0){
        balle.gauche=0;
        balle.vitesseX=balle.vitesseX*-1;
    }
    //bord bas
    if(balle.haut>terrain.hauteur-balle.hauteur){
        balle.haut=terrain.hauteur-balle.hauteur;
        balle.vitesseY=balle.vitesseY*-1;
    }
    //bord haut
    if(balle.haut<0){
        balle.haut=0;
        balle.vitesseY=balle.vitesseY*-1;
    }
    balle.majHTML();

}, 10);
