const route = require('koa-router');
const Router = new route();

Router.get('/test', async(ctx) => {
  console.log('test test')
  ctx.body = 'response from /test route'
});

Router.post('/test', async(ctx) => {
  let data = ctx.request.body;
  console.log('data', data)
  ctx.data = data;
});

Router.post('/name', async(ctx) => {
  let name = ctx.request.body.name;
  console.log('name data', name)
  ctx.name = name;
});

module.exports = Router;