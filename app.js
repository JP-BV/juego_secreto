

//let parrafo = document.querySelector('p');
//parrafo.innerHTML = "Escoge un número del 1 al 10**";


//let titulo = document.querySelector("1")
//titulo.innerHTML= "Juego del Número Secreto2"

function asignarTextoElemento(elemento, texto ){
    let elementoHTML  = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;

};

let numeroSecreto = 0;
let numeroIntentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
condicionInicial();

function generarNumeroSecreto() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo)+1
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // return Math.floor(Math.random()*10)+1;

    // Para saber si ya se eligieron todos los números:
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya no se pueden realizar más juegos');
        alert('Ya no se pieden realizar más juegos');
    } else{

    if(listaNumerosSorteados.includes(numeroGenerado) ){


        return generarNumeroSecreto();



    } else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
        
    }
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(typeof(numeroDeUsuario));
    //console.log(numeroSecreto);
    //console.log(numeroDeUsuario);
    console.log(numeroDeUsuario===numeroSecreto);
    console.log(numeroIntentos);
    if(numeroDeUsuario===numeroSecreto){
        asignarTextoElemento('p',`Has acertado el número en ${numeroIntentos} ${(numeroIntentos === 1) ? 'vez' : 'veces'} `);
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else{
        limpiarCaja();
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor')
        } else {
            asignarTextoElemento('p','El número secreto es mayor')
        }
        numeroIntentos++;
    }
    return;
};

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
   
};

function condicionInicial(){
    //Limpiar la caja
    limpiarCaja();
    asignarTextoElemento('p', `Escoge un número del 1 al ${numeroMaximo}**`);
    asignarTextoElemento('h1', "Juego del Número Secreto2");
    //Generar número aleatorio
    numeroSecreto = generarNumeroSecreto();
    //inicializar número de intentos:
    numeroIntentos = 1 ;
}

function reiniciarJuego(){

    //Indicar Mensaje de intervalos
    condicionInicial();

    
    
    //Deshabilitar el botón de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled', 'true')

};


