import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Skill {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  proficiency: number;

  @Column({ nullable: true })
  iconUrl: string;

  @Column('text', { nullable: true })
  description: string;
}
