import Koa from 'koa'
import router from './router'

// 实例化
const app = new Koa()

app.use(router.routes())

const port = Number(process.env.PORT) || 9000
const host = process.env.HOST || '0.0.0.0'

app.listen(port, host, () => {
  console.log(`http://localhost:${port}/`)
})
