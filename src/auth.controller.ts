import { Body, Controller, Post } from "@nestjs/common";
import { UserService } from "./user.service";


@Controller('auth')
export class AuthController {
    constructor(private userService: UserService ){}

    @Post('register')
    register(@Body() body: {email: string, password: string}){
        return this.userService.register(body.email, body.password);
    }

    @Post('login')
    async login(@Body() body: {email: string, password: string}){
        const user = await this.userService.validateUser(body.email, body.password);
        return user ? {message : 'success'} : {message : 'Invalid credentials'};
    }


}