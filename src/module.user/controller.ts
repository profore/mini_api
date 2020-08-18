import { Context } from 'koa'

/**
 * @api {get} /api/user/test 用户测试
 * @apiDescription 测试接口
 * @apiGroup user
 */
export async function test (ctx:Context): Promise<void> {
  ctx.body = {
    code: 200,
    message: 'success'
  }
}
