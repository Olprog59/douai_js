class Mammifere {
    constructor(nom, taille) {
        this.nom = nom;
        this.taille = taille;
    }
}

class Homme extends Mammifere {
    constructor(nom, taille) {
        super(nom, taille);
    }

    conduire() {
        return "L'Homme conduit!!"
    }
}

class Singe extends Mammifere {
    constructor(nom, taille) {
        super(nom, taille);
    }
}

console.log(new Singe("singe", 150));
console.log(new Homme("homme", 170));
