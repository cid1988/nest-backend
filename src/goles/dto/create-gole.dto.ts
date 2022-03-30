import { Jugadores } from "src/jugadores/entities/jugadore.entity";
import { Partido } from "src/partidos/entities/partido.entity";
import { TipoEquipo } from "src/tipo-equipos/entities/tipo-equipo.entity";

export class CreateGoleDto {
    id_gol: number;
    jugador: Jugadores;
    partido: Partido;
    tipo_equipo: TipoEquipo;
}
