/*
La expresión "!array.length" en JavaScript evalúa la longitud del arreglo "array" y luego niega su valor booleano.

La propiedad "length" de un arreglo en JavaScript devuelve el número de elementos en el arreglo. Si el arreglo tiene al menos un elemento, su longitud será mayor que cero y, por lo tanto, su valor booleano será verdadero.

Sin embargo, al aplicar el operador "!" (negación lógica), el valor booleano se invierte. Si la longitud del arreglo es mayor que cero, "!array.length" devolverá false, pero si la longitud del arreglo es cero, "!array.length" devolverá true.

Por lo tanto, "!array.length" es verdadero solo si el arreglo está vacío (es decir, no tiene elementos).


{!array?.length ? <span>Disculpe, la lista esta vacia :( </span> : null}
===
{!array?.length && <span>Disculpe, la lista esta vacia :( </span>}


- El operador de opción nula (?.) se utiliza para comprobar si una variable (en este caso, array) es nula o indefinida antes de intentar acceder a una propiedad de ese objeto (length). Si array es nulo o indefinido, la expresión se detiene y devuelve undefined.
- El operador de negación (!) se utiliza para convertir el valor resultante en un valor booleano. Si la longitud de array es 0 o undefined, la expresión se evalúa como true. Si la longitud de array es mayor que 0, la expresión se evalúa como false.

En resumen, la expresión !array?.length devolverá true si array es nulo, indefinido o tiene una longitud de cero, y false si array tiene una longitud mayor que cero.

*/

import { PasoUno } from './PasoUno';

// const ENUM = {
// 	1: <PasoUno />,
// 	2: <p>Paso Dos</p>,
// 	3: <p>Paso Tres</p>,
// };

const ENUM = {
	info: <PasoUno />,
	envio: <p>Paso Dos</p>,
	checkout: <p>Paso Tres</p>,
};

const CardList = ({ array, title = 'Lista', step }) => {
	// console.log(!array?.length);

	return (
		<div>
			<h1>{title} ENUM</h1>
			{ENUM[step]}
		</div>
	);
};

export { CardList };
