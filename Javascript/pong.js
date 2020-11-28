

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
    if (event.key === "a") {
        raquetteGauche.monter();
    }
    if (event.key === "q") {
        raquetteGauche.descendre();
    }
    if (event.key === "p") {
        raquetteDroite.monter();
    }
    if (event.key === "m") {
        raquetteDroite.descendre();
    }
    event.preventDefault();
}, true);
window.addEventListener("keyup", function (event) {
    if (event.defaultPrevented) {
        return
    }
    event.preventDefault();
    if (event.key === "a" || event.key === "q") {
        raquetteGauche.arret();
    }
    if (event.key === "p" || event.key === "m") {
        raquetteDroite.arret();
    }
}, true);