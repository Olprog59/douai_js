const gaufrier = new Object();
gaufrier.largeur = 20;
gaufrier.longueur = 15;
gaufrier.cuire = () => {
    console.log("cuisson");
}
console.log(gaufrier);
gaufrier.cuire();

function Table(largeur, longueur, hauteur) {
    this.largeur = largeur;
    this.longueur = longueur;
    this.hauteur = hauteur;
    this.materiau = "bois";

    this.jouer = () => {
        console.log("Je joue au Ping-Pong");
    }
}

const tableJeu = new Table(157, 274, 76);
tableJeu.materiau = "verre";
tableJeu.nbPied = 4;
delete tableJeu.materiau;
console.log(tableJeu);

const sam = {
    prenom: "samuel",
    nom: "michaux",
    age: 40,
    boire: () => {
        console.log("Je bois beaucoup ...... d'eau 🥹");
    }
};
console.log(sam);
sam.boire();

// ------------ ES 6 --------------
class Personne {
    constructor(prenom, nom, age) {
        this._prenom = prenom;
        this._nom = nom;
        this._age = age;
        this._taille = 180;
    }

    get prenom() {
        return this._prenom;
    }

    get nom() {
        return this._nom;
    }

    get age() {
        return this._age;
    }

    get taille() {
        return this._taille;
    }

    set taille(nbr) {
        this._taille = nbr;
    }

    manger() {
        console.log("je mange");
    }

    toString() {
        return `Je m'appelle ${this._prenom} ${this._nom}`;
    }
}

const antony = new Personne("antony", "coucke", 33);
antony.prenom = "ANTONY";
console.log(antony.prenom);
antony.taille = 170;
console.log(antony.taille);
antony.manger();
console.log(antony);

