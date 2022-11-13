const { mostrarMenu, avanzarApp} = require('./funciones/mensajes');
require ('colors');

console.clear();


const AppPrincipal = async() => {

    let opcion = ''
    do {
        opcion = parseInt(await mostrarMenu());
        if (opcion !== 6) {
            await avanzarApp();
        }
    }while (opcion !== 6);

    avanzarApp();
}

AppPrincipal();