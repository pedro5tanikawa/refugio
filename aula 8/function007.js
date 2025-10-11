function media(nota1, nota2) {
    return(nota1+nota2)/2;
}
let nota1 = parseFloat(prompt('nota1'));
let nota2 = parseFloat(prompt('nota2'));
let mediacalculada = media(nota1, nota2);
alert('a media é: ' + mediacalculada);
