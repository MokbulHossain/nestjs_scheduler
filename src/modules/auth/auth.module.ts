import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import {authProviders} from './auth.providers'

@Module({
    imports: [
        PassportModule,
        JwtModule.register({
            secret: process.env.JWTKEY,
            signOptions: { expiresIn: process.env.TOKEN_EXPIRATION },
        }),
    ],
    providers: [
        AuthService,
        LocalStrategy,
        JwtStrategy,
        ...authProviders
    ],
    controllers: [AuthController],
    exports : [AuthService]
    
})
export class AuthModule { }