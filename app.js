const { crearArchivo } = require('./helpers/multiplicar');
const colors = require('colors');

// const { argv } =require('./yargs/yargs')
const argv =require('./yargs/yargs')


console.clear();

// vamos a ver los argumentos que vienen de la consola 
// const [ , , arg3 = 'base=5' ] = process.argv;
// le estamos pasando un valor por defecto 
// const [ , base = 5 ] = arg3.split('=');
// aqui estoy separando, por cada igual "=" que alla 



const base = argv.b;
const listar = argv.l;
const hasta = argv.h;

crearArchivo( base , listar , hasta )
        .then(nombreArchivo =>console.log( nombreArchivo.green,'creado'.green))
        .catch(err => console.log( err ));


