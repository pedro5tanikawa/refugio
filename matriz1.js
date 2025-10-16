let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
];
document.write(matriz);
document.write(matriz[0][1]);
matriz[1][1] = 99;
document.write(matriz);

const matri = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
];
document.write('<table>')
for(let i = 0; i < matri.length; i++) {
    document.write('<tr>');
    for( let j = 0; j < matri[i].length; j++) {
        document.write('<td>' + matri[i][j]+ '</td>')
        }
        document.write('</tr>');
}
document.write('</table>');