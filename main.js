/*

👉 Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

*/

function isEvenOrOdd(userNumber, cpuNumber) {

    if ((userNumber + cpuNumber) % 2 === 0) {
        return true;
    }

    return false
}


const userNumberInput = document.getElementById('user_number');

const resultDom = document.getElementById("result");

const checkButton = document.getElementById("even_or_odd");

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
        

        if (isEvenOrOdd(Number(userNumberInput.value), cpuNumber)) {
            resultDom.innerHTML = "Il computer ha scelto" + " " + cpuNumber + " " + "quindi il numero è pari";
        } else {
            resultDom.innerHTML = "Il computer ha scelto" + " " + cpuNumber + " " + "quindi il numero è dispari";
        }
    }

})


/*

Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

*/














// Recupero la parola scritta dall'utente in pagina

const userWord = document.getElementById('user_word');

/**
 * 
 * @param {string} word word that user wrote in input
 * @returns {boolean} true/false
*/
/*function isPalindrome(word) {
    const revUserWord = word // Cercando online ho trovato questi metodi per:
    .split('')                // Dividere la parola in un array di lettere che compongono la parola
    .reverse()                // Inverte l'ordine dell'array
    .join('')                   // Unisce gli elementi dell'array riformando la parola
    console.log(revUserWord);
    if (word === revUserWord) {
        return true
    }
    
    return false
    
}
*/


function isPalindrome(word) {
    let wordReverse = '';
    for (let i = word.length - 1; i >= 0; i--) {
        wordReverse += word[i];   
    }
    console.log(wordReverse);
    if (wordReverse === word){
        return true
    }

    return false
}


//isPalindrome('cacca');
//console.log(isPalindrome('otto'));

const paliCheckButton = document.getElementById('palindrome');
const paliResultDom = document.getElementById('palindrome_result');

paliCheckButton.addEventListener('click', function () {

    if (isPalindrome(userWord.value)) {
        paliResultDom.innerHTML = "La parola è palindroma";
    } else {
        paliResultDom.innerHTML = "La parola non è palindroma";
    }
});
