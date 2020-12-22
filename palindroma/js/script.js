// una funzione per capire se è palindroma
var parola = prompt('Inserisci una parola');
parola = parola.toLocaleLowerCase();
var parolaContrario = '';


var i = parola.length - 1;
while (i >= 0){
  parolaContrario += parola[i];
  i--;
}
console.log(parolaContrario);



// controllo senza funzione
// var palindroma = 'La parola è palindroma'
// if (parolaContrario != parola){
//   palindroma = 'La parola non è palindroma'
// }
// console.log(palindroma);



// controllo con funzione
var pal = controlloPalindroma(parolaContrario,parola);
console.log(pal);





// funzioni
function controlloPalindroma(p1,p2){
  var risultato = true;
  if (p1 != p2){
    risultato = false;
  }

  var palindroma = 'non palindroma';
  if (risultato){
    palindroma = 'palindroma';
  }

  return palindroma;
}