import express from 'express';
import userController from '../controller/user.js';
const router = express.Router();

router.route('/').get(userController.getUsers).post(userController.addUser);

export default router;
