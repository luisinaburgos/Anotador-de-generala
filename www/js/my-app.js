//FALTA COMENTAR COMO JORACA ANDAN LAS COSAS
// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
      swipe: 'left',
    },
    // Add default routes
    routes: [
      {
        path: '/about/',
        url: 'about.html',
      },
    ]
    // ... other parameters
  });



var mainView = app.views.create('.view-main');

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
    //Variables globales
    var nombrej1 = "";
    var nombrej2 = ""; 
    var datosAnteriores = [];
});

// Option 1. Using one 'page:init' handler for all pages
$$(document).on('page:init', function (e) {
    // Do something here when page loaded and initialized
    console.log(e);
});


$$(document).on('page:init', '.page[data-name="index"]', function (e) {
    $$('#iniciar').on('click', function(){
        nombrej1 = $$('#j1_nombre').val();
        nombrej2 = $$('#j2_nombre').val();
        if (nombrej1 == "") {
            nombrej1 = "Jugador 1";
        }
        if (nombrej2 == "") {
            nombrej2 = "Jugador 2";
        }


    });
});


// Option 2. Using live 'page:init' event handlers for each page
$$(document).on('page:init', '.page[data-name="about"]', function (e) {
    // Do something here when page with data-name="about" attribute loaded and initialized
    console.log(e);
    //Aplica nombres
     $$('#j1_nom').text(nombrej1);
     $$('#j2_nom').text(nombrej2);
    //Jugador 1 numeros
    $$('#j1_1').on('click', function(){ crearPopupNumero(1, 1); });
    $$('#j1_2').on('click', function(){ crearPopupNumero(1, 2); });
    $$('#j1_3').on('click', function(){ crearPopupNumero(1, 3); });
    $$('#j1_4').on('click', function(){ crearPopupNumero(1, 4); });
    $$('#j1_5').on('click', function(){ crearPopupNumero(1, 5); });
    $$('#j1_6').on('click', function(){ crearPopupNumero(1, 6); });
    //Jugador 1 juegos
    $$('#j1_7').on('click', function(){  crearPopupJuego(1, 7); });
    $$('#j1_8').on('click', function(){  crearPopupJuego(1, 8); });
    $$('#j1_9').on('click', function(){  crearPopupJuego(1, 9); });
    $$('#j1_10').on('click', function(){ crearPopupJuego(1, 10); });
    
    //Jugador 2 numeros
    $$('#j2_1').on('click', function(){ crearPopupNumero(2, 1); });
    $$('#j2_2').on('click', function(){ crearPopupNumero(2, 2); });
    $$('#j2_3').on('click', function(){ crearPopupNumero(2, 3); });
    $$('#j2_4').on('click', function(){ crearPopupNumero(2, 4); });
    $$('#j2_5').on('click', function(){ crearPopupNumero(2, 5); });
    $$('#j2_6').on('click', function(){ crearPopupNumero(2, 6); });
    //Jugador 2 juegos
    $$('#j2_7').on('click', function(){  crearPopupJuego(2, 7); });
    $$('#j2_8').on('click', function(){  crearPopupJuego(2, 8); });
    $$('#j2_9').on('click', function(){  crearPopupJuego(2, 9); });
    $$('#j2_10').on('click', function(){ crearPopupJuego(2, 10); }); 

    //FALTA PROBAR andara? 
    /*for (var j = 1; j <= 2; j++){
        for (var inum = 1; inum <= 6; inum ++){
            $$('#j'+ j + '_' + inum).on('click', function(){ crearPopupNumero(j, inum); });    
        }

        for (var ijug = 1; ijug <= 6; ijug ++){
            $$('#j'+ j + '_' + ijug).on('click', function(){ crearPopupNumero(j, ijug); });    
        }


    }*/

    $$('#deshacer').on('click', function(){ deshaceUno() });    
  


});





