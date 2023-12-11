import express from 'express';
import { userControllers } from './user.controller';
const router=express.Router();

router.post('/api/users',userControllers.createUser);
router.get('/api/users',userControllers.getAllUsers);
router.get('/api/users/:userId', userControllers.getSingleUsers);
router.put('/api/users/:id', userControllers.updateUser);
router.delete('/api/users/:id', userControllers.deleteUser);
export const UserRoutes = router;
