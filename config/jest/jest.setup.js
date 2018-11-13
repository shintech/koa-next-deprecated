
/* eslint-env jest */

import React from 'react'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import router from '../../server/router'

console.log = jest.fn()
console.info = jest.fn()

const config = {
  environment: process.env['NODE_ENV'] || 'test'
}

configure({ adapter: new Adapter() })

const server = require('../../server')(config)

server.use(router.routes())
server.use(router.allowedMethods())

global._server = server

global.React = React

global._treesMock = {
  value: 0,
  message: 'ok'
}
