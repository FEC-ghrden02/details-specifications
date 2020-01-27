const { Client } = require('pg');
// const client = new Client();

const client = new Client ({
    user: 'root',
    host: 'localhost',
    database: 'mydb',
    password: '',
    port: 3211,
})
client.connect()

client.query('SELECT NOW()', (err, res) => {
    console.log(err, res);
    client.end();
});