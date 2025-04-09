import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { verify } from 'argon2';
import { PrismaService } from '../prisma/prisma.service';
import { SignInInput } from './dto/signin.input';
import { AuthJwtPayload } from './types/auth-JwtPayload';
@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async validateLocalUser({ email, password }: SignInInput) {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user) throw new UnauthorizedException('User not found');

    const isPasswordValid = await verify(user.password, password);

    if (!isPasswordValid)
      throw new UnauthorizedException('Invalid Credentials');

    return user;
  }

  async generateToken(userid: number) {
    const payload: AuthJwtPayload = { sub: userid };
    const accessToken = await this.jwtService.signAsync(payload);
    return { accessToken };
  }

  async login(user: User) {
    const { accessToken } = await this.generateToken(user.id);
    return { id: user.id, name: user.name, avatar: user.avatar, accessToken };
  }

  async validateJwtToken(userId: number) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) throw new UnauthorizedException('User not found');
    const currentUser = { id: user.id };
    return currentUser;
  }
}
