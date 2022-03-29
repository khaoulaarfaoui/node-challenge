import { Router } from 'express';
import { getConnection } from '../data/db-user';
import { User } from '../model/User';
import { ApiError } from '@nc/utils/errors';
import { getUserDetails } from '../model';
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
//User.findById(req.user._id, function(err, user) {

/*

router.get('/get-user-details', async (req, res, next) => {
  const users = await User.find();
  return res.send(users);
});
/*
  const [userError, userDetails] = await to(getUserDetails(req.query?.userId));

  if (userError) {
    return next(new ApiError(userError, userError.status, `Could not get user details: ${userError}`, userError.title, req));
  }

  if (!userDetails) {
    return res.json({});
  }

  return res.json(s
    */