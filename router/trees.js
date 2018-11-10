module.exports = {
  fetch: async function (ctx, next) {
    ctx.set({
      'Content-Type': 'application/json'
    })

    ctx.status = 200
    ctx.body = {
      value: 1,
      message: 'ok'
    }
  }
}
