import {Router} from 'express';
import { InsertToDo,GetToDo,UpdateToDo,DeleteToDo } from '../controller/todoController';

const app = Router()

app.post('/InsertToDo',InsertToDo);

app.get('/GetToDo',GetToDo);

app.put('/UpdateToDo',UpdateToDo);

app.delete('/DeleteToDo',DeleteToDo);

export default app;