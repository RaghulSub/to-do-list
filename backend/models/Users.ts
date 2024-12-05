import { Model, DataTypes } from "sequelize";
import sequelize from "../database/config";
import {v4 as uuidv4} from 'uuid'


class Users extends Model {
    public _id!: string;
    public username!: string;
    public email!: string;
    public password!: string;
    public createdAt!: Date;
    public deletedAt!: Date;
  }

  
Users.init(
    {
      _id: {
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: uuidv4(),
        allowNull:false,
      },
      username: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull:false,
      },
      password:{
        type: DataTypes.STRING,
        allowNull:false,
      },
      createdAt: DataTypes.DATE,
      deletedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Users",
      timestamps: true,
      paranoid: true,
    }
  );

export default  Users;  // export the model
  