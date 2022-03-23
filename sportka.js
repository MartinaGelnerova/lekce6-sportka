// SPORTKA

let osudi = [];
let vyherniCisla = document.querySelector('#vyherni-cisla');
let historieHer = document.querySelector('#historie-her');
let tazenaCisla = [];
let historie = [];
let counterLosovani = 0;

//naplním osudí


// z osudi vyberu 7 náhodných čísel
function losuj(){
  tazenaCisla = [];
  vyherniCisla.innerHTML = '';
  osudi = [];

  for (let i = 1; i <= 49; i = i + 1) {
    osudi.push(i);
    }; 
  
  for (let i = 0; i < 7; i++) {
      let vyherniIndex = Math.floor(Math.random() * osudi.length);
      let vyherniCislo = osudi[vyherniIndex];

      tazenaCisla.push(vyherniCislo);
      osudi.splice(vyherniIndex, 1);
    };

    vyherniCisla = document.querySelector('#vyherni-cisla');


// tady řeším zamezení klikání než se vykreslí tažená čísla na obrazovku
    document.getElementById("losuj").disabled = true;
    setTimeout(function () {
      document.getElementById("losuj").disabled = false;
      }, 2000 * (tazenaCisla.length - 1));

// vykreslení tažených čísel na obrazovku
    for (let i = 0; i < tazenaCisla.length; i++) {
        setTimeout(function () {
        vyherniCisla.innerHTML += '<span class="cislo">' +  tazenaCisla[i] + '</span>';
        }, 2000 * i)
    }
    
// historie tahů
    historie.push(tazenaCisla)
    counterLosovani++
    historieHer.innerHTML = `Historie tahů:  </br>`

    for (i=counterLosovani-1; i >0; i = i -1){
      historieHer.innerHTML += `${historie[i-1]} </br>`
    }
  
    
}
//vypíšu do HTML
