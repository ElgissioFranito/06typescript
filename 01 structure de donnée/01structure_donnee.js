// ************************** Tableau *************************
// de facon automatique (non recommandé)
var solaitra1 = ["rakoto", "liza"]; // solaitra est un tableau de type "number"
solaitra1 = ["rabe", "soazy", "kotofetsy"];
// solaitra1 = [4, 10];                              // imposible car solaitra1 ne peut que contenir des string
var solaitra2 = ["rakoto", 25]; // solaitra2 est un tableau de type "string | number" (string OU number)
solaitra2 = [5478, "Vazahabe"];
// solaitra2 = [true];                             // impossible (type "string | number")
var solaitra3 = ["rakoto", 25, true]; // solaitra2 est un tableau de type "string | number | boolean"
solaitra3 = [5478, "Vazahabe"];
solaitra3 = [false];
// de facon explicite (recommandé)
var sola1;
var sola2;
var sola3;
var sola4;
// Rappel tableau vide solaitry= []
var solaitry = []; // tableau vide de "string"
// ********************** Objet **************************
// type inference 
var user = {
    anara: "Jao",
    tao: 55,
    majeur: true
};
// type Explicit
var utilisateur = {
    anara: "Feno",
    tao: 20,
    majeur: true
};
