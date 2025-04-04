
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'login',
      password: null,
      database: 'test',
      entities: [],
      synchronize: true,
    }),
  ],
})
export class AppModule { }
