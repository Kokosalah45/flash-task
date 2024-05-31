import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { isAuthedGuard } from './guards/auth.guard';
import { Request, Response } from 'express';
import { SiginDTO } from './dtos/sigin-dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  async signin(@Body() body: SiginDTO, @Res() res: Response) {
    const payload = await this.authService.signIn(body);
    res.cookie('token', payload.access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
    });
    return res.send({
      user: payload.user,
    });
  }

  @isAuthedGuard()
  @Get('signout')
  signout(@Res() res: Response) {
    res.clearCookie('token', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
    });

    return res.send({
      message: 'Signout successfully',
    });
  }

  @isAuthedGuard()
  @Get('me')
  async me(@Req() req: Request) {
    const token = req.cookies['token'];
    const payload = await this.authService.verifyToken(token);
    return {
      user: payload,
    };
  }
}
