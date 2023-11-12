import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('Note')
export class Note {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    title!: string; // Use the "Definite Assignment Assertion"

    @Column()
    content!: string;
}
