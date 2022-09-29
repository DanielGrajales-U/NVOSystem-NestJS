import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class NvoData{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: 40, nullable:false})
    name: string

    @Column({type:'varchar', length:70, nullable:false})
    email: string

    @Column({type: 'varchar',length:10, nullable:false})
    phone: number

    @Column({type: 'varchar', length:30, nullable:false})
    position: string

}