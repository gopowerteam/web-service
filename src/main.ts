import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import { AppModule } from './app.module'
import { Application } from './core/application'
import { APP_CONFIG_PROVIDER } from './core/constants'
import { join } from 'path'

// https
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

async function bootstrap() {
  // 创建应用服务实例
  const app = await NestFactory.create<NestExpressApplication>(AppModule).then(
    Application.initialize
  )
  // 获取配置服务
  const config = app.get(APP_CONFIG_PROVIDER)
  // 获取监听端口
  const port = config.get('service.port')
  // 添加静态资源
  app.useStaticAssets(join(__dirname, '..', 'public'), { index: false })
  // 设置模版地址
  app.setBaseViewsDir(join(__dirname, '..', 'views'))
  // 添加模版引擎
  // 默认使用hbs作为模版引擎
  app.setViewEngine('hbs')
  // 建立服务监听
  await app.listen(port)
}

bootstrap()
