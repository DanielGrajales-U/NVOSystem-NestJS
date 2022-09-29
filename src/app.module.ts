import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NvoSystemModule } from './nvo-system/nvo-system.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ 
    TypeOrmModule.forRoot({
      type:'mysql',
      host: "localhost",
      port: 3306,
      username: "root",
      password: "luiggy21gra",
      database: "nvosystem",
      entities: [__dirname + './**/**/entity{.ts,js}'],
      synchronize: true,
      autoLoadEntities: true,
    }),
    NvoSystemModule, 
    NvoSystemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
