

let terrain= new Terrain($("#terrain"));  //Créé le terrain

let balle= new Balle($("#balle"));        //Créé la balle

let raquetteGauche=new Raquette($("#gauche")); //Créé les deux raquettes
let raquetteDroite=new Raquette($("#droite"));


setInterval(function() //Créé une fonction qui s'exécute toute les 10 millisecondes (le 10 à la fin)
{
    //Appelle des classes correspondant aux objets et de leur fonction
    balle.mouvementetrebond();

    raquetteGauche.deplacement();
    
    raquetteDroite.deplacement();
}, 10);

window.addEventListener("keydown", function (event) {
    if (event.defaultPrevented) {
        return
    }
    event.preventDefault();
    if (event.key === "z") {
        raquetteGauche.monter();
    }
    if (event.key === "s") {
        raquetteGauche.descendre();
    }
    if (event.key === "-") {
        raquetteDroite.monter();
    }
    if (event.key === "+") {
        raquetteDroite.descendre();
    }
    event.preventDefault();
}, true);
window.addEventListener("keyup", function (event) {
    if (event.defaultPrevented) {
        return
    }
    event.preventDefault();
    if (event.key === "z" || event.key === "s") {
        raquetteGauche.arret();
    }
    if (event.key === "-" || event.key === "+") {
        raquetteDroite.arret();
    }
}, true);