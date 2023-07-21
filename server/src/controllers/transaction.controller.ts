import { Request, Response } from 'express';
import TransactionService from '../services/transaction.service';

const findAll = async (req: Request, res: Response) => {
   try {
      const transactions = await TransactionService.getAll();
      res.json(transactions);
   } catch (error) {
      console.log(error);
   }
}

const findById = async (req: Request, res: Response) => {
   try {
      const id: number = parseInt(req.params.id);
      const transactions = await TransactionService.getById(id);
      res.json(transactions);
   } catch (error) {
      console.log(error);
   }
}

const create = async (req: Request, res: Response) => {
   try {
      const result = await TransactionService.store(req.body);
      res.json(result);
   } catch (error) {
      console.log(error);
   }
}

const update = async (req: Request, res: Response) => {
   try {
      const id: number = parseInt(req.params.id);
      const update = await TransactionService.update(id, req.body)
      res.json(update);
   } catch (error) {

   }
}

const remove = async (req: Request, res: Response) => {
   try {
      const id: number = parseInt(req.params.id);
      const transactions = await TransactionService.remove(id);
      res.json(transactions);
   } catch (error) {
      console.log(error);
   }
}

export default {
   findAll,
   findById,
   create,
   update,
   remove
}
