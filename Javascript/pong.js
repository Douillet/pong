

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
    if (event.defaultPrevented) { return}
    console.log("La touche '"+event.key+ "' a été enfoncée")
    event.preventDefault();
}, true);