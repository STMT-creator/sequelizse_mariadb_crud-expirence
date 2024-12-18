import express from 'express';
const router = express.Router();

router.route('/').get((req, res) => {
  res.send('새로운 세상을 만들어가');
});

export default router;
