/* eslint-env jest */

const React = require('react')
const router = require('../../router')

console.log = jest.fn()
console.info = jest.fn()

const config = {
  environment: process.env['NODE_ENV'] || 'test'
}

const server = require('shintech-koa')(config)

server.use(router.routes())
server.use(router.allowedMethods())

global._server = server

global.React = React
