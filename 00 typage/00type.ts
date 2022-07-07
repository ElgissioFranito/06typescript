// appliquer les types (02 facons)
// ==> Type Inference 
// ==> Explicit Type


// **********  type inference (automatique) ***************
let myVariable;                 // myVariable est de type "any" (par defaut)
myVariable = "rakoto";          // on peut lui donner n'import quoi comme valleur
myVariable = 22;
myVariable = true;

let taona = 23;                   // taona est de type "number"
taona = 55;                       // on ne peut que lui affecter des nombres
// taona = "Rakoto"                  // C pas possible en TS

let fiantso = "Rabe";             // fiantso est de type string
fiantso = "55";                   // "55" est un chaine, donc possible 
// fiantso = true;                   // pas possible


// ************ explicit type (manuel) ******************
let a: any;                         // si on ne specifie pas " let a; ", le type prend "any" par defaut
let b: number;
let c: string;
let d: boolean;

// On peyt aussi faire ceci
let myNumber: number = 12;      // mais c est la meme que "myNumber = 12" paske le compilateur sait deja ke c'est de type number



