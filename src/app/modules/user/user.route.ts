import express from 'express';
import { userControllers } from './user.controller';
const router=express.Router();

router.post('/api/users',userControllers.createUser);
router.get('/api/users',userControllers.getAllUsers);
router.get('/api/users/:userId', userControllers.getSingleUsers);
router.put('/api/users/:userId', userControllers.updateUser);
router.delete('/api/users/:userId', userControllers.deleteUser);

// Order routes
router.put('/api/users/:userId/orders', userControllers.addProduct);
router.get('/api/users/:userId/orders', userControllers.getAllOrders);
router.get('/api/users/:userId/orders/total-price', userControllers.calculateTotalPrice);

export const UserRoutes = router;
