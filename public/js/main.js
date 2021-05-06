import * as lesVariables from './modules/variable.js'; 

/**** DEBUT DE L'OMELETTE ****/

    // ##   Déplacement à la maison
lesVariables.paul.seDeplacer(lesVariables.maison);
console.log(`${lesVariables.paul.nom} est actuellement à la ${lesVariables.paul.lieu}`);


    // ##   Déplacement à l'épicerie
lesVariables.paul.seDeplacer(lesVariables.epicerie);


    // ##   Prise du panier
lesVariables.paul.mainDroite.push(lesVariables.epicerie.paniers[0])
lesVariables.epicerie.paniers.splice(0, 1)
console.log(`${lesVariables.paul.nom} a pris un ${lesVariables.epicerie.paniers[0].nom}`);


    // ##   Prise des ingrédients
lesVariables.epicerie.contenue.forEach(e => {

    // lesVariables.paul.mainDroite[[].contenue.push(e)];      NUL
    lesVariables.paul.mainDroite[0].contenue.push(e);
    console.log(e);

});

    // ##   Achat des articles
lesVariables.epicerie.contenue.forEach(e => {
    lesVariables.paul.payerArticle(e);
});
console.log(lesVariables.paul.argent);


    // ##  Rentre à la maison
lesVariables.paul.seDeplacer(lesVariables.maison);


    // ##  Mets ingrédients dans le bol
    // NNNNNNNNNUUUUUUUUUUUUULLLLLLLLL
// lesVariables.paul.mainDroite[0].contenue.forEach(e => {
//     lesVariables.bol.contenu.push(e);
//     lesVariables.paul.mainDroite[0].contenue.splice(e, 1);
//     e = e - 1;
// });  
    // NNNNNNNNNNNUUUUUUULLLLLLLLLL

for (let i = 0; i < lesVariables.paul.mainDroite[0].contenue.length; i++) {

    lesVariables.bol.contenu.push(lesVariables.paul.mainDroite[0].contenue[i]);
    lesVariables.paul.mainDroite[0].contenue.splice(lesVariables.paul.mainDroite[0].contenue[i], 1);

    i = i - 1;

    console.log(lesVariables.bol.contenu);
};


    // ##   Retour à l'épicerie
lesVariables.paul.seDeplacer(lesVariables.epicerie);
console.log(`${lesVariables.paul.nom} rentre à la ${lesVariables.paul.lieu}`);

lesVariables.epicerie.paniers.push(lesVariables.paul.mainDroite[0]);
lesVariables.paul.mainDroite.splice(0, 1);

console.log(lesVariables.paul);
console.log(lesVariables.epicerie.paniers);


    // ##   Retour à la maison
lesVariables.paul.seDeplacer(lesVariables.maison);
console.log(`${lesVariables.paul.nom} rentre à la ${lesVariables.paul.lieu}`);


    // ##  Vérifier le bol et couper ce qui doit etre couper
console.log(lesVariables.bol.contenu);

lesVariables.bol.contenu.forEach(e => {
    if (e.etat == "entier") {

        lesVariables.paul.couper(e, lesVariables.couteau)

    } else {
        
    }
});


    // ##   Mélange du bol
lesVariables.bol.contenu = [];
lesVariables.bol.melange("omelette");
console.log(lesVariables.bol);


    // ## vider le bol dans la poele
lesVariables.poele.contenu.push(lesVariables.bol.contenu[0]);
lesVariables.bol.contenu.splice(0, 1);
console.log(lesVariables.poele);


    // ## cuir l'omelette
lesVariables.poele.cuir();
console.log(lesVariables.poele);

alert("finish")