// Node fourmille de fonctionnalités additionnelles trèèèès pratiques
// certaines sont pré-installées, la plupart est disponible en ligne, on verra le principe très bientôt...
// mais elles ont toutes une chose en commun : elles alourdissent le programme :-/
// une solution toute simple a été trouvée : la fonction require

const os = require('os'); 
// console.log(os);
// ouhla, il en a dans le ventre (°o°) 
// GIYF : Node os
// https://nodejs.org/docs/latest-v18.x/api/index.html -> Doc de ref de base 

// console.log(os.cpus());
// console.log(os.platform());
// console.log(os.freemem());

// EXO 1 : Afficher, dans la console, le pourcentage de mémoire libre sur votre système, arrondi à l'entier le plus proche

// memoire libre / memoire totale * 100
let memUsage = os.freemem() / os.totalmem();
console.log(memUsage);

console.log(Math.round(memUsage * 100) + '% de mémoire libre');

// EXO 2 : si ce pourcentage est inférieur à 15%, afficher le chiffre sous forme d'avertissement, si < 4%, afficher sous forme d'erreur

if(memUsage < 0.04) {
    console.error('Attention, vous avez moins de 4% de mémoire libre');
} else if(memUsage < 0.15) {
    console.warn('Attention, vous avez moins de 15% de mémoire libre');
}

// EXO 3 : Afficher le temps depuis lequel la machine est allumé sous la forme Xh Ym Zs.

const uptime = os.uptime();

console.log(uptime);

let hours = uptime / 3600;
let minutes = (uptime % 3600) / 60;
let seconds = uptime % 60;

console.log(`${Math.floor(hours)}h ${Math.floor(minutes)}m ${Math.floor(seconds)}s`);
