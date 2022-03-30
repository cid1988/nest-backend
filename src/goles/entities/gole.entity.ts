import { Jugadores } from 'src/jugadores/entities/jugadore.entity';
import { Partido } from 'src/partidos/entities/partido.entity';
import { TipoEquipo } from 'src/tipo-equipos/entities/tipo-equipo.entity';
import { Entity, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Goles {
  @PrimaryGeneratedColumn()
  id_gol: number;

  // @OneToMany(() => Partido, (partido) => partido.id_partido, {nullable: false})
  // @JoinColumn({name: 'partido'})
  // partido: Partido;

  //Aca se establece que el campo partido pertenece a partido.goles de la entidad goles
  @ManyToOne(() => Partido, partido => partido.goles)
  @JoinColumn({name: 'partido'})
  partido: Partido;

  @ManyToOne(() => Jugadores, (jugadores) => jugadores.id_jugador, {nullable: false})
  @JoinColumn({name: 'jugador'})
  jugador: Jugadores;

  @ManyToOne(() => TipoEquipo, (tipo_equipos) => tipo_equipos.id_tipo_equipos, {nullable: false})
  @JoinColumn({name: 'tipo_equipo'})
  tipo_equipo: TipoEquipo;
  
  @CreateDateColumn() createdAt?: Date;

  @CreateDateColumn() updatedAt?: Date;
}