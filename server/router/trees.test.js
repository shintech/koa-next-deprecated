/* eslint-env jest */

import request from 'supertest'

describe('SERVER -> GET /api/trees -> fetch()...', () => {
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

  it('expect ctx.body to have property "value"...', async () => {
    expect(ctx.body).toHaveProperty('value')
  })

  it('expect ctx.body.value to equal "1"...', async () => {
    expect(ctx.body.value).toEqual(0)
  })
})
