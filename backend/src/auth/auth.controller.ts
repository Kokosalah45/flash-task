import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseInterceptors,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { isAuthedGuard } from './guards/auth.guard';
import { Request, Response } from 'express';
import { SiginDTO } from './dtos/sigin-dto';
import { MeDTO } from './dtos/me-dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  async signin(@Body() body: SiginDTO, @Res() res: Response) {
    const payload = await this.authService.signIn(body);

    res.cookie('AUTH_TOKEN', payload.access_token, {
      httpOnly: true,
      secure: false,
      maxAge: 1000 * 60 * 60 * 24 * 7,
    });

    return res.send({
      user: {
        name: payload.user.name,
        email: payload.user.email,
      },
    });
  }

  @isAuthedGuard()
  @Post('signout')
  signout(@Res() res: Response) {
    res.clearCookie('AUTH_TOKEN', {
      httpOnly: true,
      secure: false,
      maxAge: 0,
    });

    return res.send({
      message: 'Signout successfully',
    });
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @isAuthedGuard()
  @Get('me')
  async me(@Req() req: Request) {
    const token = req.cookies['AUTH_TOKEN'];
    const user = await this.authService.getUser(token);
    const me = new MeDTO(user);
    return {
      user: me,
    };
  }
}
