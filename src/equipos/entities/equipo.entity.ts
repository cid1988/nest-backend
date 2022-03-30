import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn, JoinTable, ManyToMany, ManyToOne } from 'typeorm';

@Entity()
export class Equipo {
  @PrimaryGeneratedColumn()
  id_equipo: number;

  @Column({ length: 500 })
  nombre: string;
}