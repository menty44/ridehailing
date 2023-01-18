import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

import bcrypt from 'bcrypt';
@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) 
        private userRepository: Repository<User>,
      ) {} 

    async findByPayload(payload: any) {
        // Extract email from payload
        const { email } = payload;

        // Get user from the email
        const user = await this.userRepository.findOne({ where: {email: payload.email }});

        // return the user
        return user;
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

    async findByLogin(userDTO: CreateUserDto): Promise < User > {
        const { email, password } = userDTO; // Get the email and password.
        // find user by email
        const user = await this.userRepository.findOne({ where: {email: email }});
        if(!user) { // Check if user exists
            // User not found
            throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
        }
            // check if password is correct
            const passworMatch = await bcrypt.compare(password, user.password);
        if(!passworMatch) {
            // Invalid credentials
            throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
        }
            // return the user
            return user;
    }

    async signPayload(payload: any) {
        // token to expire in 12 hours
        let token = bcrypt.sign(payload, 'secretKey', { expiresIn: '12h' });
        return token;
    }
}
