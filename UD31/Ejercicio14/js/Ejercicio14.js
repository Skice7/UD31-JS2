var numero1 = 0;
var numero2 = 0;
var operaciones;

function Numero(numero){
    if (numero1 == 0 && numero1 !== '0.'){
        numero1 = numero;
    } else {
        numero1 += numero;
    }
    actualizar();
}

function Coma(){
    if (numero1 == 0) {
        numero1 = '0.';
    } else if (numero1.indexOf('.') == -1) {
        numero1 += '.';
    }
    actualizar();
}

function C(){
    numero1 = 0;
    numero2 = 0;
    actualizar();
}

function operar(valor){
    if (numero1 == 0){
        numero1 = parseFloat(document.getElementById("mostrarnum").value);
    }
    numero2 = parseFloat(numero1);
    numero1 = 0;
    operacion = valor;
}

function Igual(){
    numero1 = parseFloat(numero1);
    switch (operacion){
        case 1:
            numero1 += numero2;
        break;
        case 2:
            numero1 = numero2 - numero1;
        break;
        case 3:
            numero1 *= numero2;
        break;
        case 4:
            numero1 = numero2 / numero1;
        break;
        case 5:
            numero1 = Math.pow(numero2, numero1);
        break;
        case 6:
            numero1 = Math.sqrt(numero2);
        break;
        case 7:
            numero1 = numero1%numero2;
        break;
    }
    actualizar();
    numero2 = parseFloat(numero1);
    numero1 = 0;
}

function actualizar(){
    document.getElementById("mostrarnum").value = numero1;
}