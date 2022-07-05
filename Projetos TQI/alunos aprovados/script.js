const alunos = [
{
    nome: 'joão',
    nota:  '5',
    turma:' 1B',
},

{
    nome: 'Sofia',
    nota:  '9',
    turma:' 1B',
},

{
    nome: 'Paulo',
    nota:  '7',
    turma:' 1B',
},

{
    nome: 'Beatriz',
    nota:  '2',
    turma:' 1B',
},
];

function alunos_aprovados(arr, media) {
    let aprovados = [];

    for (let i = 0; i < arr.length; i++) {

        const {nome, nota} = arr[i];

        if(nota >= media){
            aprovados.push(nome);
        }
    }
    
    return Aprovados;
}

console.log(alunos_aprovados(alunos, 5));