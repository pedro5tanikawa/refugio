function verificar(num) {
    let msg;
    if (num > 0) {
        msg = 'numero positivo';
    } else if (num < 0) {
        msg = 'numero negativo';
    } else {
        msg = 'voce digitou 0';
    }
    return msg;
    }
let numero = parseInt(prompt('numero'));
let txt = verifica(numero);
alert(txt);