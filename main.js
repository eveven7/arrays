//Pirma
console.log("Pirma uzd---------------------");

let word = "Labas";

for (let i = 0; i < 10; i++) {
    console.log("Labas");
}

//Antra
console.log("Antra uzd---------------------");
for (let i = 0; i < 10; i++) {
    console.log(i);

}

//Trecia
console.log("Trecia uzd---------------------");

let arr2d = [["Alavijas", "Roze", "Ramune"], ["Tulpe", "Egle", "Ruta"], ["Meta", "Palme", "Jazminas"]];


//Ketvirta
console.log("Ketvirta uzd---------------------");

for (let i = 0; i < arr2d.length; i++) {
    for (let a = 0; a < arr2d[i].length; a++) {
        console.log(arr2d[i][a]);
    }
}

//Penkta
console.log("Penkta uzd---------------------");

for (let i = 0; i < arr2d.length; i++) {
    for (let a = 0; a < arr2d[i].length; a++) {
        console.log(arr2d[i][a]);
    }
}

//Sesta
console.log("Sesta uzd---------------------");

for (let i = 10; i <= 50; i += 2) {
    console.log(i);
}


//Septinta
console.log("Septinta uzd---------------------");

let nieko = "";
for (let i = 10; i < 50; i += 2) {
    if (i == 10 || i == 20 || i == 30 || i == 40 || i == 50) { continue; }
    console.log(nieko + i);
}


//Astunta
console.log("Astunta uzd---------------------");

for (let i = 0; i <= 20; i++) {
    sum = 0;
    if (i += 2) { continue; }
    sum++;

}

console.log(sum + " ");

//Devinta
console.log("Devinta uzd---------------------");

sum = 0;
a = 0;
console.log(arr2d);
for (let i = 0; i < arr2d.length; i++) {
    a = arr2d[i].length;
    if (a < 5 || a > 7) {
        sum++;

    }
}
console.log(sum);

//SUNKESNI
console.log("----------SUNKESNI-----------");
console.log("Pirma uzd---------------------");




let suma = 0;
let tekstas = "";
for (let i = 0; i < 300; i++) {
    let eile = Math.round(Math.random() * 300);
    if (eile > 150) {
        suma++;
    }
    if (eile > 275) {
        tekstas += "[" + eile + "] ";
    } else {
        tekstas += eile + " ";
    }
}
console.log(tekstas);
console.log("Didesni, nei 150 = " + suma);

console.log("antra uzd---------------------");

let text = "";

for (let i = 77; i < 3001; i++) {
    text += i + ",";
}
console.log(text.slice(0, -1));

console.log("trecia uzd---------------------");


for (let a = 0; a < 10; a++) {
    let arr = "";
    for (let b = 0; b < 10; b++) {
        arr += " * ";
    }
    console.log(arr);
}



console.log("penkta uzd---------------------");
console.log("a---------------------");

// // // Iskritus Herbui sustoja
console.log("  Iskritus herbui  ");
let moneta = Math.round(Math.random() * 1);
while (moneta === 0) {
    if (moneta === 0) {
        console.log("H");
    } else {
        console.log("S");
    }
    break;
}


// 3 kartus iskritus herbui
console.log("  3 kartus iskritus herbui   ");
let count = 0;
while (true) {
    let coin = Math.round(Math.random());
    if (coin === 0) {
        count++;
        console.log("H");
    } else {
        console.log("S");
    }

    if (count == 3) {
        break;
    }
}

console.log("c---------------------");

let count2 = 0;
while (true) {
    let coin = Math.round(Math.random());
    if (coin === 0) {
        count2++;
        console.log("H");
    } else {
        console.log("S");
    }
    if (count2 == 3) {
        break;
    }

}


console.log("sesta uzd---------------------");


let petrasSum = 0;
let kazysSum = 0;

while (true) {
    let petras = 10 + Math.round(Math.random() * 10);
    let kazys = 5 + Math.round(Math.random() * 20);
    petrasSum += petras;
    kazysSum += kazys;

    if (petrasSum >= 222 || kazysSum >= 222) {
        break;
    }
}


console.log(petrasSum, kazysSum);

if (petrasSum > kazysSum) {
    console.log("Petras daugiau");
} else {
    console.log("Kazys daugiau");
}

console.log("astunta uzd---------------------");

let vinies_ilgis = 85;
let smugis_nuo = 5;
let smugis_iki = 20;
let viniu_kiekis = 5;

i = 1;

while (i <= viniu_kiekis) {

    let smugiai = 0;
    let ikalta = 0;

    while (ikalta <= 85) {
        let kalimas = Math.round(5 + Math.random() * 15);
        ikalta += kalimas;
        smugiai++;
        console.log(ikalta);
    }

    console.log(" vinis ikalta" + smugiai + " smugiai");

    console.log("--------B---------");


    let smugiai1 = 0;
    let ikalta2 = 0;
    while (ikalta2 <= 85) {
        let smugiss = Math.round(20 + Math.random() * 10);
        if (smugiss !== 0) {
            ikalta2 += smugiss;
            smugiai1++;
            console.log(ikalta2);
        }
    }
    console.log("Dideliu smugiu reikia: " + smugiai1);
}