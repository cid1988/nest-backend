import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class TipoEquipo {
  @PrimaryGeneratedColumn()
  id_tipo_equipos: number;

  @Column()
  tipo: string;
  
  @CreateDateColumn() createdAt?: Date;

  @CreateDateColumn() updatedAt?: Date;
}