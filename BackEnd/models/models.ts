import { Model, DataTypes } from "sequelize";
import sequelize from "../database/config";

class ToDoModel extends Model{}

ToDoModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: DataTypes.STRING,
        description: DataTypes.TEXT,
        completed: DataTypes.BOOLEAN,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
    },
    {
        sequelize,
        modelName:'Todo'
    }
);

export default ToDoModel;