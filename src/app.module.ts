import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ThrottlerModule } from '@nestjs/throttler';
import { AuthModule } from './auth/auth.module';
import { ProjectsModule } from './projects/projects.module';
import { SkillsModule } from './skills/skills.module';
import { ExperiencesModule } from './experiences/experiences.module';
import { ContactModule } from './contact/contact.module';
import { ResumeModule } from './resume/resume.module';
import { LogsModule } from './logs/logs.module';
import { getDatabaseConfig } from './config/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getDatabaseConfig,
    }),

    ThrottlerModule.forRoot({
      throttlers: [
        {
          ttl: 3600, // time window in seconds
          limit: 5, // max requests per IP within TTL
        },
      ],
    }),
    AuthModule,
    ProjectsModule,
    SkillsModule,
    ExperiencesModule,
    ContactModule,
    ResumeModule,
    LogsModule,
  ],
})
export class AppModule {}
