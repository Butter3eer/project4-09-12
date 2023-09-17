import * as tombok from './tombok.js';

let tombElso = tombok.veletlenTomb(15);
console.log(tombElso);

let kivalogatott = tombok.valogat(tombElso, 0.5);
console.log(kivalogatott);

let sajatTomb = tombok.valogat([-5, 5, 66, 0.66, -0, 5, 21], 20);
console.log(sajatTomb);