import express from 'express';
import { InsertToDo,GetToDo } from '../controller/todoController';

const app = express()

app.post('/InsertToDo',InsertToDo);

app.get('/GetToDo',GetToDo);


export default app;