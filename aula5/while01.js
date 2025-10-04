/* ler dois numeros e a operaçao ate que o usuario informe a saida */
let continua = 's';
let num1, num2;
let operacao;
while (continua == 's') {
    num1 = parseInt(prompt('informe o primeiro numero'));
    num2 = parseInt(prompt('informe o segundo numero'));
    operacao = prompt('operacao <+ - * />');
    if (operacao == '+') {alert('resultado: '+ (num1 + num2))}
    else if (operacao == '-') {alert('resultado: ' + (num1 - num2))}
    else if (operacao == '*') {alert('resultado: ' + (num1 * num2))}
    else if (operacao == '/') {alert('resultado: ' + (num1 / num2))}
    else {alert('operação invalida');}
    continua = prompt('deseja permanecer no programa? <s/n>');
}
alert('programa finalizado');