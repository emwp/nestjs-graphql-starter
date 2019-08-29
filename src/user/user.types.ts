import { InputType, Field } from 'type-graphql'
import { User } from './user.entity'

@InputType({ description: 'User Input' })
export class SignupInput implements Partial<User> {
  @Field()
  email: string
  @Field()
  password: string
}