import { Exclude } from 'class-transformer';
import { User } from 'src/users/enttities/user';

export class MeDTO extends User {
  @Exclude()
  created_at: Date;
  @Exclude()
  updated_at: Date;

  @Exclude()
  password: string;

  @Exclude()
  role: string;

  id: number;

  name: string;

  email: string;

  phone_number: string;

  @Exclude()
  iat: number;

  @Exclude()
  exp: number;

  constructor(user: Partial<User>) {
    super();
    Object.assign(this, user);
  }
}
