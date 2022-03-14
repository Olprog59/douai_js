let t = [12, 34, "coucou", false];
console.log(t)
let [prenom, nom, age] = ["sam", "mich", 40];
console.log(nom, prenom, age);
let t1 = new Array(3);

// ajouter dans un tableau
t.push("ajout");
console.log(t);

// suppression du dernier élément
t.pop();
console.log(t);

// suppression premier élément
t.shift();
console.log(t);

// insertion en début de tableau
t.unshift("samuel");
console.log(t);

// suppression avec un index
t.splice(2, 1);
console.log(t);

// copie de tableau
let t2 = [...t];
let t3 = t.slice();
console.log(t2, t3);

t.push(12, 56, 98, -34, -27, 0);
console.log(t);

// for (let i = 0; i < t.length; i++) {
//     if (typeof t[i] !== 'number'){
//         t.splice(i, 1);
//     }
// }
// console.log(t);

// t = t.filter(value => (typeof value === 'number'));
// console.log(t);

// t.forEach((value, index, arr) => {
//     if (typeof value !== 'number') {
//         arr.splice(index, 1);
//     }
// });

let t5 = t.map((value) => {
    if (typeof value === 'number') {
        return value ** 3;
    }
});

console.log(t5);
