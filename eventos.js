let turma = [
    'Alexandre',
    'Erica',
    'Davi',
    'Igor',
];

turma.push('Alicia'); //adicionar em qualquer posição//
turma[5] = 'Italo';  //definir uma posição específica pro que vai adicionar//
turma.push('Talyson');

turma[3] = 'Elias' //Elias substituiu Igor na posição em que ele estava//

turma [6] += ' Soares'

let quantidade = turma.length;

for (let n = 0; n < quantidade; n++) {
   // document.write(turma[n] + '<br>'); //
    document.write(`${turma[n]} <br>`); 
    

}
