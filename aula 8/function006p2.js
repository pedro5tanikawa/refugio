function retornames(mes) {
    let nomemes;
    switch (mes) { 

        case 1: nomemes("Janeiro"); break; 
      
        case 2: nomemes("Fevereiro"); break; 
      
        case 3: nomemes("Março"); break; 
      
        case 4: nomemes("Abril"); break; 
      
        case 5: nomemes("Maio"); break; 
      
        case 6: nomemes("Junho"); break; 
      
        case 7: nomemes("Julho"); break; 
      
        case 8: nomemes("Agosto"); break; 
      
        case 9: nomemes("Setembro"); break; 
      
        case 10: nomemes("Outubro"); break; 
      
        case 11: nomemes("Novembro"); break; 
      
        case 12: nomemes("Dezembro"); break; 
      
        default: nomemes("Número inválido"); 
      
      } 
      return nomemes
      
}
let mes = parseInt(prompt('digite um numero correspondente ao mes que voce quer saber: '));
let nome = retornames(mes);
alert(nome);