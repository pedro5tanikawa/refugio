let notas = [
    [8.5, 2, 9.5],
    [3, 6.5, 7.5],
    [9.5, 3.5, 8.5]
];
console.log('Matriz é: ');
console.log(notas)
for (let i = 0; i < notas.length; i++) {
    console.log(notas[i].join(' | '));

let somaNotas = 0; 

for (let j = 0; j < notas.length; j++) { 

    somaNotas += notas[i][j]; 
}
let mediaTurma = somaNotas / notas[i].length; 
console.log('aluno: '+(i+1)+ 'media: ' +mediaTurma.toFixed(1));
}
let maior = notas[0][0]; 

for (let i = 0; i<notas.length; i++){ 
    for (let j=0; j<notas[i].length; j++) {

    if (notas[i][j]>maior){ 

        maior = notas[i][j]; 

    } 

} 
}
console.log('maior notas: '+maior); 