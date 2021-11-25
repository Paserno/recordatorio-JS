


const nombre   = 'Paserno';
const apellido = 'Rojas';

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = ` ${nombre} ${apellido}
${5 * 4}`;

console.log(nombreCompleto);


function getSaludo(nombre){
    return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${getSaludo(nombre)}`);