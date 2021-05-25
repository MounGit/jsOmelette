import { personne } from "./objets.js";

class Lieu {
    constructor(nom, personnes) {
        this.nom = nom;
        this.personnes = personnes
    }
};

class Epicerie extends Lieu {
    constructor(nom, personnes, paniers, ingredients) {
        super(nom, personnes);
        this.paniers = paniers;
        this.ingredients = ingredients;
        this.methodePaniers = () => {
            let panierRandom = this.paniers[Math.floor(Math.random()*this.paniers.length)];
            // console.log(panierRandom);
            personne.mainDroite.push(panierRandom);
            // console.log(`contenu main droite ${personne.mainDroite}`)
            this.paniers.splice(this.paniers.indexOf(panierRandom, 1))
            console.log(`${personne.nom} prend un panier de ${this.nom}, le ${personne.mainDroite[0].nom}`)
            return true
        };
        this.methodeCourses = () => {
            this.ingredients.forEach(element => {
                personne.mainDroite[0].contenu.push(element);
                console.log(personne.mainDroite[0].contenu)
                console.log(`${personne.nom} a mis ${element.nom} dans son panier`)
            });
            // for (let i = 1; i < personne.mainDroite.length; i++){
            //     personne.mainDroite.panierRandom.contenu.push(i)
            //     console.log(personne.mainDroite.panierRandom)
           
            // }


            // console.log("test")
            // if(this.methodePaniers == true){
            //     console.log("test boucle")
            //     // while (this.ingredients.length>0) {
            //     //     personne.mainDroite.push(this.ingredients[0]);
            //     //     console.log(`${personne.nom} a mis ${this.ingredients[0]} dans son panier`);
            //     //     this.ingredients.splice(this.ingredients[0], 1);
                    
            //     // }
            // };
            // console.log("test")

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