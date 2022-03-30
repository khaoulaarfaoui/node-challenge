import { Router } from 'express';
import { getConnection } from '../../../utils/db';
import { User } from '../model/User';
import { ApiError } from '@nc/utils/errors';
import { secureTrim } from '../formatter';
import { to } from '@nc/utils/async';
export const router = Router();

getConnection();

router.get('/get-users', async (req, res) => {
 const users= await User.find();
  return res.send(users);
});

router.get('/get-users/', async (req, res) => {
  const users= await User.find();
   return res.send(users);
 });
 router.get('/get-user-details/:id', async(req, res) => {
  const user = await User.findOne({where: {id: req.params.id}})
 console.log(user);
  if (!user) return res.status(404).json({})
 
  return res.json(user)
 })
