const form = document.getElementById("form-atividade");
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji Celebrando" />';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji Triste" />';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt('Digite a média final minima:'));


let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionaLinha();
    adicionaTabela();
    atualizaMedia();

});

function adicionaLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if(atividades.includes(inputNomeAtividade.value)) {
        alert(`A Atividade ${inputNomeAtividade.value} já foi inserida.`);
    } else{
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));
    
    
        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado } </td>`;
        linha += `</tr>`;
    
        linhas += linha;
    }

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function adicionaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

}

function atualizaMedia(){
const mediaFinal = calculaMediaFinal();

document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);
document.getElementById('media-final-resultado').innerHTML = mediaFinal >= 7 ? spanAprovado : spanReprovado ;
    
    console.log(mediaFinal);

}

function calculaMediaFinal(){
    let somatorio = 0;

    for (i=0; i<notas.length ; i++) {
        somatorio += notas[i];
    }

    return somatorio/ notas.length;

}

