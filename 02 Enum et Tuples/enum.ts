// Les types exclusifs à TS (Enums et Tuples)
// n'existent pas dans JS (mais existent en java, c++)

// ENUM : collection des valeurs qui ont des liens entre elles (ex: jour de la semaine)
// TUPLE : similair au array mais ne peut cotenir qu'une valeur par type spécifié

// ENUM 
enum Semaine {                      // commence tjrs par un maj
    Lundi = 1,                      // indice commence par 1 (par defaut 0)
    Mardi,                          // indice 2
    Mercredi                        // on peut mettre mardi=45 et mercredi sera autoùatique 46 
}

console.log(Semaine[1]);
console.log(Semaine[2]);
console.log(Semaine[3]);


// TUPLE 
let identity: [string, number] = ["rasoa", 56];
console.log(identity);

let identity2: [string, number, string] = ["rasoa", 56, "Bema"];
console.log(identity2);

