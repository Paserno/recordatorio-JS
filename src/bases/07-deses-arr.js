


const personajes = ['Goku', 'Vegeta', 'Trunks'];
const [,,p3] = personajes;
console.log(p3);


const retrnaArr = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retrnaArr();
console.log(letras, numeros);


/* eslint-disable react-hooks/rules-of-hooks */

/**         Tarea
 * 1. el primer valor del arr se llamá nombre
 * 2. se llamara setNombre
 */
const useState = (valor) =>{
    return [valor, () =>{console.log('Hola Mundo')}];
}

const [nombre, setNombre] = useState('Goku');
console.log(nombre)
setNombre();



