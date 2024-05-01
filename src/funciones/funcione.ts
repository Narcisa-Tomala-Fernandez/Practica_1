
export function eliminarElementoPorID(arreglo: any[], id: number | string, callback: (elementoEliminado: any) => void): any[] {
    const indice = arreglo.findIndex(elemento => elemento.id === id); // Cambiar "id" por el atributo único adecuado
    if (indice !== -1) {
        const elementoEliminado = arreglo[indice];
        if (callback) {
            callback(elementoEliminado);
        }
        arreglo.splice(indice, 1);
    }
    return arreglo;
}

import { ICity } from './objetos';
export function fetchCities(cityName: string): Promise<ICity[]> {
    return fetch(`http://geodb-free-service.wirefreethought.com/v1/geo/cities?namePrefix=${cityName}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al realizar la solicitud');
            }
            return response.json();
        })
        .then(data => {
            // Asumimos que la propiedad 'data' contiene la lista de ciudades
            const cities: ICity[] = data.data as ICity[];
            return cities;
        });
}




