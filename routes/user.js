import express from 'express';
import userController from '../controller/user.js';
const router = express.Router();

router.route('/').post(userController.addUser);

export default router;
