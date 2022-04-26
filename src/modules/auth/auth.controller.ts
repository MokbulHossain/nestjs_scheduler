import { Controller, Body, Post, UseGuards, Request, Injectable,UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import {LoginAuthDto} from '../../dto'
import {UNAUTHORIZED} from '../../helpers/responseHelper'

@Controller('auth/customer')
export class AuthController {
    

}