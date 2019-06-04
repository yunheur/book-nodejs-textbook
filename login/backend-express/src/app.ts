require('dotenv').config(); // .env 파일에서 환경변수 불러오기
import express from 'express';

const app = express();

app.set('port', process.env.PORT || 4000); // PORT 값이 설정되어있지 않다면 4000 을 사용합니다.

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello World!');
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기중');
});
