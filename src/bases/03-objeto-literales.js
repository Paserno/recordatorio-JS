

const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion:{
        ciudad: 'New York',
        zip: 5354564,
        lat: 14.3232,
        lng: 34.9233321
    }
};

// no hacer const persona2 = persona; usar operador spread {...}
const persona2 = {...persona};
persona2.nombre = 'Peter';


console.log(persona);
console.log(persona2);