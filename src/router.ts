import KoaRouter from 'koa-router'
import koaBody from 'koa-body'
import userRouter from './module.user/router'
// # auto add here # import

const router = new KoaRouter()

// 解析 body
router.use(koaBody())

// 挂载子路由
router.use('/api/user', userRouter.routes())
// # auto add here # use

export default router
