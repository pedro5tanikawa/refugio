let dahsemana = ['domingo','segunda','terça','quarta','quinta','sexta','sabado','domigo'];
let num = parseInt(prompt('digite um numero de 1 a 7:'));
if (num>=1 && num <=7) {
    console.log('o dia correspondente é:' + dahsemana[num - 1]);

} else {
    console.log('numero invalido meu mano, digita um q esteja dentro de 1 e 7');
}