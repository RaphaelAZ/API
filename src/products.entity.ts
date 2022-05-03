import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class ProductsList {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    state: string;

    @Column()
    origin: string;

    @Column()
    stock: number;
}
