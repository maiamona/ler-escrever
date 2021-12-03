// 'w' => write (ele apaga e reescreve), 'a' => apend (adiciona, escreve ao final do arquivo)

const fs = require('fs').promises;

// const caminhoArquivo = path.resolve(__dirname, '..', 'teste.txt');

module.exports = (caminho, dados) =>{
    // fs.writeFile(caminhoArquivo, json, {flag: 'w'});
    fs.writeFile(caminho, dados, {flag: 'w', encoding: 'utf-8'});
};


// fs.writeFile(caminhoArquivo, 'Frase 1\n', {flag: 'a'});

