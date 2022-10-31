if (process.env.NODE_ENV === 'production') {
  require('@google-cloud/trace-agent').start();
}

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const name = process.env.NAME || 'World';
  res.send(`Hello ${name}!`);
});

app.get('/proxy', (req, res) => {
  const axios = require('axios');
  const url = process.env.URL;
  axios({
    method: 'get',
    url: url,
    params: {
      proxy: 'on'
    }
  })
    .then(function (response) {
      res.send(`Proxy: ${response.data}`);
    })
    .catch(function (error) {
      res.send(`Proxy error: ${error}`);
    })
    .then(function () {
      console.log(`Proxy done: ${url}`);
    })
});

const port = parseInt(process.env.PORT) || 8080;
app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`);
});
