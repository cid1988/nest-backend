import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateEquipoDto } from './dto/create-equipo.dto';
import { UpdateEquipoDto } from './dto/update-equipo.dto';
import { Equipo } from './entities/equipo.entity';

@Injectable()
export class EquiposService {
  constructor(@Inject('EQUIPO_REPOSITORY') private equipoRepository: Repository<Equipo>){}

  async create(createEquipoDto: CreateEquipoDto) {
    return this.equipoRepository.insert(createEquipoDto);
  }

  async findAll(): Promise<Equipo[]> {
    return this.equipoRepository.find();
  }

  async findOne(id: number) {
    return this.equipoRepository.findOne(id, {relations: ['partidos']});
    return this.equipoRepository.findOne(id);
  }

  update(id: number, updateEquipoDto: UpdateEquipoDto) {
    return `This action updates a #${id} equipo`;
  }

  remove(id: number) {
    return `This action removes a #${id} equipo`;
  }
}
