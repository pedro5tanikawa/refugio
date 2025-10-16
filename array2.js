let alunos = [];
let notas = [];
for (let i = 0; i < 5; i++) {
  
    alunos.push(prompt('digite o nome do aluno' + (i + 1)+ ':'));
    notas.push(parseFloat(prompt('digte a nota de' + alunos[i] + ':')));
}
let contatudo = 0;
for (let i = 0; i < notas.length; i++) {
    contatudo += notas[i];
}
let amedia = contatudo / notas.length;
console.log('a media da turma é: ' + amedia.toFixed(2));
console.log('notas dos alunos: ');
for (let i = 0; i < alunos.length; i++) {
    console.log(alunos[i] +': '+ notas[i])
}