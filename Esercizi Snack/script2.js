/*

L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

*/

const wordOne = prompt('Inserisci la prima parola').trim();
const wordTwo = prompt('Inserisci la seconda parola').trim();

console.log(wordOne);
console.log(wordTwo);

const write = document.getElementById('number');
let message = `Le parole sono lunghe uguali `


if (wordOne.length === 0 || wordTwo === 0) {
   message = 'Le parole non sono valide'
} else {
   if ( wordOne.length > wordTwo.length) {
      message = wordTwo + ' ' + wordOne;
   } else if (wordOne.length < wordTwo.length) {
      message = wordOne + ' ' + wordTwo;
   }
}

write.innerText = message;