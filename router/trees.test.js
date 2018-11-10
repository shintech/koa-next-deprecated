/* eslint-env jest */

import request from 'supertest'

console.info = jest.fn()

describe('SERVER -> GET /api/posts -> api.fetchAll()..', () => {
  let ctx, app

  beforeAll(async () => {
    app = _server.listen()

    ctx = await request(app).get('/api/trees')
  })

  afterAll(() => {
    app.close()
  })

  it('expect ctx.body to have property "message"...', async () => {
    expect(ctx.body).toHaveProperty('message')
  })

  it('expect ctx.body.message to be "ok"...', async () => {
    expect(ctx.body.message).toBe('ok')
  })
})
