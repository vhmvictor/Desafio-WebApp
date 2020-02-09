const app = require('../server')
const request = require('request');
const bodyParser = require('body-parser');

const API_URL = 'https://dog.ceo/api/breeds/image/random';

app.use(bodyParser.json());
    
app.get('/api/consultaapi', function(req, response) {
  request(API_URL, (erro, res, body) => {
    response.send(body);
  });
});

app.listen(3333);