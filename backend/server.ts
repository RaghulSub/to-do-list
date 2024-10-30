import ToDoModel from "./models/ToDo";
import Users from "./models/Users";
import express from "express";
import routes from "./routes/routes";
import authServices from "./services/ToDoServices";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { Model } from "sequelize";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use("/ToDo", routes);
app.use("/Auth", authServices);

const createTableAll = async (
  models: Array<{ modelname: string; modelObject: typeof Model }>
) => {
  console.log("creating tables");
  for (const model of models) {
    try {
      await model.modelObject.sync();
      console.log(`${model.modelname} Table Created Successfully`);
    } catch (error) {
      console.log(`Error On ${model.modelname} : `, error);
    }
  }
};

const models = [
  {
    modelname: "ToDo",
    modelObject: ToDoModel,
  },
  {
    modelname: "Users",
    modelObject: Users,
  },
];

createTableAll(models);

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
