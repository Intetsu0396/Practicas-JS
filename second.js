// OPERADORES ARITMETICOS: AQUELLOS INTERACTUAN CON EL VALOR DE LAS VARIABLE
let ope1 =3
let ope2 =3
let result;

result = ope1 + ope2;
result = ope1 - ope2;
result = ope1 * ope2;
result = ope1 / ope2;
result = ope1 ** ope2;

result = ope1 % ope2
result = ++ope1 * --ope2

//console.log(result)

//OPERADORES DE ASIGNACION: NOS PERMITEN DARLE UN VALOR A UNA VARIABLE YA ESTABLECIDA

let resultado = 5;
resultado += 3;
resultado -=
/*.
  .
  .*/

console.log(resultado)

//OPERADORES DE COMPARACION

// mayor que 
console.log(2 < 3);
// menor que
console.log(2 > 3);
// comparacion no estricta 
console.log(3 == 3);
console.log(4 ==3);
console.log(3 == "3")
// comparacion estricta 
console.log(3 === "3")
console.log(3 === 3)
// comparacion diferente no estricta
console.log(3 != 3)
console.log(3 != 4)
// Comparacion diferente estricta
console.log(3 !== 3)
console.log(3 !== 4)


//OPERADORES LOGICOS: OPERADORES QUE NOS PERMITEN TRABAJAR CON VALORE BOOLEANOS

let op1 = true;
let op2 = false;

// tabla de verdad para 'AND' (&&)
/*  V & V = V
    V & F = F
    F & V = F
    F & F = F 
*/

console.log(op1 && op2)


// tabla de verdad para 'OR' (||)
/*  V & V = V
    V & F = V
    F & V = V
    F & F = F 
*/

console.log(op1 || op2)

//OPERADOR TERNARIO: nos permite establecer mensajes para una respuesta de true or false

result = (30 === '30') ? 'SI es igual' : 'NO es igual';

console.log(result)


//SENTENCIA SWITCH: esta nos permite evaluar un valor y dependiendo
// de su valor se ejecutaran unas instrucciones u otras 

//  estructura base
/*let expresion = prompt ('escribe x, y, z')
switch (expresion){
    case 'x':
        console.log('casoX')
        break;

    case y:
        console.log('casoY')
        break;

    case z:
        console.log('casoZ')
        break;

    default:
        console.log('instruccion por defecto')
}
*/


//CONDICIONAL DEL CICLO 'DO ... WHILE'
//esta nos permite ejecutar minimo una vez las instrucciones que le asignemos
// y si el ciclo while se cumple entonces se repetira hasta que no se cumpla el while

let contador = 1;
do{
    document.write(contador + " ");
    contador ++;
}while (contador <= 10){
    console.log(contador);
} 

//NOTA: document.write() funciona para hacer una impresion en HTML con los
//datos que proporcionemos dentro del parentesis


// for es otra funcion parecida con while para crear ciclos
// con for podemos usar las expresiones de break y continue
// para romper un bucle o solo hace el salto de un ciclo al bucle


//ARRELGO, LISTAS, ARRAY: este nos permite guardar varios datos en la misma variable
// guardandolos como objetos iterable

let arreglo = ['value1', 'value2', 'value3', 'value4']
console.log(arreglo)

let cursos = ['C1', 'C1', 'C1', 'C1']
console.log(cursos)

// Para poder reemplazar elementos existente en la lista...

arreglo[2] = 'reemplazo'
console.log(arreglo)

cursos[0] ='cambio de valor'
console.log(cursos)

// Para poder agregar elementos dentro de la lista...
// solo debemos elegir el indice donde queremos agregar el elemento

arreglo[5] = 'aumento'
console.log(arreglo)

cursos[20] = '20vo-dato'
console.log(cursos)

// Para conocer la cantidad de elementos de una lista
// usamos la propiedad '.length' 

console.log(arreglo.length)
console.log(cursos.length)

// dentro de las listas podemos poner cualquier dato
// y para ello usamos los sgtes '.metodos'

// insertar datos
arreglo.unshift('mas') //agregar al inicio
console.log(arreglo)

cursos.push('ultimo') //agregar al final
console.log(cursos)

//eliminar datos
arreglo.shift() //elimina al inicio
console.log(arreglo)

cursos.pop() //elimina al final
console.log(cursos)

//CONCEPTO DE MATRIZ

let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [10,11,12]
];

// las matrices son agrupaciones de listas
// estan divididas por filas y para accder a sus elementos
// se hace de la siguiente manera

console.log(matriz[2][0])

