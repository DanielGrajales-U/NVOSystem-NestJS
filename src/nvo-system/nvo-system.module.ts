import { NvoData } from './entities/nvoData.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { NvoSystemController } from './nvo-system.controller';
import { NvoSystemService } from './nvo-system.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([NvoData])
  ],
  controllers: [NvoSystemController],
  providers: [NvoSystemService]
})
export class NvoSystemModule {}
