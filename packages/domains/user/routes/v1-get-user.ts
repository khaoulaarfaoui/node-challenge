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

 router.get('/get-user-details/:id', async(req,res,next) => {
  const [userError, userDetails]  = await to(User.findOne({where: {id: req.params.id}}))
 if (userError) {
  return next(new ApiError(userError, userError.status, `Could not get user details: ${userError}`, userError.title, req));
}
if (!userDetails) {
  return res.json({});
}
return res.json(secureTrim(userDetails));
});
