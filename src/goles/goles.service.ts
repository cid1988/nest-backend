import { Injectable } from '@nestjs/common';
import { getManager } from 'typeorm';
import { CreateGoleDto } from './dto/create-gole.dto';
import { UpdateGoleDto } from './dto/update-gole.dto';
import { Goles } from './entities/gole.entity';

@Injectable()
export class GolesService {
  async create(createGolDto: CreateGoleDto) {
    try{
      const gol = new Goles();
      gol.jugador = createGolDto.jugador;
      gol.partido = createGolDto.partido;
      gol.tipo_equipo = createGolDto.tipo_equipo

      await getManager().transaction(async transactionalEntityManager => {
        return await transactionalEntityManager.save(gol);
      });
    }catch(err){
      console.log(err)
    }
  }

  findAll() {
    return `This action returns all goles`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gole`;
  }

  update(id: number, updateGoleDto: UpdateGoleDto) {
    return `This action updates a #${id} gole`;
  }

  remove(id: number) {
    return `This action removes a #${id} gole`;
  }
}
