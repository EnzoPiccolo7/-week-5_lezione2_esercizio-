/* in html creare delle card con immagini e descrizione prodotto e prezzo
al click dobbiamo simulare un acquisto, abbiamo un budget di 100euro
ogni volta che compriamo un prodotto, ci esce un alert che abbiamo acquistato e deve scalare il budget
a meta budget deve uscire un alert che stiamo a meta,a fine budget deve uscire l alert che non abbiamo piu soldi.
inserire un bottone su ricarica di 10euro 
creare card in automatico tramite un Array */
let telefoni = ['SAMSUNG S21' ,'SAMSUNG S20', 'SAMSUNG S10lite', 'SAMSUNG NOTE20',];
let ul = document.getElementById('card');

for (let i=0; i<telefoni.length; i++) {
    ul.innerHTML += '<li>' + telefoni[i] + '</li>';
}
let samsung1 = 100;
let samsung2 = 80;
let samsung3 = 50;
let samsung4 = 120;
let budget1 = 500;
let importo;
document.getElementById("budget").innerHTML = "BUDGET " + budget1 + "euro";

function addto(){
    if(importo = "risul1" ){
        "budget".innerHTML = "BUDGET " + risultato1 + "euro";
    } else {
        alert("hai finito i soldi")
    }
 
}


function bottone1() {
    let risultato1 = budget1 - samsung1;
    document.getElementById("budget").innerHTML = "BUDGET " + risultato1 + "euro";
    window.alert("Hai acquistato un fantastico Samsung S21!!!")
    importo = "risul1";
    return risultato1;
}
function bottone2() {
    let risultato2 = budget1 - samsung2;
    document.getElementById("budget").innerHTML = "BUDGET " + risultato2 + "euro";
    window.alert("Hai acquistato un fantastico Samsung S20!!!")
    return budget1;
}
function bottone3() {
    let risultato3 = budget1 - samsung3;
    document.getElementById("budget").innerHTML = "BUDGET " + risultato3 + "euro";
    window.alert("Hai acquistato un fantastico Samsung S20!!!")
    return budget1;
}
function bottone4() {
    let risultato4 = budget1 - samsung4;
    document.getElementById("budget").innerHTML = "BUDGET " + risultato4 + "euro";
    window.alert("Hai acquistato un fantastico Samsung S20!!!")
    return budget1;
}