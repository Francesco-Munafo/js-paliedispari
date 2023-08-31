/*

👉 Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

*/

function isEvenOrOdd(sum){
    if (sum % 2 === 0) {
        return true;
    }

    return false
}

const userNumberInput = document.getElementById('user_number').value;
const cpuNumber = Math.floor(Math.random() * 5) + 1;
const checkButton = document.getElementById("even_or_odd");

checkButton.addEventListener('click', function () {

    
})