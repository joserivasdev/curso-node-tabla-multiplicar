const fs = require('fs');
const colors = require('colors');


const crearArchivo = async( base = 5 , listar = false , hasta = 10 ) => {

    try {

        let salida = '';
        let consola = '';
    
        for (let index = 1; index <= hasta ; index++) {
            consola += `${base} ${'x'.magenta} ${index} = ${base*index}\n`;
            salida += `${base} x ${index} = ${base*index}\n`;
        
        }

        if ( listar ){

            console.clear();

            console.log("=================================".yellow);
            console.log(`           TABLA DEL ${base}           `.yellow);
            console.log("=================================".yellow);

            console.log(consola);
        }
                
        // console.log(salida);
        
        // fs.writeFile(`tabla-${base}.txt`, salida, ( err ) => {
        //     if (err) throw err
            
        //     console.log(`Tabla-${base}.txt created`);
        // });
        
        fs.writeFileSync( `./salida/Tabla-${base}.txt`, salida );
        
        // si sucede un error tendriamos que atraparlo con un try & catch 
        
        return(`Tabla-${base}.txt`);
        
    } 
    
    catch (error) {
        throw error;
        // return error;
    }
}



// manera de exportar cosas en node 
module.exports = {
    // se le asigna un nombre 

    // crearArchivo : crearArchivo 
    // se comento porque era redundante 

    crearArchivo,
}