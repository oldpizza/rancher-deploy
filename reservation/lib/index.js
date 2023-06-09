const express = require('express');
const cookieParser = require('cookie-parser');
const csrf = require('csurf');
const app = express();

app.use(cookieParser());
app.use(csrf({ cookie: true }));

app.get('/', (req, res) => {
  const iframeSrc = process.env.URL + '/Runtime/Runtime/Form/Solar.Menulist.Form/';
  const antiForgeryCookie = req.cookies['XSRF-TOKEN']; // Get the anti-forgery cookie from the request
  // const iframeSrc = 'https://hpsplus.saksiam.co.th/Runtime/Runtime/Form/Solar.Menulist.Form/';
  const html = `
  <html>
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <meta name="keywords"
          content="กู้เงิน, จํานําเล่มทะเบียนรถ, นาโนไฟแนนซ์, สินเชื่อส่วนบุคคล, รถแลกเงิน, เงินด่วน, ต้องการเงินด่วน">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>RESERVATION | สินเชื่อศักดิ์สยาม สินเชื่อเพื่อสังคม | บริการสินเชื่อทะเบียนรถทุกชนิด | ดอกเบี้ยถูก บริการดี
          มีมาตรฐาน โทร 055 440 372</title>
      <link rel="icon" href="https://saksiam.com/img_icon/logo_ssl.png" type="image/png">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
      <link rel="stylesheet" href="https://saksiam.com/css/herder-ssl.css">
      <link rel="stylesheet" href="https://saksiam.com/css/font-page.css">
      <link rel="stylesheet" href="https://saksiam.com/css/bootstrap.min.css">
      <link rel="stylesheet" href="https://saksiam.com/css/mdb.min.css">
      <link rel="stylesheet" href="https://saksiam.com/css/style_sak.css">
      <link rel="stylesheet" href="https://saksiam.com/css/dropdownsubmenu.css">
      <link rel="stylesheet" href="https://saksiam.com/OwlCarousel2-2.3.4/dist/assets/owl.carousel.css">
      <link rel="stylesheet" href="https://saksiam.com/OwlCarousel2-2.3.4/dist/assets/owl.theme.default.min.css">
      <link rel="stylesheet" href="https://saksiam.com/css/cookiealert.css">
      <script type="text/javascript" async="" src="https://www.google-analytics.com/analytics.js"></script>
      <script async="" src="https://www.googletagmanager.com/gtag/js?id=UA-137241109-1"></script>
      <!-- <script type="module" src="env.js"></script> -->
      <!-- <script src="./dotenv/lib/main.js"></script> -->
  
      <script>
          window.dataLayer = window.dataLayer || [];
          function gtag() { dataLayer.push(arguments); }
          gtag('js', new Date());
  
          gtag('config', 'UA-137241109-1');
      </script>
      <script>
        const antiForgeryValue = "${antiForgeryCookie || ''}";
        const headers = new Headers();
        headers.append('X-XSRF-TOKEN', antiForgeryValue);
      </script>

      <style type="text/css">
          /* Chart.js */
          @-webkit-keyframes chartjs-render-animation {
              from {
                  opacity: 0.99
              }
  
              to {
                  opacity: 1
              }
          }
  
          @keyframes chartjs-render-animation {
              from {
                  opacity: 0.99
              }
  
              to {
                  opacity: 1
              }
          }
  
          .chartjs-render-monitor {
              -webkit-animation: chartjs-render-animation 0.001s;
              animation: chartjs-render-animation 0.001s;
          }
      </style>
  </head>
  
  <style>
      body {
          margin: 0;
          padding: 0;
      }
  
      body,
      iframe {
          width: 100%;
          height: 100%;
      }
  
      iframe {
          border: 0;
      }
  </style>
    <body>
      <iframe src="${iframeSrc}">
    </body>
  </html>
`;

  res.send(html);
});

app.listen(3001, () => {
  console.log(process.env.HOST_URL_RESERVATION);
});