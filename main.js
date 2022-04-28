// Esercizio di oggi: calcolo del prezzo del biglietto del treno
// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, 
// per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


// Quanti chilometri devi percorrere?
// Quanti anni hai?

const chilometriUtente = Number(prompt("Inserisci i chilometri che vuoi percorrere"));
const etaUtente = Number(prompt("Inserisci la tua eta'"));



let costoBiglietto = chilometriUtente * 0.21;
console.log(costoBiglietto);


if (etaUtente < 18) {
    costoBiglietto = costoBiglietto - (costoBiglietto * 20 / 100);
    console.log("Utente Under 18");

// } else if (etaUtente < 18 > 65) {
//     costoBiglietto = costoBiglietto

} else if (etaUtente > 65) {
    costoBiglietto = costoBiglietto - (costoBiglietto * 40 / 100);
    console.log("Utente Over 65");
}
costoBiglietto = costoBiglietto.toFixed(2);
console.log(costoBiglietto);
