require('dotenv').config(); // .env 파일에서 환경변수 불러오기
import express, { Express } from 'express';

class App {
  private app: Express;

  constructor() {
    this.app = express();
    this.app.get('/', (req: express.Request, res: express.Response) => {
      res.send('Hello World!');
    });
    this.setApp();
    this.middlewares();
  }

  public start = (): void => {
    this.app.listen(this.app.get('port'), () => {
      console.log(this.app.get('port'), '번 포트에서 대기중');
    });
  };

  private setApp = (): void => {
    console.log(process.env.PORT);
    this.app.set('port', process.env.PORT || 4000); // PORT 값이 설정되어있지 않다면 4000 을 사용합니다.
  };

  private middlewares = (): void => {
    console.log('middleware');
  };
}

export default new App().start();
