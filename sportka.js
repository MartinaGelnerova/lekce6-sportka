// SPORTKA

let osudi = [];
let vyherniCisla = document.querySelector('#vyherni-cisla');
let tazenaCisla = [];

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

    for (let i = 0; i < tazenaCisla.length; i++) {
      vyherniCisla = document.querySelector('#vyherni-cisla');
      vyherniCisla.innerHTML += '<span class="cislo">' +  tazenaCisla[i] + '</span>';
      
    }
}
//vypíšu do HTML
