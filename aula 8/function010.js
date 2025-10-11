function contarImpar(n){
    qtdImpar = 0
    for (let i = 1; i<=n; i++) {
        if ((i % 2) != 0) {
            qtdImpar++;
        }
    }
    return qtdImpar;
}
let numero = parseInt(prompt('numero'));
let qtd = contarImpar(numero);
alert('a quantidade de impares é: ' + qtd);