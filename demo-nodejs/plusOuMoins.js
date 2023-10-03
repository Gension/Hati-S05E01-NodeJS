// Le jeu de la fouchette ou du plus ou moins (ou encore le juste prix)
// Vous allez écrire un mini jeu ou le programme choisis un chiffre entre 0 et 100
// Demander à l'utilisateur de choisir un chiffre et lui indiquer si c'est plus ou moins et arrêter s'il trouve la bonne réponse

// rl.question ou rl.on('line', {...}) ? A vous de voir

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const min = 0, max = 100;

// Toujours pareil on importe le module readline et on l'initialise 

const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min; // Choisir un nombre aléatoire entre min et max
}

const checkNumber = (num, guess) => {
    // retourne 'plus' ou 'moins' ou 'gagné'
    if(num > guess) {
        return 'plus';
    } else if(num < guess) {
        return 'moins'
    } else {
        return 'gagné';
    }
}

let chosenNumber = getRandomNumber(min, max);
console.log("Bienvenue dans le juste de prix !")
console.log(`J'ai choisis un nombre entre ${min} et ${max} ! A vous de le trouver`);

// technique 1) -- l'event line de readline

// rl.on('line', (input) => {
//     // 1) Verifier que l'utilisateur a bien saisin un nombre
//     if(isNaN(input)) {
//         console.log('Veuillez saisir un nombre');
//         return;
//     }

//     const status = checkNumber(chosenNumber, parseInt(input));

//     switch(status) {
//         case 'plus':
//             console.log(`C'est plus !`);
//             break;
//         case 'moins':
//             console.log(`C'est moins !`);
//             break;
//         default:
//             console.log(`Bravo, vous avez trouvé le nombre !`);
//             rl.close();
//     }
// });

// technique 2) -- la récursivité

const guessNumber = () => {
    rl.question('Alors ? ', (input) => {
        if(isNaN(input)) {
            console.log('Veuillez saisir un nombre');
            guessNumber();
            return;
        }

        const status = checkNumber(chosenNumber, parseInt(input));

        switch(status) {
            case 'plus':
                console.log(`C'est plus !`);
                guessNumber();
                break;
            case 'moins':
                console.log(`C'est moins !`);
                guessNumber();
                break;
            default:
                console.log(`Bravo, vous avez trouvé le nombre !`);
                rl.close();
        }
    });
}

guessNumber();