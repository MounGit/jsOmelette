import { Epicerie, Lieu } from "./classes.js";

let personne ={
    nom : "Mouna",
    lieu : [this],
    argent : 50, 
    mainDroite : [],
    mainGauche : [], 
    seDeplacer(lieu){
        lieu.personnes.push(this);
        this.lieu.splice(this.lieu.indexOf(this, 1));
        console.log(`${this.nom} est actuellement à ${lieu.nom}`);
        // console.log(this.lieu);
        // console.log(lieu.personnes);
    },
    payerArticle(article, lieu){
        this.argent -= article.prix;
        console.log(this.argent);
        lieu.caisse += article.prix;
        console.log(lieu.caisse);
        console.log(`${personne.nom} a payé ${article.nom}`);
        this.mainDroite.push(article);
        this.mainDroite[0].contenu.splice(this.mainDroite[0].contenu.indexOf(article, 1));
        // console.log(this.mainDroite);
        // console.log(this.mainDroite[0].contenu);
    },
    couper(ingredient, outils){

    },
    couteau(nom, action){
        
    }
};

let maison = {
    nom : "la maison",
    personnes : [],
    
};

let poele = {
    contenu : [],
    cuire(){

    },
};

let bol = {
    contenu : [],
    melanger(nomMelange){
        let NewMelange = {
            etat:"",
        }
    },
};

let panier1 = {
    nom: "panier 1",
    contenu :[],
};
let panier2 = {
    nom: "panier 2",
    contenu :[],
};
let panier3 = {
    nom: "panier 3",
    contenu :[],
};
let panier4 = {
    nom: "panier 4",
    contenu :[],
};
let panier5 = {
    nom: "panier 5",
    contenu :[],
};

export {personne, maison, poele, bol, panier1, panier2, panier3, panier4, panier5};