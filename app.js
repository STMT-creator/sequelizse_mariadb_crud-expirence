import express from 'express';
import nunjucks from 'nunjucks';
import indexRouter from './routes/index.js';
import userRouter from './routes/user.js';
import db from './models/index.js';
const port = process.env.PORT || 3000;
const app = express();

app.set('view engine', 'html');

nunjucks.configure('views', {
  autoescape: true,
  express: app,
  watch: true
});

// Model Synchronization : 모델-DB 동기화
db.sequelize.sync({force:false})

app.use(express.static('public')); // 미들웨어들 먼저 불러 오고 실행이 되어야해서 미들웨어가 먼저 온다
app.use(express.json()); // json 파싱
app.use(express.urlencoded({ extended: true })); // form 데이터 파싱

app.use('/', indexRouter);
app.use('/users', userRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
