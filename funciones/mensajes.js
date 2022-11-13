const {rejects} = require("assert");
const { resolve } = require("path");
const { stdin, stdout} = require("process");

require("colors");

const mostrarMenu = () => {

    return new Promise((resolve) => {

        console.clear();
        console.log();
        console.log('       Miguel Restrepo      '.yellow);
        console.log('============================'.yellow);
        console.log('       Menu de opciones       '.yellow);
        console.log('============================\n'.yellow);
        console.log(
            " 1: Crear Empleado\n 2: Listar Empleados\n 3: Listar Empleados Agregados\n 4: Listar Empleados Retirados\n 5: Borrar Empleado\n 6: Salir\n"
            .blue
            );
    

    const readLine = require("readline").createInterface({
        input : process.stdin,
        output : process.stdout,
    })

    readLine.question ("Seleccione una opción: ", (opt) => {
        readLine.close();
        resolve(opt);
    });
});
};

const avanzarApp = () => {

    return new Promise( (resolve) => {
        const readLine = require("readline").createInterface({
            input : process.stdin,
            output : process.stdout,
        });

        readLine.question(`\nPresione ${"ENTER".green} para continuar\n`, (opt) => {
            readLine.close();
            resolve();
        });
    });
};

module.exports = {
    mostrarMenu,
    avanzarApp,
};