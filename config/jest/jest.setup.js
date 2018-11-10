const router = require('../../router')
const React = require('react')

const config = {
  environment: process.env['NODE_ENV'] || 'test'
}

const server = require('../../shintech-koa')(config)

server.use(router.routes())
server.use(router.allowedMethods())

global._server = server

global.React = React
