console.log('Hello World');


for(let i =0; i < 10; i++) {
    console.log(i);
}


let captainName = 'Achab', narratorName = 'Ismaël';
let captainHeight = 178; 
const captainAge = 54, ship = "Pequod";

const crew = ['Starbuck', 'Stubb', 'Flash'];
crew.push('Gordon');

function present(member){
    console.log(`Hey ! Name's ${member} ! 'ma proud fish'man o' the ${ship}`);
}

present(crew[0]);


const presentES6 = (member) => { 
    console.log(`Hey ! Name's ${member} ! 'ma proud fish'man o' the ${ship}`);
}

presentES6(crew[1]);


const presentES6Arrow = (member) => console.log(`Hey ! Name's ${member} ! 'ma proud fish'man o' the ${ship}`);


const obj = {
    prenom: 'Sion',
    nom: 'G',
    age: 34,
    nationality: 'British',
    present() {
        console.log(`Hey ! Name's ${this.prenom} ! 'ma proud fish'man o' the ${ship}`);
    }
}


obj.present();

console.log('Hello World');
