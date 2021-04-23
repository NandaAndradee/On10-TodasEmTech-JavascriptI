function criarTabela(event) {
    event.preventDefault();
    let pegaTitulo = document.getElementById('titulo').value;
    let pegaAutor = document.getElementById('autor').value;
    let pegaISBN = document.getElementById('isbn').value;
    let pegaDataPublicacao = document.getElementById('data').value;
    let pegaPagina = document.getElementById('pages').value;
    let dataInsercao = new Date().toLocaleDateString('pt-br');
    let horarioInsercao = new Date().toLocaleTimeString('pt-br');

    document.getElementById('corpoTabela').innerHTML += `
        <tr>
            <td>${pegaTitulo}</td>
            <td>${pegaAutor}</td>
            <td>${pegaISBN}</td>
            <td>${pegaDataPublicacao}</td>
            <td>${pegaPagina}</td>
            <td>${dataInsercao}, ${horarioInsercao}</td>
        </tr>

    `

}






