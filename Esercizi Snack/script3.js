/*

Il software deve chiedere per 10 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.

*/
const displayElement = document.getElementById('number');

let sum = 0;
let isValid = true;

for (let i = 0; i < 10; i++) {
   const numbers = parseInt(prompt('Inserisci un numero'));
   
   if (isNaN(number)) {
      isValid = false;
   } else {
      sum += numbers
   }
}

if (isValid) {
   displayElement.innerText = `somma finale: ` + sum;
} else {
   displayElement.innerText = `hai inserito elementi non validi`;
}
