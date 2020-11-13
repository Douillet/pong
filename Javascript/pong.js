

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
        this.haut=parseInt($("#balle").css("top"));
        this.gauche=parseInt($("#balle").css("left"));
        this.largeur=parseInt($("#balle").css("width"));
        this.hauteur=parseInt($("#balle").css("height"));
        //Configure la vitesse de la balle
        this.vitesseX= 2.5-Math.random()*10;  //selon la largeur IL FAUT ÉQUILIBRER LA VITESSE
        this.vitesseY= 2-Math.random()*8;  //selon la hauteur
    }
    //Permet d'utiliser ces termes dans une fonction quanf majHTML(){} est entré
    majHTML(){
        this.$html.css("left",balle.gauche);
        this.$html.css("top",balle.haut);
        this.$html.css("width",balle.largeur);
        this.$html.css("height",balle.hauteur);
    }
}
class Raquette_gauche{
    constructor($object){
        this.$object=$object
        //Rappelle des infos graphiques du CSS pour correspondre colision, mouvement et visuel
        this.haut=parseInt($("#raquette_gauche").css("top")); 
        this.gauche=parseInt($("#raquette_gauche").css("left"));
        this.largeur=parseInt($("#raquette_gauche").css("width"));
        this.hauteur=parseInt($("#raquette_gauche").css("height"));
        this.vitesse=3 //Vitesse de déplacement automatique de la raquette gauche
        this.direction=1 //+1 fait descendre, -1 fait monter
    }
    majHTML(){
        this.$object.css("top", this.haut);
        this.$object.css("height", this.hauteur)
    }

    deplacement(){
        this.haut = this.haut + this.vitesse*this.direction; //vitesse comprenant la direction MAIS ÇA NE MARCHE PAS
        this.limitedemouvements();
        this.majHTML();
    }
    limitedemouvements(){
        if(this.haut>terrain.hauteur-this.hauteur){ //permet à la raquette de remonter quand elle touche le bas du terrain
            this.direction=-1;}
        if(this.haut<0){//permet à la raquette de redescendre quand elle touche le haut du terrain
            this.direction=1;
        }
        

    }
    
}

class Raquette_droite{
    constructor($object){
        this.$object=$object
        //Rappelle des infos graphiques du CSS pour correspondre colision, mouvement et visuel
        this.haut=parseInt($("#raquette_droite").css("top")); 
        this.gauche=parseInt($("#raquette_droite").css("left"));
        this.largeur=parseInt($("#raquette_droite").css("width"));
        this.hauteur=parseInt($("#raquette_droite").css("height"));
        this.vitesse=1 //Vitesse de déplacement automatique de la raquette droite
        this.direction=1 //+1 fait descendre, -1 fait monter
    }
   

    bouge(){
        raquette_droite.haut = raquette_droite.haut + raquette_droite.vitesse*raquette_droite.direction; //vitesse comprenant la direction MAIS ÇA NE MARCHE PAS
        this.limitemouvements();
        this.majHTML();
    }

    limitemouvements(){
        if(this.haut>terrain.hauteur-this.hauteur){ //permet à la raquette de remonter quand elle touche le bas du terrain
            this.direction=-1;
            if(this.haut<0){//permet à la raquette de redescendre quand elle touche le haut du terrain
                this.direction=1;
            }
        }
    }
    majHTML(){
            this.$object.css("top", this.haut);
            this.$object.css("height", this.hauteur)
    }
}
    

let raquette_gauche=new Raquette_gauche($("#raquette_gauche"));
let raquette_droite=new Raquette_droite($("#raquette_droite"));
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
