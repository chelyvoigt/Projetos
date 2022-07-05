function calcula_idade ( anos )  {
	return  `Daqui a ${ anos } anos, ${ this . nome } terá ${
		this . idade  +  anos
	} anos de idade.`;
}

const pessoa1 = {
    nome: "Michelen",
    idade: 28,
}
const pessoa2 = {
    nome: "Jeferson",
    idade: 30,
}

console.log(calcula_idade.call(pessoa1, 8));