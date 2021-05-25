import { personne } from "./objets.js";

class Lieu {
    constructor(nom, personnes) {
        this.nom = nom;
        this.personnes = personnes
    }
};

class Epicerie extends Lieu {
    constructor(nom, personnes, paniers, ingredients, caisse) {
        super(nom, personnes);
        this.paniers = paniers;
        this.ingredients = ingredients;
        this.caisse = caisse;
        this.methodePaniers = () => {
            let panierRandom = this.paniers[Math.floor(Math.random()*this.paniers.length)];
            personne.mainDroite.push(panierRandom);
            this.paniers.splice(this.paniers.indexOf(panierRandom, 1))
            console.log(`${personne.nom} prend un panier de ${this.nom}, le ${personne.mainDroite[0].nom}`)
            return true
        };
        this.methodeCourses = () => {
            this.ingredients.forEach(element => {
                personne.mainDroite[0].contenu.push(element);
                console.log(`${personne.nom} a mis ${element.nom} dans son panier`)
            });
        };
    }

};

class Igredients {
    constructor(nom, etat, prix) {
        this.nom = nom;
        this.etat = etat;
        this.prix = prix;
    };
};

export { Lieu, Epicerie, Igredients };