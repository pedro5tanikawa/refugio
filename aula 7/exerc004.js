let num, somanum = 0;
for (let i=0; i<10; i++) {
    num = parseInt(prompt('numero'));
    somanum += num;
}
document.write('média : '+(somanum/10));
// usando FOR, as variaveis devem ser declaradas fora do FOR
// dentro de FOR, o contador é definido como i, sendo primeiro i igaul a 0, depois i menor que 10, e depois, caso siga a regra anterior, o i++ faz a soma de mais 1, lembrando que ele comecou em zero.
// somanum vai ser uma variavel que, enquanto nao for definida pelo usuario, sera 0. assim que o primeiro numero é definido, a variavel somanum vai substituir zero pelo valor que foi definido
// += vai somar valor a variavel, entao somanum recebe e soma o valor de num
//por fim, como a conta precisa ser isolada para ser feita, poe-se o ( ), e dentro dele o valor de somanum divido por 10, que é a quantidade total de numeros que foram adicionados