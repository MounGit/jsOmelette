import { Epicerie, Lieu } from "./classes.js";

let personne = {
    nom: "Mouna",
    lieu: [this],
    argent: 50,
    mainDroite: [],
    mainGauche: [],
    seDeplacer(lieu) {
        lieu.personnes.push(this);
        this.lieu.splice(this.lieu.indexOf(this, 1));
        console.log(`${this.nom} est actuellement à ${lieu.nom}`);
    },
    payerArticle(article, lieu) {
        this.argent -= article.prix;
        lieu.caisse += article.prix;
        console.log(`${personne.nom} a payé ${article.nom}`);
        this.mainDroite.push(article);
        this.mainDroite[0].contenu.splice(this.mainDroite[0].contenu.indexOf(article, 1));
    },
    rendrePanier(lieu) {
        lieu.paniers.push(this.mainDroite[0])
        this.mainDroite.splice(0, 1);
    },
    remplirBol(ingredient, contenant) {
        contenant.contenu.push(ingredient);
        this.mainDroite.splice(this.mainDroite.indexOf(ingredient, 1));
        console.log(`${ingredient.nom} est dans le ${contenant.nom}`);;
    },
    couper(ingredient) {
        if (ingredient.etat == "entier") {
            ingredient.etat = "coupé"
            console.log(`${ingredient.nom} est ${ingredient.etat}`)
        } else {
            console.log(`${ingredient.nom} n'a pas besoin d'être coupé`)
        }
    },
    couteau(nom, action) {

    }
};

let maison = {
    nom: "la maison",
    personnes: [],

};

let poele = {
    nom: "poêle",
    contenu: [],
    cuire(melange){
        console.log(`l'${this.contenu[0].nom} est dans la ${this.nom} mais n'est ${this.contenu[0].etat}`)
        this.contenu.push(melange.contenu[0], melange.contenu[1], melange.contenu[2], melange.contenu[3]);
        melange.contenu.splice(0, melange.contenu.length);

        setTimeout(() => {
            this.contenu[0].etat = "cuite"
            console.log(`l'${this.contenu[0].nom} est ${this.contenu[0].etat} en 4 secondes parce que ma maison c'est un volcan`)
        }, 4000);

    },
};

let bol = {
    nom: "bol",
    contenu: [],
    melanger(nomMelange, etat) {
        let newMelange = {
            nom: nomMelange,
            etat: etat
        };
        poele.contenu.push(newMelange);
        console.log(`les ingrédients du ${this.nom} sont mélangés, c'est maintenant une ${nomMelange} qui n'est ${etat}`)
    }

};

let panier1 = {
    nom: "panier 1",
    contenu: [],
};
let panier2 = {
    nom: "panier 2",
    contenu: [],
};
let panier3 = {
    nom: "panier 3",
    contenu: [],
};
let panier4 = {
    nom: "panier 4",
    contenu: [],
};
let panier5 = {
    nom: "panier 5",
    contenu: [],
};

export { personne, maison, poele, bol, panier1, panier2, panier3, panier4, panier5 };