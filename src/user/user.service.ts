import { Injectable, UnauthorizedException } from '@nestjs/common'

import { UserRepository } from './user.repository'
import { InjectRepository } from '@nestjs/typeorm'
import { SignupInput } from './user.types'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  async signup(signupInput: SignupInput): Promise<String> {
    const email = await this.userRepository.signup(signupInput)

    if (!email) {
      throw new UnauthorizedException('Email already exists.')
    } else {
      return email
    }
  }
}
