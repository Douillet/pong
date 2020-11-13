

let terrain= new Terrain($("#terrain"));  //Créé le terrain

let balle= new Balle($("#balle"));        //Créé la balle

let raquetteGauche=new Raquette($("#gauche")); //Créé les deux raquettes
let raquetteDroite=new Raquette($("#droite"));


setInterval(function()
{
    //appel des classes correspondant aux objets et de leur fonction
    balle.mouvementetrebond();

    raquetteGauche.deplacement();
    
    raquetteDroite.deplacement();
}, 10);