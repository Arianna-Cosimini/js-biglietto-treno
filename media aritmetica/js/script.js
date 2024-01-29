function arithmeticAverage(){
    
    let number1 = prompt ("Digita il primo numero!");
    let number2 = prompt ("Digita il secondo numero!");
    let number3 = prompt ("Digita il terzo numero!");


    number1 = parseFloat(number1);
    number2 = parseFloat(number2);
    number3 = parseFloat(number3);

    if (!isNaN(number1) && !isNaN(number2) && !isNaN(number3)){
        let average = ((number1)+(number2)+(number3)/ 3).toFixed(2);
        console.log("Risultato media aritmetica")

        document.getElementById("text").innerHTML="La media aritmetica tra " + number1 + ", " + number2 + " e " + number3 + " è di: " + average;
    }else{
        alert('I dati inseriti on sono corretti');

    }
}