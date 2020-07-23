const Koa = require('koa');
const app = new Koa();
const BodyParser = require('koa-bodyparser');
const router = require('./routes/routes');
const cors = require('@koa/cors');

app.use(BodyParser());
app.use(
  cors({
    origin: '*',
    allowMethods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD'],
    exposeHeaders: ['X-Request-Id'],
  }),
)

// app.use(async ctx => {
//   ctx.body = 'hello world';
//   // console.log(ctx.request)
//   // console.log(ctx.request)
// });


app.use(router.routes());


app.listen(8000, () => {
  console.log('server is running on port 8000')
})