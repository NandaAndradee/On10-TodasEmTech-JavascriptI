function criarTabela(event) {
    event.preventDefault();
    let pegaTitulo = document.getElementById('titulo').value;
    let pegaAutor = document.getElementById('autor').value;
    let pegaISBN = document.getElementById('isbn').value;
    let pegaDataPublicacao = document.getElementById('data').value;
    let pegaPagina = document.getElementById('pages').value;
    let dataInsercao = new Date().toLocaleDateString('pt-br');
    let horarioInsercao = new Date().toLocaleTimeString('pt-br');

    if (pegaTitulo==="" || pegaAutor==="" || pegaISBN==="" || pegaDataPublicacao==="" || pegaPagina==="" ) {
        alert("Preencha completamente todos os dados")
    } else {
        document.getElementById('corpoTabela').innerHTML += `
            <tr id="tr-tabela">
                <td>${pegaTitulo}</td>
                <td>${pegaAutor}</td>
                <td>${pegaISBN}</td>
                <td>${pegaDataPublicacao}</td>
                <td>${pegaPagina}</td>
                <td>${dataInsercao}, ${horarioInsercao}</td>
                <td><button id="botao-tab" class="botao-tab" onclick="botaoRemover(event)"></button></td>
            </tr>
        ` 
    }

}

function botaoRemover(event) {
    document.getElementById("tr-tabela").remove();
}






