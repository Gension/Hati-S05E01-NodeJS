const readline = require('readline');

const rl = readline.createInterface({ // C'est le pont entre mon application et le clavier et le terminal du user
    input: process.stdin, // "fichier virtuel" qui contient les ce que le user tape dans le terminal
    output: process.stdout // "fichier virtuel" qui ira afficher sur l'écran de l'utilisateur
    // https://manpages.ubuntu.com/manpages/trusty/fr/man3/stdout.3.html
});

rl.question("Pseudo Github ?", function(pseudo) {
    console.log("Profil : https://github.com/" + pseudo + "\n");

    rl.close();
});