function crearPopupNumero(jugador, numero){
if (jugador == 1) {
    var nombre = nombrej1;
} else if (jugador == 2){
    var nombre = nombrej2;
}
var ac2 = app.actions.create({
  buttons: [
    {
      text: nombre + ' Dado ' + numero,
      label: true,
      bold: true, 
    },
    
    {
        text: numero * 1,
        onClick: function () {
            suma(jugador, (numero * 1), numero)
        }
    },

     {
        text: numero * 2,
        onClick: function () {
            suma(jugador, (numero * 2), numero)
        }
    },

     {
        text: numero * 3,
        onClick: function () {
           suma(jugador, (numero * 3), numero)
        }
    },

     {
        text: numero * 4,
        onClick: function () {
            suma(jugador, (numero * 4), numero)
        }
    },

    {
        text: numero * 5,
        onClick: function () {
            suma(jugador, (numero * 5), numero)
        }
    },

    {
        text: 'Tachar',
        onClick: function () {
            suma(jugador, 'x', numero)
        }
    },
    
    {
      text: 'Cancelar',
      color: 'red'
    },
  ]
});   

ac2.open();
}

function crearPopupJuego(jugador, juego){
if (jugador == 1) {
    var nombre = nombrej1;
} else if (jugador == 2){
    var nombre = nombrej2;
}
switch(juego){
    case 7:
        var nomjuego = "Escalera";
        var valor = 25;
        break;
    case 8:
        var nomjuego = "Full";
        var valor = 30;
        break;
    case 9:
        var nomjuego = "Poker";
        var valor = 45;
        break;
    case 10:
        var nomjuego = "Generala";
        var valor = 60;
        $$('#j' + jugador + '_' + 11).on('click', function(){ crearPopupJuego(jugador, 11); });
        break;
    case 11:
        var nomjuego = "Doble Generala";
        var valor = 100;

        break;
    default:
        alert("ERROR");
        break;
}

var ac2 = app.actions.create({
  buttons: [
    {
      text: nombre + ' ' + nomjuego,
      label: true,
      bold: true, 
    },

   

    {
        text: 'Armada',
        onClick: function () {
           
           suma(jugador, (valor - 5), juego)
        }
    },

    {
        text: 'Servida',
        onClick: function () {
            if (juego == 10){
                alert("GANA" + nombre);
                deshabilita();
            }
            suma(jugador, valor, juego)
        }
    },

    {
        text: 'Tachar',
        onClick: function () {
            suma(jugador, 'x', juego)
        }
    },

    {
      text: 'Cancelar',
      color: 'red'
    },


  ]
});   

ac2.open();
}


function suma(jugador, cuanto, posicion){
    if (cuanto == 'x' && posicion == 10){
         $$('#j'+ jugador + '_' + 11).text(cuanto);
    }
    $$('#j'+ jugador + '_' + posicion).text(cuanto);
    $$('#j'+ jugador + '_' + posicion).off('click');
    datosAnteriores = [jugador, cuanto, posicion];
    sumaTotal(jugador);
}

function sumaTotal(jugador){
    var acumulador = 0;
    for (var i = 1; i <= 11; i++){
        var aSumar = parseInt($$('#j' + jugador + '_' + i).text());
        if (isNaN(aSumar)){
            aSumar = 0;
        }
       acumulador += aSumar; 

    }

    $$('#j' + jugador + '_total').text(acumulador);
    checkGano();

}


function checkGano(){
    var contador = 0;
    var puntosJ1 = $$('#j' + 1 + '_total').text();
    var puntosJ2 = $$('#j' + 2 + '_total').text();
    
    for (var j = 1; j <= 2; j++){
        for (var i = 1; i <= 11; i++){
            if ( ($$('#j' + j + '_' + i).text()) == 0 ){
                 contador++;
                 break;
            } 
        }
    }
   

    if (contador == 0){
        if (puntosJ2 > puntosJ1){
            alert("GANA" + nombrej2);
        } else if (puntosJ2 < puntosJ1){
            alert("GANA" + nombrej1);
        } else if (puntosJ2 == puntosJ1){
            alert("EMPATE");
        }
    }
    

}

function deshaceUno(){

    var jugador = datosAnteriores[0];
    var cuanto = datosAnteriores[1];
    var posicion = datosAnteriores[2];

     $$('#j' + jugador + '_' + posicion).text(0);
     $$('#j' + jugador + '_' + posicion).on('click', function(){ 
        if (posicion >= 1 && posicion <= 6){
            crearPopupNumero(jugador, posicion);
        } else if (posicion >= 7 && posicion <= 10){
            crearPopupJuego(jugador, posicion)
        }
    });
     sumaTotal(jugador);

}


function deshabilita(){
    for (var j = 1; j <= 2; j++){
        for (var i = 1; i <= 11; i++){
           $$('#j' + j + '_' + i).off('click');  
        }
    }
}


