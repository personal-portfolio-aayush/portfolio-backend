import { Module } from '@nestjs/common';
import { ExperiencesController } from './experiences.controller';
import { ExperiencesService } from './experiences.service';

@Module({
  controllers: [ExperiencesController],
  providers: [ExperiencesService]
})
export class ExperiencesModule {}
