let largeur=$("#balle").width();
let gauche=parseInt($("#balle").css("left"));
let haut=parseInt($("#balle").css("top"));
alert(gauche); //Message d'alerte à l'ouverture de la page indiquant la position de la balle

setInterval(function(){
    gauche=gauche+1; //Donne un mouvement à la balle vers la droite
    haut=haut+0.5; //Donne un mouvement à la balle vers le bas
    $("#balle").css("left",gauche);
    $("#balle").css("top",haut);
}, 10);