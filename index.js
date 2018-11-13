const nextjs = require('next')
const Router = require('koa-router')
const pkg = require('./package.json')
const api = require('./server/router')

const config = {
  environment: process.env['NODE_ENV'] || 'development',
  port: parseInt(process.env['PORT']) || 8000,
  host: process.env['HOST'] || 'localhost'
}

const app = nextjs({ dev: config.environment === 'development' })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const { port, host } = config

    const logger = require('shintech-logger')(config)
    const server = require('shintech-koa')({ ...config, logger })

    server.use(api.routes())
    server.use(api.allowedMethods())

    const router = new Router()

    router.get('*', async ctx => {
      await handle(ctx.req, ctx.res)
      ctx.respond = false
    })

    server.use(router.routes())
    server.use(router.allowedMethods())

    server.use(ctx => {
      ctx.body = {
        status: 'error'
      }

      ctx.status = 404
    })

    server.listen(port, host)
      .on('listening', () => {
        logger.info(`${pkg.name} - version: ${pkg.version} - listening at ${host}:${port}...`)
      })

      .on('error', err => {
        logger.error(err.message)
      })
  })
