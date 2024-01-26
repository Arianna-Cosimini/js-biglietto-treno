



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
console.log('Il prezzo per gli utenti di età compresa tra 18 e 65 è:'+ priceTicket);

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

// inizio condizione

if (age > 18 && age < 66){
    document.getElementById('price').innerHTML='Il prezzo del tuo biglietto é: <br> €'+ priceTicket;
    console.log("L'utente ha un'età compresa tra 18 e 65 anni")
} else if (age < 19){
    document.getElementById('price').innerHTML='Il prezzo del biglietto per te che hai meno di 18 anni é: <br> €'+ priceMinors;
    console.log("L'utente è minorenne")

} else if (age > 65){
    document.getElementById('price').innerHTML='Il prezzo del biglietto per te che hai più di 65 anni é: <br> €'+ priceOver65;
    console.log("L'utente ha più di 65 anni")

}

// fine condizione

// bonus

// if (age < 0  age >100){
//     alert('Dati inseriti non corretti')
//     console.log("L'utente ha un'età inferiore a 0 o superiore a 100")
// }


    if (!isNaN(age) && age >0){

        console.log('Hai inseito un numero')

    if (!isNaN(kmToTravel)&& kmToTravel >0){
        console.log('hai inserito un numero')
    }

    } else {
        alert('inserisci solo valore numerico')
        console.log('Solo valore numerico')
    }

   


// fine bonus


