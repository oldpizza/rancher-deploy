const express = require('express');
const iframe = require('node-iframe');

const app = express();

app.get('/', (req, res) => {
  const myIframe = iframe({
    src: rocess.env.URL + '/Runtime/Runtime/Form/Solar.Menulist.Form/',
    width: '100%',
    height: '500px'
  });

  res.send(myIframe);
});

app.listen(3001, () => {
  console.log(process.env.HOST_URL_RESERVATION);
});