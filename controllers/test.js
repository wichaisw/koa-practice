const db = require('../models');

const getMessage = async(ctx) => {
  console.log('test test')
  ctx.body = {
    msg: 'response from /test route'
  }
};

const postObject = async(ctx) => {
  let data = ctx.request.body;
  console.log('data', data)
  ctx.response.status = 201;
  ctx.body = data;
};

const postName = async(ctx) => {
  let body = {
    name: ctx.request.body.name,
    nickname: ctx.request.body.nickname
  }

  db.test.create(body);
  ctx.response.status = 201;
  ctx.body = body;
};

module.exports = {
  getMessage,
  postObject,
  postName,
}