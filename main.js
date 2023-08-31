/*

👉 Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

*/

function isEvenOrOdd(sum) {

    if (sum % 2 === 0) {
        return true;
    }

    return false
}


const userNumberInput = document.getElementById('user_number');

const checkButton = document.getElementById("even_or_odd");
const resultDom = document.getElementById("result");
console.log(userNumberInput.value);


/* Al click devi
1 - Controllare che il numero dell'utente soddisfi le richieste
SE non le soddisfa
    -Messaggio di errore
ALTRIMENTI
    -Genera un numero random
    -Fai la somma dei numeri
    -Invoca la funzione che verificherà
SE pari=false
    - stampa la somma è pari
ALTRIMENTI
    - stampa la somma è dispari
*/
checkButton.addEventListener('click', function () {

    if (userNumberInput.value < 1 || userNumberInput.value > 5) {
        alert("Inserisci un numero da 1 a 5!")
    } else {
        const cpuNumber = Math.floor(Math.random() * 5) + 1;
        const numberSum = Number(userNumberInput.value) + cpuNumber;

        if (isEvenOrOdd(numberSum)) {
            resultDom.innerHTML = "Il computer ha scelto" + " " + cpuNumber + " " + "quindi il numero è pari";
        } else {
            resultDom.innerHTML = "Il computer ha scelto" + " " + cpuNumber + " " + "quindi il numero è dispari";
        }
    }

})