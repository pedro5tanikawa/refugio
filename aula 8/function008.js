function converte(m) {
    return m * 100;
}
let metros = parseInt(prompt('informe os metros'));
let centimetros = converte(metros);
alert('a metragem em centimetros é: ' + centimetros);