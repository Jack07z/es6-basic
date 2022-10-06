
let colors = require('colors')
const estudiantes1 =["Camilo Madero" , 
                     "Duvan Zapata" , 
                     "Camilo Ibañez" , 
                     "Camilo Avila"];

const estudiantes2 =["COPITA" , 
                     "YOGUI" , 
                     "DANTE" , 
                     "DRACO"];
                     
//operador spread(resto)
const estudiantes3 = ["Veronica" , ...estudiantes1 , "paula" , ...estudiantes2];

//desestructuracion arreglo:
//let [ CM , DZ ,CI , CA ] = estudiantes1;
console.log(estudiantes3)  