
let ctd = 1;
let num = parseInt(prompt('informe o valor'));
let final = parseInt(prompt('informe ate quanto quer multiplicar'));
while (ctd <= final) {
    document.write(num +' x '+ctd+ ' = '+ num*ctd+ '<br>');
    ctd++;
}