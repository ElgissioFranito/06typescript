// ******************* une interface *********************************
// est un contrat pour les objets
// permet aux objets de respecter un certain nombres de regles


// ************ Interface VS type personalysé*******************************
// interface :                    |           Type:
// interface Personne {           |              type Personne = {
//      nom: string;              |                  nom: string;
// };                             |              };
//                                |

// **************************************************************************

// MON PREMIER INTERFACE:
// Creer une interface avec 02 regles
// 02 proprieté de type string et 01 de type number
// creer un objet avec cette interface comme contrat


// creation d'un interface
interface Personne {
    nom: string;
    quartier: string;
    age: number;
}

// Creation d'objet
const client1: Personne = {                     // il y a un "egal" affectation d'un objet
    nom: "Rajesy",
    quartier: "Faravohitra",
    age: 25
};


function salut(qlqun: Personne) {
    console.log(`Salama ianao ${qlqun.nom}. Ianao dia ${qlqun.age} taona`);

}

salut(client1);