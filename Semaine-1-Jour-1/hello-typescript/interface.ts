interface Pokemon {
	name: string, 
	types: string[], 
	level: number, 
	hp: number, 
	isLegendary: boolean 
} 

interface Pikachu extends Pokemon {
}

const Pikachu: Pokemon = {
	name: "Pikachu",
	types: ["Electric"],
	level: 25,
	hp: 35,
	isLegendary: false
};

console.log(Pikachu);
console.log(Pikachu.name);
console.log(Pikachu.types);
console.log(Pikachu.level);
console.log(Pikachu.hp);
console.log(Pikachu.isLegendary);

