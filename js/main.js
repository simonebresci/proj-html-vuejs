// Progetto
// 1) Solo Desktop
// 2) Header e footer con struttura dati vue
// Deadline
// 23/02 ore 18.00
// 3) Ricorda hover!

var app = new Vue ({
  el: '#root',
  data: {
    // I/O INTERFACCIA GRAFICA
    searchInput: 'Zombie',
    selected: 'ciao',

  },
  mounted() {

  },
  methods: {
    // METODI GENERICI *********************************************************
    // VALORE DA TRASFORMARE CON PROPORZIONE
    proportion: function(valore1,valore1Max,valore2Max){
      // Es. 7.5/10 = x / 5
      // x = (valore1 * valore2Max) / valore1Max
      return (valore1 * valore2Max) / valore1Max;
    }
  }

});
// TOOLS DI SVILUPPO
Vue.config.devtools = true;
