// OBJECT : personne
    // export
export {paul};

let paul = {
    nom : "",
    lieu : "",

    argent : 0,

    mainDroite : [],
    du_coup_mainGauche : [],

    seDeplacer() {}, //(lieu)
    payerArticle() {}, // (article)
    couper() {} // (ingredient, outil) && // couper légumes avec COUTEAU
}


// OBJECT : lieux
    // export
export {maison};

let maison = {
    nom : 'maison',

    personnes : [] // => qui sera un tableau de personnes présentes dans la maison
}


// OBJECT : outils
    // export
export {couteau};

let couteau = {
    nom : "Couteau",
    action : "coupé",


}