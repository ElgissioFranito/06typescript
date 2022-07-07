// Les types exclusifs à TS (Enums et Tuples)
// n'existent pas dans JS (mais existent en java, c++)
// ENUM : collection des valeurs qui ont des liens entre elles (ex: jour de la semaine)
// TUPLE : similair au array mais ne peut cotenir qu'une valeur par type spécifié
// ENUM 
var Semaine;
(function (Semaine) {
    Semaine[Semaine["Lundi"] = 1] = "Lundi";
    Semaine[Semaine["Mardi"] = 2] = "Mardi";
    Semaine[Semaine["Mercredi"] = 3] = "Mercredi"; // on peut mettre mardi=45 et mercredi sera autoùatique 46 
})(Semaine || (Semaine = {}));
console.log(Semaine[1]);
console.log(Semaine[2]);
console.log(Semaine[3]);
// TUPLE 
var identity = ["rasoa", 56];
console.log(identity);
var identity2 = ["rasoa", 56, "Bema"];
console.log(identity2);
