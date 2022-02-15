// Trechos de códigos retirados do tutorial MERN fornecido pelo MongoDB: https://www.mongodb.com/languages/mern-stack-tutorial

const express = require('express');

const app = express();
const cors = require('cors');
require('dotenv').config({ path: './config.env' });

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(PORT, () => console.log(`Example app listening on PORT ${PORT}!`));