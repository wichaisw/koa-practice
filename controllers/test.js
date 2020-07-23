const getMessage = async(ctx) => {
  console.log('test test')
  ctx.body = {
    msg: 'response from /test route'
  }
}

const postObject = async(ctx) => {
  let data = ctx.request.body;
  console.log('data', data)
  ctx.data = data;
}

const postName = async(ctx) => {
  let name = ctx.request.body.name;
  console.log('name data', name)
  ctx.name = name;
}

module.exports = {
  getMessage,
  postObject,
  postName,
}