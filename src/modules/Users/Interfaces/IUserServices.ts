import type { User } from "@prisma/client"

export interface IUserServices {
  listUsers(): Promise<User[]>
  createUser(data: User): Promise<User>
  updateUser(id: number, data: User): Promise<User>
  getUserById(id: number): Promise<User | null>
  validateUser(data: User): any
  deleteUser(id: number): Promise<User>
}