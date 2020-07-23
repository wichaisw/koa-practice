const route = require('koa-router');
const Router = new route();
const testController = require('../controllers/test');

Router.get('/test', testController.getMessage);
Router.post('/test', testController.postObject);
Router.post('/name', testController.postName);

module.exports = Router;