import heroes,{owners} from './data/heroes';

// uso de callback, para regresar el elemento que necesito
// const getHeroeById = (id) => {
//     return heroes.find((heroe) => {
//         if (heroe.id === id) {
//             return true;
//         } else {
//             return false;
//         }
//     });
//! } Igual
//? find traer 1 
const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);

console.log(getHeroeById(5));

const getHeroeByOwner = (owner)=> heroes.filter((heroe) => heroe.owner === owner);

console.log(getHeroeByOwner('Marvel'))


