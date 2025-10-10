
let idade, somaqtdmaior = 0;
for (let i = 1; i<=10; i++) {
    idade = parseInt(prompt('idade?'));
    if (idade >= 18) {
        somaqtdmaior++;
    }
}
document.write('qtd de maiores: ' +somaqtdmaior);