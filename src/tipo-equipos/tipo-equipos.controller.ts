import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoEquiposService } from './tipo-equipos.service';
import { CreateTipoEquipoDto } from './dto/create-tipo-equipo.dto';
import { UpdateTipoEquipoDto } from './dto/update-tipo-equipo.dto';

@Controller('tipo-equipos')
export class TipoEquiposController {
  constructor(private readonly tipoEquiposService: TipoEquiposService) {}

  @Post()
  create(@Body() createTipoEquipoDto: CreateTipoEquipoDto) {
    return this.tipoEquiposService.create(createTipoEquipoDto);
  }

  @Get()
  findAll() {
    return this.tipoEquiposService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoEquiposService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipoEquipoDto: UpdateTipoEquipoDto) {
    return this.tipoEquiposService.update(+id, updateTipoEquipoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoEquiposService.remove(+id);
  }
}
