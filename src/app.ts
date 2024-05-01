import { controlDeActivos } from "./funciones/objetos";
import { eliminarElementoPorID } from "./funciones/funcione";
console.log(controlDeActivos);

// Ejemplo de uso:
const idAEliminar = 2; // Por ejemplo, ID del elemento a eliminar
const controlDeActivosActualizado = eliminarElementoPorID(controlDeActivos, idAEliminar, (elementoEliminado) => {
    console.log("Elemento eliminado:");
    console.log(elementoEliminado);
});
console.log(controlDeActivosActualizado);


import { fetchCities } from './funciones/funcione';
fetchCities('Tokyo')
    .then(cities => {
        console.log('Ciudades obtenidas:', cities);
    })
    .catch(error => {
        console.error('Se produjo un error:', error);
    });