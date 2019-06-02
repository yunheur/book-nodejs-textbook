const routes = module.exports = require('next-routes')();

routes
  .add('index', '/')
  .add('auth', '/auth')
  .add('auth/login', '/auth/login', 'auth/login')
  .add('auth/register', '/auth/register', 'auth/register');