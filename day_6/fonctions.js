let nbr = 10;
let str = "Chaine de caractères";
let tab = [12, 35, 89, 9, 6];

function increment(n) {
    n++;
    return n;
}

// n copy value nbr => 10
nbr = increment(nbr);
console.log(nbr);

function upper(chaine) {
    return chaine.toUpperCase();
}

str = upper(str);
console.log(str);

function addNumber(liste, num) {
    liste.push(num);
}

addNumber(tab, 123456789);
console.log(tab);

function tri(liste) {
    let t = [...liste];
    t.sort();
    return t;
}

tab = tri(tab);
console.log(tab);

function es5() {
    console.log(this);
    return this;
}

const es6 = () => {
    console.log(this);
    return this;
}

const es6_1 = () => "Fonction es6 sans mes accolades!!";
console.log(es6_1());
const es6_2 = num => "Fonction es6 num " + num;
console.log(es6_2(10));
const es6_3 = (num, str) => "Fonction es6 num " + num + " et str " + str;
console.log(es6_3(10, "sam"));
const es6_4 = () => {
    return "Fonction es6 avec mes accolades!!";
};
console.log(es6_4());
// es5();
// es6();

function returnMultiple(film) {
    // Marry-me.1080p-VOSTFR.samsam.mkv
    let lastDot = film.lastIndexOf('.');
    let name = film.substring(0, lastDot);
    let extension = film.substring(lastDot);
    return [name, extension];
}

let [nom, ext] = returnMultiple('Marry-me.1080p-VOSTFR.samsam.mkv');
console.log(nom);
console.log(ext);

function returnMultipleObj(film) {
    // Marry-me.1080p-VOSTFR.samsam.mkv
    let lastDot = film.lastIndexOf('.');
    let name = film.substring(0, lastDot);
    let extension = film.substring(lastDot);
    return {nom: name, ext: extension, len: film.length};
}

let {len} = returnMultipleObj('Marry-me.1080p-VOSTFR.samsam.mkv');
console.log(len);
