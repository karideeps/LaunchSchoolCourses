const HTTP = require('http');
const PORT = 3000;
const URL = require('url').URL;
const monthlyPayment = require('./loanCalculator');

const HTML_START = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Loan Calculator</title>
    <style type="text/css">
      body {
        background: rgba(250, 250, 250);
        font-family: sans-serif;
        color: rgb(50, 50, 50);
      }

      article {
        width: 100%;
        max-width: 40rem;
        margin: 0 auto;
        padding: 1rem 2rem;
      }

      h1 {
        font-size: 2.5rem;
        text-align: center;
      }

      table {
        font-size: 1.5rem;
      }
      th {
        text-align: right;
      }
      td {
        text-align: center;
      }
      th,
      td {
        padding: 0.5rem;
      }
    </style>
  </head>
  <body>
    <article>
      <h1>Loan Calculator</h1>
      <table>
        <tbody>
`;

const HTML_END = `
        </tbody>
      </table>
    </article>
  </body>
</html>`;


function getParams(path) {
  let newURL = new URL(path, `http://localhost:${PORT}`);
  return newURL.searchParams;
}

function createAmountRow(amount, duration) {
  return `
  <tr>
    <th>Amount:</th>
    <td>
      <a href='/?amount=${amount - 100}&duration=${duration}'>- $100</a>
    </td>
    <td>$${amount}</td>
    <td>
      <a href='/?amount=${amount + 100}&duration=${duration}'>+ $100</a>
    </td>
  </tr>
  `
}

function createDurationRow(amount, duration) {
  return `
  <tr>
    <th>Duration:</th>
    <td>
      <a href='/?amount=${amount}&duration=${duration - 1}'>- 1 year</a>
    </td>
    <td>${duration} years</td>
    <td>
      <a href='/?amount=${amount}&duration=${duration + 1}'>+ 1 year</a>
    </td>
  </tr>
  `
}

function createContent(params) {
  let body = ''

  let amount = Number(params.get('amount')) || 5000;
  let duration = Number(params.get('duration')) || 10;
  let payment = monthlyPayment(amount, duration);

  body += HTML_START;
  body += createAmountRow(amount, duration);
  body += createDurationRow(amount, duration);
  body += `<tr><th>APR:</th><td colspan='3'>5%</td></tr>`;
  body += `<tr><th>Monthly Payment:</th><td colspan='3'>\$${payment}</td></tr>`;
  body += HTML_END;

  return body;
}

const SERVER = HTTP.createServer((req, res) => {
  let path = req.url;
  let params = getParams(path);

  if (path === '/favicon.ico') {
    res.statusCode = 404;
    res.end();
  } else {
    let content = createContent(params);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write(content);
    res.end();
  }
});

SERVER.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`)
});