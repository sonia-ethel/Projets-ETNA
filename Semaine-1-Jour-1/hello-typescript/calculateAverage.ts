/*Créez une fonction nommée calculateAverage.
Cette fonction doit prendre trois paramètres de type number : a, b et c.
La fonction doit additionner ces trois valeurs, puis diviser le total par 3, et arrondir à la decuième décimale.
Affichez le résultat arrondi à la deuxième décimale dans le terminal.
La fonction ne retourne rien. */

function calculateAverage(a: number, b: number, c: number): void {
	let moyenne = (a + b + c)/ 3;
	let arrondi = Math.round(moyenne * 100) / 100;
	console.log(arrondi);
}

// calculateAverage(10, 13.4, 19.1);