// y esta es la forma como podemos aplicar los metodos 
// para agregar, reemplazar o eliminar datos dentro de una matriz

matriz[3].push(0)
console.log(matriz[3]);


//FUNCION: nos permite definir la utilidad de un bloque de codigo
//y poder invocar su funcionalidad en cualquier parte de nuestro codigo
//es una accion que nosotros creamos con las finalidad de solo 
//crearla una vez e invocarla las veces que la necesitemos

// Su estructura es ...arreglo.

function nombreFucion(/* agregamos parametros si se necesita*/){
    document.write('esto es una fucion creada');
} //aqui solo hemos creado nuestra funcion, ahora hay que invocarla o llamarla

nombreFucion();

// probemos usando argumentos 

function mePresento(nombre = Joselito, edad= 999){
    document.write(`<br> Buenas mi nombre es ${nombre} <br> y tengo ${edad}, 
    es un gusto presentarme`);
}

// llamamos a nuestra funcion

mePresento(`Juan`,27)
mePresento(`Bibiana`,23)

// otro ejemplo 

function sumaNumeros (a,b){
    let suma = a + b;
    document.write('<br>' + suma + "<br>")
}

// llamamos a la funcion
sumaNumeros(320,9680)

// OBJETOS: esto es muy parecido a una matriz ya que nos permite 
//almacenar varios datos dentro del objeto pero estos seran conocidos 
// como propiedades que estas a su vez tiene un valor asignado

// Se crea de la siguiente manera:

let frutas = {
    Familia: "Citricos",
    cantidad: 200,
    tipo: [`limon`,`naranja`, `mandarina`]
} //esta es la estructura basica de un objeto 

let usuario=  {
    nombre: "Bibiana",
    edad: 23,
    estudiante: true,
    "tiene pasaporte": true,
    idiomas: {
        nativo: "español",
        Extranjero: {
            ingles: "avanzado",
            frances: "medio",
            aleman: "basico"
        }
    }
}
// imprimir en consola
console.log(usuario);

// para acceder al valor especifico de una propiedad usuario...
console.log(usuario.nombre)
console.log(usuario.edad)
console.log(usuario.estudiante)

// para poder agregar propiedades junto con su valor
usuario.carrera = "Diseño de interiores"
console.log(usuario)

// para eliminar una propiedad y su valor usamos ...
delete usuario.estudiante;
console.log(usuario);

// para consultar la existencia de una propiedad usamos ...
usuario.hasOwnProperty("edad"); 
console.log(usuario.hasOwnProperty("edad"));
// Si nos devuelve true quiere decir que si existe
// Si nos deuelve false quiere decir que no existe


// RECORDATORIO podemos usar los corchetes en vez de los puntos para 
// acceder a las propiedades de un objeto

usuario["estudiante"];
console.log(usuario["carrera"]);
console.log(usuario["tiene pasaporte"]);

// apliquemos los corchetes
console.log(("Mi idioma nativo es " + usuario.idiomas.nativo))
console.log("ingles:",usuario["idiomas"]["Extranjero"]["ingles"])
console.log("aleman:",usuario.idiomas["Extranjero"].aleman)
// recordemos que si aplicamos los corchetes tenemos que usar " "


//CONSTRUCTOR DE OBJETOS: como lo dice su nombre es una funcion 
// estructurada para crear un objeto con las propiedades que le asignemos

function Disco(artist, album, year ){
    this.artist = artist
    this.album = album
    this.year = year
}

let disco1 = new Disco("Troye Sivan", "Something to give each other", 2023);
console.log(disco1);


let disco2 = new Disco("JVKE", "this is what ___ feels like", 2022);
console.log(disco2);
document.write(console.log(disco2)) 


/* CLASE: hace referencia a un molde para la creacion de objetos
muy parecido a lo que es un constructor de objetos pero en este
caso tambien hay que definir metodos o las cosas que los objetos 
pueden haccer */

class Player{
    // este es el bloque del constructor 
    atributos(nombre, colorSombrero){
        this.nombre = nombre;
        this.colorSombrero = colorSombrero; 
    }
    saltar(){}
    correr(){}
    saludar(){
        return `Hola soy ${this.nombre} y mi sombrero es 
        ${this.colorSombrero}`
    }
}

    let player1 = new Player("Mario", "rojo")
    let player2 = new Player("Luigi", "verde")
    let bibisaurio = new Player("Bibi", "negro")

    console.log(player1);
    console.log(player2);
    console.log(bibisaurio);

    console.log(player1.saludar());
    console.log(player2.saludar());


