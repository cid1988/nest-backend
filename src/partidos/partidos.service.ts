import { Inject, Injectable } from '@nestjs/common';
import { Equipo } from 'src/equipos/entities/equipo.entity';
import { getRepository, Repository } from 'typeorm';
import { CreatePartidoDto } from './dto/create-partido.dto';
import { UpdatePartidoDto } from './dto/update-partido.dto';
import { Partido } from './entities/partido.entity';
import {getManager} from "typeorm";

@Injectable()
export class PartidosService {
  constructor(@Inject('PARTIDO_REPOSITORY') private partidoRepository: Repository<Partido>){}

  async create(createPartidoDto: CreatePartidoDto) {
    try{
      const equipo_local = await getRepository(Equipo).findOne({id_equipo: createPartidoDto.local});
      const equipo_visitante = await getRepository(Equipo).findOne({id_equipo: createPartidoDto.visitante});

      const partido = new Partido();
      partido.local = equipo_local;
      partido.visitante = equipo_visitante;

      await getManager().transaction(async transactionalEntityManager => {
        await transactionalEntityManager.save(partido);
      });
    }catch(err){
      console.log(err)
    }
    // return await this.partidoRepository.insert(createPartidoDto);
    // const compra = new Partido();
    // compra.equipo_local = 1;
    // compra.equipo_visitante = 1;
    // const compraId = await this.partidoRepository.save(compra);
  }

  async findAll():Promise<Partido[]> {
    return this.partidoRepository.find();
  }

  findOne(id: number): Promise<Partido> {
    //Esta consulta trae los siguientes campos relacionados al partido y devuelve un json armado con todo
    return this.partidoRepository.findOne(id, {relations: ['local', 'visitante', 'goles', 'goles.jugador', 'goles.tipo_equipo']});
  }

  update(id: number, updatePartidoDto: UpdatePartidoDto) {
    return `This action updates a #${id} partido`;
  }

  remove(id: number) {
    return `This action removes a #${id} partido`;
  }
}
