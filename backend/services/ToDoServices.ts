import Users from "../models/Users";
import { Request, Response, NextFunction } from "express";
// import { verifyToken } from "../utils/verifyToken";
import { Router } from "express";

const authServices = Router();

authServices.post("/Signin", async (req: Request, res: Response) => {
  try {
    const username = req.body.username;
    const email = req.body.email;
    const userId = req.body.userId;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    const role = req.body.role;

    
  }catch(err : unknown){
    if(err instanceof Error){
      console.log(err.message);
      return res.status(500).json({
        message: "Error",
        error:err,
      });
    }
    console.log("Unknown Error: ",err);
    return res.status(500).json({
      message: "Unknown Error",
      error: err,
    })
  }


});

export default authServices;
