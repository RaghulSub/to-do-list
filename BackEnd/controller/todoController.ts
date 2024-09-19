import express from 'express'
import { Request,Response } from 'express'
import ToDoModel from '../models/models'

export const InsertToDo = async(req:Request,res:Response) =>{
    let data = req.body;
    let date = new Date()
    await ToDoModel.create({
        title: data.title,
        description: data.description,
        completed: false,
        createdAt: date,
        updatedAt: date
    }) 
}

export const GetToDo = async (req:Request,res:Response) =>{
    let todos = await ToDoModel.findAll();
    console.log(todos);
    res.json(todos);
}