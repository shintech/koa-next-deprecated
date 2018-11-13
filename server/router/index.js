const trees = require('./trees')
const Router = require('koa-router')

module.exports = new Router({
  prefix: '/api'
})

  .use(async (ctx, next) => {
    await next()

    ctx.set('Content-Type', 'application/json')
  })

  .get('/trees', trees.fetch)
