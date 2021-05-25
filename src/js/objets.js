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
        // console.log(this.lieu);
        // console.log(lieu.personnes);
    },
    payerArticle(article, lieu) {
        this.argent -= article.prix;
        // console.log(this.argent);
        lieu.caisse += article.prix;
        // console.log(lieu.caisse);
        console.log(`${personne.nom} a payé ${article.nom}`);
        this.mainDroite.push(article);
        this.mainDroite[0].contenu.splice(this.mainDroite[0].contenu.indexOf(article, 1));
        // console.log(this.mainDroite);
        // console.log(this.mainDroite[0].contenu);
    },
    rendrePanier(lieu) {
        lieu.paniers.push(this.mainDroite[0])
        this.mainDroite.splice(0, 1);
        // console.log(this.mainDroite);
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
    contenu: [],
    etat:"pas cuite", 
    cuire(melange) {
        console.log(`l'${melange.etat} est dans la poële mais n'est ${this.etat}`)
        this.contenu.push(melange.contenu[0], melange.contenu[1], melange.contenu[2], melange.contenu[3]);
        melange.contenu.splice(0, melange.contenu.length);
        // console.log(melange)
        // console.log(this.contenu)
        this.etat = "cuite"
        console.log(`l'${melange.etat} est ${this.etat}`)
    },
};

let bol = {
    nom: "bol",
    contenu: [],
    etat : "",
    melanger(nomMelange){
        this.contenu = nomMelange.reverse();
        this.etat = "omelette";
        console.log(`les ingrédients du ${this.nom} sont mélangés, c'est maintenant une ${this.etat}`);
    }
    
    // melanger(newMelange){
    //     let i;
    //     let j;
    //     let k;
    //     console.log(this.contenu)
    //     for(i = newMelange.lenght - 1; i > 0; i--){
    //             j = Math.floor(Math.random()*(i + 1));
    //             k = newMelange[i];
    //             newMelange[i] = newMelange[j];
    //             newMelange[j] = k;
    //             console.log(newMelange);
    //         }
    //         return newMelange
            
    //         // this.contenu.reverse()
    //         etat: "omelette";
    //     }

};

// function randomize(tab) {
//     var i, j, tmp;
//     for (i = tab.length - 1; i > 0; i--) {
//         j = Math.floor(Math.random() * (i + 1));
//         tmp = tab[i];
//         tab[i] = tab[j];
//         tab[j] = tmp;
//     }
//     return tab;
// }

// var tab = [9, 4, 12, 3, 10];
// tab = randomize(tab);
// console.log(tab);
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