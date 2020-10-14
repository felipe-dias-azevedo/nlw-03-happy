import express from 'express';
import 'express-async-errors'
import path from 'path';
import cors from 'cors';
import './database/connection'
import routes from './routes';
import errorHandler from './errors/handler'

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler);

// Rota = conjunto
// Recurso = usuário

// Métodos HTTP = GET, POST, PUT, DELETE
// Parâmetros

// GET = buscar uma informação (lista, item)
// POST = criando uma informação
// PUT = editando uma informação
// DELETE = deletando uma informação

// Query Params: http://localhost:3333/users?search=diego&page=2
// Route Params: http://localhost:3333/1 (identificar um recurso)
// Body: http://localhost:3333/1 (identificar um recurso)
// console.log(request.query)
// console.log(request.params)
// console.log(request.body)



app.listen(3333);

// Driver nativo, Query builder, ORM
// ORM = Object Relational Mapping