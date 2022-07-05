function compara_numeros(num1, num2) {
    if (!num1 || !num2) return 'Defina dois números!';

	const primeira_frase = cria_primeira_frase(num1, num2);
	const segunda_frase = cria_segunda_frase(num1, num2);

	return `${primeira_frase} ${segunda_frase}`;
}

function cria_primeira_frase(num1, num2) {
	let sao_iguais = '';

	if (num1 !== num2) {
		sao_iguais = 'não';
	}

	return `Os números ${num1} ${num2} ${sao_iguais} São iguais.`;
}

function cria_segunda_frase(num1, num2) {
	const soma = num1 + num2;
    
	let resultado_dez = 'menor';
	let resultado_vinte = 'menor';

    const compara10 = soma > 10;
    const compara20 = soma > 20;

	if (compara10) {
		resultado_dez = 'maior';
	}

	if (compara20) {
		compara_vinte = 'maior';
	}

	return `Sua soma é ${soma}, que é ${resultado_dez} do que 10 e ${resultado_vinte} do que 20.`;
}

console.log(compara_numeros(50, 10))