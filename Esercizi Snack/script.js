/*
L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.
*/

const numberOne = parseInt(prompt('Inserisci il primo numero'));
const numberTwo = parseInt(prompt('Inserisci il secondo numero'));

console.log(numberOne);
console.log(numberTwo);

const write = document.getElementById('number');

let message = `Il numero più grande è ${numberTwo}`;

if(numberOne > numberTwo) {
   message = `Il numero più grande è : ${numberOne}`;
}else if (numberOne === numberTwo) {
   message = `I due numeri sono uguali`
}

write.innerText = message;