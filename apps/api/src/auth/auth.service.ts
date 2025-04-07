import { Injectable, UnauthorizedException } from '@nestjs/common';
import { verify } from 'argon2';
import { PrismaService } from '../prisma/prisma.service';
import { SignInInput } from './dto/signin.input';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

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
}
