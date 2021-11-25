// const saludar = function(name){
//     return `hola, ${name}`;
// }

const saludar2 = (name)=>{
    return `hola, ${name}`;
}
const saludar3 = (name)=> `hola, ${name}`;
const saludar4 = () => 'hola diego maradon';
// console.log(saludar('goku'));

// console.log(saludar2);
console.log(saludar2('pepe'));
console.log(saludar3('vegeta'));
console.log(saludar4());


const getUser = () => ({
    
        uid: 'ABC123',
        username: 'El__pepe',
    
});

const user = getUser();
console.log(user);


// Tarea
// // 1. Transforma una funcion de flecha
// 2. retornar un objeto implicito
// 3. Prueba
const getUsuarioActivo = (name) =>({
        uid: 'ABC567',
        username: name,    
});


const usuarioActivo = getUsuarioActivo('Diego');
console.log(usuarioActivo);


