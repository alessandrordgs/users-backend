import { NextFunction, Request, Response } from "express";
import { IUserServices } from "../Interfaces/IUserServices";
import UserServices from "../Services/users.services";
import paginate from '../../../globals/paginate';
class UserController {
  private userService: IUserServices;
  constructor() {
    this.userService = new UserServices();
    this.autoBind()
  }
  autoBind() {
    const self: UserController = this;
    Object.getOwnPropertyNames(Object.getPrototypeOf(this))
      .filter(prop => typeof self[prop as keyof UserController] === 'function')
      .forEach(method => {
        self[method as keyof UserController] = (self[method as keyof UserController] as Function).bind(self);
      });
  }

  public async getUsers(request: Request, response: Response, next: NextFunction): Promise<void | any> {
    try {
      const { page, perPage } = request.query;
      const pageStr = page as string | undefined;
      const perPageStr = perPage as string | undefined;
      const users = await this.userService.listUsers();
      return response.status(200).json(
        paginate(users, parseInt(pageStr || '1'), parseInt(perPageStr || '20'), request.originalUrl)
      );
    } catch (error: Error | any) {
      console.log(error)

      return response.status(500).json({ message: 'Internal server error' });
    }
  }

  public async createUser(request: Request, response: Response): Promise<void | any> {
    try {
      const user = request.body;
      const newUser = await this.userService.createUser(user);
      return response.status(201).json(newUser);
    } catch (error: Error | any) {
      console.log(error)
      if (error?.name === 'ValidationError') {
        return response.status(400).json({ message: error?.message });
      }
      return response.status(500).json({ message: 'Internal server error' });
    }
  }


  public async updateUser(request: Request, response: Response): Promise<void | any> {
    try {
      const { id } = request.params;
      const user = request.body;
      const updatedUser = await this.userService.updateUser(Number(id), user);
      return response.status(200).json(updatedUser);
    } catch (error: Error | any) {
      console.log(error)
      if (error.name === 'ValidationError') {
        return response.status(400).json({ message: error.message });
      }
      return response.status(500).json({ message: 'Internal server error' });
    }
  }

  public async getUserById(request: Request, response: Response): Promise<void | any> {
    try {
      const { id } = request.params;
      const user = await this.userService.getUserById(Number(id));
      if (!user) {
        return response.status(404).json({ message: 'User not found' });
      }
      return response.status(200).json(user);
    } catch (error: Error | any) {
      console.log(error)
      return response.status(500).json({ message: 'Internal server error' });
    }
  }

  public async deleteUser(request: Request, response: Response): Promise<void | any> {
    try {
      const { id } = request.params;
      await this.userService.deleteUser(Number(id));
      return response.status(200).json({ message: 'User deleted' });
    } catch (error: Error | any) {
      console.log(error)
      return response.status(500).json({ message: 'Internal server error' });
    }
  }

}

export default UserController;