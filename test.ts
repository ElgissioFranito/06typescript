// *********  installation typescript  ************* //
// npm install -g typescript

// *********  voir la version ***************** //
// tsc -v

// *********  compiler un fichier .ts *********** //
// tsc nom_du_fichier.ts

// *********  choisir un cible de sortie ******** // (par defaut ES3)
// tsc nom_du_fichier.ts --target ES5




// HelloWorld 
function miarahaba(olona) {
    return console.log("miarahaba anao izahay " + olona);
}
miarahaba('Elgissio');


// Declarer une variable => nomVariable : typeVariable = valeur;
var ninona: any;                            // any : nimport_quel_type

var anarana: string = 'Superman';           // string : type chaine de caractere

var pointDeVie: number = 1000;              // number : type nombre

var misidina: boolean = true;               // boolean : type booléen



// // ma propre type variable (ex: Mafibe)
// var ianao: Mafibe = new Mafibe(anarana, pointDeVie, misidina);



// // les fonctions
// function creatHeros(anarana: string, pointDeVie?: number): Mafibe { // le type du return
//     var unHeros = new Mafibe();                  // Mafibe : notre propre type (que nous n'avons pas enocre créer)
//     unHeros.anarana = anarana;

//     if(pointDeVie) {                             // pointDeVie? (avec un ? dans la parametre de la fonction) est un parametre facultatif
//        unHeros.pointDeVie = pointDeVie;
//     }

//     return unHeros;                             // unHeros est de type Mafibe
// }

class Mafibe {

}