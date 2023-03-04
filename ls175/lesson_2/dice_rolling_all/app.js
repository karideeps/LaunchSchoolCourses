const HTTP = require('http');
const URL = require('url').URL;
const PORT = 3000;
const rollDice = require('./rollDice');

const SERVER = HTTP.createServer((req, res) => {
  let method = req.method;
  let path = req.url;
  let myURL = new URL(path, `http://localhost:${PORT}`);
  let params = myURL.searchParams;
  let rolls = params.get('rolls');
  let sides = params.get('sides');

  if (path === '/favicon.ico') {
    res.statusCode = 404;
    res.end();
  } else {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    for (let i = 1; i <= rolls; i += 1) {
      let roll = rollDice(1, sides);
      res.write(`${roll}\n`);
    }
    res.write(`${method} ${path}\n`);
    res.end();
  }
});

SERVER.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`)
});