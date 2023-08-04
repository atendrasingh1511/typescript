import { RequestHandler } from 'express';

import { Todo } from '../models/todo';

const TODOS:Todo[] = []

export const createToDo:RequestHandler = (req, res, next)=>{
    const text = (req.body as {text:string}).text;
    const newToDo = new Todo(Math.random().toString(), text);
    TODOS.push(newToDo);

    res.status(201).json({message: 'created'})
}

export const updateToDo: RequestHandler<{id: string}> = (req, res, next)=>{
    const id = req.params.id;
}