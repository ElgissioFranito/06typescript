"use strict";
// ******************* une interface *********************************
// est un contrat pour les objets
// permet aux objets de respecter un certain nombres de regles
// Creation d'objet
var client1 = {
    nom: "Rajesy",
    quartier: "Faravohitra",
    age: 25
};
function salut(qlqun) {
    console.log("Salama ianao ".concat(qlqun.nom, ". Ianao dia ").concat(qlqun.age, " taona"));
}
salut(client1);
