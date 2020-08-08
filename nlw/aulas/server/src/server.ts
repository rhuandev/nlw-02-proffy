import express from 'express';
import routes from './routes';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

//GET = Buscar ou listar uma informação
//POST = Criar nova informação
//PUT = Atualizar uma informação
//DELETE = Deletar uma informação

// ROUTE PARAMS = Identificar qual recurso quero deletar ou atualizar. (app.delete('/users/:id')) request.params
// QUERY PARAMS = Paginação, filtros, ordenação, etc... (/users?page=2&sort=name) request.query


// localhost:3333
app.listen(3333);