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

const prezzoFinalePieno = userChilometri * prezzoBigliettoAlChilometro;

const prezzoFinaleMinorenne = (prezzoBigliettoAlChilometro * userChilometri) * scontoMinorrenne;
console.log(prezzoFinaleMinorenne);

const prezzoFinaleAnziani = (prezzoFinaleMinorenne * userChilometri) * scontoAnziani;
console.log(prezzoFinaleAnziani);


// Formula copiata da Tiziano

const min = 50;
const max = 100;

const myRandomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(myRandomNumber);

let prezzoPieno;
let prezzoFinale;

    if(userEta < 18) {

        prezzoFinale = prezzoFinaleMinorenne;

} else if (userEta > 65)) {

    prezzoFinale = prezzoFinaleAnziani;

} else {

    prezzoFinale = prezzoPieno;

}

// Output per il prezzo finale


alert("Prezzo finale da pagare è: €" + prezzoFinale.tofixed(2)); // preso da tiziano
console.log("Prezzo finale da pagare è: €"+ prezzoFinale.tofixed(2) );























