import express from 'express';
const router = express.Router();

router.route('/').post((req, res) => {
  try {
    const { name, age, married } = req.body;
    console.log(name, age, married);
    res.status(200).json({
      status: 'success',
      message: '등록되었습니다.',
    });
  } catch (err) {
    console.log(err);
  }
});

export default router;
