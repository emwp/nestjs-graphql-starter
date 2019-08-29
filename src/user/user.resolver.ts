import { Resolver, Mutation, Args, Query } from '@nestjs/graphql'
import { UserService } from './user.service'
import { SignupInput } from './user.types'

@Resolver('User')
export class UserResolver {

  constructor(
    private readonly userService : UserService
  ) {}

  @Query(returns => String)
  async hello() {
    return 'Hello World!'
  }

  @Mutation(returns => String)
  async signup(
    @Args('signupInput') signupInput: SignupInput) {
    return this.userService.signup(signupInput)
  }
}
