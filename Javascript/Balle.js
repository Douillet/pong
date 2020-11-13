class Balle{
    constructor($element){
        /*Permet d'appeler les informations saisies dans le code CSS pour faire correspondre
        les données de colisions et avec les données graphiques*/
        this.$element=$element;
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
        this.$element.css("left",balle.gauche);
        this.$element.css("top",balle.haut);
        this.$element.css("width",balle.largeur);
        this.$element.css("height",balle.hauteur);
    }
    mouvementetrebond()
{
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
    balle.majHTML(); //Actualiser le CSS

}
}


