import express from 'express';
import { createUser, getAllUsers, getSingleUserById, updateUser } from './users.controller'; 

const router = express.Router();

router.post('/create-user', createUser);
router.get('/get-all-users', getAllUsers);
// Define the route to get a single user by ID
router.get('/get-user/:userId', getSingleUserById);
router.put('/update-user/:userId', updateUser);
export default router;
