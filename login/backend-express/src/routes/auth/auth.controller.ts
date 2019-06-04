import express from 'express';

class AuthController {
  // 로컬 회원가입
  public localRegister = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.send('register');
  };

  // 로컬 로그인
  public localLogin = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.send('login');
  };

  // 이메일 / 아이디 존재유무 확인
  public exists = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.send('exists');
  };

  // 로그아웃
  public logout = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.send('logout');
  };

  // 쿠키에 access_token 이 있다면, 현재 로그인된 유저의 정보를 응답
  public check = (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    res.send('check');
  };
}

export default new AuthController();
