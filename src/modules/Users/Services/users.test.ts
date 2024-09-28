import UserService from './users.services';
import prisma from '../../../database';
import { User } from '@prisma/client';

jest.mock('../../../database', () => ({
  user: {
    findMany: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    findUnique: jest.fn(),
  },
}));

describe('UserService', () => {
  let userService: UserService;

  beforeEach(() => {
    userService = new UserService();
  });

  describe('listUsers', () => {
    it('should return a list of users', async () => {
      const users: User[] = [
        { id: 1, nome: 'User1', email: 'user1@example.com', perfil: 'admin', telefone: '123456789', idade: 25, created_at: new Date(), updated_at: new Date() },
        { id: 2, nome: 'User2', email: 'user2@example.com', perfil: 'user', telefone: '987654321', idade: 30, created_at: new Date(), updated_at: new Date() },
      ];

      (prisma.user.findMany as jest.Mock).mockResolvedValue(users);

      const result = await userService.listUsers();
      expect(result).toEqual(users);
      expect(prisma.user.findMany).toHaveBeenCalledTimes(1);
    });
  });

  describe('createUser', () => {
    it('should create and return a new user', async () => {
      const newUser: User = {
        id: 3,
        nome: 'User3',
        email: 'user3@example.com',
        perfil: 'user',
        telefone: '1122334455',
        idade: 22,
        created_at: new Date(), updated_at: new Date()
      };

      (prisma.user.create as jest.Mock).mockResolvedValue(newUser);

      const result = await userService.createUser(newUser);
      expect(result).toEqual(newUser);
      expect(prisma.user.create).toHaveBeenCalledWith({ data: newUser });
    });

    it('should throw validation error if user data is invalid', async () => {
      const invalidUser = {
        id: 4,
        nome: '',
        email: 'invalid-email',
        perfil: 'user',
        telefone: '',
        idade: -1,
      };

      await expect(userService.createUser(invalidUser as User)).rejects.toThrow();
    });
  });

  describe('updateUser', () => {
    it('should update and return the updated user', async () => {
      const updatedUser: User = {
        id: 1,
        nome: 'Updated User',
        email: 'updateduser@example.com',
        perfil: 'admin',
        telefone: '1122334455',
        idade: 26,
        created_at: new Date(), updated_at: new Date()
      };

      (prisma.user.update as jest.Mock).mockResolvedValue(updatedUser);

      const result = await userService.updateUser(1, updatedUser);
      expect(result).toEqual(updatedUser);
      expect(prisma.user.update).toHaveBeenCalledWith({ where: { id: 1 }, data: updatedUser });
    });
  });

  describe('getUserById', () => {
    it('should return a user by ID', async () => {
      const user: User = {
        id: 1,
        nome: 'User1',
        email: 'user1@example.com',
        perfil: 'admin',
        telefone: '123456789',
        idade: 25,
        created_at: new Date(), updated_at: new Date()
      };

      (prisma.user.findUnique as jest.Mock).mockResolvedValue(user);

      const result = await userService.getUserById(1);
      expect(result).toEqual(user);
      expect(prisma.user.findUnique).toHaveBeenCalledWith({ where: { id: 1 } });
    });

    it('should return null if user is not found', async () => {
      (prisma.user.findUnique as jest.Mock).mockResolvedValue(null);

      const result = await userService.getUserById(999);
      expect(result).toBeNull();
    });
  });
});