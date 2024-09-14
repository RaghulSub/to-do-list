import ToDoModel from "./models/models";
import express from 'express';
import routes from './routes/routes'

const app = express();
const PORT = 8000;

app.use('/ToDo',routes)

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