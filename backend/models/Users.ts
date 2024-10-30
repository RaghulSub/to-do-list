import { Model, DataTypes } from "sequelize";
import sequelize from "../database/config";


class Users extends Model {
    public userId!: string;
    public username!: string;
    public email!: string;
    public password!: string;
    public createdAt!: Date;
    public deletedAt!: Date;
  }

  
Users.init(
    {
      userId: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
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
  