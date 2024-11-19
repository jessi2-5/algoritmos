// 1. algoritmo que realiza la suma entre dos valores

function suma(){
//  declaro las variables necesarias para este algoritmo
    let A;
    let B;
    let S;


//  solicito los valores al usuario

A = parseInt(prompt ('ingrese el primer valor a sumar '))
B = parseInt(prompt (' ingrese el segundo valor a sumar'))

// 4. realizar la operacion

S = A + B 

//   mostrar el resultado en pantalla

console.log (' el resultado de la sume es:  ' + S );
alert (' el resultado de la suma es: ' + S);

}


// 2. Algoritmo que determina la suma, resta, multiplicacion y division entre dos valores ingresados por el usuario
function opBasicas(){
    let A;
    let B;
    let sumar;
    let multiplicar;
    let dividir;
    let restar;


A = parseInt(prompt(' ingrese el primer digito '));
B = parseInt(prompt(' ingrese el segundo valor '));

sumar = A + B;
restar = A - B; 
multiplicar = A * B;
dividir = A / B;


console.log ( ' los numeros ingresados dan como resultado  suma ' + sumar );

console.log ( ' los numeros ingresados dan como resultado  restar ' + restar );

console.log ('los numeros ingresados dan como resultado  multiplicar ' + multiplicar);

console.log (' los numeros ingresados dan como resultado  dividir ' + dividir);

alert (' los numeros ingresados dan como resultado  suma ' + sumar )

alert (' los numeros ingresados dan como resultado  restar ' + restar ) 

alert (' los numeros ingresados dan como resultado  multiplicar ' + multiplicar ) 

alert (' los numeros ingresados dan como resultado  dividir ' + dividir)


}



// 3. realizar un algoritmo que determine el cuadrado de un numero ingresado por el usuario 

function Acuadrado(){
    let A 
    let cuadrado

    A = parseInt(prompt(' ingrese un número ')) 

    cuadrado = A * A 

    console.log ( ' el cuadrado del número ingresado es ' + cuadrado ) 

    alert (' el cuadrado del número ingresado es ' + cuadrado )

}

// 4. realizar un algoritmo que determine el area de un triangulo apartir de la base y la altura ingresadas por el usuario 

function Atriangulo(){
    let B
    let A
    let mul

    B = parseInt(prompt(' ingrese la base del triangulo ' ))
    A = parseInt(prompt(' ingrese la altura del triangulo ' ))

    mul= B * A /2

    console.log ( ' El area de el triangulo es '+ mul)
    alert ( ' El area de el triangulo es '  + mul)
}

// 5. realizar un algoritmo que determine los kilometros, pulgadas y metros de un valor dado en centimetros 

function CConversion() {


    let centimetros
    let K
    let P
    let M


    centimetros = parseInt(prompt(' ingrese los centrimetros a calcular '))

    M = centimetros / 100
    K = centimetros / 100000
    P = centimetros / 2.54

    console.log ( ' los centimetros en kilometros son ' + K)
    alert (' los centimetros en kilometros son ' + K)
     
    console.log ( ' los centimetros en metros son ' + M)
    alert ( ' los centimetros en metros son ' + M )

    console.log ( ' los centimetros en pulgadas son ' + P)
    alert (  ' los centimetros en pulgadas son ' + P)
}

// 6. realizar un algoritmo que determine el número mayor de dos numeros ingresados por el usuario

function Mmayor(){

    let N1
    let N2

    N1 = parseInt(prompt( ' ingrese el primer número '))
    N2 = parseInt(prompt( ' ingrese el segúndo número '))

    if ( N1>N2){

        console.log (' el número ' + N1 + 'es mayor que ' + N2)
        alert (' el número ' + N1 + 'es mayor que ' + N2 )
        
    }

    else if (N1==N2){
        console.log ( 'el numero ' + N1 + ' es igual al numero ' + N2 )
        alert ( 'el numero ' +  N1 + ' es igual al numero ' + N2 )
    }

    else {
        console.log (' el número  '   +   N2 + '  es mayor que ' + N1 )
        alert (' el número  ' +   N2   + '  es mayor que ' + N1 )
        
    }
    
    

}

