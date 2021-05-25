class Lieu{
    constructor(nom, personnes){
        this.nom = nom;
        this.personnes = personnes
    }
};

class  Epicerie extends Lieu{
    constructor(nom, personnes, paniers, ingredients){
        super(nom, personnes);
        this.paniers = paniers;
        this.ingredients = ingredients;
    }

};

class Igredients{
    constructor(nom, etat, prix){
        this.nom = nom;
        this.etat = etat;
        this.prix = prix;
    };
};

