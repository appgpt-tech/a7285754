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
copiesSold: string;

@Column({nullable: true})
issueDate: string;

@Column({nullable: true})
genre: string;


}
