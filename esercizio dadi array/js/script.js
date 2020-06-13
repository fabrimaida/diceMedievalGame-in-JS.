// Chiedi all'utente la sua mail.
// Se la mail inserita è presente nella lista degli invitati stampa un messaggio appropriato e fallo giocare.
// Il gioco è dei dadi, 2 dadi uno il giocatore e 2 il pc. Se il punteggio è uguale vince il Pc perchè la casa vince sempre.


var listaInvitati = ["a", "liber.gmail.com, gesù.gmail.com, muhammad.yahoo.it, Ekmal.jihad.com"];
var mailUtente = (prompt("Inserisci la tua mail."));
console.log(mailUtente);
var trovato = false;
for (var i = 0; i < listaInvitati.length; i++) {
  var mailInvitato = listaInvitati[i];
  // console.log(mailInvitato);
  if (mailUtente == mailInvitato) {
    trovato = true;
  }
}

if (trovato == false) {
  alert("Non sei il benvenuto");
  document.getElementById("board").classList.add("hidden")
}
else if (trovato == true) {
  alert("Puoi iniziare a giocare.");
}

var buttonGioca = document.getElementById("gioca");
buttonGioca.addEventListener("click",
 function() {
   var dice1 = Math.floor(Math.random() *6 + 1);
   document.getElementById("slot1dice1").innerHTML = dice1;

   var dice2 = Math.floor(Math.random() *6 + 1);
   document.getElementById("slot1dice2").innerHTML = dice2;
   var dice3 = Math.floor(Math.random() *6 + 1);
   document.getElementById("slot2dice1").innerHTML = dice3;
   var dice4 = Math.floor(Math.random() *6 + 1);
   document.getElementById("slot2dice2").innerHTML = dice4;

   if (dice1 + dice2 > dice3 + dice4) {
     alert("hai vinto");
   } else if (dice2 + dice1 < dice3 + dice4) {
     alert("hai perso");
   } else {
     alert("pareggio");
   }
 }
);


console.log(trovato);
