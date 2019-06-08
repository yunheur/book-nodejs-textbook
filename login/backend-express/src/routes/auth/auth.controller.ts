const Joi = require('joi');
import express from 'express';
import { Op } from 'sequelize';
import { Account } from '../../models/Account';

class AuthController {
  // 로컬 회원가입
  public localRegister = async (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    // 데이터 검증
    const schema = Joi.object().keys({
      username: Joi.string()
        .alphanum()
        .min(4)
        .max(15)
        .required(),
      email: Joi.string()
        .email()
        .required(),
      password: Joi.string()
        .required()
        .min(6),
    });

    const result = Joi.validate(req.body, schema);
    if (result.error) {
      res.sendStatus(400);
      return;
    }

    // 아이디 / 이메일 중복 체크
    let existing = null;
    try {
      existing = await Account.findOne({
        where: {
          [Op.or]: [{ username: req.body.username }, { email: req.body.email }],
        },
      });
    } catch (error) {
      res.sendStatus(500);
    }

    if (existing) {
      // 중복되는 아이디/이메일이 있을 경우
      res.statusCode = 409; // Conflict
      // 어떤 값이 중복되었는지 알려줍니다
      res.json({
        key: existing.email === req.body.email ? 'email' : 'username',
      });
      return;
    }

    // 계정 생성
    let account: any = null;
    try {
      account = await Account.create(req.body);
    } catch (error) {
      res.sendStatus(500);
    }

    let token = null;
    try {
      token = await account.generateToken();
    } catch (e) {
      res.sendStatus(500);
    }

    res.cookie('access_token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 7,
    });
    res.json(account.profile);
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
