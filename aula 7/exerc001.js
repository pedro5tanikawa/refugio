let numero = parseInt(prompt('digite um numero'));
while (numero != 0) {
    if ((numero % 2) == 0) {
        alert('numero par');
    } else {
    alert('numero impar');
    }
    numero = parseInt(prompt('digite o numero <0 para sair> '));
}
