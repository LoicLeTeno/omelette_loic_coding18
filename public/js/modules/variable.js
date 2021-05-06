// OBJECT : personne
    // export
export {paul};

let paul = {
    nom : "Paul",
    lieu : "maison",

    argent : 500,

    mainDroite : [],
    du_coup_mainGauche : [],

    seDeplacer(lieux) {

        this.lieu = lieux.nom;

    }, //(lieu)

    payerArticle(article) {}, // (article)

    couper(ingredients, outil) {

        ingredients.etat = outil.action;

    } // (ingredient, outil) && // couper légumes avec COUTEAU
}


// OBJECT : lieux
    // export
export {maison, epicerie};

let maison = {
    nom : 'maison',

    personnes : [] // => qui sera un tableau de personnes présentes dans la maison
}

let epicerie = {
    nom: "epicerie",

    personnes : [],
    paniers : [  // Les "ingrédients" créés juste au dessus contenus dans un tableau.
        {
            nom : "panier",
            contenue : []
        },

        {
            nom : "panier",
            contenue : []
        },

        {
            nom : "panier",
            contenue : []
        }
    ]
}


// OBJECT : outils
    // export
export {couteau, poele, bol};

let couteau = {
    nom : "Couteau",
    action : "coupé",
}

let poele = {
    contenue : [],

// après 4 secondes, met l'état 'cuit' à this.contenu[0]. On peut faire ça avec la fonction setTimeout(()=> {}, 4000)
    cuir() {
        setTimeout(() => {this.contenu[0].etat = "cuit";}, 4000)
    }
}

let bol = {
    contenu : [],

    melange(nomMelange) {
        newMelange = nomMelange.nom;
        nomMelange.etat = "pas cuit";

        this.contenu.push(newMelange);
    }
}


// VARIABLES : produits
    // import
    import {Ingredients} from './class';
    // export
    export {oignon, oeuf, epice, fromage};

let oignon = new Ingredients("oignon", "entier", 10);
let oeuf = new Ingredients("oeuf", "entier", 20);
let epice = new Ingredients("epice", "moulu", 30);
let fromage = new Ingredients("fromage", "entier", 40);