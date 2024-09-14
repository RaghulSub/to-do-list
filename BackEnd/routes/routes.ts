import express from 'express';
import { InsertToDo } from '../controller/todoController';

const app = express()

app.post('/InsertToDo',InsertToDo);

export default app;