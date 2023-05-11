const express = require('express');
const iframe = require('node-iframe');

const app = express();

app.get('/', (req, res) => {
  const myIframe = iframe({
    src: process.env.URL + '/Runtime/Runtime/Form/TC.CitizenIdX.Form/',
    width: '100%',
    height: '500px'
  });

  res.send(myIframe);
});

app.listen(3000, () => {
  console.log(process.env.HOST_URL);
});