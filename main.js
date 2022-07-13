// base de datos de personas y edades.
let listaEdades = []
let contadorEdades = 0

let persona1 = prompt('Ingresa la edad del primer participante')
let persona2 = prompt('Ingresa la edad del segundo participante')
let persona3 = prompt('Ingresa la edad del tercer participante')
let persona4 = prompt('Ingresa la edad del cuarto participante')
let persona5 = prompt('Ingresa la edad del quinto participante')

const edadMinima = 21

listaEdades.push(persona1, persona2, persona3, persona4, persona5)


// loop para dar un mensaje de bienvenida o de rechazo

for(var i = 0; i < listaEdades.length; i++){
    if(listaEdades[i] > edadMinima) {
        console.log('Bienvenido al curso')
    } else console.log('Lo lamentamos, el curso es para mayores de 21')
}
// contador 
for (let i = 0; i < listaEdades.length; i++){
    contadorEdades += parseInt(listaEdades[i])
}

// promedio edades.

function promedioEdades() {
    return contadorEdades / listaEdades.length
}

console.log(listaEdades)
console.log('Los alumnos suman ' + contadorEdades + ' anios en total')
console.log('La edad promedio de los alumnos es ' + promedioEdades())







