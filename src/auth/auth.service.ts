import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { UsersService } from '../users/users.service';
@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
    ) {}

    async validateUser(payload: any) {
        return await this.usersService.findByPayload(payload);
    }
    
}