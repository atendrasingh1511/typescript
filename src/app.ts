import express, { Request, Response, NextFunction } from 'express';
import todoRoutes from './routes/todos';
import { json } from 'body-parser';

// enum Role {ADMIN, AUTHOR, READONLY};
// console.log(Role.ADMIN);

//type Combinable = number;
//type Combinable = string | number;

// number, string, boolean, object, array, tuple. enum, any, (a:number, b:number)=> number, undefined, void

const app = express();

app.use(json());

app.use('/todos', todoRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction)=>{
    res.status(500).json({message: err.message});
})

app.listen(3000);