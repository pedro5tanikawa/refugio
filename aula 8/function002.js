function somar(a,b) {
return a + b;
}

function multiplicar (a,b) {
    return a * b;
}

function dividir (a,b) {
    return a / b;
}

function subtrair(a,b) {
    return a - b;
}
let n1 = parseInt(prompt('numero 1'));
let n2 = parseInt(prompt('numero 2'));
//---------------------------
let soma = somar(n1,n2); alert(soma);
let subt = subtrair(n1,n2); alert(subt);
let divi = dividir(n1,n2); alert(divi);
let multi = multiplicar(n1,n2); alert(multi);