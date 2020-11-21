class Balle{
    constructor($element){
        /*Permet d'appeler les informations saisies dans le code CSS pour faire correspondre
        les données de colisions et avec les données graphiques*/
        this.$element=$element;
        //coordonnées de la balles
        
        this.haut=parseInt($element.css("top"));
        this.gauche=parseInt($element.css("left"));
        
        //taille de la balle
        this.largeur=parseInt(($element).css("width"));
        this.hauteur=parseInt(($element).css("height"));
        
        //Configure la vitesse de la balle
        this.vitesseX= 2.5//-Math.random()*10;  //selon la largeur IL FAUT ÉQUILIBRER LA VITESSE
        this.vitesseY= 2-Math.random()*8;  //selon la hauteur
    }
    //Permet d'actualiser ces termes dans le CSS
    majHTML(){
        this.$element.css("left",this.gauche);
        this.$element.css("top",this.haut);
        this.$element.css("width",this.largeur);
        this.$element.css("height",this.hauteur);
    }

    get droite(){ //créé la coordonnée droite
        return this.largeur+this.gauche;
    }
    set droite(value){ //récupère la coordonnée droite
        this.gauche = value - this.largeur;
    }
    get bas(){ //créé la coordonnée bas
        return this.hauteur+this.haut;
    }
    set bas(value){ //récupère la coordonnée bas
        this.haut = value - this.hauteur;
    }

    mouvementetrebond() {
        this.gauche = this.gauche + this.vitesseX; //Donne un mouvement à la balle vers la droite
        this.haut = this.haut + this.vitesseY; //Donne un mouvement à la balle vers le bas
        console.log("b",this.haut, this.vitesseY);

        //Collisions avec le terrain

       
        //bord bas
        if (this.bas > terrain.hauteur) {
            this.bas = terrain.hauteur;
            this.vitesseY = this.vitesseY * -1;
        }
        //bord haut
        if (this.haut < 0) {
            this.haut = 0;
            this.vitesseY = this.vitesseY * -1;
        }

        //Collisions avec les raquettes
        //raquette droite
        if (this.droite >= raquetteDroite.gauche) {
            if (this.haut < raquetteDroite.bas) {
                if (this.bas > raquetteDroite.haut) {
                    this.droite = raquetteDroite.gauche;
                    this.vitesseX = this.vitesseX * -1;
                }
            }
        }
        //raquette gauche
        if (this.gauche <= raquetteGauche.droite) {
            if (this.bas > raquetteGauche.haut) {
                if (this.haut < raquetteGauche.bas) {
                    this.gauche = raquetteGauche.droite;
                    this.vitesseX *= -1;
                }
            }
        }
        
        //bord droit
        if (this.droite > terrain.largeur) {
            console.log("bord droit",this.droite, terrain.largeur)
            this.retouraucentre(); //expliqué en bas de code
            //this.droite=terrain.largeur;
            this.vitesseX = this.vitesseX * -1;
        }
        //bord gauche
        if (this.gauche < 0) {
            this.retouraucentre(); //expliqué en bas de code
            this.vitesseX = this.vitesseX * -1;
        }

    this.majHTML(); //Actualiser le CSS

}
    retouraucentre() //focntion renvoyant la balle au milieu
    {
        this.gauche = terrain.largeur / 2 - this.largeur/2;
        this.haut = terrain.hauteur / 2 - this.hauteur/2;
    }
}

