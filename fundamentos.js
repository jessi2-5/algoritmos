//declaramos y inicializamos la variable nombre
//tipos de primitivos


let nombre = 'Valeria'; 
let edad = 20;
let mayorEdad = true;
let vacio = null;
let xyz;

console.log(typeof nombre);

console.log(typeof edad);

console.log(typeof mayorEdad);

console.log(typeof vacio);

console.log(typeof xyz);

//tipos de datos complejos 

let:frutas = ['pera','manzana','mango']; //sera de tipo arreglo 
let:Auto  = {
    marca: 'Mazda',
    modelo: 2024,
    color: 'Azul',
    placa: 'TDN221',
    Tipo: 'camioneta',
    unicoDueño: true,
}
console.log(typeof frutas);
console.log(typeof Auto);

//concatenar variables

console.log('Hola ' + nombre + ' tienes ' +  edad  + ' años ' );

// estructuras condicionales

console.log ( ' ______________________________________________________________________________' );

let calificacion = 42;

if ( calificacion >= 90  ){
    console.log ( ' Muy buen trabajo ' + nombre + ' su nota fue ' +  calificacion );
}

else if (calificacion >= 70){
    console.log(' Aprovaste ' + nombre + ' su nota fue ' + calificacion );
}

else if (calificacion >= 50){
    console.log( ' reprovaste ' +  nombre  + ' tu nota es ' + calificacion);
}

else{
    console.log( ' perdio ' + nombre + ' su nota es ' + calificacion); 
}

let dia = 'lunes';


switch (dia) {
    case 'lunes':
        console.log (' empezando semana ');
        
        break;

    case 'martes':
        console.log ('que chimba de dia ');
        
        break;
    
    case 'miercoles':
        console.log (' otro dia mas ');

        break;

    case 'juerves':

        console.log (' juernes ');

        break;
    
    case ' viernes ':

        console.log (' por fin ')

    default:

        console.log = ( 'no es un dia de la semana '); 
        break;
}


//estructura de bucles 

let numero = 1; 


while (numero <=10 ){

    console.log( ' Ahora el numero es ' + numero );
    numero = numero + 1; 

}

// let i = 10; 

for(let i = 0; i <= 100; i = i + 10){

    console.log('este es el numero ' + i )

}

console.log ( ' ______________________________________________________________________________' );

for(let i = 115; i >= 15; i = i - 10){

    console.log('este es el numero ' + i )

}


console.log ( ' ______________________________________________________________________________' );


// funciones

function  suma( valor1, valor2){
    return valor1 + valor2;
}

let resultado = suma ( 8, 24);

console.log(resultado);