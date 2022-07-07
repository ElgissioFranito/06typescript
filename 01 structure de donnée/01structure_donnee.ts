// ************************** Tableau *************************
// de facon automatique (non recommandé)

let solaitra1 = ["rakoto", "liza"];             // solaitra est un tableau de type "number"
solaitra1 = ["rabe", "soazy", "kotofetsy"];
// solaitra1 = [4, 10];                              // imposible car solaitra1 ne peut que contenir des string


let solaitra2 = ["rakoto", 25];                 // solaitra2 est un tableau de type "string | number" (string OU number)
solaitra2 = [5478, "Vazahabe"];
// solaitra2 = [true];                             // impossible (type "string | number")


let solaitra3 = ["rakoto", 25, true];                 // solaitra2 est un tableau de type "string | number | boolean"
solaitra3 = [5478, "Vazahabe"];
solaitra3 = [false];


// de facon explicite (recommandé)
let sola1: string[];
let sola2: (string | number)[];
let sola3: (string | number | boolean);
let sola4: any[];

// Rappel tableau vide solaitry= []
let solaitry: string[] = [];                    // tableau vide de "string"


// ********************** Objet **************************
// type inference 
let user = {
    anara: "Jao",
    tao: 55,
    majeur: true
}

// type Explicit
let utilisateur: { anara: string; tao: number; majeur: boolean } = {
    anara: "Feno",
    tao: 20,
    majeur: true
}


