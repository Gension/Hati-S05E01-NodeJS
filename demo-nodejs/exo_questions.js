
// EXO 4 : Demander à l'utilisateur de saisir son nom, age et les choses qu'il aime. 
//         Puis afficher un "Bonjour X, vous avez Y ans et vous aimez : Z "

// Importer le readline pour pouvoir intéragir avec l'utilisateur
const readline = require('readline');

// Initialiser l'interface 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Quel est votre nom ? ", (nom) => {
    rl.question("Quel est votre age ? ", (age) => {
        rl.question("Quelles sont vos choses que vous aimez ? ", (choses) => {
            console.log('Bonjour ' + nom + ', vous avez ' + age + ' ans et vous aimez : ' + choses);
            rl.close();
        });
    });
});

