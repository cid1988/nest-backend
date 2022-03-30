import { Module } from '@nestjs/common';
import { TipoEquiposService } from './tipo-equipos.service';
import { TipoEquiposController } from './tipo-equipos.controller';

@Module({
  controllers: [TipoEquiposController],
  providers: [TipoEquiposService]
})
export class TipoEquiposModule {}
