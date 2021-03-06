const Koa = require('koa');
const app = new Koa();
const BodyParser = require('koa-bodyparser');
const json = require('koa-json');
const cors = require('@koa/cors');
const db = require('./models');

const testRouter = require('./routes/test');

app.use(BodyParser());

// Json prettier middleware
app.use(json()); 

// router middleware
app.use(
  cors({
    origin: '*',
    allowMethods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD'],
    exposeHeaders: ['X-Request-Id'],
  }),
)

// simple middleware example
// app.use(async ctx => {
//   ctx.body = 'hello world';
//   // console.log(ctx.request)
//   // console.log(ctx.request)
// });
// app.use(router.routes());

app.use(testRouter.prefix('/main').routes());

db.sequelize.sync().then(() => {
  const server = app.listen(8000, () => {
    console.log('server is running on port 8000')
  });
});
