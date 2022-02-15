// Trechos de códigos retirados do tutorial MERN fornecido pelo MongoDB: https://www.mongodb.com/languages/mern-stack-tutorial

const express = require('express');

const app = express();
const cors = require('cors');
const { getAllTasksController, createTaskController } = require('./controllers');
require('dotenv').config({ path: './config.env' });

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Retorna todas as tarefas do banco de dados
app.get('/', getAllTasksController);

// Adiciona nova tarefa ao banco de dados
app.post('/', createTaskController);

app.listen(PORT, () => console.log(`Example app listening on PORT ${PORT}!`));