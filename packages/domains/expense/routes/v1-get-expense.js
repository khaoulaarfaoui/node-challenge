import { Expense } from '../model/Expense';
import { getConnection } from '../../../utils/db';
import { Router } from 'express';
import { User } from '../../user/model/User';
export const router = Router();

getConnection();
router.get('/get-expenses', async (req, res) => {
  const expenses = await Expense.find({skip: 0, take: 2,order: {
    date_created: "ASC"}});
  return res.send(expenses);
});

router.get('/get-expense-details/:user_id', async (req, res) => {
 const user = await User.findOne({where: {id: req.params.user_id}})
 console.log(user);
  if (!user) return res.status(404).json({})
 else{
  const expenses = await Expense.find({skip: 0, take: 2,order: {
    date_created: "ASC"}});
  return res.send(expenses);
}
});