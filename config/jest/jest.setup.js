/* eslint-env jest */

const React = require('react')
const { configure } = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')
const router = require('../../router')

console.log = jest.fn()
console.info = jest.fn()

const config = {
  environment: process.env['NODE_ENV'] || 'test'
}

configure({ adapter: new Adapter() })

const server = require('shintech-koa')(config)

server.use(router.routes())
server.use(router.allowedMethods())

global._server = server

global.React = React
