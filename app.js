const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const escreve = require('./modules1/escreve');
const ler = require('./modules1/ler')

// const pessoas = [// é um array de objetos
//     {nome: 'João'},
//     {nome: 'Maria'},
//     {nome: 'Eduardo'},
//     {nome: 'Luiza'},
//     ];
    
//     const json = JSON.stringify(pessoas, '', 2);// converter os objetos em 'json'
//     escreve(caminhoArquivo, json);

//    async function lerArquivo(caminho) {
//     const dados = await ler(caminho);
//     return dados;
//    }

   async function lerArquivo(caminho) {
    const dados = await ler(caminho);
    renderizaDados(dados);
   }

//    const dadosArquivo = lerArquivo(caminhoArquivo)
//    .then(dados => console.log(dados));
  
function renderizaDados(dados) {
    // console.log(dados);
    dados = JSON.parse(dados);
    // dados.forEach(valor => console.log(valor));
    dados.forEach(valor => console.log(valor.nome));
}

lerArquivo(caminhoArquivo);