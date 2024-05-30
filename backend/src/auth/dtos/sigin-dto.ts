import {IsEmail , Length} from 'class-validator'
export class SiginDTO {
    @IsEmail()
    email: string;
    @Length(6, 20)
    password: string;
}