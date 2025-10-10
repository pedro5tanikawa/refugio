function verificarIdade (){
    let idade = parseInt(prompt('digite sua idade'))
    if (idade<=17) {
        document.write('menozin')
    } else {
        document.write('maioridade jae')
    }
}
verificarIdade()

function verificarIdade (idade) {
    let mensagem;
    if (idade>=18) {
        mensagem = 'menor de idade';
    } else {
        mensagem = 'maior de idade';
    }
    return mensagem;
}

let idade = parseInt(prompt('informe a idade'));
let texto = verificarIdade(idade);
alert()