
const userChoice = prompt("Cosa scegli? Sasso, carta o forbice?");
const computerChoice =Math.floor(Math.random() * 3);
let conversioneComputer;

console.log("Scelta dell'utente:", userChoice);
console.log("Scelta del computer:", computerChoice);

const esitoElement = document.getElementById("esito");

if(computerChoice===1){
    conversioneComputer="carta";
}else if(computerChoice===2){
    conversioneComputer="sasso";
}else{
    conversioneComputer="forbice";
}

if (userChoice===computerChoice){
    esitoElement.innerHTML = 'Pareggio!'
}else if (userChoice === 'sasso ' && conversioneComputer=== "forbice"){
    esitoElement.innerHTML = "hai vinto!"
}else if (userChoice === "carta" && conversioneComputer === "sasso"){
    esitoElement.innerHTML = "hai vinto!"
}else if (userChoice === "forbice" && conversioneComputer === "carta"){
    esitoElement.innerHTML = "hai vinto!"
}else {
    esitoElement.innerHTML = "Hai perso!";
}

