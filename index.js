// declara um array de notas, sendo o array
// composto de valores númericos
let notas = [7.5, 8.0, 6.0, 9.5, 5.0, 8.5, 7.0, 10.0, 6.5, 9.0]

notas.push(8.0);

function media(notas) {
    let soma = 0;
    let resultado = 0;

    for (let i = 0; i < notas.length; i++) {
        soma = soma + notas[i];
    }

    return soma / notas.length;

}

console.log(`A média geral das notas é ${media(notas).toFixed(2)}`)


