import express from 'express'
import { Request,Response } from 'express'
import ToDoModel from '../models/models'

export const InsertToDo = (req:Request,res:Response) =>{
    let data:any = req.body;
    let date = new Date()
    ToDoModel.create({
        title: data.title,
        description: data.description,
        completed: false,
        createdAt: date,
        updatedAt: date
    }) 
}