// *********************** les fonctions ************************
// Le type void :
//      absence de type dans une fonction

function bonjour(nom: string): void {
    console.log("salama " + nom);
}
bonjour("Bema");

function addition(a: number, b: number): number {
    return a + b;
}
console.log(addition(10, 6));

