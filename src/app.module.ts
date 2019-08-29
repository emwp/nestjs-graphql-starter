import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { typeOrmConfig } from './config/typeorm.config'
import { GraphQLModule } from '@nestjs/graphql'
import { UserModule } from './user/user.module'

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    UserModule,
  ],
})
export class ApplicationConfig {}
