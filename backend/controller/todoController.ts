import express from "express";
import { Request, Response } from "express";
import ToDoModel from "../models/models";

export const InsertToDo = async (req: Request, res: Response) => {
  try {
    let data = req.body;
    let date = new Date();
    await ToDoModel.create({
      id:data.id,
      title: data.title,
      description: data.description,
      completed: false,
      createdAt: date,
      updatedAt: date,
    });
    return res.status(201).json({
      success: true,
      message: "To-Do Inserted Successfully",
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return res.status(500).json({
        success: false,
        message: "Error Occured",
        error: error.message,
      });
    } else {
      return res.status(500).json({
        success: false,
        message: "Unknown Error Occured",
        error: "An Unknown Error Occured",
      });
    }
  }
};

export const GetToDo = async (req: Request, res: Response) => {
  let todos = await ToDoModel.findAll();
  res.json(todos);
};


export const UpdateToDo = async(req:Request,res:Response) => {
    try{
        const { id,date } = req.body;
        const selectedRows = await ToDoModel.findOne({
            where:{
                id:id,
            },
            attributes:{
                include:['completed']
            }
        });
        if(!selectedRows){
            return res.status(404).json({
                success:false,
                message:"To-Do not found",
            });
        }
        
        const updatedRow = await  ToDoModel.update({
           completed:!selectedRows.completed,
           updatedAt: date,
        },{
            where:{
                id:id,
            }
        });
        if(updatedRow[0] === 0){
            return res.status(404).json({
                success:false,
                message:"To-Do not found",
            });
        }
        return res.status(200).json({
            success:true,
            message:"To-Do Updated Successfully",
            data:selectedRows,
        })

    }catch(error){
        return res.status(500).json({
            success:false,
            message:"Internal Server Error on UpdateToDo",
            error:error,
        });
    }
}


export const DeleteToDo = async (req:Request,res:Response) => {
  try{
    const id = req.body.id;
    const deletedRow = await ToDoModel.destroy({
      where:{id:id}
    });
    if(deletedRow == 0){
      return res.status(404).json({
        success:false,
        message:"Record Not Found",
      })
    }
    return res.status(200).json({
      success:true,
      message:'To-Do Deleted Successfully',
      data:`No of Records Deleted ${deletedRow}`,
    })
    
  }catch(error){
    console.log(error);
    return res.status(500).json({
      success:false,
      message:"Internal Server Error",
      error:error,
    });
  }
}