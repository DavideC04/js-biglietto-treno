/*
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero (con i prompt() in questo caso).

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.

L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo e questo richiederà un minimo di ricerca.).
Il risultato andrà visualizzato prima in console e poi possibilmente in un apposito elemento <p> del mio codice HTML.

BONUS:
Il programma dovrà mostrare una form da compilare con cui chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero. Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio.
Il recap dei dati e l'output del prezzo finale va stampato in pagina. */


// PASSO 1: chiedere all'utente il numero dei chilometri che vuole percorrere e l'età del passeggero

let numberKilometres = parseInt(prompt("Quanti chilometri si vogliono percorrere?"));

let passengerAge = parseInt(prompt("Quanti anni ha il passeggero?"));

// definisco il prezzo del biglietto in base ai km

let priceTicket = numberKilometres * 0.21.toFixed(2);


// se il passeggero è minorenne, va applicato uno sconto del 20%
// se il passeggero è over 65, va applicato uno sconto del 40%
// altrimenti, non verrà applicato alcuno sconto
if (passengerAge < 18) {

    priceTicket = priceTicket - (priceTicket * 0.20);

    console.log("Il biglietto costa: " + priceTicket.toFixed(2) + "€");

} else if (passengerAge > 65) {

    priceTicket = priceTicket - (priceTicket * 0.40);

    console.log("Il biglietto costa: " + priceTicket.toFixed(2)+ "€");

} else {

    console.log("Il biglietto costa: " + priceTicket.toFixed(2)+ "€");

}

// stampo su HTML

document.getElementById("ticket_price").innerHTML = priceTicket.toFixed(2)+ "€";
