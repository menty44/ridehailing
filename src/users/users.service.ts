import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) 
        private userRepository: Repository<User>,
      ) {} 

    login() {
    return "hello user";
    }

    async create(userDTO: CreateUserDto) {
         // get email from the input
    const { email } = userDTO;
    // check a user with that email
    const user = await this.userRepository.findOne({ where: {email: userDTO.email }});
    // Check if user already exists
    if(user) {
        // User already exists
        throw new HttpException('Passenger not found', HttpStatus.NOT_FOUND);
    }

    // Create the new user
    const createdUser = await this.userRepository.create(userDTO);
    
    // Return the saved user
    return createdUser;
    }
}
