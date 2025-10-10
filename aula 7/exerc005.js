let nome, idade, maisvelho, maioridade = 0;
for (let i=0; i<5; i++) {
    nome = prompt('digite o nome da pessoa' + (i + 1));
    idade = parseInt(prompt('digite a idade de ' + nome));
 if (idade > maioridade) {
    maioridade = idade; maisvelho = nome;
 }
}
document.write('dentre os 5, o mais velho é: ', maisvelho, "com seus", maioridade, 'anos.')
/* mais velho e maioridade sao variaveis que nao tem valor inicial, sendo eles 0
   dentro de NOME, tem (i + 1) sendo apenas uma detalhe que vai enumerar cada participante
   dentro de IF é dada uma questao, no caso se idade é maior que maioridade. se sim, a linha abaixo é executada, ou seja: maioridade deixa de ser 0 e passa a ter o valor que foi preenchido em idade
   e maisvelho recebe nome, como antes nao havia nada definido nessa variavel, ela passa a ter o nome que foi preenchido
   so com esse if, todo o calculo é definido. */
   