//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("Books")
export class BooksEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: true})
title: string;

@Column({nullable: true})
author: string;

@Column({nullable: true})
isbn: string;

@Column({nullable: true})
copiessold: string;

@Column({nullable: true})
currentedition: string;

@Column({nullable: true})
issuedate: string;

@Column({nullable: true})
genre: string;


}
