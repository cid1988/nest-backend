import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Jugadores {
  @PrimaryGeneratedColumn()
  id_jugador: number;
  
  @Column()
  nombre: string;
  
  @CreateDateColumn() createdAt?: Date;

  @CreateDateColumn() updatedAt?: Date;
}