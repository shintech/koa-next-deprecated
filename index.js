const Koa = require('koa')
const nextjs = require('next')
const Router = require('koa-router')

const environment = process.env['NODE_ENV']
const port = parseInt(process.env['PORT'])

const dev = environment === 'development'
const app = nextjs({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = new Koa()
    const router = new Router()

    router.get('*', async ctx => {
      await handle(ctx.req, ctx.res)

      ctx.respond = false
    })

    server.use(async (ctx, next) => {
      ctx.res.statusCode = 200

      await next()
    })

    server.use(router.routes())
    server.listen(port, () => {
      console.log(`listening on port ${port}...`)
    })
  })
