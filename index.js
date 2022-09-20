const express = require('express')
const path = require('path');
const app = express();
const port = 3000

app.use(express.static('public'));

app.get('/', (req, res) => { //rota de acesso ao site (poderia botar por ex: /"contato" e no index seria '/contato.html')
  res.sendFile(path.join(__dirname, '/index.html'));
})

app.get('/formacao-academica', (req, res) => { //rota de acesso ao site/página. nesse caso é a formação acadêmica)
  res.sendFile(path.join(__dirname, '/academico.html'));
})

app.get('/projetos', (req, res) => { //rota de acesso ao site/página. nesse caso são os projetos)
  res.sendFile(path.join(__dirname, '/projeto.html'));
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})

