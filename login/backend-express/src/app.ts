require('dotenv').config(); // .env 파일에서 환경변수 불러오기

import express, { Express } from 'express';
import morgan = require('morgan');
import routes from './routes';
import { sequelize } from './sequelize';

class App {
  private app: Express;

  constructor() {
    this.app = express();
    this.serverSetting();
    this.middlewares();
  }

  public start = async () => {
    await sequelize.sync({ force: true });

    this.app.listen(this.app.get('port'), () => {
      console.log(this.app.get('port'), '번 포트에서 대기중');
    });
  };

  private serverSetting = (): void => {
    this.app.set('port', process.env.PORT || 4000); // PORT 값이 설정되어있지 않다면 4000 을 사용합니다.
  };

  private middlewares = (): void => {
    if (process.env.NODE_ENV === 'production') {
      this.app.use(morgan('combined'));
    } else {
      this.app.use(morgan('dev'));
    }
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use('/api', routes);
  };
}

export default new App().start();
