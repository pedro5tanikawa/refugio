function verificarIdade (idade) {
    let mensagem;
    if (idade<=18) {
        mensagem = 'menor de idade';
    } else {
        mensagem = 'maior de idade';
    }
    return mensagem;
}

let idade = parseInt(prompt('informe a idade'));
let texto = verificarIdade(idade);
alert(texto);