import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { readFileSync } from 'fs';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: readFileSync(
        `${process.cwd()}/keys/jwt.public.key`,
      ).toString(),
    });
  }

  async validate(payload) {
    console.log('JwtStrategy');
    const user = await this.authService.validateUser(payload);
    if (!user) {
      throw new Error();
    }
    return user;
  }
}