import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";
import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";

export class CreateUserUseCase{
  constructor(
    private usersRepository: IUsersRepository,
    private mailProvider: IMailProvider
  ){}

  async execute(date: ICreateUserRequestDTO){
    const userAlreadyExists = await this.usersRepository.findByEmail(date.email)

    if (userAlreadyExists){
      throw new Error('User already exists.')
    }

    const user = new User(date)

    await this.usersRepository.save(user)

    await this.mailProvider.sendMail({
      to: {
        name: date.name,
        email: date.email,
      },
      from: {
        name: 'Equipe de teste do email',
        email: 'equipe@meuapp.com',
      },
      subject: 'Seja bem vindo a plataforma',
      body: '<p>Voçe ja pode fazer login em nossa plataforma.</p>'
    })
  }
}