import { Expense } from '../model/Expense';
import { getConnection } from '../database/connection';
import { Router } from 'express';

export const router = Router();

getConnection();

router.get('/get-expense-details', async (req, res) => {
  const expenses = await Expense.find();
  return res.send(expenses);
});

