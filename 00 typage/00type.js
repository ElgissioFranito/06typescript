// appliquer les types (02 facons)
// ==> Type Inference 
// ==> Explicit Type
// **********  type inference (automatique) ***************
var myVariable; // myVariable est de type "any" (par defaut)
myVariable = "rakoto"; // on peut lui donner n'import quoi comme valleur
myVariable = 22;
myVariable = true;
var taona = 23; // taona est de type "number"
taona = 55; // on ne peut que lui affecter des nombres
// taona = "Rakoto"                  // C pas possible en TS
var fiantso = "Rabe"; // fiantso est de type string
fiantso = "55"; // "55" est un chaine, donc possible 
// fiantso = true;                   // pas possible
// ************ explicit type (manuel) ******************
var a; // si on ne specifie pas " let a; ", le type prend "any" par defaut
var b;
var c;
var d;
// On peyt aussi faire ceci
var myNumber = 12; // mais c est la meme que "myNumber = 12" paske le compilateur sait deja ke c'est de type number
