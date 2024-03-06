import { Column } from "typeorm";
import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name:"users"})
export class User{
    @PrimaryGeneratedColumn()
    id:number

    @Column({nullable:false, length:30})
    name:string

    @Column()
    age:number
}
