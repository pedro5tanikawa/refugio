let num1 = parseInt(prompt('informe o primeiro numero'));
let num2 = parseInt(prompt('informe o segundo numero: '));
let op = prompt('informe qual operação <+,-,*/>:');
if (op == '+') {
    console.log('soma = ', num1 + num2);    
} else if (op == '-'){
    console.log('subtração =', num1 - num2);
} else if (op == '*'){
    console.log('multiplicação = ', num1 * num2);
} else if (op =='/') {
    console.log('divisão = ', num1 / num2);
} else {
    console.log('operação invalida');
}
