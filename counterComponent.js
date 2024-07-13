// counterComponent.js

// Función que define y devuelve el componente de contador
const createCounterComponent = () => {
    let count = 0; // Inicializamos el contador en cero

    // Función para incrementar el contador
    const increment = () => {
        count++;
        console.log(`Contador incrementado. Nuevo valor: ${count}`);
    };

    // Función para decrementar el contador (siempre que sea mayor que cero)
    const decrement = () => {
        if (count > 0) {
            count--;
            console.log(`Contador decrementado. Nuevo valor: ${count}`);
        } else {
            console.log("El contador ya está en cero. No se puede decrementar más.");
        }
    };

    // Función para obtener el valor actual del contador
    const getCount = () => {
        return count;
    };

    // Retornamos un objeto con las funciones que queremos exportar
    return {
        increment,
        decrement,
        getCount
    };
};

// Exportamos la función para que pueda ser utilizada en otros archivos
module.exports = createCounterComponent;
