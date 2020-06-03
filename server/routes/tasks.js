const Router = require('@koa/router')
const store = require('../store')

const router = new Router({ prefix: '/api/tasks' })

router.get('/', async (ctx) => {
  ctx.status = 501
})

router.post('/', async (ctx) => {
  var task = ctx.request.body
  if(task.title != ''){
    await store.addTask(ctx.request.body)
    ctx.status = 200
  }
  else{
    ctx.status = 400
  }
})

router.delete('/', async (ctx) => {
  ctx.status = 501
})

module.exports = router