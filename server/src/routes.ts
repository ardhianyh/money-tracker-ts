import express, { Request, Response, Router } from 'express';
import TransactionController from './controllers/transaction.controller'

const routes: Router = express.Router();

routes.get('/', (req: Request, res: Response) => {
   console.log('hello world');
   res.send("Hello World");
});

routes.get('/transactions', TransactionController.findAll);
routes.get('/transactions/:id', TransactionController.findById)
routes.post('/transactions', TransactionController.create);
routes.put('/transactions/:id', TransactionController.update)
routes.delete('/transactions/:id', TransactionController.remove)

export default routes;