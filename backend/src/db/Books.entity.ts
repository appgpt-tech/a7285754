//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("Books")
export class BooksEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: true})
Title: string;

@Column({nullable: true})
Author: string;

@Column({nullable: true})
Authorgender: string;

@Column({nullable: true})
Releasedate: string;

@Column({nullable: true})
Numberofeditions: string;

@Column({nullable: true})
Isbn: string;

@Column({nullable: true})
Id: string;


}
