/*
TIP:
per controllare che la vostra logica sui prezzi funzioni 
correttamente, provate a verificare quanto segue:

100km, 10 anni => prezzo corretto:  €16.80
100km, 70 anni => prezzo corretto: €12.60

 */

// Il programma dovrà chiedere all'utente il numero di chilometri che 
// vuole percorrere e l'età del passeggero.

const userEta = prompt("Quanti anni hai?");
console.log(userEta);

const userChilometri = prompt("Quanti chilometri vorresti percorrere?");
console.log(userChilometri);

/*

Sulla base di queste informazioni dovrà calcolare il prezzo 
totale del viaggio, secondo queste regole:

il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, 
per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

 */

if (userEta < 18) {

    alert("Sei minorenne! Hai uno sconto del 20%.");

} else if (userEta > 65) {

    alert("Sei Over 65! Hai uno sconto del 40%.")

} else {

    alert("Sei maggiorenne!");

}




const prezzoBigliettoAlChilometro = 0.21;
console.log(prezzoBigliettoAlChilometro);

const chilometriPerPrezzo = prezzoBigliettoAlChilometro * userChilometri;
console.log(chilometriPerPrezzo);

// sconto se minorenne


const scontoMinorrenne = 0.2;
console.log(scontoMinorrenne);

// Sconto Over 65

const scontoAnziani = 0.4;
console.log(scontoAnziani);



// Prezzo finale

// Se l'utente ha 10 anni e percorre 100 km
// il prezzo deve essere: 100 * 0.21 = 21 euro 
// con sconto del 20% il prezzo è: 21 * 0.2 = 4,2 
// 21 prezzo peino - 4,2 = 16,8




let prezzoPieno;
let prezzoFinale;

if(userEta < 18) {

        prezzoFinale = chilometriPerPrezzo - (chilometriPerPrezzo * scontoMinorrenne);

} else if (userEta > 65) {

    prezzoFinale = chilometriPerPrezzo - (chilometriPerPrezzo * scontoAnziani);

} else {

    prezzoFinale = chilometriPerPrezzo;

}

// Output per il prezzo finale

// preso da tiziano
alert("Prezzo finale da pagare è: €" + prezzoFinale.toFixed(2)); 
console.log("Prezzo finale da pagare è: €" + prezzoFinale.toFixed(2) );























