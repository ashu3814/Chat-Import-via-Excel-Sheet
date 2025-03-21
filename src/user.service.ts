import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/user.entity";
import { Repository } from "typeorm";
import * as bcrypt from 'bcrypt';



@Injectable()
export class UserService{
    constructor(@InjectRepository(User) private userRepo:Repository<User> ){}
    //registeration 
    async register(email: string, password: string) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user =  this.userRepo.create({ email, password: hashedPassword });
        return this.userRepo.save(user);
    }
    //Validatation 
    async validateUser(email: string , password: string ){
        const user = await this.userRepo.findOne({where:{email}});
        if(user && (await bcrypt.compare(password,user.password))){
            return user;
        }
        return null
    }

}