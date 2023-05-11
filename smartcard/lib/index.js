const express = require('express');
const iframe = require('node-iframe');

const app = express();

app.get('/', (req, res) => {
  const iframeUrl = process.env.URL + '/Runtime/Runtime/Form/TC.CitizenIdX.Form/';
  const iframeHtml = iframe({
    url: iframeUrl,
    width: '100%',
    height: '500px',
  });
  const html = `<html>
    <head>
      <title>Node-iframe Example</title>
    </head>
    <body>
      ${iframeHtml}
    </body>
  </html>`;

  res.send(html);
});

app.listen(3000, () => {
  console.log(process.env.HOST_URL);
});