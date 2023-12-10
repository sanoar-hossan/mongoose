import express from 'express';
import { userControllers } from './user.controller';
const router=express.Router();

router.post('/api/users',userControllers.createUser);
router.get('/api/users',userControllers.getAllUsers);
router.get('/api/users/:userId', userControllers.getSingleUsers);

export const UserRoutes = router;
