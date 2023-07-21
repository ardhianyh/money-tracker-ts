import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getAll = async () => {
   try {
      const transactions = await prisma.transactions.findMany();
      return transactions;
   } catch (error) {
      throw new Error();
   }
}

const getById = async (id: number) => {
   try {
      const transaction = await prisma.transactions.findUnique({
         where: {
            id: Number(id),
         },
      });
      return transaction;
   } catch (error) {
      throw new Error();
   }
}

const store = async (body: any) => {
   try {
      const { label, value, type, category } = body;
      const result = await prisma.transactions.create({
         data: {
            label, value, type, category
         }
      });
      return result;
   } catch (error) {
      throw new Error();
   }
}

const update = async (id: number, body: any) => {
   try {
      const { label, value, type, category } = body;
      const result = await prisma.transactions.update({
         where: { id: Number(id) },
         data: {
            label, value, type, category
         }
      });
      return result;
   } catch (error) {
      throw new Error();
   }
}

const remove = async (id: number) => {
   try {
      const result = await prisma.transactions.delete({
         where: {
            id: Number(id),
         },
      });
      return result;
   } catch (error) {
      throw new Error();
   }
}

export default {
   getAll,
   getById,
   store,
   update,
   remove
}