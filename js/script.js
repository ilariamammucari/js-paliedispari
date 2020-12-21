// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// utente sceglie p/d e sceglie un numero e il pc genera un numero random da 1 a 5
var pariODispari = prompt('Pari o dispari?').toLowerCase();
var numero = parseInt(prompt('Inserisci un numero da 1 a 5'));
var computer = numeroRandom(1,5);




// controllo che la parola sia scritta bene
// if ((pariODispari != 'pari') || (pariODispari != 'dispari')){
//   pariODispari = prompt('Attento a come scrivi la parolina. Pari o dispari?').toLowerCase();
// }
do {
  pariODispari = prompt('Pari o dispari?').toLowerCase();
} while((pariODispari != 'pari') && (pariODispari != 'dispari'));

// se l'utente inserisce un numero che non è tra 1 e 5 allora richiedi di nuovo l'inserimento del numero
// if ((numero > 5) || (numero <= 0)){
//   numero = prompt('Hai sbagliato. Inserisci un numero da 1 a 5');
// }

// faccio la somma del numero inserito e del numero random generato
var sommaNumeri = somma(numero, computer);
console.log(sommaNumeri);


// e vedo con la funzione se la somma è pari o dispari e stabilisco il vincitore
var controllo = pariDispari(sommaNumeri);
console.log(controllo);

if (pariODispari == controllo){
  console.log('Hai vinto!');
} else {
  console.log('Hai perso!');
}





// funzioni
function numeroRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function somma(n1,n2){
  return n1 + n2;
}

function pariDispari(n){
  var risultato = 'dipsari';
  if (n % 2 == 0){
    risultato = 'pari';
  }
  return risultato;
}
