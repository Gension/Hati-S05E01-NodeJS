const readline = require('readline');


// Je prépare l'interface pour pouvoir lire l'entrée utilisateur
const psy = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Bienvenue ! Asseyez-vous confortablement et parlez-moi de vous...");

const answers = [];

// a chaque ligne saisie par l'utilisateur, je l'ajoute à mon tableau answers
psy.on('line', (answer) => {
    answers.push(answer);
    console.log('Hmm... intéressant... continuez, je vous prie...');
}).on('close', () => {  // Quand la liaison clavier<->app est fermé (quand l'interface est cloturé)
    console.log('Merci de votre confiance, ça fera ' + answers.length * 5 + '€');
});

// je lance un compte a rebours de 20 secondes pour pouvoir terminer la seance
setTimeout(() => {
    console.log(`\nLa session est terminée.\nSi je résume, vous m'avez confié les informations suivantes :`);
    console.log(answers.join('\n')); // join va permettre de joindre tous les elements de mon tableau answers et il va les séparé d'un \n qui correspond à un retour à la ligne
    psy.close();
}, 20000);

