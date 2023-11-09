console.log("Hola esto es un condicional JS para practicar");

/*Los conicionales nos permite crear funciones
 o ejecuciones para pragmentos del codigo */

// primer  condicional es if 
// segundo condicional es if & else
//multi contidional es if & else if ... & else


const edadDeEntrada = 18;

const edadUsurario = 15;

// {}= representan en este caso una linea de codigo
if(edadUsurario>=edadDeEntrada){
    //todo lo que este dentro de las llaves pertenece al "if"
    console.log("Puedes entrar, tienes mas de 18")
}
else if(edadUsurario<=12){
    console.log("Estamos llamando a la policia")
}
else{
    /*dentro de las laves escribimos 
    la accion para esta condicion */
    console.log("Eres muy joven, mejor vete pa' tu casa pana")
}

//bucle / ciclos / loops
// for: su erstructura es la siguiente
// for(inicializacion; condicion; operacion)

//probemos no crear un bucle infinito, ya que podemos bloquear la PC
for(let i=0; i<10; i++){
    console.log(i)
}

const estudiantes = ["Geral", "Nicol", "Camila", "Marieth", "Walter", "Maria"]
//para poder imprimir un elemento dentro de una lista o un arreglo aplicamos lo siguiente
// console.log(nombre de la lista o arreglo creado[#indice])
//por  ejemplo.... 

console.log(estudiantes[0])
console.log(estudiantes[1])
console.log(estudiantes[2])
console.log(estudiantes[3])
console.log(estudiantes[4])
console.log(estudiantes[5])


console.log("Hola " + estudiantes[0] + " eres un buen estudiante")

for(let i = 0; i < estudiantes.length; i++){
    console.log("Hola "+estudiantes[i]+" eres un buen estudiante")
}

/* for ...of: este bucle esta hecho para iterar arreglos o listas
    su estructura es la siguiente: 
    for(let ESPACIO_CONTENEDOR of nombre_lista){
        console.log(ESPACIO_CONTENEDOR)
    }*/

for(let estudiante of estudiantes){
    console.log(estudiante)
}

const frutas = ["Manzana","Pera","Durazno","Uva","Naranja"]
for(let fruta of frutas){
    console.log(fruta)
}

let contador = 0

while(contador < 60){
    console.log("Hola", contador)
    contador++;
}

