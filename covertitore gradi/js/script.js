function celsiusToFahrenheit(){
    let celsiusInput = document.getElementById('celsiusInput').value;

    if (isNaN(parseFloat(celsiusInput))) {
        alert("Inserire solo valore numerico!");

    }

    
 
    let celsius = (parseFloat(celsiusInput));
    let fahrenheit = (celsius * 9/5) + 32;
    console.log('temperatura convertita: ' + fahrenheit)

    document.getElementById('convertion-result').innerHTML = celsius + " gradi Celsius equivalgono a " + fahrenheit + " gradi fahrenheit.";
}


  