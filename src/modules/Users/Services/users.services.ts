import prisma from '../../../database'
import type { User } from '@prisma/client'
import * as yup from 'yup'
import { IUserServices } from '../Interfaces/IUserServices'

class UserService implements IUserServices {
  private prisma: typeof prisma;

  constructor() {
    this.prisma = prisma
  }


  async validateUser(data: User) {
    const userSchema = yup.object({
      nome: yup.string().required("Nome é obrigatório"),
      email: yup.string().email().required("Email é obrigatório"),
      perfil: yup.string().required("Perfil é obrigatório"),
      telefone: yup.string().required("Telefone é obrigatório"),
      idade: yup.number().required().positive().integer(),
    })

    return userSchema.validate(data, { abortEarly: false })
  }
  async listUsers() {
    return this.prisma.user.findMany()
  }


  async createUser(data: User) {
    await this.validateUser(data)
    return this.prisma.user.create({ data })
  }


  async updateUser(id: number, data: User) {
    return this.prisma.user.update({ where: { id }, data })
  }

  async getUserById(id: number) {
    return this.prisma.user.findUnique({ where: { id } })
  }

  async deleteUser(id: number) {
    return this.prisma.user.delete({ where: { id } })
  }
}

export default UserService