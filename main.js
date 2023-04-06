const form = document.getElementById("form-atividade");
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >=7 ? 'Aprovado' : 'Reprovado'}</td>`;
    linha += `</tr>`;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linha;


});