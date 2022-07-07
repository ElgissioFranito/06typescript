// le typeof: est une fonctionalité qui recupere le type d'un variable
// le type "never" (qu'on va rarement utiliser):
//      qlqch qui n'arrive jamais
//      une fonction qui renvoie jamais
//      une fonction qui envoie tjrs "throws" 


let nbr = 1;                                 // type inference (auto)
//verifier le type de variable
if (typeof (nbr) === "number") {             // anaty guillemet "number"
    console.log("nbr est un nombre");
}

function testa(a): boolean {                 // "a" est de type any automatiquement   // d'apres le testa "a : string | number"
    if (typeof (a) === "string") {
        console.log("A dia string!");
        return true
    } else if (typeof (a) === "number") {
        console.log("A dia tsy string!");
        return false
    }
    // on peut faire un "else" mais on va renvoyer un erreur
    return fail("A dia sady tsy string no sady tsy number"); //aza gaga fa erreur niforonina mits io
}


function fail(message: string): never {
    throw new Error(message);
}


testa(true);
