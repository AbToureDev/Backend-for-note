import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"
@Entity('User')
export class User {
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    firstName!: string

    @Column()
    lastName!: string

    @Column()
    image!: string

    @Column()
    email!: string
}