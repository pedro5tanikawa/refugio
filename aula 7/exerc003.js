let preco, maiorpreco = 0;
for (let i=0; i<5; i++) {
    preco = parseInt(prompt('preço'));
    if (maiorpreco < preco) {
        maiorpreco = preco;
    }
}
document.write('o maior preço é: ',maiorpreco);