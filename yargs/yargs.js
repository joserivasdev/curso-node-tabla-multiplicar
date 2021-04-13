const argv = require('yargs')
             .option('b',{
                alias: 'base',
                type: 'number',
                // demandOption: true,
                default: 7,
                describe: 'Es la base de la tabla de multiplicar.'
             })
             .option('l',{
               alias: 'listar',
               type: 'boolean',
            //    demandOption: true,
               default: false,
               describe: 'Muestra la tabla en consola.'
            })
            .option('h',{
                alias: 'hasta',
                type: 'number',
                // demandOption: true,
                default: 10,
                describe: 'Hasta que numero sera la tabla'
             })
             .check((argv,option) => {
                if ( isNaN( argv.base ) ){
                   throw 'La base, tiene que ser un numero'
                }

                return true;
             })
             .argv;

// module.exports = {
//     argv
// }

module.exports = argv;