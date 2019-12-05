import { Controller, Get, Render } from '@nestjs/common'
import { readFileSync } from 'fs'
import { join } from 'path'

@Controller()
export class AppController {
  @Get()
  @Render('index.hbs')
  private root() {
    // 读取网页文件
    const htmlContent = readFileSync(
      join(__dirname, '..', 'public', 'index.html')
    )
    // 加载网页文件
    return { 'html-content': htmlContent }
  }
}
