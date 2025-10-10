function quadrado (num) {
    return num ** 2;
}
let numero = parseInt(prompt('digite um numero'));
let calculo = quadrado(numero);
alert('o quadrado de ' + numero + ' é ' + calculo);

/* num sera a variavel da funçao, dentro de QUADRADO. fora da chave de RETURN, ai sim eu começo a declarar as variaveis. CALCULO vai receber QUADRADO, que esta sendo declarado
na linha de cima, sendo ele um prompt. em ALERT o texto é somado primeiro ao NUMERO(que foi inserido pelo usuario) + o calculo (que sera a funçao de quadrado sobre o numero) */
