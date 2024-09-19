import ToDoModel from "./models/models";
import express from 'express';
import routes from './routes/routes';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

app.use('/ToDo',routes);

ToDoModel.sync()
.then(()=>{
    console.log('ToDo Table Successfully created');
})
.catch(err => {
    console.log('Error creating ToDo Table:', err);
});

app.listen(PORT,()=>{
    console.log(`Listening on PORT ${PORT}`);
})