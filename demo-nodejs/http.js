const http = require('http');

const handleRequest = (req, res) => {
    // req toutes les infos relatives à la requete http qui rentre

    console.log(req.url);
    // res toutes les infos relatives à la reponse http qui sort

    res.statusCode = 200;
    let content = '';
    
    switch (req.url) {
        case '/':
            content = 'Home page';
            break;
        case '/about':
            content = 'About page';
            break;
        default:
            res.statusCode = 404;
            content = 'Not found';
    }


    // res.end termine la requete avec comme contenu Hello World
    res.end(content);
}

// Créer un serveur web`
// http.createServer() est utilisé pour créer un nouveau serveur. 
// La fonction de rappel passée à createServer est appelée à chaque requête reçue par le serveur.
const server = http.createServer(handleRequest);


// je démarre mon serveur sur le port 3000
server.listen(3000, () => {
    console.log('Server listening on port 3000');
});

