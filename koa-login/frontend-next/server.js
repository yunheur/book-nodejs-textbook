const express = require("express");
const next = require("next");
const routes = require('./routes');

const devProxy = {
  '/api': {
    target: 'http://localhost:4000/api/',
    pathRewrite: { '^/api': '/' },
    changeOrigin: true
  }
}

// const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== "production";
const app = next({
  dir: '.', // base directory where everything is, could move to src later,
  dev
});
const handler = routes.getRequestHandler(app);
// const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    // Set up the proxy.
    if (dev && devProxy) {
      const proxyMiddleware = require('http-proxy-middleware')
      Object.keys(devProxy).forEach(function (context) {
        server.use(proxyMiddleware(context, devProxy[context]))
      })
    }

    // server.get("/p/:id", (req, res) => {
    //   const actualPage = "/post";
    //   const queryParams = { id: req.params.id };
    //   app.render(req, res, actualPage, queryParams);
    // });

    // server.get("*", (req, res) => {
    //   return handle(req, res);
    // });

    server.use(handler).listen(3300, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3300");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
