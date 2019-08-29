import { User } from "./user.entity";
import { EntityRepository, Repository } from "typeorm";
import { SignupInput } from "./user.types";

@EntityRepository(User)
export class UserRepository extends Repository<User> {

  async signup(signupInput: SignupInput) : Promise<String> {
    const { email, password } = signupInput

    const userExists = await this.findOne({ where: {email: email} })
    if (userExists) {
      return null
    }

    const user = new User()
    user.email = email
    user.password = password
    await user.save()
    return user.email;
  }
}