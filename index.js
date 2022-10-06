//traer la dependencia del componente suma
import {sumar , restar} from './sumar.js'
//traer la dependencia del componente estudiante
import estudiantes from './materias.js'
//traer la dependencia del componente materia
import materias from './materias.js'

//1. recorrido de arreglo:
materias.forEach((materia)=> {
    if(materia.Profesor === 'Cristian Buitrago'){ 
    console.log( `materia: ${materia.Name}`)
    console.log( `materia: ${materia.Notas}`)
        }
    })
//2. convertir a un arreglo de profesores
// metodo map()
let profesores = materias.map(function(materia){
    return materia.Profesor
})
console.log(profesores)

//3. agregar una materia al arreglo de 
//push
materias.push(
    {
        Id: 5,
        Name:"Cultura Fisica",
        Profesor: "Luis Baquero",
        Notas:[
            1.0,
            1.0,
            1.0
        ]
    }
)

//4. busqueda en arreglos:
//find
const PHP = materias.find(function(materia){
    return materia.Profesor === 'Crisrtian Buitrago'
})

console.log(PHP)

/*
//desestructuración:
let {id,first_name,last_name,DNI} = estudiantes

//funcion para estudiantes
console.log(`Id estudiante ${id}`)
console.log(`Nombre estudiante ${first_name}`)
console.log(`Apellido estudiante ${last_name}`)
console.log(`DNI estudiante ${DNI}`)

//let: variables
let a = 10
//const: constantes
const b = 29
//funcion para sumar dos numeros
console.log(`suma de a+b:${sumar(a , b)}`)
//funcion para restar dos numeros
console.log(`resta de a+b:${restar(a , b)}`)
*/