// 7. realizar un algoritmo que determine el numero menor de tres numeros ingresados por el usuario 

function Nmenor(){

    let n1
    let n2
    let n3

    n1 = parseInt(prompt (' ingrese el primer número'))
    n2 = parseInt(prompt ( 'ingrese el segundo número'))
    n3 = parseInt(prompt(' ingrese el tercer número '))

    if  ((n1<n2) && (n1<n3)) {
        console.log (' el número ' + n1 + 'es menor que ' + n2 + ' y que  ' + n3)
        alert (' el número ' + n1 + 'es menor que ' + n2 + ' y que  ' + n3)
    
    }

    else if  ( (n1==n2) && (n1==n3)){
        console.log (  'el número '  + n1 + ' es igual a ' + n2 + ' y  ' + n3 )
        alert (  'el número '  + n1 + ' es igual a ' + n2 + ' y  ' + n3 )
    }

    else if ((n2<n1) && (n2<n3)) {
        console.log ( ' el número  ' + n2 + 'es menor que ' + n1 + ' y que' + n3)
        alert ( ' el número ' + n2 + 'es menor que ' + n1 + ' y que ' + n3)
    }

    else {
        console.log ( ' el número  ' + n3 + 'es menor que  ' + n1 + ' y que  ' + n2)
        alert (  ' el número  ' + n3 + 'es menor que ' + n1 + ' y que  ' + n2)
    }

    
}

// 8. realizar un algoritmo que solicite al estudiante su nombre, la materia y 8 calificaciones de la misma entre 8 y 10  de terminar con esta informacion si el estudiante aprovo o reprovo teniendo en cuenta que se aprueba con 6.2 en adelante

function Estudiante(){

    let nombre
    let materia
    let cal1
    let cal2
    let cal3
    let cal4
    let cal5
    let cal6
    let cal7
    let cal8
    let pro
    let pro1
    
    nombre = (prompt('  ingrese su nombre '))
    materia = (prompt('  ingrese la materia '))
    cal1 = parseInt(prompt( ' ingrese su nota 1'))
    cal2 = parseInt(prompt( ' ingrese su nota 2'))
    cal3 = parseInt(prompt( ' ingrese su nota 3'))
    cal4 = parseInt(prompt(' ingrese su nota 4'))
    cal5 = parseInt(prompt( ' ingrese su nota 5'))
    cal6 = parseInt(prompt( ' ingrese su nota 6'))
    cal7 = parseInt(prompt( ' ingrese su nota 7'))
    cal8 = parseInt(prompt( ' ingrese su nota 8'))

    pro = cal1 + cal2 + cal3 + cal4 + cal5 + cal6 + cal7 + cal8
    pro1 = pro/8 

    if ( pro1>6.2){
        console.log  (nombre + ' pasaste   ' + materia  + ' con un promedio de   ' + pro1)
        alert (nombre + ' pasaste   ' + materia  + ' con un promedio de   ' + pro1)
    }

    else {
        console.log (nombre + ' perdio  ' +  materia  +  '  con un promedio de  ' + pro1 )
        alert (nombre + ' perdio  ' +  materia  +  '  con un promedio de  ' + pro1)
    }

}

//  9. determinar si un número ingresado por el usuario es par o impar 

function par(){

    let num
     

    num = parseInt(prompt ( ' ingrese un número '))
    
    if ( num % 2 === 0){
        console.log ( num + ' es par  ')
        alert ( num + ' es par  ')
    }

    else {
        console.log ( num + ' es impar ')
        alert ( num + ' es impar ') 
    }



}

// 10. un individuo desea invertir su capital en un banco y requiere saber cuanto dinero ganara despues de N números de años. Teniendo en cuenta que el banco paga un interes mensual del 0.7 por ciento

function ban(){

    let capital
    let años
    let meses
    let interes

    capital = parseInt(prompt ( ' ingrese el valor que deposito al banco '))
    años = parseInt(prompt(' a cuantos años los desea sacar '))

    intaño = 0.7 * 12 

    saldo = capital * intaño 


}

// 11. realizar un algoritmo que solicite al usuario un rango entre dos valores y muestre los números que hay entre estos o ellos 



// realizar otros 2 algoritmos mas busca ejemplos en google 