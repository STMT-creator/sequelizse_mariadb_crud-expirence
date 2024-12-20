import express from 'express';
import indexController from '../controller/index.js';
const router = express.Router();

router.route('/').get(indexController.getHome);

export default router;
