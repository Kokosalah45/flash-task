import { IsEmail, Length } from 'class-validator';
export class SiginDTO {
  @IsEmail()
  email: string;
  @Length(3, 20)
  password: string;
}
