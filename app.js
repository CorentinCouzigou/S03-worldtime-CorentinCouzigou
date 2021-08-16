
const express = require('express');
const app = express();
const port = 3000;

const fuseaux = require('./my_modules/fuseau');

app.get('/', (req,res) => {
    res.sendFile('./views/index.html', {root: __dirname});
});

app.get('/city/:name', (req, res) => {
fuseaux(req, res);
});

console.log ('Serveur connecté');
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${3000}`)
  });
