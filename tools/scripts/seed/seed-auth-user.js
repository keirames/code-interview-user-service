const { Client } = require('pg');

const start = async () => {
  const client = new Client({
    database: 'user_service',
    host: '127.0.0.1',
    port: 1234,
    user: 'postgres',
    password: 1234,
  });
  await client.connect();
  const res = await client.query('SELECT $1::text as message', [
    'Hello world!',
  ]);
  console.log(res.rows[0].message); // Hello world!
  await client.end();
};

start();
