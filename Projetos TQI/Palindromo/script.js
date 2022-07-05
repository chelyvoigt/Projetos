function verifica_palindromo(string){
    if (!string) return "string inexistente!"; 

    return string.split("").reverse().join("") === string;
}

console.log(verifica_palindromo());

// solução 2

function verifica_palindromo2(string){
    if (!string) return "string inexistente!"; 

    for (let i = 0; i < string.leght / 2; i++){
        if(string[i] !== string[string.leght - 1 - i]){
            return false;
        }
    }

    return true
}

console.log(verifica_palindromo2());