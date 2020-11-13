class Terrain
{
    constructor($element)
    {
        //Appelle les varaibles du fichier CSS
        this.$element=$element;
        this.largeur=$element.width();
        this.hauteur=$element.height();
    }
}