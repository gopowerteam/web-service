import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { ConfigModule } from './modules/config/config.module'
import { join } from 'path'
import { ConsulModule } from './modules/consul/consul.module'

@Module({
  imports: [
    ConfigModule.forRoot(join(__dirname, '..', 'config.yml')),
    ConsulModule.forRoot()
  ],
  controllers: [AppController],
  providers: []
})
export class AppModule {}
