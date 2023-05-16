const { Client } = require('pg');

let client = new Client ({
  database: 'films',
  user: 'karideeps',
  password: '1234'
});

async function logQuery(queryText) {
  await client.connect();

  let data = await client.query(queryText);

  console.log(data.rows[2].count);
  client.end();
};

logQuery("SELECT count(id) FROM films WHERE duration < 110 GROUP BY genre");