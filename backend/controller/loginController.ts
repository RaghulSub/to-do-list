import Users from '../models/Users';
import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';


dotenv.config();

export const login = async(req:Request,res:Response) => {
    try{    
        const {email,password} = req.body;
        const user = await Users.findOne({where:{email:email}});
        if(!user){
            return res.status(404).json({
                message:"User not found",
                code:"unf"
            });
        }
        const match = await bcrypt.compare(password,user.password);
        if(!match){
            return res.status(401).json({
                message:"Invalid password",
                code:"ip",
                });
        }
        const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY as string, { expiresIn: "1h" });

        return res.status(200).json({
            message:"Login successful",
            code:"ls",
            token:token
        })
    }catch(e){
        console.log("Error :",e);
        return res.status(500).json({
            message:"Internal server error",
            code:"ise",
            error:e,
        })
    }
}


