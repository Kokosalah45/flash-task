import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      email: 'test@gmail.com',
      password: '123',
      name: 'Test',
      role: 'admin',
      created_at: new Date(),
      updated_at: new Date(),
    },
  ];

  findOneByEmail(email: string): User {
    return this.users.find((user) => user.email === email);
  }
}
