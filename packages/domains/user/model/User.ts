import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    first_name!: string;

    @Column()
    last_name!: number;

    @Column()
    company_name: string;

    @Column()
    ssn: number;
}