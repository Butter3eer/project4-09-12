export function veletlenTomb(elemszam) {
    let t = [];
    for (let i = 0; i < elemszam; i++) {
        t.push(Math.random());
    }
    return t;
}

export function valogat(tomb, ertek) {
    let eredmeny = [];

    for (let elem of tomb){
        if (elem > ertek) {
            eredmeny.push(elem);
        }
    }

    return eredmeny;
} 