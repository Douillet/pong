class Raquette{
    constructor($element){
        this.$element=$element
        //Rappelle des infos graphiques du CSS pour correspondre colision, mouvement et visuel
        this.haut=parseInt($element.css("top"));
        //this.gauche=parseInt($element.css("left"));
        
        //this.largeur=$element.width();
        this.hauteur=$element.height();
        
        this.vitesse=3; //Vitesse de déplacement automatique de la raquette
        this.direction=1; //+1 fait descendre, -1 fait monter
    }

    get bas(){
        return this.haut+this.hauteur;
    }

    deplacement()
    {
        this.haut = this.haut + this.vitesse*this.direction; //vitesse comprenant la direction MAIS ÇA NE MARCHE PAS
        this.limitedemouvements();
        this.majHTML();
    }
    limitedemouvements(){
        if(this.bas>terrain.hauteur){ //permet à la raquette de remonter quand elle touche le bas du terrain
            this.direction=-1;}
        if(this.haut<0){//permet à la raquette de redescendre quand elle touche le haut du terrain
            this.direction=1;
        }
    }
    majHTML(){
        this.$element.css("top", this.haut); //actualisation du CSS
}
}