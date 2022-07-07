// creer notre propre type
// ex:...

const personne: {
    anarana: string,
    taona: number,
    majeur: boolean,
    fialamboly: string[]
} = {
    anarana: "Zety",
    taona: 44,
    majeur: true,
    fialamboly: ["milomano", "baolina", "mamakiteny"]
}

const personne2: {
    anarana: string,
    taona: number,
    majeur: boolean,
    fialamboly: string[]
} = {
    anarana: "Rabe",
    taona: 12,
    majeur: false,
    fialamboly: ["baolina", "miady"]
}

// on a les memes types d'objet pour ces deux variables
// pour eviter la repetition, on peut creer un seul type

type mombamomba = {
    anarana: string,
    taona: number,
    majeur: boolean,
    fialamboly: string[]
}

// on peut utiliser le type "mombamomba" dans le code
const personne3: mombamomba = {
    anarana: "Rabera",
    taona: 69,
    majeur: true,
    fialamboly: ["manjengy", "lamarche"]
}

const personne4: mombamomba = {
    anarana: "Dera",
    taona: 23,
    majeur: true,
    fialamboly: ["manopy amboa", "mandeha disco"]
}

