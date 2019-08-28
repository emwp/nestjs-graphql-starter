import { NestFactory } from '@nestjs/core'
import { Logger } from '@nestjs/common'
import { ApplicationConfig } from './app.module'

async function bootstrap() {
  const logger = new Logger('bootstrap')
  const port = process.env.PORT || 4000
  const app = await NestFactory.create(ApplicationConfig)

  app.enableCors()

  await app.listen(port)

  logger.log(`Application listening on port: ${port}`)
}

bootstrap()
