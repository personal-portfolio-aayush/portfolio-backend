import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { User } from '../entities/user.entity';
import { Project } from '../entities/project.entity';
import { Skill } from '../entities/skill.entity';
import { Experience } from '../entities/experience.entity';
import { ContactMessage } from '../entities/contact-message.entity';
import { ActivityLog } from '../entities/activity-log.entity';

export const getDatabaseConfig = (config: ConfigService): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: config.get<string>('DATABASE_HOST'),
  port: config.get<number>('DATABASE_PORT'),
  username: config.get<string>('DATABASE_USER'),
  password: config.get<string>('DATABASE_PASSWORD'),
  database: config.get<string>('DATABASE_NAME'),
  entities: [User, Project, Skill, Experience, ContactMessage, ActivityLog],
  synchronize: true,
  logging: true,
});
