require('dotenv').config();
const express = require ('express');
const app = express();
// const db = require('./db/orm/index'); // ORM DB
const db = require('./db/mongo/index'); // NON-ORM DB

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + '/../client/dist'));

app.listen(PORT, () => console.log(`server running on port: ${PORT}`))