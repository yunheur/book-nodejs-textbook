require('dotenv').config(); // .env 파일에서 환경변수 불러오기

import express, { Express } from 'express';
import routes from './routes';
import { sequelize } from './sequelize';

class App {
  private app: Express;

  constructor() {
    this.app = express();
    this.app.set('port', process.env.PORT || 4000); // PORT 값이 설정되어있지 않다면 4000 을 사용합니다.
    this.middlewares();
  }

  public start = async () => {
    await sequelize.sync({ force: true });

    this.app.listen(this.app.get('port'), () => {
      console.log(this.app.get('port'), '번 포트에서 대기중');
    });
  };

  private middlewares = (): void => {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use('/api', routes);
  };
}

export default new App().start();
