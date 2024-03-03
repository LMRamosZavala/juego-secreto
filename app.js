
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;



function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1;
//si el numero generdo esta en la lista 
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    } else {
        //Si el numero generado está incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log(numeroSecreto);
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();


//DESAFIOS
//1.Crea una lista vacía llamada "listaGenerica".
/*
let listagererica = [];

//2.Crea una lista de lenguajes de programación llamada 
//"lenguagesDeProgramacion con los siguientes elementos: 
//'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.

let lenguajesDeProgramacion = ['JavaScript','C','C++','Kotlin','Python']

//3.Agrega a la lista "lenguagesDeProgramacion los siguientes 
//elementos: 'Java', 'Ruby' y 'GoLang'.

//let lenguajesDeProgramacion = ['Java','Ruby','Python']

//4.Crea una función que muestre en la consola todos los elementos 
//de la lista "lenguagesDeProgramacion.

function mostrarLenguagesSeparadamente() {
    for (let i = 0; i < lenguajesDeProgramacion.length; i++) {
      console.log(lenguajesDeProgramacion[i]);
    }
  }
  
  mostrarLenguagesSeparadamente();

  //5.Crea una función que muestre en la consola todos los elementos de la 
  //lista "lenguagesDeProgramacion en orden inverso.

function ordenInverso(){
    for (let i= lenguajesDeProgramacion.length - 1;i>=0; i--){
        console.log(lenguajesDeProgramacion[i]);
    }
  }
  ordenInverso();
*/
 //6.Crea una función que calcule el promedio de los elementos en una lista de números.
/*
 function promedioLista(lista){
    let suma = 0;
    let indice = 0;
  while(indice<lista.length){
    suma += lista[indice];
    indice++;
  }
  return suma / lista.length;
  //console.log(suma/lista.length)
 }

 let lista =[10,20,30,40,50]
 var promedio =promedioLista(lista)
 //promedioLista(numeros);
 console.log(Promedio);
 //let promedioLista(suma / lista.length);
/*
 function ArrayAvg(myArray) {
    var i = 0, summ = 0, ArrayLen = myArray.length;
    while (i < ArrayLen) {
      summ = summ + myArray[i++];
    }
    return summ / ArrayLen;
  }
  var myArray = [10, 20, 30, 40, 50];
  var a = ArrayAvg(myArray);
  console.log(a)
*/
