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
    couper() {} // (ingredient, outil)
}


// OBJECT : lieux
    // export
export {};

let maison = {
    nom : 'maison',

    personnes : [] // => qui sera un tableau de personnes présentes dans la maison
}