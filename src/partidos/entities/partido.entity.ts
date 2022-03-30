import { Equipo } from 'src/equipos/entities/equipo.entity';
import { Goles } from 'src/goles/entities/gole.entity';
import { Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne, OneToMany, CreateDateColumn, JoinTable } from 'typeorm';

@Entity({name: 'partidos'})
export class Partido {
  @PrimaryGeneratedColumn()
  id_partido: number;

  @ManyToOne(() => Equipo, (equipo) => equipo.id_equipo, {nullable: false})
  @JoinColumn({name: 'local'})
  local: Equipo;

  @ManyToOne(() => Equipo, (equipo) => equipo.id_equipo, {nullable: false})
  @JoinColumn({name: 'visitante'})
  visitante: Equipo;

  //Aca se establece(en ambas entidades) que el campo goles pertenece a goles.partido de la entidad goles
  //Un partido tiene muchos goles y muchos goles pertenecen a un solo partido
  @OneToMany(() => Goles, (goles) => goles.partido, {nullable: false})
  @JoinColumn({name: 'goles'})
  goles: Goles[];

  @JoinTable({//Definimos como va a ser la nueva tabla con las relaciones
    name: 'partidos_goles',
    joinColumn: {
      name: 'id_gol'
    },
    inverseJoinColumn: {
      name: 'id_partido'
    }
  })

  @CreateDateColumn() createdAt?: Date;

  @CreateDateColumn() updatedAt?: Date;
}

/*
"cascade": true si se necesita guardar la tabla relacionada. Al estar esta opcion cuando guardamos en una tabla, automaticamente
se insertan las tablas que esten relacionadas
@BeforeInsert copia la nueva key a la tabla relacionada

@OneToOne
El usuario puede tener solo un perfil y un perfil es propiedad de un solo usuario.
*/