



// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.





const kmToTravel = prompt ('Quanti chilometri desideri percorrere?')

const age = Number (prompt ('Quanti anni hai?'));

const priceKm = 0.21;

const priceTicket = kmToTravel * 0.21;
console.log(priceTicket);

// prezzo minorenni

const percentageMinors = 20;
const discountMinors = ((percentageMinors/100)* priceTicket);
const priceMinors = (priceTicket - discountMinors).toFixed(2);
console.log('Il prezzo scontato per minoreenni è:€'+ priceMinors);

// fine prezzo minorenni

// prezzo over 65

const percentageOver65 = 40;
const discountOver65 = ((percentageOver65/100)* priceTicket);
const priceOver65 = (priceTicket - discountOver65).toFixed(2);
console.log('Il prezzo scontato per over 65 è:€' + priceOver65);


// fine prezzo over 65

if (age>17<66){
    document.getElementById('price').innerHTML='Il prezzo del tuo biglietto é: <br> €'+ priceTicket;
} else if (age < 19){
    document.getElementById('price').innerHTML='Il prezzo del biglietto per te che hai meno di 18 anni é: <br> €'+ priceMinors;
} else if (age > 65){
    document.getElementById('price').innerHTML='Il prezzo del biglietto per te che hai più di 65 anni é: <br> €'+ priceOver65;

}
